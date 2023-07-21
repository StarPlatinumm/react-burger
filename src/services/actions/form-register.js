export const REGISTER_FORM_SET_VALUE = 'REGISTER_FORM_SET_VALUE'; 

export const setRegisterFormValue = (field, value) => ({
  type: REGISTER_FORM_SET_VALUE,
  field,
  value
}) 
