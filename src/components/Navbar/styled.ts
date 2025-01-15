// components/Navbar/styled.ts
import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const NavContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;

export const NavItemsContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const ActionContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  font-family: inherit;
  position: relative; // 為底線定位做準備

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 4px;
    left: 50%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: calc(100% - ${({ theme }) => theme.spacing(4)}); // 減去左右 padding
  }
`;
