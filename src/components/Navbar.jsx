import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';

// Include 'Contact Us' in the pages array
const pages = ['Cart', 'About', 'Blog', 'Contact Us'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    alert("Logged out successfully");
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#006400' }}> {/* Dark Green Background */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            BOOKIES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: 'white' }} /> {/* Menu Icon color set to white */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }} component={Link} to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />
          <Typography
            variant="h5"
            noWrap
            component={Link} // Change to Link for navigation
            to="/" // Set the link path here
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white', // Text color set to white
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} // Button text color set to white
                component={Link} // Change to Link for navigation
                to={`/${page.toLowerCase().replace(/\s+/g, '-')}`} // Set the link path here, replacing spaces with hyphens
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* New section for Login and Register buttons */}
          <Box sx={{ flexGrow: 0, display: 'flex', gap: 2 }}>
            {isLoggedIn ? (
              <Button
                variant="outlined"
                sx={{ color: 'white', borderColor: 'white' }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'white' }}
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: 'white', color: '#006400' }}
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
