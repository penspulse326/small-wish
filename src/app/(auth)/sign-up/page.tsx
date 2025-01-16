'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Title, Form, InputGroup, Input, Button, LinkText } from '../styled';

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
      <Title>註冊帳號</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="電子信箱"
            required
            type="email"
            value={email}
          />
          <Input
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="密碼"
            required
            type="password"
            value={password}
          />
          <Input
            id="confirm-password"
            name="confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="確認密碼"
            required
            type="password"
            value={confirmPassword}
          />
        </InputGroup>

        <Button type="submit">註冊</Button>

        <LinkText>
          <Link href="/sign-in">已有帳號？立即登入</Link>
        </LinkText>
      </Form>
    </>
  );
}
