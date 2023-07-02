export const FORGOT_PASSWORD_FORM_SET_VALUE = 'FORGOT_PASSWORD_FORM_SET_VALUE'; 

export const setForgotPasswordFormValue = (field, value) => ({
  type: FORGOT_PASSWORD_FORM_SET_VALUE,
  field,
  value
}) 
