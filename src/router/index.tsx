import ChartPage from 'pages/charts/index.tsx';
import MainPage from '../pages/main/index.tsx';
import DockPage from 'pages/dock/index.tsx';
import CarouselPage from 'pages/carousel/index.tsx';
import TensorFlow from 'pages/tensor-flow/index.tsx';
const routers = [
  { name: 'Main', path: '/', component: <MainPage /> },
  { name: 'Dock', path: '/dock', component: <DockPage /> },
  { name: 'CarouseIcon', path: '/carousel', component: <CarouselPage /> },
  { name: 'Chart', path: '/chart', component: <ChartPage /> },
  { name: 'TensorFlow', path: '/tensor-flow', component: <TensorFlow /> },
];

export { routers };
