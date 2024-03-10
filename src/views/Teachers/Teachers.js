import React , {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import {Avatar } from '@material-ui/core';
import TrapFocus from '@mui/base/TrapFocus';
import {nanoid} from  'nanoid';
import EditData from './EditData';
import AlertEdit from './AlertEdit';
import AddData from './AddData';
import Deroul from './Deroul';
import Header from  './Header/Header';
import {useHistory} from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download'
import "jspdf-autotable";
import jsPDF from "jspdf";
import './style.css';

 const App =()=>{
   const data = [
     {
        'id':1,
        'firstnames':'tiojio junior  ',
        'lastname':'romain',
        'phone':  '6 95 91 31 08',
        'companycode':'123456',
        'Username':'tiojio',
        'profile':null,
        'password':'1234app',
        'professor':'SIL,CEP',
        'identifiant':'#2222023',
        'create':'Administrator',

     },
     {
      'id':2,
      'firstnames':'feujio paul  ',
      'lastname':'jean',
      'phone':  '6 99 91 31 08',
      'companycode':'123456',
      'Username':'tiojio',
      'profile':null,
      'password':'1234app',
      'professor':'CM2,CEP',
      'identifiant':'#2222023',
      'create':'Administrator',

   },
   {
    'id':3,
    'firstnames':'brenda brande  ',
    'lastname':'love',
    'phone':  '6 98 54 12 14',
    'companycode':'123456',
    'Username':'Grenda',
    'profile':null,
    'password':'1234app',
    'professor':'CE1,CE2',
    'identifiant':'#2222023',
    'create':'Administrator',

 },
    
   ];

   const [contacts , setContacts] = useState(data);
   const [addFormData , setAddFormData] = useState({
    firstnames: '' ,
    lastname: '' ,
    phone:  '',
    companycode:'',
    Username:'',
    profile:null,
    password:'',
    professor:'CM1,CE2',
    identifiant:'#2982023',
    create:'Administrator',


   });

   const [editFormData , setEditFormData] = useState({
    firstnames: '' ,
    lastname: '' ,
    phone:  '',
    companycode:'',
    Username:'',
    profile:null,
    password:'',
    professor:'CM1,CE2',
    identifiant:'#2982023',
    create:'Administrator',

   });

   // Export data to PDF

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Liste Enseignant";
    const headers = [["Name", "UserName", "Professor of", "Identifiant","Created BY"]];

    const data = contacts.map(contact=> [contact.firstnames, contact.lastname, contact.professor, contact.identifiant, contact.create]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("ListeEnseignant.pdf")
  }
   

   // edit data
    
    const[editContactId , setEditContactId] = useState(null);

    const handleEditClick=(event , contact) => {
        event.preventDefault();
        setView(false);
        setEdit(true);
        setEditContactId(contact.id);
        

        const formValues = { 

          firstnames: contact.firstnames ,
          lastname: contact.lastname ,
          phone: contact.phone,
          companycode:contact.companycode,
          Username:contact.Username,
          profile:contact.profile,
          password:contact.password,
          professor:'CM1,CE2',
          identifiant:'#2982023',
          create:'Administrator',

        }
        setEditFormData(formValues);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName= event.target.getAttribute('id');
        const fieldValue = event.target.value;
        
        const newFormData ={...editFormData};
        newFormData[fieldName]= fieldValue;
         
        setEditFormData(newFormData);
        
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editContact = {
            id: editContactId,
            firstnames: editFormData.firstnames,
            lastname: editFormData.lastname ,
            phone: editFormData.phone,
            companycode:editFormData.companycode,
            Username:editFormData.Username,
            profile:editFormData.profile,
            password:editFormData.password,
            professor:'CM1,CE2',
            identifiant:'#2982023',
            create:'Administrator',
  
        }

        const newContacts = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id ===editContactId);
       
         newContacts[index] = editContact;
         setContacts(newContacts);
         setEditContactId(null);
         setEdit(false);
         setView(true)
    }

   // onchange data

   const handleAddFormChange = (event) => {
       event.preventDefault();
       const fieldName= event.target.getAttribute('id');
       const fieldValue = event.target.value;
       
       if(event.target.files && event.target.files[0]){
        let img =event.target.files[0];
        setAddFormData({
          profile: URL.createObjectURL(img)
      });
    }
        
       const newFormData ={...addFormData};
       newFormData[fieldName]= fieldValue;
        
       setAddFormData(newFormData);

   }

// submit new data
   
   const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact={
        id:nanoid(),
        firstnames: addFormData.firstnames,
        lastname: addFormData.lastname ,
        phone: addFormData.phone,
        companycode:addFormData.companycode,
        Username:addFormData.Username,
        profile:addFormData.profile,
        password:addFormData.password,
        professor:'CM1,CE2',
        identifiant:'#2982023',
        create:'Administrator',

      
    };


    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    
    history.push('teachers/Header/Header/#aff');
    setOpen(false);
    setView(true);
    
    console.log(newContacts);
    console.log(values);
    

   } 

   // manage password

   
const [values, setValues] = React.useState({
  password: '',
  showPassword: false,
});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });

};

const handleClickShowPassword = () => {
  setValues({
    ...values,
    showPassword: !values.showPassword,
  });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

   // function add image

   const onImageChange= (event) => {
    if(event.target.files && event.target.files[0]){
        let img =event.target.files[0];
        setAddFormData({
          profile: URL.createObjectURL(img)
      });
    }
  };
    
   // cancel edit data
   const handleCancelClik = () => {
      setEditContactId(null);
      setEdit(false);
      setView(true);
   }

   //delete date

   const handleDeleteClik = (contactId) => {
      const newContacts = [...contacts];
      const index = contacts.findIndex((contact)=> contact.id ===contactId);
     
       newContacts.splice(index,1);
       setContacts(newContacts);
   }

   // transition

   const [open, setOpen] = React.useState(false);
   const [edit, setEdit] = React.useState(false);
   const [view, setView] = React.useState(true);

   const history=useHistory(); 
   const handleOpen = (event) => {
    
      setOpen(true);
      setView(false);
      history.push('teachers/AddData/#NewTeachers');

   };
 
   const handleClose = (event) => {
     setOpen(false);
     setView(true);
  };


  
// start table


  
  function descendingComparator(a, b, orderBy) {
   if (b[orderBy] < a[orderBy]) {
     return -1;
   }
   if (b[orderBy] > a[orderBy]) {
     return 1;
   }
   return 0;

 }
 
 function getComparator(order, orderBy) {
   return order === 'desc'
     ? (a, b) => descendingComparator(a, b, orderBy)
     : (a, b) => -descendingComparator(a, b, orderBy);
 }
 
 // This method is created for cross-browser compatibility, if you don't
 // need to support IE11, you can use Array.prototype.sort() directly
 function stableSort(array, comparator) {
   const stabilizedThis = array.map((el, index) => [el, index]);
   stabilizedThis.sort((a, b) => {
     const order = comparator(a[0], b[0]);
     if (order !== 0) {
       return order;
     }
     return a[1] - b[1];
   });
   return stabilizedThis.map((el) => el[0]);
 }
 
 const headCells = [
   {
     id: 'name',
     numeric: false,
     disablePadding: true,
     label: 'Name',
   },
   {
     id: 'userName',
     numeric: true,
     disablePadding: false,
     label: 'UserName',
   },
   {
     id: 'Classroom',
     numeric: true,
     disablePadding: false,
     label: 'ProfessorOf',
   },
   {
     id: 'id',
     numeric: true,
     disablePadding: false,
     label: 'ID',
   },
   {
     id: 'Created',
     numeric: true,
     disablePadding: false,
     label: 'Created By',
   },
   
  {
    id: 'Action',
    numeric: true,
    disablePadding: false,
    label: '',
  },
  
 ];
 
 function EnhancedTableHead(props) {
   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
     props;
   const createSortHandler = (property) => (event) => {
     onRequestSort(event, property);
   };
 
   return (
     <TableHead>
       <TableRow >
         <TableCell padding="checkbox">
           <Checkbox
             color="success"
             indeterminate={numSelected > 0 && numSelected < rowCount}
             checked={rowCount > 0 && numSelected === rowCount}
             onChange={onSelectAllClick}
             inputProps={{
               'aria-label': 'select all desserts',
             }}
           />
         </TableCell>
         {headCells.map((headCell) => (
           <TableCell
           style={{  fontWeight:"bold", color:'black'}}
             key={headCell.id}
             align={headCell.numeric ? 'right' : 'left'}
             padding={headCell.disablePadding ? 'none' : 'normal'}
             sortDirection={orderBy === headCell.id ? order : false}
           >
             <TableSortLabel
               active={orderBy === headCell.id}
               direction={orderBy === headCell.id ? order : 'asc'}
               onClick={createSortHandler(headCell.id)}
             >
               {headCell.label}
               {orderBy === headCell.id ? (
                 <Box component="span" sx={visuallyHidden}>
                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                 </Box>
               ) : null}
             </TableSortLabel>
           </TableCell>
         ))}
       </TableRow>
     </TableHead>
   );
 }
 
 EnhancedTableHead.propTypes = {
   numSelected: PropTypes.number.isRequired,
   onRequestSort: PropTypes.func.isRequired,
   onSelectAllClick: PropTypes.func.isRequired,
   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
   orderBy: PropTypes.string.isRequired,
   rowCount: PropTypes.number.isRequired,
 };
 
 const EnhancedTableToolbar = (props) => {
   const { numSelected } = props;
 
   return (
     <Toolbar
       sx={{
         pl: { sm: 2 },
         pr: { xs: 1, sm: 1 },
         ...(numSelected > 0 && {
           bgcolor: (theme) =>
             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
         }),
       }}
     >
       {numSelected > 0 ? (
         <Typography
           sx={{ flex: '1 1 100%' }}
           color="inherit"
           variant="subtitle1"
           component="div"
         >
           {numSelected} selected
         </Typography>
       ) : (
         <Typography
           sx={{ flex: '1 1 100%' }}
           variant="h6"
           id="tableTitle"
           component="div"
           onClick={exportPDF}
           style={{cursor:'pointer'}}
         >
           <DownloadIcon/>Download
         </Typography>
       )}
 
       {numSelected > 0 ? (
         <Tooltip title="Delete">
           <IconButton>
             <DeleteIcon />
           </IconButton>
         </Tooltip>
       ) : (
         <Tooltip title="Filter list">
           <IconButton>
             <FilterListIcon />
           </IconButton>
         </Tooltip>
       )}
     </Toolbar>
   );
 };
 
 EnhancedTableToolbar.propTypes = {
   numSelected: PropTypes.number.isRequired,
 };
 

 const [order, setOrder] = React.useState('asc');
 const [orderBy, setOrderBy] = React.useState('calories');
 const [selected, setSelected] = React.useState([]);
 const [page, setPage] = React.useState(0);
 const [dense, setDense] = React.useState(false);
 const [rowsPerPage, setRowsPerPage] = React.useState(5);

 const handleRequestSort = (event, property) => {
   const isAsc = orderBy === property && order === 'asc';
   setOrder(isAsc ? 'desc' : 'asc');
   setOrderBy(property);
 };

 const handleSelectAllClick = (event) => {
   if (event.target.checked) {
     const newSelecteds = contacts.map((n) => n.name);
     setSelected(newSelecteds);
     return;
   }
   setSelected([]);
 };

 const handleClick = (event, name) => {
   const selectedIndex = selected.indexOf(name);
   let newSelected = [];

   if (selectedIndex === -1) {
     newSelected = newSelected.concat(selected, name);
   } else if (selectedIndex === 0) {
     newSelected = newSelected.concat(selected.slice(1));
   } else if (selectedIndex === selected.length - 1) {
     newSelected = newSelected.concat(selected.slice(0, -1));
   } else if (selectedIndex > 0) {
     newSelected = newSelected.concat(
       selected.slice(0, selectedIndex),
       selected.slice(selectedIndex + 1),
     );
   }

   setSelected(newSelected);
 };

 const handleChangePage = (event, newPage) => {
   setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
   setRowsPerPage(parseInt(event.target.value, 10));
   setPage(0);
 };

 const handleChangeDense = (event) => {
   setDense(event.target.checked);
 };

 const isSelected = (name) => selected.indexOf(name) !== -1;

 // Avoid a layout jump when reaching the last page with empty contacts.
 const emptyRows =
   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - contacts.length) : 0;

     return(

      <Box>


      {open && (
        <TrapFocus open>
          <Box tabIndex={-1}  style={{ width:'100%' }} >
             
          <br></br><br></br>
          <br></br>
      
            <AddData  
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            addFormData={addFormData}
              values={values}
            onImageChange={onImageChange}
              handleAddFormChange={handleAddFormChange}
              handleAddFormSubmit={handleAddFormSubmit}
             />
          

         

            <br />
          </Box>
        </TrapFocus>
      )}



{edit && (
        <TrapFocus edit>
          <Box tabIndex={-1}  style={{ width:'100%' }} >
             
          <br></br><br></br>
          <br></br>
      
          <EditData 
               values={values}
               handleMouseDownPassword={handleMouseDownPassword}
               handleClickShowPassword={handleClickShowPassword}
               onImageChange={onImageChange}
               handleChange={handleChange}
               editFormData ={editFormData}
               addFormData={addFormData}
               handleEditFormChange={handleEditFormChange}
               handleCancelClik={handleCancelClik}
               handleEditFormSubmit={handleEditFormSubmit}
              />  
            <br />
          </Box>
        </TrapFocus>
      )}




    {view && (
         
        <TrapFocus  view>
          <Box tabIndex={-1} style={{ width:'100%' }} >
        

          <br></br>
          <br></br>
          <br></br>
          <Header/>
          <br></br><br></br>

          <span  onClick={ handleOpen }  className='back'> 
            &nbsp;<Typography className='new'>+ New client </Typography>
         </span> 

         <br></br>
       <Box sx={{ width: '100%' }}>      
         <Paper sx={{ width: '100%', mb: 2 }}>
           <EnhancedTableToolbar numSelected={selected.length} />
             <TableContainer sx={{ width: 'auto' }}>
        
           <Table   aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'} > 
           <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={contacts.length}
            />
                   <TableBody>
                   {stableSort(contacts, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((contact, index) => {
                  const isItemSelected = isSelected(contact.firstnames);
                  const labelId = `enhanced-table-checkbox-${index}`;
                      return(
                        <Fragment>
                             { editContactId === contact.id ? (
                                  <EditData 
                                  editFormData ={editFormData}
                                  addFormData={addFormData}
                                  handleEditFormChange={handleEditFormChange}
                                  handleCancelClik={handleCancelClik}
                                  handleEditFormSubmit={handleEditFormSubmit}
                              />  
                                
                             ):(
                              
                              <TableRow
                              hover
                              onClick={(event) => handleClick(event, contact.firstnames)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={contact.firstnames}
                              selected={isItemSelected}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="success"
                                  checked={isItemSelected}
                                  inputProps={{
                                    'aria-labelledby': labelId,
                                  }}
                                />
                              </TableCell>
                           
                              <TableCell
                                 style={{width:'auto',textAlign:"center",display:'flex',padding:'15px 0px 20px 10px'}}
                                component="th"
                                id={labelId}
                                scope="contact"
                                padding="none"
                              >
                                 <Avatar>  <img style={{width:'100px'}} src={contact.profile}  /> </Avatar> 
                                <p  style={{fontWeight:"bold",padding:'13px 0px 0px 15px'}}>{contact.firstnames}</p>
                              </TableCell>
                              <TableCell  align="right" style={{width:'0px'}}>
                                    <p style={{padding:'0px 0px 0px -20px'}}>{contact.lastname}</p> 
                              </TableCell>
                              <TableCell style={{width:'100px',padding:'15px 0px 0px 80px'}}>
                                 <p style={{height:'30px',padding:'5px 5px 0px 5px',textAlign:"center",width:'auto',borderRadius:'20px',backgroundColor:'green',color:'white'}}> {contact.professor} </p>
                              </TableCell>
                              <TableCell style={{fontWeight:"bold",color:'green',width:'100px',padding:'0px 0px 0px 100px'}}>{contact.identifiant}</TableCell>
                              <TableCell style={{width:'200px',padding:'0px 0px 0px 150px'}}>{contact.create}</TableCell>
                              <TableCell align="right">
                              <Deroul
                       contact={contact}
                       handleEditClick={handleEditClick}
                       handleDeleteClik={handleDeleteClik}
                       handleEditFormSubmit={handleEditFormSubmit}
                       editFormData ={editFormData}
                       handleEditFormChange={handleEditFormChange}
                       handleCancelClik={handleCancelClik}
                    />
                              </TableCell>
                            </TableRow>
                             ) 
                           }
                                             
                        </Fragment>
                        )
                    }
                    )
                  }

             {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
                    </TableBody>
                   </Table>  
      
            </TableContainer>
            <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
         </Paper>
     </Box>
    </Box>
 </TrapFocus>
      )}


    </Box>


     )
}

export default App;