import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { createGrid } from 'reducers';

import Block from './block';
import { Container, Row } from './styles';

const Grid: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    create();
  }, [create]);

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
