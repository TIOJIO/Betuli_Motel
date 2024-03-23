import React , {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import { Box } from '@material-ui/core';
import Badge from '@mui/material/Badge';
import SendIcon from '@mui/icons-material/Send';
import { Container, Grid, Paper, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';



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


  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage={
        id: messages.length, 
        text: message, 
        sender: 'Me'
      }

      const newMessages={
        id: messages.length, 
        text: 'mercie de nous avoir contactez . veillez laisser votre message', 
        sender: 'User'
      }

      setMessages([...messages, newMessage, newMessages]);
      setMessage('');
    }
  };


  const handleInputChange = (event) => {
    setMessage(event.target.value);
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
         <List>
              {messages.map(msg => (
                <ListItem key={msg.id}>
                  <ListItemText 
                    primary={msg.sender}
                    secondary={msg.text}
                    primaryTypographyProps={{ variant: 'subtitle2' }}
                    secondaryTypographyProps={{ variant: 'body1' }}
                    align={msg.sender === 'Me' ? 'right' : 'left'}
                  />
                </ListItem>
              ))}
            </List>

                 
          </div>
      <Box style={{width:'100%',flexWrap:'wrap',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        
        <input
          label="Message"
          placeholder='votre message...'
          value={message}
          onChange={handleInputChange}
          style={{width:'80%',borderRadius:'20px',height:'33px'}}
        />

        <SendIcon onClick={sendMessage} style={{height:'50px',fontSize:'30px'}} />
      
      </Box>
    </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}


