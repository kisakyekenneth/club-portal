import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OrdersIcon from '@mui/icons-material/Money';
import MailIcon from '@mui/icons-material/Mail';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import SendEmail from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import { localRoutes } from '../../constants/constants';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240;
interface IAppRoute {
  requiredRoles?: string[];
  name: string;
  route?: string;
  icon?: any;
  items?: IAppRoute[];
}

const routes: IAppRoute[] = [
  {
    name: 'Dashboard',
    route: localRoutes.dashboard,
    icon: <AppsIcon />,
  },
  {
    name: 'People',
    route: localRoutes.people,
    icon: <PeopleIcon />,
  },
  {
    name: 'Orders',
    route: localRoutes.orders,
    icon: <OrdersIcon />,
  },
  {
    name: 'Chat',
    route: localRoutes.chat,
    icon: <ChatIcon />,
  },
  {
    name: 'Email',
    route: localRoutes.email,
    icon: <SendEmail />,
  },
];

const SideMenu = () => {
  //UseHistory hook
  const history = useHistory();
  const location = useLocation();
  const HandleOnClick = (path: string) => history.push(path);

  const pathMatches = (path: string, str: string) => path.indexOf(str) > -1;
  const isSelected = (pathStr: string): boolean => {
    const { pathname } = location;
    return pathMatches(pathname, pathStr);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {routes.map((it, index) => {
              const { name, icon, route } = it;
              return (
                <ListItem button key={name}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={name} />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List>
            {['Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </Box>
    </Box>
  );
};

export default SideMenu;
