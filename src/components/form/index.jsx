import formStyles from './form.module.css'


function Form(props) {
  return (
    <form onSubmit={props.onSubmitHandler} className={`${formStyles['form']}`}>
      {props.children}
    </form>
  );
}

export default Form;
