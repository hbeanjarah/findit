import NavBar from '@modules/NavBar';
import { AppBar, Container, Toolbar } from '@mui/material';
import UILink from '@uielements/UILink';
import React from 'react';
import { navLinksInterface } from 'utils/types';

const navLinks: navLinksInterface[] = [
  {
    path: '/about',
    title: 'about',
  },
];
const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Container
          maxWidth='lg'
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <UILink href='/wtas' activeClassName='active'>
            <div>test</div>
          </UILink>
          <NavBar navLinks={navLinks} />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
