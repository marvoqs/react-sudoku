import React from 'react';

import Block from './block';
import { Container, Row } from './styles';

const Grid: React.FC = () => {
  return (
    <Container data-cy='grid-container'>
      {/* Using React.Children.toArray() is a better practise than using index as a key when mapping */}
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy='grid-row-container'>
            {React.Children.toArray([...Array(9)].map((_, colIndex) => <Block colIndex={colIndex} rowIndex={rowIndex} />))}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
