/**
 * Node Modules
 */
// Material UI Components
import Grid from '@mui/material/Grid2';

// Other than Material UI Components
import { Outlet } from 'react-router-dom';

/**
 * Components
 */
import Navbar from './Pages/Navbar/Navbar';
import Appbar from './Common/Appbar';

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid size={'auto'}>
          <Navbar />
        </Grid>
        <Grid
          size={'grow'}
          container>
          <Grid size={12}>
            <Appbar />
          </Grid>
          <Grid size={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
