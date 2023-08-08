import { useSelector, useDispatch } from '../..';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { setResetPasswordFormValue } from '../../services/actions/form-reset-password';
import Form from '../../components/form';
import Header from '../../components/form/header';
import FormButton from '../../components/form/button';
import Footer from '../../components/form/footer';
import { resetPassword } from '../../utils/api';
import Modal from '../../components/modal/modal';


function ResetPasswordPage() {
  const { newPassword, code } = useSelector((state) => state.resetPasswordForm.form);

  const dispatch = useDispatch();

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setResetPasswordFormValue(e.target.name, e.target.value))
  }

  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalHeader, setModalHeader] = useState<string | null>(null);

  const handleCloseModal = () => setModalMessage(null);

  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPassword({ password: newPassword, token: code })
      .then((data) => {
        setModalHeader('Успешно ✅');
        setModalMessage('Ваш пароль изменен.');
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
        <FormButton caption='Сохранить'/>
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

export default ResetPasswordPage;
