import { Stack, Toolbar } from '@mui/material';
import UILink from '@uielements/UILink';
import React from 'react';
import { navLinksInterface } from 'utils/types';

interface NavBarProps {
  navLinks: navLinksInterface[];
}

const NavBar = (props: NavBarProps) => {
  const { navLinks } = props;
  return (
    <Toolbar
      component='nav'
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction='row'>
        {navLinks.map(({ path, title }, i) => (
          <UILink
            key={`${title}${i}`}
            href={path}
            variant='button'
            sx={{ color: `white`, opacity: 0.7 }}
          >
            {title}
          </UILink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default NavBar;
