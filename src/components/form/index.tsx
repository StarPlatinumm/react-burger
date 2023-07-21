import { ReactNode } from 'react';
import formStyles from './form.module.css'

type TProps = {
  onSubmitHandler: (e: React.SyntheticEvent<HTMLFormElement, Event>) => void,
  children: ReactNode
}

function Form(props: TProps) {
  return (
    <form onSubmit={props.onSubmitHandler} className={`${formStyles['form']}`}>
      {props.children}
    </form>
  );
}

export default Form;
