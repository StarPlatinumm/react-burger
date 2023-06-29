import formStyles from './form.module.css'


function Header(props) {
  return (
    <span className={`${formStyles['header']}`}>{props.children}</span>
  );
}

export default Header;
