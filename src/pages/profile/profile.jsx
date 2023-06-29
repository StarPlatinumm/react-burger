import profileStyles from './profile.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { setRegisterFormValue } from '../../services/actions/form-register';
import Form from '../../components/form';
import FormButton from '../../components/form/button';


function ProfilePage() {
  const { name, email, password } = useSelector(state => state.registerForm.form);

  const dispatch = useDispatch();

  const onFormChange = (e) => {
    dispatch(setRegisterFormValue(e.target.name, e.target.value))
  }

  const onButtonClick = () => {
    console.log('onButtonClick fired');
  }

  return (
    <div className={`${profileStyles['profile-page']} pt-25`}>
      <ul className={`${profileStyles['menu']} text_color_inactive`}>
        <li className={`${profileStyles['menu-item']} ${profileStyles['menu-item-active']}`}>
          <span>Профиль</span>
        </li>
        <li className={`${profileStyles['menu-item']}`}>
          <span>История заказов</span>
        </li>
        <li className={`${profileStyles['menu-item']}`}>
          <span>Выход</span>
        </li>
        <li className={`${profileStyles['menu-item']}`}></li>
        <li className={`${profileStyles['menu-item']} ${profileStyles['menu-footer']} pr-10`}>
          <span>В этом разделе вы можете изменить свои персональные данные</span>
        </li>
      </ul>
      <div>
        <Form >
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
          <div className={`${profileStyles['form-buttons']}`}>
            <a href='/' className='pt-6 pr-6'>Отменить</a>
            <FormButton caption='Сохранить' onClick={onButtonClick}/>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ProfilePage;
