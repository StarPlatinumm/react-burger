import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import NotFound404Page from '../../pages/not-found-404/not-find-404';
import ProfilePage from '../../pages/profile/profile';
import IngredientDetailsPage from '../../pages/ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { getIngredients } from '../../services/actions/burger-ingredients';
import { useEffect } from 'react';
import { useDispatch } from '../..';
import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';
import { checkUserAuth } from '../../services/actions/user';
import { AnyAction } from 'redux';
import OrdersFeed from '../../pages/orders-feed/orders-feed';
import OrderCardDetailsPage from '../../pages/order-card-details/order-card-details';


function App() {
  let location = useLocation();
  let navigate = useNavigate();
  let state = location.state;

  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getIngredients() as unknown as AnyAction);
      dispatch(checkUserAuth() as unknown as AnyAction);
    },
    [dispatch]
  );

  return (
    <div className={appStyles['app']}>
      <AppHeader />
      <main className={`${appStyles['main']} pl-5 pr-5 text_type_main-default`}>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="*" element={<NotFound404Page />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/ingredients/:id" element={<IngredientDetailsPage isModal={false} />} />
          <Route path="/login" element={<OnlyUnAuth component={<LoginPage />}/>} />
          <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />}/>} />
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage />}/>} />
          <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPasswordPage />}/>} />
          <Route path="/profile" element={<OnlyAuth component={<ProfilePage />}/>} />
          <Route path="/profile/orders" element={<OnlyAuth component={<ProfilePage />}/>} />
          <Route path="/feed" element={<OrdersFeed />} />
          <Route path="/feed/:number" element={<OrderCardDetailsPage isModal={false} />} />
        </Routes>

        {state?.backgroundLocation && (
          <Routes>
            <Route path="/ingredients/:id" element={
              <Modal header="Детали ингредиента" onClose={() => navigate(-1)}><IngredientDetailsPage isModal={true}/></Modal>
            } />
            <Route path="/feed/:number" element={
              <Modal header={state.orderNumber} onClose={() => navigate(-1)}><OrderCardDetailsPage isModal={true}/></Modal>
            } />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
