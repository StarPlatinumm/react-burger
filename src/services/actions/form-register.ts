export const REGISTER_FORM_SET_VALUE: 'REGISTER_FORM_SET_VALUE' = 'REGISTER_FORM_SET_VALUE'; 

export interface IRegisterFormValueAction {
  readonly type: typeof REGISTER_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export const setRegisterFormValue = (field: string, value: string) => ({
  type: REGISTER_FORM_SET_VALUE,
  field,
  value
}) 
