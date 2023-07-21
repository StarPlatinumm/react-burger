export const LOGIN_FORM_SET_VALUE = 'LOGIN_FORM_SET_VALUE'; 

export const setLoginFormValue = (field, value) => ({
  type: LOGIN_FORM_SET_VALUE,
  field,
  value
}) 
