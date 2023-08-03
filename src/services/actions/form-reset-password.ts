export const RESET_PASSWORD_FORM_SET_VALUE: 'RESET_PASSWORD_FORM_SET_VALUE' = 'RESET_PASSWORD_FORM_SET_VALUE'; 

export interface IResetPasswordFormValueAction {
  readonly type: typeof RESET_PASSWORD_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export const setResetPasswordFormValue = (field: string, value: string) => ({
  type: RESET_PASSWORD_FORM_SET_VALUE,
  field,
  value
}) 
