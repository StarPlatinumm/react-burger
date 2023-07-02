import formStyles from './form.module.css'
import PropTypes from 'prop-types';


function Footer(props) {
  return (
    <div className={`${formStyles['footer']} text_color_inactive pt-20`}>
      {props.children}
    </div>
  );
}

Footer.propTypes = {
  children: PropTypes.node
}; 

export default Footer;
