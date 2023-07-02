import formStyles from './form.module.css'
import PropTypes from 'prop-types';


function Form(props) {
  return (
    <form onSubmit={props.onSubmitHandler} className={`${formStyles['form']}`}>
      {props.children}
    </form>
  );
}

Form.propTypes = {
  onSubmitHandler: PropTypes.func,
  children: PropTypes.node
}; 

export default Form;
