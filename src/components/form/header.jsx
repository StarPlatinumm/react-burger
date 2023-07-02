import formStyles from './form.module.css'
import PropTypes from 'prop-types';


function Header(props) {
  return (
    <span className={`${formStyles['header']}`}>{props.children}</span>
  );
}

Header.propTypes = {
  children: PropTypes.node
}; 

export default Header;
