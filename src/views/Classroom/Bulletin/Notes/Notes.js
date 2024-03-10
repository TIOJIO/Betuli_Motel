import React , {useState,useEffect, Fragment} from 'react';
import { Typography,Grid,Avatar,Divider } from '@material-ui/core';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SelectStudent from './SelectStudent'

const Notes =()=>{
    const [studentNote, setStudentNote] = useState([]);

    useEffect(() => {
        const newstudentsNote = JSON.parse(localStorage.getItem('studentNotes'));
        if (newstudentsNote==null) {
             console.log('no data')
        } else {
             //setHidden(false)
             setStudentNote(newstudentsNote);
   
        }
   
      });
   

    return(
        <div>

            {
                studentNote.map((item)=>(
                   <Grid>
                       <Typography style={{fontWeight:'bold'}}>Nom : {item.student_name}</Typography>
                       <Typography> Mathematique : {item.maths}</Typography>
                       <Typography>Geagraphie : {item.geographie}</Typography>
                       <Typography>Histoire : {item.histoire}</Typography>
                       <Typography> Science : {item.science}</Typography>
                       <Divider/>
                   </Grid>
                ))
            }
            <SelectStudent/>
        </div>
    )
}

export default Notes;