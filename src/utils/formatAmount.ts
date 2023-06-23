type Props = {
  format?: string;
  style?: string;
  currency?: string;
  amount: number | string;
};

const formatAmount = ({
  amount,
  format = 'en-US',
  style = 'currency',
  currency = 'XAF',
}: Props) => {
  return amount.toLocaleString(format, {
    style,
    currency,
  });
};

export default formatAmount;
