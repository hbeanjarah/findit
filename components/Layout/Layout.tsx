import React from 'react';
import Header from '@modules/Header';
import { Container } from '@mui/material';
import Head from 'next/head';

interface LayoutProps {
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Container>
      <Head>
        <title>Find It</title>
        <meta name='description' content='Hooby cursus finder' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
