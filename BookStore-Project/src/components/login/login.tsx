import React from "react";
import {Grid,Paper,Avatar,TextField, Button,Typography,Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FromControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const login=()=>{
    const paperStyle={padding :20,height :'30vh',width :280, margin:'200px auto'}
    const avatarstyle={backgroundColor:'royalblue'}
    const btnstyle={margin:'8px 0'}
    
    return(
        <>
        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarstyle}><LockOutlinedIcon/>
                     </Avatar>
                             <h2>Log In </h2> 
               </Grid>
              <TextField style={{margin:'3px 0'}} label='UserName' placeholder="Enter username" fullWidth required/>
              <TextField style={{margin:'3px 0'}} label='PassWord' placeholder="Enter password" type='password'  fullWidth required/> 
                <FromControlLabel
                control={
                    <Checkbox
                    name="checkd8"
                    color="primary"
                    />
                }
                label="Remember me"
                />
                <Button type='submit'color='primary' variant="contained" style={btnstyle} fullWidth> Sign In</Button>
                <Typography>Do you have an account ?
                    <Link href="/signup">
                        Sing up 
                    </Link>
                </Typography>
            
            </Paper>
        </Grid>
        </>
    )
}
export default login;