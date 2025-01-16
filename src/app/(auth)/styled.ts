import { Box, Button as MuiButton, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const AuthContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  padding: ${({ theme }) => theme.spacing(3, 1)};
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const AuthWrapper = styled(Box)`
  margin: 0 auto;
  max-width: 28rem;
  width: 100%;
`;

export const HomeLink = styled(Link)`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: inherit;
  text-decoration: none;
  text-align: center;
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const InputGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }
`;

export const SubmitButton = styled(MuiButton)`
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
`;

export const LinkText = styled(Box)`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};

  a {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;
