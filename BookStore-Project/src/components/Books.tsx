import React,{useState} from 'react'
import {Grid,Paper,Avatar,TextField, Button,Typography,Link,} from '@mui/material';
import DatePicker from 'react-datepicker'     
import 'react-datepicker/dist/react-datepicker.css'


function Books() {
 
  const paperStyle={padding :20,height :'auto',width :280, margin:'100px auto'};
  const avatarstyle={backgroundColor:'royalblue'};
  const btnstyle={margin:'8px 0'};
  const [SelecteDate,setSelecteDate]= useState(null);
  const [selects,setSelects]=useState();
  const data= [{
    source: './img/witcher.jpg',
    category: 'cat1'
  } ,{
    source:'./img/spiderman.jpg',
    category:'cat2'
  },{
    source:'./img/run.jpg',
    category:'cat2'
  }]
  const [showData,setShowData]=useState<any>(data)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value=='cat1'){
      setShowData(
        data[0]
      )

    } else if(event.target.value=='cat2'){
      setShowData(
        data.slice(1)
      )

    }

  
  };
  return (
    <>
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
        <select value={selects} onChange={handleChange}>
          
          <option value='cat1'>cat1</option>
          <option value='cat2'>cat2</option>
          
        </select>
        <Button type='submit'color='primary' variant="contained" style={btnstyle} fullWidth>Comfirm</Button>
    </Paper>
  </Grid>
    <div>{selects}
    {showData.map((el: any) => (
       <img src={el.source} height={600} width={400} 
       key={el.category}
       />
    ))}
   
    </div>  
</div>
</>
  )
}

export default Books