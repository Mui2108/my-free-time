import { Outlet } from 'react-router-dom';

const ContentLayout = () => {
  return (
    <div className='content-body'>
      <Outlet />
    </div>
  );
};

export default ContentLayout;
