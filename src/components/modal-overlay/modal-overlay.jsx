import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

function ModalOverlay(props) {
  useEffect(() => {
    document.addEventListener("keydown", props.onClick, false);

    return () => {
      document.removeEventListener("keydown", props.onClick, false);
    };
  }, [props.onClick]);

  return ReactDOM.createPortal(
    (
      <div className={`${modalOverlayStyles['modal-overlay']}`} onClick={props.onClick}></div>
    ), 
    modalRoot
  );
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func
}

export default ModalOverlay;