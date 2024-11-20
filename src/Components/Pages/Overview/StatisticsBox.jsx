/**
 * Node Modules
 */
// Other than Material UI Components
import PropTypes from 'prop-types';

// Material UI Components
import { Box, Stack, Avatar, Typography } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

const StatisticsBox = ({ title, value, children, symbol }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: '32px 24px',
          border: '1px solid #dcdfe4',
          borderRadius: '12px',
        }}>
        <Stack spacing={3}>
          <Stack
            direction="row"
            spacing={3}>
            <Stack spacing={1}>
              <Typography variant="outline">{title}</Typography>
              <Typography variant="h3">{value}</Typography>
            </Stack>
            <Stack>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{symbol}</Avatar>
            </Stack>
          </Stack>
          {children}
        </Stack>
      </Box>
    </>
  );
};

StatisticsBox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.any,
  symbol: PropTypes.string,
};

export default StatisticsBox;
