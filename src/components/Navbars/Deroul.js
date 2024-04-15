import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Deconnection from './Deconnection';
import CardMedia from '@mui/material/CardMedia';


export default function AccountMenu({userSession}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div  style={{textAlign:'end',color:'black',display:'flex', flexDirection:'column'}}>
                        <Typography style={{fontWeight:'bold'}}> {userSession.username} </Typography>
                         <Typography color='textSecondary'> Connected </Typography> 
      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 50, height: 50 }}> <img src={userSession.profile} style={{width:'50px' ,height:'50px'}}/></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        style={{textAlign:'center'}}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <CardMedia
        sx={{ height: 100 ,width:345 }}
        image={userSession.profile}
        title="image profile"
      />
      <Avatar style={{ width: 70, height: 70,margin:'auto',marginTop:'-20px' }}> <img src={userSession.profile} style={{width:'100%' ,height:'100%'}}/></Avatar>

        <p style={{color:'black', fontWeight:'bold'}}>{userSession.username}</p>
        <p style={{color:'black', fontWeight:'bold'}}>{userSession.numero}</p>
        <p style={{color:'black', fontWeight:'bold'}}>{userSession.email}</p>
        

        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
    
        <Deconnection/>
        
      </Menu>
     
    </React.Fragment>
 
  );
}