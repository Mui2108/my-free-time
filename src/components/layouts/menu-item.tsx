interface IProps {
  icon: string;
  onClick?: () => void;
}
const MenuItem = ({ icon, onClick }: IProps) => {
  return (
    <div className='menu-header select-disable dock' onClick={onClick}>
      <img src={icon} alt='dock' width={80} height={80} draggable={false} />
    </div>
  );
};

export default MenuItem;
