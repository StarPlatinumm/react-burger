import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import modalStyles from './modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById("react-modals");

function Modal(props) {
  const { children, header, onClose } = props;

  useEffect(() => {
    const handleCloseOnEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleCloseOnEsc, false);

    return () => {
      document.removeEventListener("keydown", handleCloseOnEsc, false);
    };
  }, []);

  return ReactDOM.createPortal(
    (
      <>
        <div className={`${modalStyles['modal']} p-10`}>
          <div className={`${modalStyles['modal-header']}`}>
            <div className={`${modalStyles['modal-header-title']} text text_type_main-large`}>
              {header}
            </div>
            <button  className={`${modalStyles['modal-header-close-button']}`}>
              <CloseIcon onClick={onClose}/>
            </button>
          </div>
          <div className={`${modalStyles['modal-content']}`}>
            {children}
          </div>
        </div>
        <ModalOverlay onClick={onClose}/>
      </>
    ), 
    modalRoot
  );
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Modal;