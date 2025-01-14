'use client';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  StyledAppBar,
  NavContainer,
  LogoContainer,
  NavItemsContainer,
} from './styled';

function Navbar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

  return (
    <StyledAppBar position="sticky">
      <NavContainer>
        <LogoContainer onClick={() => handleNavigate('/')}>
          <Typography color="primary" variant="h6">
            Small Wish
          </Typography>
        </LogoContainer>

        {/* Desktop Navigation */}
        <NavItemsContainer>
          <Button onClick={() => handleNavigate('/wishes')}>探索</Button>
          <Button onClick={() => handleNavigate('/create')}>許願</Button>
          <Button onClick={() => handleNavigate('/login')}>登入</Button>
        </NavItemsContainer>

        {/* Mobile Navigation */}
        <IconButton
          color="inherit"
          onClick={handleMenuOpen}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          open={Boolean(anchorEl)}
        >
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
