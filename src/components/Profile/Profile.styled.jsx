import styled from 'styled-components';

export const ProfileWrap = styled.div`
  margin-top: 50px;
  width: 300px;
  min-height: 200px;
  background-color: #ffffff;
  box-shadow: 10px 5px 5px gray;
`;

export const UserInfo = styled.div`
  text-align: center;
  padding: 30px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const UserName = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

export const UserNick = styled.p`
  color: grey;
`;

export const UserLocation = styled.p`
  color: grey;
`;

export const StatsList = styled.ul`
  background-color: #9aa9ad;
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 33.3333%;
  min-height: 50px;
  padding: 10px;
  border: 1px solid black;
`;

export const StatsLable = styled.span`
  color: grey;
  margin-bottom: 5px;
`;

export const StatsQuantity = styled.span`
  font-weight: 600;
  color: black;
`;
