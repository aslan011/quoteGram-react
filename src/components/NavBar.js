import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
import FilledInput from '@material-ui/core/FilledInput';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';


function NavBar() {
    return (
      <Box mb={15}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <ListItem>
              <Link to='/'><img src="./logo.png" alt="logo"/></Link>
            </ListItem>
            <ListItem>
              <SearchIcon></SearchIcon>
              <FilledInput placeholder="Search"></FilledInput>
            </ListItem>
            <ListItem>
              <Link to='/'><HomeIcon></HomeIcon></Link>
              <Link to='/messages'><TelegramIcon></TelegramIcon></Link>
              <Link to='/explore'><ExploreIcon></ExploreIcon></Link>
              <Link to='notifications'><FavoriteIcon></FavoriteIcon></Link>
              <Link to='/profile'><AccountCircleIcon></AccountCircleIcon></Link>
            </ListItem>
          </Toolbar>
        </AppBar>
        </Box>
    );
  }

  export default NavBar;