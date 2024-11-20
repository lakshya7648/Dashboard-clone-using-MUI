/**
 * Node Modules
 */
// Other than Material UI Components

// Material UI Components
import { Grid2, Typography, Stack } from '@mui/material';

/**
 * Components
 */
import StatisticsBox from './StatisticsBox';

const DollarBoxChildren = (
  <Stack
    direction="row"
    spacing={2}>
    <Typography variant="subtitle1">12%</Typography>
    <Typography variant="subtitle1">Since last month</Typography>
  </Stack>
);

const statisticsBoxEl = [
  {
    title: 'Budget',
    value: '$24k',
    symbol: '$',
    children: DollarBoxChildren,
  },
];

const Statistics = () => {
  return (
    <>
      <Grid2>
        {statisticsBoxEl.map(({ title, value, symbol, children }) => {
          return (
            <Grid2 size={3}>
              <StatisticsBox
                key={title}
                title={title}
                value={value}
                symbol={symbol}
                children={children}
              />
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
};

export default Statistics;
