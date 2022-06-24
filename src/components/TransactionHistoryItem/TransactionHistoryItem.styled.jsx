import styled from 'styled-components';

export const TableRow = styled.tr`
  width: 500px;
  text-align: center;
  background-color: lightgray;
  &:nth-child(2n) {
    background-color: #ffffff;
  }
`;

export const TablePartition = styled.td`
  padding: 10px;
`;
