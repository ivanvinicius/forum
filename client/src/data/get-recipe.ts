/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from '~/lib/api'
import { Recipe } from '~/types/recipe'
import { Section } from '~/types/section'

interface GetRecipeRes {
  recipe: Recipe
  sections: Section[]
}

export async function getRecipe(slug: string): Promise<GetRecipeRes> {
  const response = await api('/recipes/slug/'.concat(slug))

  if (!response.ok) throw new Error('Unable to fetch data')

  const parsed = await response.json()

  const data = parsed.recipe[0]

  const recipe = {
    id: data.id,
    slug: data.slug,
    name: data.name,
    story: data.story,
    cookingTime: data.cooking_time,
    servings: data.servings,
    difficulty: data.difficulty,
    image: {
      id: data.image.id,
      url: data.image.url,
      fileName: data.image.file_name,
      contentType: data.image.content_type,
      size: data.image.size,
    },
    meal: {
      id: data.meal.id,
      name: data.meal.name,
    },
    ingredients: data.ingredients.map(({ id, description }: any) => ({
      id,
      description,
    })),
    holidays: data.holidays.map(({ id, name, description, active }: any) => ({
      id,
      name,
      description,
      active,
    })),
    instructions: data.instructions.map(
      ({ id, description, section }: any) => ({
        id,
        description,
        section,
      }),
    ),
    nationality: {
      id: data.nationality.id,
      name: data.nationality.name,
      shortName: data.nationality.short_name,
      image: {
        id: data.nationality.image.id,
        url: data.nationality.image.url,
        fileName: data.nationality.image.file_name,
        contentType: data.nationality.image.content_type,
        size: data.nationality.image.size,
      },
    },
    advice: {
      id: data.advice.id,
      description: data.advice.description,
      nutritionist: {
        id: data.advice.nutritionist.id,
        instagram: data.advice.nutritionist.instagram,
        user: {
          id: data.advice.nutritionist.user.id,
          name: data.advice.nutritionist.user.name,
          email: data.advice.nutritionist.user.email,
          roleId: data.advice.nutritionist.user.role_id,
          image: {
            id: data.advice.nutritionist.user.image.id,
            url: data.advice.nutritionist.user.image.url,
            fileName: data.advice.nutritionist.user.image.file_name,
            contentType: data.advice.nutritionist.user.image.content_type,
            size: data.advice.nutritionist.user.image.size,
          },
        },
      },
    },
  } as Recipe

  const sections = recipe.instructions.reduce((acc: Section[], instruction) => {
    const exists = acc.some((item) => item.id === instruction.section.id)

    if (!exists) {
      acc.push(instruction.section)
    }

    return acc
  }, [])

  return { recipe, sections }
}
