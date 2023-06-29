import formStyles from './form.module.css'


function Footer(props) {
  return (
    <div className={`${formStyles['footer']} text_color_inactive pt-20`}>
      {props.children}
    </div>
  );
}

export default Footer;
