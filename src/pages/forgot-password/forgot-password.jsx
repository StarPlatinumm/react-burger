import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { setForgotPasswordFormValue } from '../../services/actions/form-forgot-password';
import Form from '../../components/form';
import Header from '../../components/form/header';
import FormButton from '../../components/form/button';
import Footer from '../../components/form/footer';


function ForgotPasswordPage() {
  const { email } = useSelector(state => state.forgotPasswordForm.form);

  const dispatch = useDispatch();

  const onFormChange = (e) => {
    dispatch(setForgotPasswordFormValue(e.target.name, e.target.value))
  }

  const onButtonClick = () => {
    console.log('onButtonClick fired');
  }

  return (
    <Form >
      <Header>Восстановление пароля</Header>
      <EmailInput
        onChange={onFormChange}
        value={email}
        name={'email'}
        placeholder="Укажите e-mail"
        isIcon={true}
        extraClass="pt-6"
      />
      <FormButton caption='Восстановить' onClick={onButtonClick}/>
      <Footer>
        <div>
          <span>Вспомнили пароль? </span>
          <Link to={{ pathname: `/login` }}>Войти</Link>
        </div>
      </Footer>
    </Form>        
  );
}

export default ForgotPasswordPage;
