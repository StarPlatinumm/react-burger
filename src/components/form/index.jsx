import formStyles from './form.module.css'


function Form(props) {
  return (
    <form className={`${formStyles['form']}`}>
      {props.children}
    </form>
  );
}

export default Form;
