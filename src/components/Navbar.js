import React, { Fragment, useState } from 'react';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from '@material-ui/core';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenu from '@material-ui/core/Drawer';
import avatar from '../portfolio-project-files/avatar.png';
import { Link } from 'react-router-dom';

// CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listPath: '/',
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      onClick={toggleSlider(slider, false)}
      component='div'
      className={classes.menuSliderContainer}
    >
      <Avatar src={avatar} alt='Russel' className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('left', true)}>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography variant='h5' style={{ color: 'tan' }}>
              Portfolio
            </Typography>
            <MobileRightMenu
              anchor='left'
              open={state.left}
              onClose={toggleSlider('left', false)}
            >
              {sideList('left')}
            </MobileRightMenu>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};

export default Navbar;
