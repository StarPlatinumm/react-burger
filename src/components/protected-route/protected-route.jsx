import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ onlyUnAuth = false, component }) => {
  const getStateUserData = (state) => state.userData;
  const {isAuthChecked, name} = useSelector(getStateUserData);
  const location = useLocation();
  const from = location.state?.from || '/';

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && name) {
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !name) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);
