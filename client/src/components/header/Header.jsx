import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem
} from '@mui/material';

import { Menu } from '@mui/icons-material';
// components
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)(({ theme }) => ({
  background: '#2874f0',
  height: '65px'
}));

const Component = styled(Link)(({ theme }) => ({
  marginLeft: '12%',
  lineHeight: 0,
  textDecoration: 'none',
  color: 'inherit',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 5
  }
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: '10px',
  fontStyle: 'italic',
  [theme.breakpoints.down('sm')]: {
    fontSize: '8px'
  }
}));

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const Header = () => {
  const logoURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  const subURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => {
    return (
      <Box style={{ with: 200 }} onClick={handleClose}>
        <List>
          <ListItem button>
            <CustomButtons />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 65 }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to="/">
          <img src={logoURL} alt="logo" style={{ width: 75 }} />

          <Box style={{ display: 'flex' }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: '#FFE500' }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-logo" />
          </Box>
        </Component>

        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
