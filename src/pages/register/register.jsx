import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { setRegisterFormValue } from '../../services/actions/form-register';
import Form from '../../components/form';
import Header from '../../components/form/header';
import FormButton from '../../components/form/button';
import Footer from '../../components/form/footer';


function RegisterPage() {
  const { name, email, password } = useSelector(state => state.registerForm.form);

  const dispatch = useDispatch();

  const onFormChange = (e) => {
    dispatch(setRegisterFormValue(e.target.name, e.target.value))
  }

  const onButtonClick = () => {
    console.log('onButtonClick fired');
  }

  return (
    <Form >
      <Header>Регистрация</Header>
      <Input
        onChange={onFormChange}
        value={name}
        name={'name'}
        placeholder="Имя"
        extraClass="pt-6"
      />
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
      <FormButton caption='Зарегистрироваться' onClick={onButtonClick}/>
      <Footer>
        <div>
          <span>Уже зарегистрированы? </span>
          <Link to={{ pathname: `/login` }}>Войти</Link>
        </div>
      </Footer>
    </Form>
  );
}

export default RegisterPage;
