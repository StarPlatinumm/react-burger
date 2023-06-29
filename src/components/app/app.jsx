import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import NotFound404Page from '../../pages/not-found-404/not-find-404';
import ProfilePage from '../../pages/profile/profile';


function App() {
  return (
    <div className={appStyles['app']}>
      <AppHeader />
      <main className={`${appStyles['main']} pl-5 pr-5 text_type_main-default`}>
        <Routes>
          <Route path="*" element={<NotFound404Page />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
