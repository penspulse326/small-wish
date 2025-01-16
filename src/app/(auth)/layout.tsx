'use client';

import React from 'react';

import { AuthContainer, AuthWrapper } from './styled';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContainer>
      <AuthWrapper>{children}</AuthWrapper>
    </AuthContainer>
  );
}
