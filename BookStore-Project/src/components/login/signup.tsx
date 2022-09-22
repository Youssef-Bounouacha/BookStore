import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Grid,Paper,Avatar,Typography,TextField,Button,Link} from '@mui/material';
import FromControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Signup=()=>{
    const paperStyle= {padding :20,height :'50vh',width :300, margin:'200px auto'}
    const avatarstyle={backgroundColor:"royalblue"}
    const checkboxStyle={margin:'8px 0' }
    const btnstyle={margin:'8px 0'}
    const fromlabelStyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                     <Avatar style={avatarstyle}> 
                     </Avatar>
                     <h2>Sign Up </h2>  
                     <Typography variant="caption">Please fill this to create an account !</Typography>
               </Grid>
               <TextField style={{margin:'3px 0'}} label='UserName' placeholder="Enter username" fullWidth required/>
               <TextField style={{margin:'3px 0'}} label='Email' placeholder="Enter Email" fullWidth required/>
               <FormControl>
                <FormLabel style={fromlabelStyle} id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{display:'initial'}}
                   
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                </FormControl>
               <TextField style={{margin:'3px 0'}} label='Phone Number'  fullWidth required/>
              <TextField style={{margin:'3px 0'}} label='PassWord' placeholder="Enter password" type='password'  fullWidth required/> 
              <TextField style={{margin:'3px 0'}} label='Confirm PassWord' type='password'  fullWidth required/> 
              <FromControlLabel
                control={
                    <Checkbox
                    name="checkd8"
                    color="primary"
                    style={checkboxStyle}
                    />
                }
                label="I accept the terms and conditions."
                />
                <Link href="/Books">
                 <Button type='submit'color='primary' variant="contained" style={btnstyle} fullWidth> Sign Up</Button>    
                </Link>
            </Paper>
        </Grid>
    )
}
export default Signup;