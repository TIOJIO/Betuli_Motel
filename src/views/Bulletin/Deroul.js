import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar} from '@material-ui/core';
import AlertDelete from './AlertDelete';
import AlertEdit from './AlertEdit';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({contact,handleDeleteClik,handleEditClick,handleEditFormChange,handleCancelClik,handleEditFormSubmit}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

      <div
       aria-controls="customized-menu"
       aria-haspopup="true"
       variant="contained"
       sx={{backgroundColor:'green'}}
       onClick={handleClick}
      >
        <MoreVertIcon />
      </div>
      
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem  onClick={(event) =>handleEditClick(event , contact) } style={{backgroundColor:'green'}}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
             Edit
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
              <AlertDelete contact={contact} handleDeleteClik={handleDeleteClik}/>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}


 //<button type='button' onClick={(event) =>handleEditClick(event , contact) }>Edit</button>
      //      &nbsp;
      //      <button type='button' onClick={() =>handleDeleteClik( contact.id) }>Delete</button>

           