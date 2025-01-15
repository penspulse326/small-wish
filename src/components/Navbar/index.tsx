// components/Navbar/index.tsx
'use client';

import LightModeIcon from '@mui/icons-material/LightMode'; // 新增
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  useColorScheme,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  StyledAppBar,
  NavContainer,
  LogoContainer,
  NavItemsContainer,
  ActionContainer, // 新增
} from './styled';

function Navbar() {
  const router = useRouter();
  const { mode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = () => Boolean(anchorEl);

  function handleMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleNavigate(path: string) {
    router.push(path);
    handleMenuClose();
  }

  if (!mode) {
    return null;
  }

  return (
    <StyledAppBar position="sticky">
      <NavContainer>
        <LogoContainer onClick={() => handleNavigate('/')}>
          <Typography color="primary" variant="h6">
            Small Wish
          </Typography>
        </LogoContainer>

        <ActionContainer>
          <NavItemsContainer>
            <Button onClick={() => handleNavigate('/wishes')}>所有願望</Button>
            <Button onClick={() => handleNavigate('/create')}>許願</Button>
            <Button onClick={() => handleNavigate('/login')}>登入</Button>
          </NavItemsContainer>

          {/* 主題切換按鈕 */}
          <IconButton
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            sx={{ color: 'primary.main' }}
          >
            <LightModeIcon />
          </IconButton>

          {/* 漢堡選單按鈕 */}
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              display: { md: 'none' },
              color: 'primary.main',
            }}
          >
            <MenuIcon />
          </IconButton>
        </ActionContainer>

        <Menu anchorEl={anchorEl} onClose={handleMenuClose} open={isMenuOpen()}>
          <MenuItem onClick={() => handleNavigate('/wishes')}>
            所有願望
          </MenuItem>
          <MenuItem onClick={() => handleNavigate('/create')}>許願</MenuItem>
          <MenuItem onClick={() => handleNavigate('/login')}>登入</MenuItem>
        </Menu>
      </NavContainer>
    </StyledAppBar>
  );
}

export default Navbar;
