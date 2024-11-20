/**
 * Node Modules
 */
// Other than Material UI Components
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Material UI Components
import {
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Stack,
  Divider,
  Link,
} from '@mui/material';

// Material UI Icons
import MenuIcon from '@mui/icons-material/Menu';
import PieChartIcon from '@mui/icons-material/PieChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import { CancelOutlined } from '@mui/icons-material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonIcon from '@mui/icons-material/Person';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

/**
 * Helpers
 */
import { extractPathName } from '../../../helpers/ExtractPathName';
import { capitalizeString } from '../../../helpers/CapitalizeString';

const drawerWidth = '280px';

const Navbar = () => {
  const location = useLocation();
  const extractedPathName = extractPathName(location.pathname);
  const pathName = capitalizeString(extractedPathName);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const listItems = [
    {
      itemName: 'Overview',
      icon: pathName === 'Dashboard' ? <PieChartIcon size="medium" /> : <PieChartOutlineIcon />,
      link: '/dashboard',
    },
    {
      itemName: 'Customers',
      icon: pathName === 'Customers' ? <PeopleAltIcon size="medium" /> : <PeopleOutlineIcon />,
      link: '/customers',
    },
    {
      itemName: 'Integrations',
      icon:
        pathName === 'Integrations' ? (
          <IntegrationInstructionsIcon size="medium" />
        ) : (
          <IntegrationInstructionsOutlinedIcon />
        ),
      link: '/integrations',
    },
    {
      itemName: 'Settings',
      icon: pathName === 'Settings' ? <SettingsIcon size="medium" /> : <SettingsOutlinedIcon />,
      link: '/settings',
    },
    {
      itemName: 'Account',
      icon: pathName === 'Account' ? <PersonIcon size="medium" /> : <PermIdentityIcon />,
      link: '/account',
    },
    {
      itemName: 'Error',
      icon: <CancelOutlined />,
      link: '/erros/not-found',
    },
  ];

  const pageChosen = (itemName) => {
    if (itemName.toLowerCase() == 'overview') {
      itemName = 'dashboard';
    } else {
      itemName = itemName.toLowerCase();
    }
    return extractedPathName == itemName;
  };

  const drawer = (
    <Stack
      sx={{
        overflowY: 'hidden',
      }}>
      <Box
        padding={3}
        justifyContent={'center'}>
        <img
          src="https://material-kit-react.devias.io/assets/logo.svg"
          alt="DeviasKit"
          crossOrigin="true"
          style={{
            width: '122px',
            height: '32px',
            alignSelf: 'center',
          }}
        />
        <Box
          sx={{
            border: '1px solid #434a60',
            borderRadius: '12px',
            py: '4px',
            px: '12px',
            mt: '10px',
            mb: '2px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Box>
            <Typography
              variant="body1"
              color="#8a94a6"
              sx={{
                fontSize: '0.875rem',
              }}>
              Workspace
            </Typography>
            <Typography
              color="white"
              sx={{ fontWeight: '500' }}>
              Devias
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <UnfoldMoreIcon
              sx={{
                color: '#b3b9c6',
                width: '1.1em',
                height: '1.1em',
                alignSelf: 'center',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          backgroundColor: '#434a60',
        }}
      />
      <List
        sx={{
          p: 1.5,
        }}>
        {listItems.map(({ itemName, icon, link }) => (
          <ListItem
            key={itemName}
            disablePadding
            sx={{
              backgroundColor: pageChosen(itemName) ? '#635bff' : '',
              borderRadius: '8px',
              px: '16px',
              py: '6px',
              mb: '8px',
            }}>
            <ListItemButton
              sx={{ p: 0 }}
              component={RouterLink}
              to={link}
              disableRipple>
              <ListItemIcon
                sx={{
                  color: pageChosen(itemName) ? 'white' : '#b3b9c6',
                  minWidth: '28px',
                  '& .MuiSvgIcon-root': {
                    width: '20px',
                    height: '20px',
                  },
                }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={itemName}
                sx={{
                  color: pageChosen(itemName) ? 'white' : '#b3b9c6',
                  '& .MuiTypography-root': {
                    fontWeight: '500',
                    fontSize: '0.875rem',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{
          backgroundColor: '#434a60',
        }}
      />
      <Stack
        spacing={2}
        sx={{
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Typography
            variant="body"
            sx={{
              color: 'white',
              fontWeight: '500',
              fontSize: '14px',
            }}>
            Need more features?
          </Typography>
          <Typography
            variant="body"
            sx={{
              color: '#8a94a6',
              fontWeight: '500',
              fontSize: '14px',
            }}>
            Check out our Pro solution template.
          </Typography>
        </Box>
        <img
          src="https://material-kit-react.devias.io/assets/devias-kit-pro.png"
          alt="devias kit image"
          style={{
            width: '160px',
            height: 'auto',
            alignSelf: 'center',
            my: '8px',
          }}
        />
      </Stack>
    </Stack>
  );

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  useEffect(() => {
    document.title = `${pathName} | Devias Kit`;
  }, []);
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { md: 'none' }, ml: 2 }}>
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="navbar-folder">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#121621',
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#121621',
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
