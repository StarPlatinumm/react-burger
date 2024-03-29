import { useSelector, useDispatch } from '../..';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { setRegisterFormValue } from '../../services/actions/form-register';
import Form from '../../components/form';
import Header from '../../components/form/header';
import FormButton from '../../components/form/button';
import Footer from '../../components/form/footer';
import { registerUser, CLOSE_ERROR } from '../../services/actions/user';
import Modal from '../../components/modal/modal';


function RegisterPage() {
  const { name, email, password } = useSelector((state) => state.registerForm.form);
  const { failed, message } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegisterFormValue(e.target.name, e.target.value))
  };

  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser({
      name: name,
      email: email,
      password: password
    }))
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
    [dispatch]
  );

  return (
    <>
      <Form onSubmitHandler={onSubmitHandler}>
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
        <FormButton caption='Зарегистрироваться'/>
        <Footer>
          <div>
            <span>Уже зарегистрированы? </span>
            <Link to={{ pathname: `/login` }}>Войти</Link>
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

export default RegisterPage;
