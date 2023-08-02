import formStyles from './form.module.css'
import {  Button } from '@ya.praktikum/react-developer-burger-ui-components'

type TProps = {
  caption: string
}

function FormButton(props: TProps) {
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

export default FormButton;
