import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { setLoginFormValue } from '../../services/actions/form-login';
import Form from '../../components/form';
import Header from '../../components/form/header';
import FormButton from '../../components/form/button';
import Footer from '../../components/form/footer';
import { loginUser, CLOSE_ERROR } from '../../services/actions/user';
import Modal from '../../components/modal/modal';


function LoginPage() {
  const getStateUserData = (state) => state.userData;
  const getStateLoginForm = (state) => state.loginForm.form;
  const { email, password } = useSelector(getStateLoginForm);
  const { failed, message } = useSelector(getStateUserData);

  const dispatch = useDispatch();

  const onFormChange = (e) => {
    dispatch(setLoginFormValue(e.target.name, e.target.value))
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({
      email: email,
      password: password
    }));
  };

  const handleCloseModal = () => {
    dispatch({
      type: CLOSE_ERROR
    });
  };

  useEffect(
    () => {
      dispatch({ type: CLOSE_ERROR });
    },
    []
  );

  return (
    <>
      <Form onSubmitHandler={onSubmitHandler}>
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
        <FormButton caption='Войти'/>
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
      {
        failed && 
        <Modal header="Ошибка:" onClose={handleCloseModal}> 
          <span className='pt-6 text text_type_main-medium'>{message}</span>
        </Modal>
      }
    </>
  );
}

export default LoginPage;
