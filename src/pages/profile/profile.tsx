import profileStyles from './profile.module.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from '../..';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Form from '../../components/form';
import FormButton from '../../components/form/button';
import { logoutUser } from '../../services/actions/user';
import { updateUserData } from '../../services/actions/user';
import OrdersFeedListPage from '../orders-feed-list/orders-feed-list';


function ProfilePage() {
  const { name, email } = useSelector((state) => state.userData);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isDataChanged, setIsDataChanged] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onLogoutHandler = () => {
    dispatch(logoutUser());
    navigate('/login');
  }

  const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
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
    [email, name]
  );

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDataChanged(true);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  return (
    <div className={`${profileStyles['profile-page']} pt-25`}>
      <ul className={`${profileStyles['menu']} text_color_inactive`}>

        <NavLink
          to={{ pathname: `/profile` }}
          className={() => (
            location.pathname === '/profile' ? (
              `${profileStyles['menu-item-active']}`
            ) : (
              `${profileStyles['menu-item']} text_color_inactive`
            ))}
        >
          <li className={`${profileStyles['menu-item']}`}>
            <span>Профиль</span>
          </li>
        </NavLink>

        <NavLink
          to={{ pathname: `/profile/orders` }}
          className={() => (
            location.pathname === '/profile/orders' ? (
              `${profileStyles['menu-item-active']}`
            ) : (
              `${profileStyles['menu-item']} text_color_inactive`
            ))}
        >
          <li className={`${profileStyles['menu-item']}`}>
            <span>История заказов</span>
          </li>
        </NavLink>
        
        <li className={`${profileStyles['menu-item']}`} onClick={onLogoutHandler}>
          <span>Выход</span>
        </li>

        <li className={`${profileStyles['menu-item']}`}></li>

        {
          location.pathname === '/profile' &&
          <li className={`${profileStyles['menu-item']} ${profileStyles['menu-footer']} pr-10`}>
            <span>В этом разделе вы можете изменить свои персональные данные</span>
          </li>
        }
        {
          location.pathname === '/profile/orders' &&
          <li className={`${profileStyles['menu-item']} ${profileStyles['menu-footer']} pr-10`}>
            <span>В этом разделе вы можете посмотреть свою историю заказов</span>
          </li>
        }

      </ul>
      <div>
        {location.pathname === '/profile' &&
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
        }
        {location.pathname === '/profile/orders' &&
          <OrdersFeedListPage />
        }
      </div>
    </div>
  );
}

export default ProfilePage;
