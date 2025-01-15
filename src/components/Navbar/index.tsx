// components/Navbar/index.tsx
'use client';

import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = () => Boolean(anchorEl);

  function handleMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
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
            <NavLink href="/wishes">所有願望</NavLink>
            <NavLink href="/create">許願</NavLink>
            <NavLink href="/login">登入</NavLink>
          </NavItemsContainer>

          <IconButton
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
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

        <Menu anchorEl={anchorEl} onClose={handleMenuClose} open={isMenuOpen()}>
          <MenuItem component={Link} href="/wishes">
            所有願望
          </MenuItem>
          <MenuItem component={Link} href="/create">
            許願
          </MenuItem>
          <MenuItem component={Link} href="/login">
            登入
          </MenuItem>
        </Menu>
      </NavContainer>
    </StyledAppBar>
  );
}

export default Navbar;
