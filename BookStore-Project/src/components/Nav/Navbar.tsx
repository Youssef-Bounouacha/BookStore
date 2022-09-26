import React,{useState} from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab,Button,useMediaQuery,useTheme,Link,Menu,MenuItem,IconButton,} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DrawerComp from './DrawerComp';


const PAGES = ["Home","Books","About Us"]
const Navbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);};
  const handleClose = () => {
    setAnchorEl(null);};

  return (
    <React.Fragment>
        <AppBar style={{background:'navy'}}>
            <Toolbar>
                <AutoStoriesIcon/>
                <>
                         <Typography>
                            BookStore
                        </Typography>  
                </>
                {
                    isMatch ? (
                        <>
                        <DrawerComp/>
                        </>
                    ) : (
                        <>
                        <Tabs textColor="inherit" 
                             value={value} 
                             onChange={(link,value)=> setValue(value)} 
                            indicatorColor="secondary">

                            <Link href="/">
                            <Tab  style={{color:'white'}} label='Home'/>
                            </Link>
                            <Link href="/Books">
                            <Tab style={{color:'white'}} label='Books'/>
                            </Link>
                            <Link href="/Aboutus">
                            <Tab style={{color:'white'}} label='About Us'/>
                            </Link>

                        </Tabs>
                        <div>
                        <IconButton
                           
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >  
                        <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            style={{marginRight:'0 auto'}}
                        >
                            <Link href="/Profile">
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            </Link>
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                        </div>
                        </>

                      
                    )
                }
              
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar