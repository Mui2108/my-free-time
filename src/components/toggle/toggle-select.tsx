interface IItem {
  name: string;
  value: string;
}
interface IProps {
  items?: IItem[];
  onChange?: (value: string, item?: IItem) => void;
}
const ToggleSelectItem = ({ items = [], onChange }: IProps) => {
  return (
    <div
      style={{
        height: 64,
        backgroundColor: 'white',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        padding: 4,
      }}
    >
      {items.map((item) => (
        <div
          key={item.value}
          onClick={() => onChange?.(item.value, item)}
          style={{ borderRadius: 6, height: '100%', backgroundColor: 'blue', minWidth: 100 }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ToggleSelectItem;
