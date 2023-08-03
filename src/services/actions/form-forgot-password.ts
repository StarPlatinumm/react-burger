export const FORGOT_PASSWORD_FORM_SET_VALUE = 'FORGOT_PASSWORD_FORM_SET_VALUE';

export interface IForgotPasswordFormValueAction {
  readonly type: typeof FORGOT_PASSWORD_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export const setForgotPasswordFormValue = (field: string, value: string): IForgotPasswordFormValueAction => ({
  type: FORGOT_PASSWORD_FORM_SET_VALUE,
  field,
  value
}) 



