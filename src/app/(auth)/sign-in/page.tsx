'use client';

import { Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import {
  Form,
  InputGroup,
  StyledTextField,
  SubmitButton,
  LinkText,
} from '../styled';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <>
      <Typography align="center" component="h1" gutterBottom variant="h4">
        登入帳號
      </Typography>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <StyledTextField
            fullWidth
            id="email"
            label="電子信箱"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            value={email}
          />
          <StyledTextField
            fullWidth
            id="password"
            label="密碼"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
        </InputGroup>

        <SubmitButton fullWidth size="large" type="submit" variant="contained">
          登入
        </SubmitButton>

        <LinkText>
          <Link href="/sign-up">還沒有帳號？立即註冊</Link>
        </LinkText>
      </Form>
    </>
  );
}
