interface getFieldErrorParams {
  field: string
  message: string
}

export function getFieldError(errors: getFieldErrorParams[]) {
  return errors.map((currentError) => ({
    name: currentError.field,
    message: currentError.message,
  }))
}
