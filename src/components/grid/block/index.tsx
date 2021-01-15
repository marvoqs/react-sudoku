import React from 'react';

interface IProps {
  colIndex: number;
  rowIndex: number;
}

const Block: React.FC<IProps> = ({ colIndex, rowIndex }) => {
  return (
    <div data-cy='block'>
      |{rowIndex}
      {colIndex}|
    </div>
  );
};

export default Block;
