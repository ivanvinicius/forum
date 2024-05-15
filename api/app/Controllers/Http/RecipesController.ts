import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import { imageDelete, imageUpload, imageValidator } from 'Utils/imageHandler'
import StoreRecipeValidator from 'App/Validators/StoreRecipe'
import AppException from 'App/Exceptions/AppException'
import Recipe from 'App/Models/Recipe'
import Image from 'App/Models/Image'
// import Category from 'App/Models/Category'
import Advice from 'App/Models/Advice'
import Ingredient from 'App/Models/Ingredient'
import Instruction from 'App/Models/Instruction'
import Holiday from 'App/Models/Holiday'

interface StoreContentBody {
  name: string
  servings: number
  cookingTime: number
  story: string
  nationalityId: string
  // categories: [{ id: string }]
  holidays: [{ id: string }]
  ingredients: [{ description: string }]
  instructions: [
    {
      sectionId: string
      sectionSteps: [
        {
          description: string
        },
      ]
    },
  ]
  nutritionistId: string
  advice: string
  difficulty: number
  mealId: string
}

export default class RecipesController {
  private RESOURCE = 'recipes'

  public async indexToDashboard({ request, response }: HttpContextContract) {
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      const query = Database.query()
        .select(
          'rec.id',
          'rec.name ',
          'rec.slug',
          'rec.cooking_time',
          'rec.servings',
          'rec.difficulty',
          'rec.nationality_id',
          'nat.name as nationality_name',
          'nat.short_name as nationality_short_name',
          'rec.created_at',
          'rec.updated_at',
        )
        .from('recipes AS rec')
        .innerJoin('nationalities AS nat', 'rec.nationality_id', 'nat.id')
        .orderBy('updated_at', 'desc')

      if (paginate === 'true') {
        const recipes = await query.paginate(page, per_page)
        const { meta, data } = recipes.toJSON()

        return response
          .status(200)
          .header('x-total-count', meta.total)
          .json(data)
      }

      return response.status(200).json(await query)
    } catch {
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async showBySlug({ request, response }: HttpContextContract) {
    const { slug } = request.params()

    const recipe = await Recipe.query()
      .preload('image')
      // .preload('categories', (catQuery) => catQuery.preload('parentCategory'))
      .preload('meal')
      .preload('holidays')
      .preload('ingredients')
      .preload('nationality', (natQuery) => natQuery.preload('image'))
      .preload('instructions', (instQuery) => instQuery.preload('section'))
      .preload('advice', (adviceQuery) =>
        adviceQuery.preload('nutritionist', (nutriQuery) =>
          nutriQuery.preload('user', (usrQuery) => usrQuery.preload('image')),
        ),
      )
      .where('slug', slug)

    return response.status(200).json({ recipe })
  }

  /**
  O que eu preciso responder
  - image x
  - tempo em segundos x
  - rendimento x
  - ingredientes x
  - passos de preparo x
  - dificuldade x

  Groups
  - meals
  - holidays
  - nationalities
 */

  public async indexByGroups({ request, response }: HttpContextContract) {
    const { group, id } = request.params()
    const { paginate = 'true', page = 1, per_page = 10 } = request.qs()

    try {
      if (!group || !id) {
        throw new AppException('Grupo precisa ser informado', 400)
      }

      const query = Recipe.query()
        .preload('image')
        .preload('instructions')
        .preload('ingredients')
        .preload('nationality')

      switch (group) {
        case 'meals':
          query.where('meal_id', id)
          break

        case 'nationalities':
          query.where('nationality_id', id)
          break

        case 'holidays':
          query
            .join('recipes_holidays', (subQuery) =>
              subQuery.on('recipes.id', 'recipes_holidays.recipe_id'),
            )
            .where('recipes_holidays.holiday_id', id)
          break
      }

      if (paginate === 'true') {
        const recipes = await query.paginate(page, per_page)
        const { meta, data } = recipes.toJSON()

        return response
          .status(200)
          .header('x-total-count', meta.total)
          .json(data)
      }

      return response.status(200).json(await query)
    } catch {
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const requestBody = await request.validate(StoreRecipeValidator)
    const imageFile = request.file('image', imageValidator)
    const trx = await Database.transaction()

    const body = {
      ...requestBody,
      servings: await JSON.parse(requestBody.servings),
      cookingTime: await JSON.parse(requestBody.cookingTime),
      difficulty: await JSON.parse(requestBody.difficulty),
      holidays: await JSON.parse(requestBody.holidays),
      // categories: await JSON.parse(requestBody.categories),
      ingredients: await JSON.parse(requestBody.ingredients),
      instructions: await JSON.parse(requestBody.instructions),
    } as StoreContentBody

    if (!imageFile || imageFile.hasErrors) {
      throw new AppException('Verique o tamanho/formato do arquivo', 400)
    }

    const recipeExists = await Recipe.findBy('name', body.name)

    if (recipeExists) {
      throw new AppException('Registro já existe', 400)
    }

    const { url, fileName, contentType, size } = await imageUpload({
      image: imageFile,
      resource: this.RESOURCE,
    })

    try {
      const image = new Image().useTransaction(trx)
      const recipe = new Recipe().useTransaction(trx)
      const advice = new Advice().useTransaction(trx)

      image.url = url
      image.fileName = fileName
      image.contentType = contentType
      image.size = size
      await image.save()

      recipe.name = body.name
      recipe.servings = body.servings
      recipe.cookingTime = body.cookingTime * 60 // transform in seconds
      recipe.story = body.story
      recipe.nationalityId = body.nationalityId
      recipe.imageId = image.id
      recipe.difficulty = body.difficulty
      recipe.mealId = body.mealId
      await recipe.save()

      advice.description = body.advice
      advice.nutritionistId = body.nutritionistId
      advice.recipeId = recipe.id
      await advice.save()

      for (const index in body.ingredients) {
        const ingredient = new Ingredient().useTransaction(trx)

        ingredient.description = body.ingredients[index].description
        ingredient.recipeId = recipe.id
        await ingredient.save()
      }

      for (const intructionIndex in body.instructions) {
        const sectionId = body.instructions[intructionIndex].sectionId

        for (const stepIndex in body.instructions[intructionIndex].sectionSteps) {                           //eslint-disable-line
          const instruction = new Instruction().useTransaction(trx)

          instruction.description = body.instructions[intructionIndex].sectionSteps[stepIndex].description   //eslint-disable-line
          instruction.sectionId = sectionId
          instruction.recipeId = recipe.id
          await instruction.save()
        }
      }

      // const categoryModels: Category[] = []

      // for (const index in body.categories) {
      //   const categoryModel = await Category.find(body.categories[index].id)
      //   if (!categoryModel) return
      //   categoryModels.push(categoryModel)
      // }

      // await recipe.related('categories').saveMany(categoryModels)

      if (body.holidays.length) {
        const holidayModels: Holiday[] = []

        for (const index in body.holidays) {
          const holidayModel = await Holiday.find(body.holidays[index].id)
          if (!holidayModel) return
          holidayModels.push(holidayModel)
        }

        await recipe.related('holidays').saveMany(holidayModels)
      }

      trx.commit()

      return response.status(201)
    } catch {
      await imageDelete({ fileName, resource: this.RESOURCE })
      trx.rollback()
      throw new AppException('Erro desconhecido', 500)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const recipe = await Recipe.findByOrFail('id', id)

    await recipe.delete()

    return response.status(200)
  }
}
