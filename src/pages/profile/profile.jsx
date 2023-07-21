import profileStyles from './profile.module.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Form from '../../components/form';
import FormButton from '../../components/form/button';
import { logoutUserFetch } from '../../utils/api';
import { LOGOUT_USER } from '../../services/actions/user';
import { updateUserData } from '../../services/actions/user';


function ProfilePage() {
  const getStateUserData = (state) => state.userData;
  const { name, email } = useSelector(getStateUserData);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isDataChanged, setIsDataChanged] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    logoutUserFetch()
      .then((data) => {
        dispatch({ type: LOGOUT_USER });
        navigate('/login');
      })
      .catch();
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserData(formData));
    setIsDataChanged(false);
  }

  const onResetClickHandler = () => {
    setIsDataChanged(false);
    setFormData({
      name: name,
      email: email,
      password: '',
    })
  }

  useEffect(
    () => {
      setFormData({
        name: name,
        email: email,
        password: '',
      })
    },
    []
  );

  const onFormChange = (e) => {
    setIsDataChanged(true);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  return (
    <div className={`${profileStyles['profile-page']} pt-25`}>
      <ul className={`${profileStyles['menu']} text_color_inactive`}>
        <li className={`${profileStyles['menu-item']} ${profileStyles['menu-item-active']}`}>
          <span>Профиль</span>
        </li>
        <li className={`${profileStyles['menu-item']}`}>
          <span>История заказов</span>
        </li>
        <li className={`${profileStyles['menu-item']}`} onClick={onLogoutHandler}>
          <span>Выход</span>
        </li>
        <li className={`${profileStyles['menu-item']}`}></li>
        <li className={`${profileStyles['menu-item']} ${profileStyles['menu-footer']} pr-10`}>
          <span>В этом разделе вы можете изменить свои персональные данные</span>
        </li>
      </ul>
      <div>
        <Form onSubmitHandler={onSubmitHandler}>
          <Input
            value={formData.name}
            onChange={onFormChange}
            name={'name'}
            placeholder="Имя"
            extraClass="pt-6"
          />
          <EmailInput
            value={formData.email}
            onChange={onFormChange}
            name={'email'}
            isIcon={true}
            extraClass="pt-6"
          />
          <PasswordInput
            value={formData.password}
            onChange={onFormChange}
            name={'password'}
            extraClass="pt-6"
          />
          {
            isDataChanged &&
            <div className={`${profileStyles['form-buttons']}`}>
              <Button htmlType="button" type="secondary" size="medium" extraClass='pt-10' onClick={onResetClickHandler}>Отменить</Button>
              <FormButton caption='Сохранить'/>
            </div>
          }
        </Form>
      </div>
    </div>
  );
}

export default ProfilePage;
