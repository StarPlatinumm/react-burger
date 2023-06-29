import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { setResetPasswordFormValue } from '../../services/actions/form-reset-password';
import Form from '../../components/form';
import Header from '../../components/form/header';
import FormButton from '../../components/form/button';
import Footer from '../../components/form/footer';


function ResetPasswordPage() {
  const { newPassword, code } = useSelector(state => state.resetPasswordForm.form);

  const dispatch = useDispatch();

  const onFormChange = (e) => {
    dispatch(setResetPasswordFormValue(e.target.name, e.target.value))
  }

  const onButtonClick = () => {
    console.log('onButtonClick fired');
  }

  return (
    <Form >
      <Header>Восстановление пароля</Header>
      <PasswordInput
        onChange={onFormChange}
        value={newPassword}
        name={'newPassword'}
        placeholder="Введите новый пароль"
        extraClass="pt-6"
      />
      <Input
        onChange={onFormChange}
        value={code}
        name={'code'}
        placeholder="Введите код из письма"
        extraClass="pt-6"
      />
      <FormButton caption='Сохранить' onClick={onButtonClick}/>
      <Footer>
        <div>
          <span>Вспомнили пароль? </span>
          <Link to={{ pathname: `/login` }}>Войти</Link>
        </div>
      </Footer>
    </Form>
  );
}

export default ResetPasswordPage;
