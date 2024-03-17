import React , {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import { Box } from '@material-ui/core';
import {  TextField  } from '@mui/material';
import Badge from '@mui/material/Badge';
import SendIcon from '@mui/icons-material/Send';


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {

  
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      'id':1,
      'user':'client',
      'message':"j'ai besoin de votre localisation",
      'date':'12-30-2024 12:25'
    },
    {
      'id':2,
      'user':'hotel',
      'message':" Nous sommes situer a PK12",
      'date':'12-30-2024 12:23'
    },
  ]);


  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message) {
      const newMessage={
        'id':2,
        'user':'hotel',
        'message':message,
        'date':'12-30-2024 12:23'
      }
      setChatHistory([...chatHistory, newMessage]);
      setMessage('');
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Box sx={{ position: 'fixed', bottom: 16, right: 16 ,zIndex:1}}>
       <Fab color="primary" style={{borderRadius:'100%',backgroundColor:'white'}} aria-label="add" onClick={handleClickOpen}>
                <Badge badgeContent={2} color="success">
                    <ChatIcon />
                </Badge>
            </Fab>
            </Box>

  
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        maxWidth="sm"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          .............Boite de Messagerie...................
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '300px' }}>

         <div  style={{width:'100%',alignItems:'flex-end',marginTop:8}}>
         {chatHistory.map((msg, index) => (
              msg.user=="client"?
              <div style={{backgroundColor:'grey',marginTop:5,height:'auto',width:'80%',borderRadius:10,marginRight:5}}>
                  <div style={{paddingTop:10,fontWeight:'bold',paddingBottom:10,marginLeft:10}}>{msg.message}</div>
              </div>:
              <div style={{backgroundColor:'grey',float:"right",marginTop:5,height:'auto',width:'200px',borderRadius:10,marginRight:5}}>
                     <div style={{paddingTop:10,fontWeight:'bold',paddingBottom:10,marginLeft:10}}>{msg.message}</div>
              </div>
          
        ))}
                 
          </div>
      <Box style={{width:'100%',flexWrap:'wrap',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        
        <input
          label="Message"
          placeholder='votre message...'
          value={message}
          onChange={handleInputChange}
          style={{width:'80%',borderRadius:'20px',height:'33px'}}
        />

        <SendIcon onClick={handleSendMessage} style={{height:'50px',fontSize:'30px'}} />
      
      </Box>
    </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}


