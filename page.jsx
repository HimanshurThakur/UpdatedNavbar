"use client";
import './navbar.css'
import * as React from 'react';
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputBase from '@mui/material/InputBase';

export default function Navbar() {

  const [searchValue, setSearchValue] = React.useState("");
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [agriInputMenuOpen, setAgriInputMenuOpen] = React.useState(null);
  const [agriOutputMenuOpen, setAgriOutputMenuOpen] = React.useState(null);


  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleAgriInputMenuOpen = (event) => {
    setAgriInputMenuOpen(event.currentTarget);
  };

  const handleAgriInputMenuClose = () => {
    setAgriInputMenuOpen(null);
  };

  const handleAgriOutputMenuOpen = (event) => {
    setAgriOutputMenuOpen(event.currentTarget);
  };

  const handleAgriOutputMenuClose = () => {
    setAgriOutputMenuOpen(null);
  };






  return (
    <Box>
      <AppBar className='MainNav' position="fixed" sx={{ bgcolor: 'white' }}>
        <Container >
          <Toolbar>
            <Typography component="a" href="/" variant="h6" noWrap>
              <img
              
                src="/logo.png"
                alt="Logo"
               
                style={{
                 width:'50px',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '100%',
                }}
              />
            </Typography>


            <Box sx={{ flexGrow: 1 }} />
            {/* Desktop */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>



              <Box sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: '80ch',
                border: "1px solid #ccc",
                borderRadius: 50,
              }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Connect with Farmers and Rural India....."
                  inputProps={{ "aria-label": "search google maps" }}
                  value={searchValue}
                  onChange={handleInputChange}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                ></IconButton>
              </Box>





              <Button
                color="inherit"
                sx={{
                  ml: 2,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                <Typography color='black'>About</Typography>

              </Button>

              <Button
                color="inherit"
                sx={{
                  ml: 2,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                <Typography color='black' >English</Typography>
              </Button>

              <Button
                color="inherit"
                sx={{
                  ml: 2,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                {/* <Typography><Link href="#">Login</Link></Typography> */}
                <Typography color='black'>Login</Typography>
              </Button>
            </Box>

            {/* Component Mobile */}
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>


              <Box
                component="form"
                sx={{

                  display: "flex",
                  alignItems: "center",
                  width: '24ch',
                  border: "1px solid #ccc",
                  borderRadius: 50,
                  mr: '-1rem'
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Products....."
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                ></IconButton>
              </Box>



            </Box>



            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton
                size="large"
                edge="end"
                color="black"
                aria-label="open drawer"
                onClick={handleMobileMenuOpen}
                sx={{ ml: 2 }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>


          </Toolbar>
          {/* New Container for Next line Menus */}


          <Toolbar className='SecondNav' sx={{
            bgcolor: "#32d1b4;",
            borderRadius: "4rem",
            marginBottom: "0.5rem"
          }}
          >

            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Typography
                component="a"
                href="https://play.google.com/store/apps/details?id=com.geecomindia&hl=en"
                variant="h6"
                noWrap

              >
                <img
                  src="/btn-play.png"
                  alt="Logo"
                  style={{
                    width: "140px",
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: '90%',
                  }}
                />
              </Typography>

              <Button
                color="inherit"
                sx={{
                  ml: 9,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}

                onClick={handleAgriInputMenuOpen}
              >
                <Typography >Agri input</Typography>
                <ArrowDropDownIcon></ArrowDropDownIcon>
              </Button>
              <Menu

                anchorEl={agriInputMenuOpen}
                open={Boolean(agriInputMenuOpen)}
                onClose={handleAgriInputMenuClose}
              >
                <MenuItem >Search - Supply (Sell)</MenuItem>

                <MenuItem >Search - Demand(Buy)</MenuItem>

              </Menu>



              <Button
                color="inherit"
                sx={{
                  ml: 9,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}

                onClick={handleAgriOutputMenuOpen}
              >
                <Typography >Agri Output</Typography>
                <ArrowDropDownIcon></ArrowDropDownIcon>
              </Button>
              <Menu
                anchorEl={agriOutputMenuOpen}
                open={Boolean(agriOutputMenuOpen)}
                onClose={handleAgriOutputMenuClose}
              >
                <MenuItem >
                  Supply(Sell) - Search
                </MenuItem>
                <MenuItem >
                  Demand(Buy) - Search
                </MenuItem>
                <MenuItem onClick={handleAgriOutputMenuClose}>
                  Packet - Search
                </MenuItem>
                {/* Add more menu items as needed */}
              </Menu>








              <Button
                color="inherit"
                sx={{
                  ml: 9,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                <Typography >Sell</Typography>

              </Button>

              <Button
                color="inherit"
                sx={{
                  ml: 9,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                <Typography >Buy</Typography>
              </Button>

              <Button
                color="inherit"
                sx={{
                  ml: 9,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                <Typography >Bidding</Typography>
              </Button>

              <Button
                color="inherit"
                sx={{
                  ml: 9,
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: "underline"
                  }
                }}
              >
                <Typography >Products</Typography>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>



      {/* Mobile Menu */}
      <Menu sx={{ mt: 7 }}

        anchorEl={null}
        anchorOrigin={{

          vertical: 'top',
          horizontal: 'left',
        }}
        id="mobile-menu"
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem >
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%', }}
          >
            <Typography >About</Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >English</Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Login</Typography>
          </Button>
        </MenuItem>
        <MenuItem >
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
            onClick={handleAgriInputMenuOpen}
          >
            <Typography >Agri input</Typography>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Button>


          <Menu
            anchorEl={agriInputMenuOpen}
            open={Boolean(agriInputMenuOpen)}
            onClose={handleAgriInputMenuClose}
          >
            <MenuItem >Search - Supply (Sell)</MenuItem>
            <MenuItem >Search - Demand(Buy)</MenuItem>
          </Menu>



        </MenuItem>
        <MenuItem >
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
            onClick={handleAgriOutputMenuOpen}
          >
            <Typography >Agri Output</Typography>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Button>

          <Menu
            anchorEl={agriOutputMenuOpen}
            open={Boolean(agriOutputMenuOpen)}
            onClose={handleAgriOutputMenuClose}
          >
            <MenuItem >
              Supply(Sell) - Search
            </MenuItem>
            <MenuItem >
              Demand(Buy) - Search
            </MenuItem>
            <MenuItem onClick={handleAgriOutputMenuClose}>
              Packet - Search
            </MenuItem>
            {/* Add more menu items as needed */}
          </Menu>



        </MenuItem>
        <MenuItem >
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Sell</Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Buy</Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Bidding</Typography>
          </Button>
        </MenuItem>

        <MenuItem onClick={handleMobileMenuClose}>
          <Button
            color="inherit"
            sx={{ textTransform: 'none', width: '90%' }}
          >
            <Typography >Products</Typography>
          </Button>
        </MenuItem>

      </Menu>
    </Box >
  );
}
