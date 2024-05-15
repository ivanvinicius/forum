import { schema as s } from '@ioc:Adonis/Core/Validator'

export default class StoreRecipeValidator {
  /**
   * Tudo string porque a requisição é um multipart form data
   * E seu conteúdo vem em Content-type: plain/text
   */

  public schema = s.create({
    name: s.string(),
    servings: s.string(),
    cookingTime: s.string(),
    story: s.string(),
    difficulty: s.string(),
    nationalityId: s.string(),
    // categories: s.string(),
    holidays: s.string(),
    ingredients: s.string(),
    instructions: s.string(),
    nutritionistId: s.string(),
    advice: s.string(),
    image: s.file(),
    mealId: s.string(),
  })
}
