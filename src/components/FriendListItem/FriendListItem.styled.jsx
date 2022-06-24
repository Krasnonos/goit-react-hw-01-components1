import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  width: 200px;
  height: 70px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 7px;
  box-shadow: 10px 5px 5px grey;
  & + & {
    margin-top: 10px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 15px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: auto;
  height: 100%;
  margin-right: 15px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
