import React from 'react';

import { Container } from './styles';

interface IProps {
  colIndex: number;
  rowIndex: number;
}

const Block: React.FC<IProps> = ({ colIndex, rowIndex }) => {
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {rowIndex}
      {colIndex}
    </Container>
  );
};

export default Block;
