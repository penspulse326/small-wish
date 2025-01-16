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

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('密碼不一致');
      return;
    }
    console.log('Registration attempt:', { email, password });
  };

  return (
    <>
      <Typography
        align="center"
        color="text"
        component="h1"
        gutterBottom
        variant="h4"
      >
        註冊帳號
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
          <StyledTextField
            fullWidth
            id="confirm-password"
            label="確認密碼"
            name="confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            type="password"
            value={confirmPassword}
          />
        </InputGroup>

        <SubmitButton fullWidth size="large" type="submit" variant="contained">
          註冊
        </SubmitButton>

        <LinkText>
          <Link href="/sign-in">已有帳號？立即登入</Link>
        </LinkText>
      </Form>
    </>
  );
}
