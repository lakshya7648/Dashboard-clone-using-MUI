/**
 * Node Modules
 */
// Other than Material UI Components

// Material UI Components
import { Grid2, Box } from '@mui/material';

/**
 * Components
 */
import Statistics from './Statistics';

const componentSize = 12;

const Dashboard = () => {
  return (
    <>
      <Box sx={{ padding: '64px 24px' }}>
        <Grid2
          container
          spacing={2}>
          <Grid2 size={componentSize}>
            <Statistics />
          </Grid2>
          <Grid2 size={componentSize}></Grid2>
          <Grid2 size={componentSize}></Grid2>
          <Grid2 size={componentSize}></Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Dashboard;
