import modalOverlayStyles from './modal-overlay.module.css';

type TProps = {
  onClick: () => void
}

function ModalOverlay(props: TProps) {
  return (
    <div className={`${modalOverlayStyles['modal-overlay']}`} onClick={props.onClick}></div>
  );
}

export default ModalOverlay;