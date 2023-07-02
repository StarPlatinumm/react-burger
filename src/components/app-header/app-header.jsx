import { ListIcon, BurgerIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import appHeaderStyles from './app-header.module.css';
import { NavLink } from 'react-router-dom';

function AppHeader() {
  return (
    <header className={`${appHeaderStyles['header']} text text_type_main-default pt-3 pb-3`}>
      <nav>
        <ul className={`${appHeaderStyles['menu-list']} pt-4 pb-4`}>

          <NavLink
            to={{ pathname: `/` }}
            className={({ isActive }) => (
              isActive ? (
                `${appHeaderStyles['active-link']}`
              ) : (
                `${appHeaderStyles['inactive-link']} text_color_inactive`
              ))}
          >
            <li className={`${appHeaderStyles['menu-item']} p-5 text`} role='button'>
              <BurgerIcon type="secondary" />
              <span className='ml-2'>Конструктор</span>
            </li>
          </NavLink>

          <NavLink
            to={{ pathname: `/x` }}
            className={({ isActive }) => (
              isActive ? (
                `${appHeaderStyles['active-link']}`
              ) : (
                `${appHeaderStyles['inactive-link']} text_color_inactive`
              ))}
          >
            <li className={`${appHeaderStyles['menu-item']} p-5 text`} role='button'>
              <ListIcon type="secondary" />
              <span className='ml-2'>Лента заказов</span>
            </li>
          </NavLink>

          <NavLink
            to={{ pathname: `/` }}
          >
          <li className={`${appHeaderStyles['logo']}`}>
            <Logo />
          </li>
          </NavLink>

          <NavLink
            to={{ pathname: `/profile` }}
            className={({ isActive }) => (
              isActive ? (
                `${appHeaderStyles['active-link']}`
              ) : (
                `${appHeaderStyles['inactive-link']} text_color_inactive`
              ))}
          >
            <li className={`${appHeaderStyles['menu-item']} p-5 text`} role='button'>
              <ProfileIcon type="secondary" />
              <span className='ml-2'>Личный кабинет</span>
            </li>
          </NavLink>

        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;