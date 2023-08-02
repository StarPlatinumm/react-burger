import { ReactNode } from 'react';
import formStyles from './form.module.css'

type TProps = {
  children: ReactNode
}

function Header(props: TProps) {
  return (
    <span className={`${formStyles['header']}`}>{props.children}</span>
  );
}

export default Header;
