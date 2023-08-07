import { useDispatch } from 'react-redux';
import { useSelector } from '../..';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { setForgotPasswordFormValue } from '../../services/actions/form-forgot-password';
import Form from '../../components/form';
import Header from '../../components/form/header';
import FormButton from '../../components/form/button';
import Footer from '../../components/form/footer';
import { forgotPassword } from '../../utils/api';
import Modal from '../../components/modal/modal';


function ForgotPasswordPage() {
  const { email } = useSelector((state) => state.forgotPasswordForm.form);

  const dispatch = useDispatch();

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setForgotPasswordFormValue(e.target.name, e.target.value))
  }

  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalHeader, setModalHeader] = useState<string | null>(null);

  const handleCloseModal = () => setModalMessage(null);

  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    forgotPassword({ email: email })
      .then((data) => {
        setModalHeader('Успешно ✅');
        setModalMessage('Письмо с инструкцией отправлено на указанный адрес.');
      })
      .catch((data) => {
        setModalHeader('Ошибка ❌');
        setModalMessage(data.message);
      })
  }

  return (
    <>
      <Form onSubmitHandler={onSubmitHandler}>
        <Header>Восстановление пароля</Header>
        <EmailInput
          onChange={onFormChange}
          value={email}
          name={'email'}
          placeholder="Укажите e-mail"
          isIcon={true}
          extraClass="pt-6"
        />
        <FormButton caption='Восстановить'/>
        <Footer>
          <div>
            <span>Вспомнили пароль? </span>
            <Link to={{ pathname: `/login` }}>Войти</Link>
          </div>
        </Footer>
      </Form>
      {
        modalMessage && 
        <Modal header={modalHeader} onClose={handleCloseModal}> 
          <span className='pt-6 text text_type_main-medium'>{modalMessage}</span>
        </Modal>
      }
    </>  
  );
}

export default ForgotPasswordPage;
