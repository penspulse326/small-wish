'use client';

import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Typography,
  Drawer,
  Box,
  useColorScheme,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import {
  StyledAppBar,
  NavContainer,
  LogoContainer,
  NavItemsContainer,
  ActionContainer,
  NavLink,
} from './styled';

function Navbar() {
  const { mode, setMode } = useColorScheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  function handleMenuItemClick() {
    handleMenuClose();
  }

  function handleToggleThemeMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <StyledAppBar position="sticky">
      <NavContainer>
        <Link href="/" legacyBehavior passHref>
          <LogoContainer>
            <Typography color="primary" variant="h6">
              Small Wish
            </Typography>
          </LogoContainer>
        </Link>

        <ActionContainer>
          <NavItemsContainer>
            <NavLink href="/all-wishes">所有願望</NavLink>
            <NavLink href="/make-a-wish">許願</NavLink>
            <NavLink href="/sign-in">登入</NavLink>
          </NavItemsContainer>

          <IconButton
            onClick={handleToggleThemeMode}
            sx={{ color: 'primary.main' }}
          >
            <LightModeIcon />
          </IconButton>

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

        <Drawer
          anchor="right"
          onClose={handleMenuClose}
          open={isMenuOpen}
          sx={{
            '& .MuiDrawer-paper': {
              width: '100%',
              maxWidth: { xs: '100%', sm: '400px' },
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <Typography color="primary" variant="h6">
                Small Wish
              </Typography>
              <IconButton
                onClick={handleMenuClose}
                sx={{ color: 'primary.main' }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <NavLink href="/all-wishes" onClick={() => handleMenuItemClick()}>
                所有願望
              </NavLink>
              <NavLink
                href="/make-a-wish"
                onClick={() => handleMenuItemClick()}
              >
                許願
              </NavLink>
              <NavLink href="/sign-in" onClick={() => handleMenuItemClick()}>
                登入
              </NavLink>
            </Box>
          </Box>
        </Drawer>
      </NavContainer>
    </StyledAppBar>
  );
}

export default Navbar;
