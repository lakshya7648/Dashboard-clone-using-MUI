/**
 * Node Modules
 */
// Other than Material UI Components
import { useState } from 'react';

// Material UI Components
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge,
} from '@mui/material';

// Material UI Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlineIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';

/**
 * Helpers
 */

const settingsIconsCss = {
  fontSize: '20px',
  mr: '12px',
};

const settings = [
  {
    icon: <SettingsOutlineIcon sx={settingsIconsCss} />,
    name: 'Settings',
  },
  {
    icon: <PeopleOutlineIcon sx={settingsIconsCss} />,
    name: 'Profile',
  },
  {
    icon: <LogoutOutlined sx={settingsIconsCss} />,
    name: 'Sign out',
  },
];
const USERNAME = 'Sofia Rivers';
const USEREMAIL = 'sofia.rivers@devias.io';

const Appbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        color="white"
        sx={{ boxShadow: 'none', borderBottom: '1px solid #dcdfe4', px: '16px' }}>
        {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters>
          <Tooltip
            title="search"
            sx={{ fontSize: '12px' }}>
            <IconButton
              sx={{
                width: '40px',
                height: '40px',
                fontSize: '30px',
              }}>
              <SearchIcon />
            </IconButton>
          </Tooltip>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={null}
                color="inherit">
                <MenuIcon />
              </IconButton>
            </Box> */}
          <Box
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}
            spacing={2}>
            <Tooltip
              title="Contacts"
              sx={{ fontSize: '12px' }}>
              <IconButton
                sx={{
                  width: '40px',
                  height: '40px',
                  mr: 2,
                }}>
                <PeopleOutlineIcon
                  sx={{
                    width: '30px',
                    height: '30px',
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton
                sx={{
                  width: '40px',
                  height: '40px',
                  mr: 2,
                }}>
                <Badge
                  color="success"
                  variant="dot">
                  <NotificationsNoneIcon
                    sx={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, mr: 2 }}
                disableRipple>
                <Avatar
                  alt="Sofia Rivers"
                  src="https://material-kit-react.devias.io/assets/avatar.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', paddingTop: '0px', paddingBottom: '0px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <Box sx={{ padding: '16px 20px', borderBottom: '1px solid #dcdfe4' }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: '1rem', fontWeight: '500' }}>
                  {USERNAME}
                </Typography>
                <Typography
                  variant="body"
                  sx={{ color: '#667085', fontSize: '0.875rem' }}>
                  {USEREMAIL}
                </Typography>
              </Box>
              <Box sx={{ padding: '8px' }}>
                {settings.map(({ icon, name }) => (
                  <MenuItem
                    key={name}
                    onClick={handleCloseUserMenu}
                    sx={{ borderRadius: '8px' }}>
                    {icon}
                    <Typography sx={{ textAlign: 'center' }}>{name}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </>
  );
};

export default Appbar;
