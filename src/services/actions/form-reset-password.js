export const RESET_PASSWORD_FORM_SET_VALUE = 'RESET_PASSWORD_FORM_SET_VALUE'; 

export const setResetPasswordFormValue = (field, value) => ({
  type: RESET_PASSWORD_FORM_SET_VALUE,
  field,
  value
}) 
