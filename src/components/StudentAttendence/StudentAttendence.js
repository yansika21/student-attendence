import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './StudentAttendence.css'
import { DesktopTimePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';

const StudentAttendence= () => {

  const [checkInValue, setCheckInValue] = useState(null);
  const [checkOutValue, setCheckOutValue] = useState(null);
  const [inputName , setName] = useState("")
  const [inputRoll , setRoll] = useState("")


  
  const [data , setData] = useState([])
 
  const onSubmit =(e)=>{
    e.preventDefault()
   
    const time = {
      hours : checkInValue.$H,
      minutes: checkInValue.$m
    }
    const time2 = {
      hours : checkOutValue.$H,
      minutes: checkOutValue.$m
    }
    const newEntry = {
      name: inputName , 
      roll: inputRoll , 
      checkIn : time.hours+":"+time.minutes , 
      checkOut: time2.hours + ":" + time2.minutes
    }
    setData([...data , newEntry]);
    console.log(newEntry);
      
  }
  

  return (
        <div>
          <table style={{width:'100%', marginLeft:'auto' , marginRight:'auto'}}>
            <tr>
              <th style={{paddingRight:'50px', width:'40%' , paddingLeft:'20px'}}>
              <div>
       <h1>Student Present: {data.length} </h1>
             <table className="table table-hover table-dark">
   <thead>
     <tr>
       <th scope="col">No.</th>
       <th scope="col">Student Name</th>
       <th scope="col">Roll Num</th>
       <th scope="col">Check-In</th>
       <th scope="col">Check-Out</th>
     </tr>
   </thead>
   <tbody>
    {
      data.map((item , index) =>{
        return(
          <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.roll}</td>
            <td>{item.checkIn}</td>
            <td>{item.checkOut}</td>
          </tr>
        )
      })
    }
      
   </tbody>
 </table>
     </div>

              </th>
              <th style={{ width:'20%' , paddingRight:'30px'}}>
              <div  style={{marginTop:'80px' , marginRight:'20px'  }}>
          <form className='attendForm' style={{background:'#282626', padding:'20px' , color:'white'}} onSubmit={onSubmit}>          
              <label className='labels'>Student Name</label>
              <br></br>
              <input 
              type='text'
              style={{marginBottom:'10px'}}
              value={inputName}
              onChange={(e) =>setName(e.target.value)}
              required
              />
              <br></br>
              <label className='labels'>Roll Number</label>
              <br></br>
              <input 
              type='text'
              style={{marginBottom:'10px'}}
              value={inputRoll}
              onChange={(e)=> setRoll(e.target.value)}
              required/>
              <br></br>
              <label className='labels'>Check-In Time</label>
              <br></br>
              <div className='timePicker' style={{marginBottom:'10px'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopTimePicker
                value={checkInValue}
                onChange={(newValue) => {
                  setCheckInValue(newValue);
                }}
                
                renderInput={(params) => <TextField {...params} required/>}
              />
            </LocalizationProvider>
              </div>
              <label className='labels'>Check-Out Time</label>
              <br></br>
              <div className='timePicker' style={{marginBottom:'30px'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopTimePicker
                
                value={checkOutValue}
                onChange={(newValue) => {
                  setCheckOutValue(newValue);
                }}
                renderInput={(params) =><TextField {...params} required/>}
              />
            </LocalizationProvider>
              </div>
              <div className='text-center'>
              <input type="submit" 
              value="PRESENT"
              style={{width:'40%'}} 
              className="btn btn-danger text-center"></input>
                </div>    
          </form>
              </div>
          
              </th>
            </tr>
          </table>
                
        </div>
    )
  }

export default StudentAttendence