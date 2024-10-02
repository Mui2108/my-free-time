import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/index.less';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
