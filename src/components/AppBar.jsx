import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function ButtonAppBar() {

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar title ="Portfolio" style={{backgroundColor:"black" }}>
        <Toolbar variant = "dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <GitHubIcon onClick={event =>  window.location.href='https://github.com/mariaka86?tab=repositories'} />
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}