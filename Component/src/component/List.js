import React from 'react';
import styled from 'styled-components';
import componentItmes from '../api/componentItmes';
console.log('componentItmes', componentItmes);

// style
//
// grid-template-columns: repeat(3, minmax(240px, 1fr));
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 80px 40px;
  background: #f9f9f9;
  border-radius: 0 16px 16px 0;
  gap: 40px;
  overflow-y: auto;
`;
const GridContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  height: 100%;
  /* padding: 60px; */
`;
const ListItem = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
`;
export default function List() {
  return (
    <>
      <Wrapper>
        <h2>is content title</h2>
        <GridContainer>
          {componentItmes.map((item, i) => {
            return (
              <ListItem key={item.title + i}>
                {item.title}
                {i}
              </ListItem>
            );
          })}
        </GridContainer>
      </Wrapper>
    </>
  );
}
