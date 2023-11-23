import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Container } from "@mui/material";
const drawerWidth = 240;
const navItems = [
  "Home",
  "Gallery ",
  "Trainer ",
  "Classes",
  "Dashboard",
  "Community",
];
const Navber = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#A8BFD8" }}>
          <Toolbar sx={{ width: "90%", margin: "auto" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", color: "#020C18" },
              }}
            >
              Body Pulse
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#020C18", fontSize: "18px" }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Button variant="contained" sx={{
                
                display: { xs: "none", sm: "block", }, mr: 2,
              }}>
              Register
            </Button>
            <Button variant="contained" sx={{
                
                display: { xs: "none", sm: "block", }, mr: 2,
              }}>
              Log in
            </Button>
            <Button variant="contained" sx={{
                
                display: { xs: "none", sm: "block", }, mr: 2,
              }}>
              Log Out
            </Button>
            <Avatar sx={{
                
                display: { xs: "none", sm: "block", },
              }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            />
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
            <Button sx={{color: 'black'}}>
              Register
            </Button>
            <Button sx={{color: 'black'}} >
              Log in
            </Button>
            <Button sx={{color: 'black'}} >
              Log Out
            </Button>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            />
          </Drawer>
        </nav>
      </Box>
    </Container>
  );
};

export default Navber;
