import { ListIcon, BurgerIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import appHeaderStyles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={`${appHeaderStyles['header']} text text_type_main-default pt-3 pb-3`}>
      <nav>
        <ul className={`${appHeaderStyles['menu-list']} pt-4 pb-4`}>
          <li className={`${appHeaderStyles['menu-item']} undefined p-5 text`} role='button'>
            <BurgerIcon type="secondary" />
            <span className='ml-2'>Конструктор</span>
          </li>
          <li className={`${appHeaderStyles['menu-item']} undefined p-5 text`} role='button'>
            <ListIcon type="secondary" />
            <span className='ml-2'>Лента заказов</span>
          </li>
          <li className={`${appHeaderStyles['logo']}`}>
            <Logo />
          </li>
          <li className={`${appHeaderStyles['menu-item']} undefined p-5 text`} role='button'>
            <ProfileIcon type="secondary" />
            <span className='ml-2'>Личный кабинет</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;