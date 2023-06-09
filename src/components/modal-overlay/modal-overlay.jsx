import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';


function ModalOverlay(props) {
  return (
    <div className={`${modalOverlayStyles['modal-overlay']}`} onClick={props.onClick}></div>
  );
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func
}

export default ModalOverlay;