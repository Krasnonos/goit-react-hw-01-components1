import PropTypes from 'prop-types';
import {
  ProfileWrap,
  UserInfo,
  Avatar,
  UserName,
  UserNick,
  UserLocation,
  StatsList,
  StatsItem,
  StatsLable,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <UserInfo>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserNick>@{tag}</UserNick>
        <UserLocation>{location}</UserLocation>
      </UserInfo>

      <StatsList>
        <StatsItem>
          <StatsLable>Followers</StatsLable>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLable>Views</StatsLable>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLable>Likes</StatsLable>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
