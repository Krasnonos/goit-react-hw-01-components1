import PropTypes from 'prop-types';
import {
  StaticWrap,
  StaticTitle,
  StaticList,
  ListIem,
  ItemLable,
  ItemPercentage,
} from './Statics.styled';

export const Statics = ({ title, stats, colorFn }) => {
  return (
    <StaticWrap>
      {title && <StaticTitle>{title}</StaticTitle>}
      <StaticList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListIem key={id} colorFn={colorFn}>
              <ItemLable>{label}</ItemLable>
              <ItemPercentage>{percentage}%</ItemPercentage>
            </ListIem>
          );
        })}
      </StaticList>
    </StaticWrap>
  );
};

Statics.propTypes = {
  title: PropTypes.string,
  colorFn: PropTypes.func,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
