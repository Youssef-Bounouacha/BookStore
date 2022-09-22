import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {AppBar,Toolbar,Typography,Tabs,Tab,Button,useMediaQuery,useTheme,Link} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import DrawerComp from './DrawerComp';

const PAGES = ["Home","Books","About Us"]
const Navbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
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
                        <Link href="/login" style={{marginLeft:'auto'}} >
                        <Button style={{marginLeft:'auto',background:'navy',color:'white'}} variant="contained">Login</Button>
                        </Link>
                       
                        </>
                    )
                }
              
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar