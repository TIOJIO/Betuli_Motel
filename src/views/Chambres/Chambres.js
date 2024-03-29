import React , {useState,useEffect, Fragment} from 'react';
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
import Favorite from '@mui/icons-material/Favorite'
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import {Avatar ,Grid } from '@material-ui/core';
import TrapFocus from '@mui/base/TrapFocus';
import {nanoid} from  'nanoid';
import Rating from '@mui/material/Rating';
import EditData from './EditData';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddData from './AddData';
import Deroul from './Deroul';
import Header from  './Header/Header';
import {useHistory} from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import "jspdf-autotable";
import Slide from "@mui/material/Slide";
import Load from '../../assets/img/loading2.gif'
import jsPDF from "jspdf";
import './style.css';
import defautlImage from '../../assets/img/defaultImage.png'
import data from '../../Data/ChambreData'
import ChambreInfo from './ChambreInfo/ChambreInfo'
import { collection,getStorage,uploadBytesResumable , addDoc ,setDoc, doc, query, orderBy, onSnapshot, QuerySnapshot, deleteDoc} from 'firebase/firestore';
import { getDownloadURL, listAll, ref,uploadBytes } from "firebase/storage";
import { db } from '../../Firebase/Config';
import { Upload } from '../../Firebase/Upload';
import { v4 } from 'uuid';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 const App =()=>{

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openSnakBar, setOpenSnakBar] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);
  const [viewImage,setViewImage] = useState(defautlImage);

   const [contacts , setContacts] = useState([]);
   const [imageUrl , setImageUrl] = useState('');
   const [selectedData , setSelectedData] = useState([]);
   const [addFormData , setAddFormData] = useState({
    identifiant:'',
    name :'',
    img :defautlImage,
    prix :0,
    categorie :'',
    start :0,
    available:true,
    personn:0,
    description:'',
    createdBy:'Administrator',
    createdDate:''

   });

   const [editFormData , setEditFormData] = useState({
    identifiant:'',
    name :'',
    img :'',
    prix :0,
    categorie :'',
    start :0,
    available:true,
    personn:0,
    description:'',
    createdBy:'Administrator',
    createdDate:''
   });

   useEffect(()=>{
    handleGetChambre();
    //handleGetImage()
   },[])

  /* const handleGetImage = () =>{
     listAll(ref(Upload,"images/chambres")).then(imgs=>{
       imgs.items.forEach(val=>{
         getDownloadURL(val).then(url=>{
            setImageUrl(data=>[...data,url])
         })
       })
     })
   }
*/

   const handleGetChambre = () =>{

    const storedData = JSON.parse(localStorage.getItem('chambres')) || [];
    if (storedData.length===0) {
       console.log('pas de donne')
    } else {
       setContacts(storedData);
       console.log('donner trouver')
    }

    const collectionRef = collection(db,'Chanbres');
    const q= query(collectionRef);
    const unsuscribe = onSnapshot(q, querySnapshot =>{
            const items =  querySnapshot.docs.map(doc  =>({
                name :doc.data().name,
                img :doc.data().img,
                prix :doc.data().prix,
                categorie :doc.data().categorie,
                start :doc.data().start,
                available:doc.data().available,
                personn:doc.data().personn,
                description:doc.data().description,
                createdBy:doc.data().createdBy,
                createdDate:doc.data().createdDate
               }))
                console.log(items);
                console.log(items.length);

                if(items.length === 0){
                  console.log("pas de nouvelle donné");
                }else{
                  localStorage.setItem("chambres", JSON.stringify(items));
                   //setContacts(items);
                }
                
                
 })     
     return ;
   }

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
          identifiant:contact.identifiant,
          name :contact.name,
          img :contact.img,
          prix :contact.prix,
          categorie :contact.categorie,
          start :contact.start,
          available:contact.available,
          personn:contact.personn,
          description:contact.description,
          createdBy:contact.createdBy,
          createdDate:contact.createdDate
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
          identifiant:editFormData.identifiant,
          name :editFormData.name,
          img :editFormData.img,
          prix :editFormData.prix,
          categorie :editFormData.categorie,
          start :editFormData.start,
          available:editFormData.available,
          personn:editFormData.personn,
          description:editFormData.description,
          createdBy:editFormData.createdBy,
          createdDate:editFormData.createdDate
  
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
       
       
        
       const newFormData ={...addFormData};
       newFormData[fieldName]= fieldValue;
        
       setAddFormData(newFormData);

       console.log(newFormData);

   }

// submit new data
   
   const handleAddFormSubmits = async (event) => {
        event.preventDefault();
        setOpenLoading(true);
       try {
          
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, "0");
        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
        let currentHeure = date.getHours();
        let currentMinute = date.getMinutes();
        let currentYear = date.getFullYear();
        let currentDate = `${currentDay}-${currentMonth}-${currentYear} ${currentHeure}:${currentMinute}`;

          const imgref = ref(Upload,`images/chambres/${v4()}`);
          await uploadBytes(imgref,addFormData.img); 
           const snapshoturl =  await getDownloadURL(imgref);
          // setImageUrl(snapshoturl);
          console.log('upload success');

          const id=Date.now().toString();
          
          setDoc(doc(db, "Chanbres", id), {
          identifiant:id,
          name :addFormData.name,
          img :snapshoturl,
          prix :addFormData.prix,
          categorie :addFormData.categorie,
          start :0,
          available:true,
          personn:addFormData.personn,
          description:addFormData.description,
          createdBy:"Administrator",
          createdDate:currentDate
        }).then(()=>{
             console.log('succesful');
             handleGetChambre()
             setOpenLoading(false);
             setOpen(false);
             setView(true);
              
        }).catch((error)=>{
            console.log('erreur :'+error);
            setOpenLoading(false);
        });
          
        
        } catch (error) {
          console.log(error)
          setOpenLoading(false);
        }
            
   } 

   // manage password
 const handleClose =()=>{
  setOpenSnakBar(false)
 }
   
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
        let image =event.target.files[0];
        setAddFormData({
          img:image
      });

      setViewImage(URL.createObjectURL(image))
    }
  };

  
  const onImageChangeEdit= (event) => {
    if(event.target.files && event.target.files[0]){
        let img =event.target.files[0];
        setEditFormData({
          img: URL.createObjectURL(img)
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

   const handleDeleteClik = async (contact,handleCloseDelete) => {
    try {
      const docRef = doc(db, "Chanbres", contact.createdDate);
       await deleteDoc(docRef);
      console.log("Document deleted successfully");
       handleGetChambre();
       handleCloseDelete();
    } catch (error) {
      console.error("Error deleting document: ", error);
      handleCloseDelete();
      
    }
    
      /*const newContacts = [...contacts];
      const index = contacts.findIndex((contact)=> contact.id ===contactId);
     
       newContacts.splice(index,1);
       setContacts(newContacts);*/
      
   }


   const handleCloseLoading = () => {
    setOpenLoading(false);
  };

   // transition

   const [open, setOpen] = React.useState(false);
   const [edit, setEdit] = React.useState(false);
   const [view, setView] = React.useState(true);
   const [info, setInfo] = React.useState(false);

   const history=useHistory(); 
   const handleOpen = (event) => {
    
      setOpen(true);
      setView(false);
      //history.push('chambres/AddData/#NewTeachers');

   };
 
   const handleOpenChambreInfo = (items) => {
     setSelectedData(items);
     console.log(items);
     setView(false);
     setInfo(true);
  };

  const handleCloseChambreInfo = (event) => {
    setView(true);
    setInfo(false);
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
            viewImage={viewImage}  
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            addFormData={addFormData}
              values={values}
            onImageChange={onImageChange}
              handleAddFormChange={handleAddFormChange}
              handleAddFormSubmits={handleAddFormSubmits}
             />
        

            <br />

            <Dialog
        open={openLoading}
        TransitionComponent={Transition}
        onClose={handleCloseLoading}
        maxWidth="xs"
        fullWidth="false"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent style={{ textAlign: "center" }}>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <img src={Load} width={80} height={50} />
            <p
              style={{
                marginTop: "10px",
                cursor: "move",
                color: "green",
                fontWeight: "bold",
              }}
            >
              Enregistremet en cour...
            </p>
          </span>
        </DialogContent>
            </Dialog>
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
               onImageChangeEdit={onImageChangeEdit}
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

      
  {info && (
        <TrapFocus edit>
          <Box tabIndex={-1}  style={{ width:'100%' }} >
             
          <br></br>

      
          <ChambreInfo
              selectedData={selectedData} 
              handleCloseChambreInfo={handleCloseChambreInfo}
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

          <span  onClick={ handleOpen }  
            style={{
              backgroundColor:'green',
              cursor:'pointer',
              marginTop:'-100px',
              textDecoration:'none',
              display:"flex",
              float:"right",
               width: 'auto',
               borderRadius:'20px'
            }}
           > 
            &nbsp;<Typography style={{padding:'10px',color:'white',fontWeight:'bold'}}>+Nouvelle Chambres </Typography>
         </span> 

         <br></br>
       
           
   
          <Box sx={{ width: '100%' }}>      
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer sx={{ width: 'auto' }}>
         
            <Table   aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'} > 
  
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
                               onDoubleClick={ (event) => handleOpenChambreInfo(contact)}
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
                                  <Avatar>  <img style={{width:'100px'}} src={contact.img}  /> </Avatar> 
                                 <p  style={{fontWeight:"bold",padding:'13px 0px 0px 15px'}}> Chambre {contact.name}</p>
                               </TableCell>
                               <TableCell  align="right" style={{width:'0px'}}>
                                     <p style={{padding:'0px 0px 0px -20px',fontWeight:'bold',color:'green'}}>{contact.categorie}</p> 
                               </TableCell>
                               <TableCell style={{width:'100px',padding:'15px 0px 0px 80px'}}>
                                  <p style={{height:'30px',textAlign:"center",width:'90px',borderRadius:'20px',backgroundColor:'green',color:'white'}}>
                                     <label style={{padding:'5px'}}>{contact.prix} xaf</label> 
                                 </p>
                               </TableCell>
                               <TableCell style={{fontWeight:"bold",width:'100px',padding:'0px 0px 0px 100px',display:'flex'}}>
                                    <Favorite style={{color:'yellow'}} /> 
                                   <p>{contact.start} </p>
                               </TableCell>
                               <TableCell style={{width:'200px',padding:'0px 0px 0px 150px'}}>{contact.createdBy}</TableCell>
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

        <Snackbar
          open={openSnakBar} 
          autoHideDuration={5000} 
          onClose={handleClose}
          key={'bottom' + 'right'}
        >
        <Alert
           onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Nouvelle Chambre créer avec succèss!
        </Alert>
      </Snackbar>

       

    </Box>

 </TrapFocus>
      )}


    </Box>


     )
}

export default App;