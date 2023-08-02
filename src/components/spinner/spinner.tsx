import spinnerStyles from './spinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={spinnerStyles["lds-ripple"]}>
      <div></div><div></div>
    </div>
  );
}