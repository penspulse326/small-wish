import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 3rem 1rem;
`;

export const AuthWrapper = styled.div`
  max-width: 28rem;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-top: 1.5rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    z-index: 10;
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:first-of-type {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  &:last-of-type {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #3b82f6;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: none;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px #3b82f6;
  }
`;

export const LinkText = styled.div`
  text-align: center;
  font-size: 0.875rem;

  a {
    color: #3b82f6;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: #2563eb;
    }
  }
`;
