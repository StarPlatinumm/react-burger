import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { setLoginFormValue } from '../../services/actions/form-login';
import Form from '../../components/form';
import Header from '../../components/form/header';
import FormButton from '../../components/form/button';
import Footer from '../../components/form/footer';


function LoginPage() {
  const { email, password } = useSelector(state => state.loginForm.form);

  const dispatch = useDispatch();

  const onFormChange = (e) => {
    dispatch(setLoginFormValue(e.target.name, e.target.value))
  }

  const onButtonClick = () => {
    console.log('onButtonClick fired');
  }

  return (
    <Form >
      <Header>Вход</Header>
      <EmailInput
        onChange={onFormChange}
        value={email}
        name={'email'}
        isIcon={true}
        extraClass="pt-6"
      />
      <PasswordInput
        onChange={onFormChange}
        value={password}
        name={'password'}
        extraClass="pt-6"
      />
      <FormButton caption='Войти' onClick={onButtonClick}/>
      <Footer>
        <div>
          <span>Вы новый пользователь? </span>
          <Link to={{ pathname: `/register` }}>Зарегистрироваться</Link>
        </div>
        <div className={`pt-6`}>
          <span>Забыли пароль? </span>
          <Link to={{ pathname: `/forgot-password` }}>Восстановить</Link>
        </div>
      </Footer>
    </Form>
  );
}

export default LoginPage;
