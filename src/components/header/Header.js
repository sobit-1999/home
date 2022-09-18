import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../img/logo.svg";
import "./header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImgCall from "../../img/Vector.svg";
import ImgCall2 from "../../img/call2.svg";
import ImgCall3 from "../../img/call3.svg";
import ImgTg from "../../img/tg.svg";

const pages = ["Гродно", "Каталог", "Услуги", "О нас", "Блог"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            marginX: "12%",
            color: "#000",
            display:'flex',
            justifyContent: 'center',
          }}
        >
          <img className="logo" alt="logo" src={Logo} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem
                  sx={{
                    color: "black",
                  }}
                  key={i}
                  onClick={handleCloseNavMenu}
                >
                  {i === 0 ? (
                    <>
                      <LocationOnIcon />
                      <Typography textAlign="center">{page}</Typography>
                    </>
                  ) : (
                    <Typography textAlign="center">{page}</Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              marginX: "3%",
            }}
          >
            {pages.map((page, i) => (
              <>
                {i === 0 ? (
                  <>
                    <LocationOnIcon
                      sx={{
                        color: "red",
                        marginRight: "-6px",
                        fontSize:'18px'
                      }}
                    />
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "red",
                        display: "flex",
                        fontSize: "11px",
                        alignItems: "center",
                        transition:'1s',
                        ":hover":{
                            transform:"scale(1.1)"
                        }
                      }}
                    >
                      {page}
                      <ExpandMoreIcon />
                    </Button>
                  </>
                ) : (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      fontSize: "11px",
                      color: "black",
                      display: "flex",
                      transition:'1s',
                      ":hover":{
                          transform:"scale(1.1)",
                      }
                    }}
                  >
                    {page}
                    <ExpandMoreIcon />
                  </Button>
                )}
              </>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img className="call" alt="img" src={ImgCall} />
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "550",
                marginLeft: "5px",
              }}
            >
              +375 (29) 596 76 76
            </Typography>
            <Box 
            sx={{
                marginX:5
            }}>
              <IconButton>
                <img alt="img" src={ImgCall2} />
              </IconButton>

              <IconButton
                sx={{
                  color: "black",
                  marginX: -1,
                }}
              >
                <img alt="tg" src={ImgTg} />
              </IconButton>

              <IconButton>
                <img alt="img" src={ImgCall3} />
              </IconButton>
            </Box>
          </Box>
          <Button
            sx={{
              background: "red",
              color: "white",
              padding: "7px 15px",
              fontSize: '12px',
              ":hover": {
                background: "red",
                color: "white",
              }
            }}
          >
            Консультация
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
