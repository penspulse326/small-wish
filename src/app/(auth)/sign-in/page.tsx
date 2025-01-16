'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Title, Form, InputGroup, Input, Button, LinkText } from '../styled';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <>
      <Title>登入帳號</Title>
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
        </InputGroup>

        <Button type="submit">登入</Button>

        <LinkText>
          <Link href="/sign-up">還沒有帳號？立即註冊</Link>
        </LinkText>
      </Form>
    </>
  );
}
