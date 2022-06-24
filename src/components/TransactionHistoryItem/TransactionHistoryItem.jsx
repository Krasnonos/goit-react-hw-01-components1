import PropTypes from 'prop-types';
import { TableRow, TablePartition } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ currency, amount, type }) => {
  return (
    <TableRow>
      <TablePartition>{type}</TablePartition>
      <TablePartition>{amount}</TablePartition>
      <TablePartition>{currency}</TablePartition>
    </TableRow>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
