import formStyles from './form.module.css'
import { ReactNode } from 'react';

type TProps = {
  children: ReactNode
}

function Footer(props: TProps) {
  return (
    <div className={`${formStyles['footer']} text_color_inactive pt-20`}>
      {props.children}
    </div>
  );
}

export default Footer;
