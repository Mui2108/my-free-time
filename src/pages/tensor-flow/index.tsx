import ToggleSelectItem from 'components/toggle/toggle-select';
import React from 'react';

const TensorFlow = () => {
  return (
    <div style={{ height: '100%', display: 'flex', gap: '10px' }}>
      <div style={{ height: '100%', backgroundColor: 'red', flex: 1 }}>
        <ToggleSelectItem
          items={[
            { name: '1', value: '1' },
            { name: '2', value: '2' },
          ]}
        />
      </div>
      <div style={{ height: '100%', backgroundColor: 'blue', flex: 3 }}> TensorFlow</div>
    </div>
  );
};

export default TensorFlow;
