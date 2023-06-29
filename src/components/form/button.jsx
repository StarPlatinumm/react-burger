import formStyles from './form.module.css'
import {  Button } from '@ya.praktikum/react-developer-burger-ui-components'


function FormButton(props) {
  return (
    <div className={`${formStyles['button-wrapper']} pt-6`}>
      <Button
        onClick={props.onClick}
        htmlType="button"
        type="primary"
        size="large">
          {props.caption}
      </Button>
    </div>
  );
}

export default FormButton;
