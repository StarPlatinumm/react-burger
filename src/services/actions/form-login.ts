export const LOGIN_FORM_SET_VALUE: 'LOGIN_FORM_SET_VALUE' = 'LOGIN_FORM_SET_VALUE';

export interface ILoginFormValueAction {
  readonly type: typeof LOGIN_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export const setLoginFormValue = (field: string, value: string) => ({
  type: LOGIN_FORM_SET_VALUE,
  field,
  value
}) 
