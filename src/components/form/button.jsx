import formStyles from './form.module.css'
import {  Button } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';


function FormButton(props) {
  return (
    <div className={`${formStyles['button-wrapper']} pt-6`}>
      <Button
        htmlType="submit"
        type="primary"
        size="large">
          {props.caption}
      </Button>
    </div>
  );
}

FormButton.propTypes = {
  caption: PropTypes.string
}; 

export default FormButton;
