import dockIcon from 'assets/icons/dock.svg';
import carouselIcon from 'assets/icons/carousel.svg';
import cartICon from 'assets/icons/chart.svg';
import tensorFlowIcon from 'assets/icons/tensor-flow.svg';
import MenuItem from './menu-item';
import { useNavigate } from 'react-router-dom';

const HeaderMenuLayout = () => {
  const navigate = useNavigate();
  return (
    <div className='header-layout'>
      <MenuItem icon={dockIcon} onClick={() => navigate('/dock')} />
      <MenuItem icon={carouselIcon} onClick={() => navigate('/carousel')} />
      <MenuItem icon={cartICon} onClick={() => navigate('/chart')} />
      <MenuItem icon={tensorFlowIcon} onClick={() => navigate('/tensor-flow')} />
    </div>
  );
};

export default HeaderMenuLayout;
