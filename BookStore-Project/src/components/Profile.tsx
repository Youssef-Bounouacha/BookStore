import React,{useState} from 'react'
import {Grid,Paper,Avatar,Typography,TextField,Button,Link} from '@mui/material';




function Profile() {
    const paperStyle= {padding :50,height :'auto',width :500, margin:'200px auto'}
    const avatarstyle={backgroundColor:"royalblue"}
    const btnstyle={margin:'8px 0'}
    const [selects,setSelects]=useState();

  return (
    <Grid>
            <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                     <Avatar style={avatarstyle}> 
                     </Avatar>
                     <h2>Edit Profile</h2>  
                     <Typography variant="caption">Please fill this to edit your account !</Typography>
               </Grid>
               <TextField style={{margin:'3px 0'}} label='UserName' placeholder="Edit username" fullWidth required/>
               <TextField style={{margin:'3px 0'}} label='Age' placeholder="Edit Age" fullWidth required/>
               
               <p>Area of Intrest</p>
                    <select value={selects} onChange={e=>setSelects(e.target.value)}>
                    <option></option>
                    <option>Adventure</option>
                    <option>Comic</option>
                    <option>Fantasy</option>
                    </select>
                   <Link href="/Books">
                 <Button type='submit'color='primary' variant="contained" style={btnstyle} fullWidth>Confirm</Button>    
                </Link>
            </Paper>
        </Grid>
    )
}

export default Profile