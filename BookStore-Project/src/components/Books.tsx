import React,{useState} from 'react'
import {Grid,Paper,Avatar,TextField, Button,Typography,Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DatePicker from 'react-datepicker'     
import 'react-datepicker/dist/react-datepicker.css'


function Books() {
  const paperStyle={padding :20,height :'auto',width :280, margin:'100px auto'};
  const avatarstyle={backgroundColor:'royalblue'};
  const btnstyle={margin:'8px 0'};
  const [SelecteDate,setSelecteDate]= useState(null);
  const [selects,setSelects]=useState();
  return (
    <div className='custumer'>
    <Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
             <Avatar>
             </Avatar>
                     <h2>Please Fill In</h2> 
       </Grid>
      <TextField style={{margin:'3px 0'}} label='UserName' placeholder="Enter username" fullWidth required/>
      <TextField style={{margin:'3px 0'}} label='Age' placeholder="Enter age" fullWidth required/> 
      <p>Date of birth</p>
       <DatePicker selected={SelecteDate} onChange={date=> setSelecteDate(date)} dateFormat="dd/MM/yyyy" maxDate={new Date()}/>
          <p>Area of Intrest</p>
        <select value={selects} onChange={e=>setSelects(e.target.value)}>
          <option></option>
          <option>Adventure</option>
          <option>Comic</option>
          <option>Fantasy</option>
        </select>
        <Button type='submit'color='primary' variant="contained" style={btnstyle} fullWidth>Comfirm</Button>
    </Paper>
</Grid>
<h1>{selects}</h1>
</div>
  )
}

export default Books