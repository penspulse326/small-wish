'use client';

import { Typography } from '@mui/material';
import React from 'react';

import { AuthContainer, HomeLink, AuthWrapper } from './styled';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContainer>
      <AuthWrapper>
        <HomeLink href="/">
          <Typography color="primary" variant="h3">
            Small Wish
          </Typography>
        </HomeLink>

        {children}
      </AuthWrapper>
    </AuthContainer>
  );
}
