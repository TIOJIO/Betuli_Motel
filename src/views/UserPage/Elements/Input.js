import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import { Typography,Grid,Container,Paper, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  main: {
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    height:'auto',
    marginRight:'100px'
  },
  grow: {
    flexGrow: 1,
    backgroundColor:'rgba(233, 232, 232, 0.829)',
    borderRadius:'15px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
    <div className={classes.grow}>
      
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon  style={{color:'green'}}/>
            </div>
            <InputBase
              placeholder="Search here…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div> 
    </div>

    &nbsp;&nbsp;&nbsp;

            

    </div>
  );
}



