import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import modalStyles from './modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

function Modal(props) {
  const { children, header, onClose } = props;
  return ReactDOM.createPortal(
    (
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