import styled from 'styled-components';

export const StaticWrap = styled.div`
  margin-top: 50px;
  width: 300px;
  min-height: 100px;
  background-color: #ffffff;
`;

export const StaticTitle = styled.h2`
  margin: 0;
  padding: 15px;
  text-align: center;
`;

export const StaticList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListIem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 10px;
  color: #ffffff;
  background-color: ${props => props.colorFn()};
`;

export const ItemLable = styled.span`
  color: #ffffff;
  margin-bottom: 10px;
`;

export const ItemPercentage = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
