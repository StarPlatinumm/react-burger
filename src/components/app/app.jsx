import appStyles from './app.module.css'
import AppHeader from '../app-header/app-header';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main/main';


function App() {
  return (
    <div className={appStyles['app']}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
