import { Route, Routes } from 'react-router-dom';
import MainLayouts from './components/layouts';
import { routers } from './router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayouts />}>
        {routers.map((item) => (
          <Route key={item.path} path={item.path} id={item.name} element={item.component} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
