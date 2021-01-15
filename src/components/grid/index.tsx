import React from 'react';

const Grid: React.FC = () => {
  return (
    <div data-cy='grid-container'>
      {/* Using React.Children.toArray() is a better practise than using index as a key when mapping */}
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <div data-cy='grid-row-container'>{React.Children.toArray([...Array(9)].map((_, colIndex) => <div data-cy='block'></div>))}</div>
        ))
      )}
    </div>
  );
};

export default Grid;
