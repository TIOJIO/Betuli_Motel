import React ,{ useEffect, useState } from "react";
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
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DropdownOption from './StudentPayment/DropdownOption';
import im1 from './images/im1.png';
import im2 from './images/im2.jpg';
import im3 from './images/im3.jpg';
import im4 from './images/im4.jpg';
import im5 from './images/im5.jpg';
import im6 from './images/im6.png';
import signature from './images/signature.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import notran from './images/tran.gif'


const DATA = [
  {
    id:1,
    school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',
    school_email:'gsbexcellence12@gmail.com',
    school_phone:'698745478/678956574',
     firstnames:'tiojio junior romain',
     matricule:'#123',
     classroom:'SIL',
     statut: "not completed",
     etat: false,
     amount: 0,
     annual_pension:100000,
     inscription:20000,
     tranche1:40000,
     tranche2:40000,
     profil:im1,

},
  {
   id:2,
   school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',
   school_email:'gsbexcellence12@gmail.com',
   school_phone:'698745478/678956574',
   school_logo:'',
   firstnames:'karl junior jean',
   matricule:'#665',
   classroom:'CP',
   statut: "not completed",
   etat: false,
   amount: 0,
   annual_pension:200000,
   inscription:20000,
   tranche1:90000,
   tranche2:90000,
   profil:im2,
  },
  {
   id:3,
   school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',
   school_email:'gsbexcellence12@gmail.com',
   school_phone:'698745478/678956574',
   firstnames:'Brenda leclaires',
   date:  '12 Mai 2021',
   matricule:'#559',
   classroom:'CM2',
   statut: "not completed",
   etat: false,
   amount: 0,
   annual_pension:600000, 
   inscription:20000,
   tranche1:299000,
   tranche2:299000,
   profil:im3,

  },
  {
    id:4,
    school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',
    school_email:'gsbexcellence12@gmail.com',
    school_phone:'698745478/678956574',
    firstnames:'Paul Albert Jean',
    matricule:'#456',
    classroom:'SIL',
    statut: "not completed",
    etat: false,
    etat:  "not completed",
    amount: 0,
    annual_pension:100000,
    inscription:20000,
    tranche1:40000,
    tranche2:40000,
    profil:im4,

 },
 {
  id:5,
  school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',
  school_email:'gsbexcellence12@gmail.com',
  school_phone:'698745478/678956574',
  firstnames:'Ruth Lui labe',
  matricule:'#456',
  classroom:'CM2',
  statut: "not completed",
  etat: false,
  amount: 0,
  annual_pension:600000, 
   inscription:20000,
   tranche1:299000,
   tranche2:299000,
  profil:im5,

},
{
  id:6,
  school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',
  school_email:'gsbexcellence12@gmail.com',
  school_phone:'698745478/678956574',
  firstnames:'Jacque raba',
  matricule:'#456',
  classroom:'CE1',
  statut: "not completed",
  etat: false,
  amount: 0,
  annual_pension:300000,
  inscription:20000,
  tranche1:140000,
  tranche2:140000,
  profil:im6,
},

 
];






//start table 
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
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'calories';
const DEFAULT_ROWS_PER_PAGE = 5;





// start function 

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (newOrderBy) => (event) => {
      onRequestSort(event, newOrderBy);
    };



  return (
    
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
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

function EnhancedTableToolbar(props) {
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
        >
          Nutrition
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
          <p>search</p>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [visibleRows, setVisibleRows] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
  const [paddingHeight, setPaddingHeight] = React.useState(0);

  React.useEffect(() => {
    let rowsOnMount = stableSort(
      DATA,
      getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY),
    );

    rowsOnMount = rowsOnMount.slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
    );

    setVisibleRows(rowsOnMount);
  }, []);

  const handleRequestSort = React.useCallback(
    (event, newOrderBy) => {
      const isAsc = orderBy === newOrderBy && order === 'asc';
      const toggledOrder = isAsc ? 'desc' : 'asc';
      setOrder(toggledOrder);
      setOrderBy(newOrderBy);

      const sortedRows = stableSort(DATA, getComparator(toggledOrder, newOrderBy));
      const updatedRows = sortedRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      );

      setVisibleRows(updatedRows);
    },
    [order, orderBy, page, rowsPerPage],
  );

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = DATA.map((n) => n.name);
      setSelected(newSelected);
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

  const handleChangePage = React.useCallback(
    (event, newPage) => {
      setPage(newPage);

      const sortedRows = stableSort(DATA, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage,
      );

      setVisibleRows(updatedRows);

      // Avoid a layout jump when reaching the last page with empty rows.
      const numEmptyRows =
        newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - DATA.length) : 0;

      const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
      setPaddingHeight(newPaddingHeight);
    },
    [order, orderBy, dense, rowsPerPage],
  );

  const handleChangeRowsPerPage = React.useCallback(
    (event) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(updatedRowsPerPage);

      setPage(0);

      const sortedRows = stableSort(DATA, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        0 * updatedRowsPerPage,
        0 * updatedRowsPerPage + updatedRowsPerPage,
      );

      setVisibleRows(updatedRows);

      // There is no layout jump to handle on the first page.
      setPaddingHeight(0);
    },
    [order, orderBy],
  );

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const [studentTransition, setStudentTransition] = useState(JSON.parse(localStorage.getItem('studentTransitions')) || []);
  const [eleve , setEleve] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  const [filterValueStatut, setFilterValueStatut] = useState("all");
  const classroom = ["all", "SIL", "CP", "CE1","CE2","CM1","CM2"];
  const [countActivity, setCountActivity] = useState(studentTransition.length);





  
  const handleFilterChangeStatut = (event) => {
    setFilterValueStatut(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };


  const GetdataLocalstorage=()=>{
    const newstudentTransaction = JSON.parse(localStorage.getItem('studentTransitions'));
    if (newstudentTransaction==null) {
         //no data
    } else {
        setStudentTransition(newstudentTransaction);
        setCountActivity(newstudentTransaction.length);

    }
}
  
//storore data in to localstorage
 useEffect(() => {
  GetdataLocalstorage();
  const isDataAlreadyStored = localStorage.getItem("ELEVES");
  if (!isDataAlreadyStored) {
    localStorage.setItem("ELEVES", JSON.stringify(DATA));
    setEleve(JSON.parse(localStorage.getItem('ELEVES')))

  }else{
    setEleve(JSON.parse(localStorage.getItem('ELEVES')))
  }
}, 1);


const handleSelectedStudent =()=>{
}

 const filteredData =
 filterValue === "all" && filterValueStatut === "all" 
   ? eleve
   : eleve.filter((item) => 
          filterValue!="all" &&  filterValueStatut!="all"? item.classroom === filterValue && item.statut === filterValueStatut:
          filterValue!="all"? item.classroom === filterValue:  
          filterValueStatut!="all"? item.statut === filterValueStatut:''

   );

 


  return (
    <Box  sx={{ width: '100%' }}>
       <div style={{padding:'15px 0px 5px 5px'}}>
          <Typography  style={{color:'green',fontWeight:'bold'}}>Transaction</Typography>
          <label>current transfert</label>
      </div>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TextField
            style={{float:'right',width:'20%',padding:'20px 20px 0px 0px'}}
            select
            value={filterValue} onChange={handleFilterChange}
            color="success"
          >
            {classroom.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField> 
                          
        <TableContainer>
             <Box style={{marginLeft:'50px'}}>
                <Typography  variant="h5" gutterBottom> Classroom {filterValue} </Typography>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel  labelPlacement="bottom"  onChange={handleFilterChangeStatut} value="all" control={<Radio />} label={'All    ('+filteredData.length+')'} />
                        <FormControlLabel  labelPlacement="bottom"  onChange={handleFilterChangeStatut} value="completed" control={<Radio />} label="✅ Completed"    />
                        <FormControlLabel  labelPlacement="bottom"  onChange={handleFilterChangeStatut} value="not completed" control={<Radio />} label="❌ Not Completed" />
                    </RadioGroup>
                </FormControl>
             </Box>

          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
        
            <TableBody>
                {
                  countActivity>0 ?
                  filteredData
                    ? filteredData.map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;
                         if (row.etat==true) {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.name}
                              selected={isItemSelected}
                              
                            >
                              <TableCell padding="checkbox"  align="right">
                               <Avatar fontSize="small" src={row.profil}/>
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                                align="center"
                              >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6>{row.firstnames}</h6>
                              </TableCell>
                              <TableCell color="success" align="right">
                                 <Typography style={{color:'green'}}>{row.matricule}</Typography>
                              </TableCell>
                              <TableCell color="success" align="right"> 
                                 <Typography>{row.classroom}</Typography> 
                              </TableCell>
                              <TableCell align="right">
                                 {row.annual_pension==Number(row.amount)? (<label style={{color:'green'}}><CheckBoxIcon style={{color:'green'}}/>Completed</label>):(<label style={{color:'red'}}><CloseIcon/>not Completed</label>) }
                              </TableCell>
                              <TableCell align="right"><h6>{row.annual_pension}XAF</h6></TableCell>
                              <TableCell align="right">{row.annual_pension==Number(row.amount)? (<h6 style={{color:'green'}}>OK</h6>):(<h6 style={{color:'red'}}>{row.amount}xaf</h6>) }</TableCell>
                              <TableCell align="right"><DropdownOption handleSelectedStudent={handleSelectedStudent} row={row}/></TableCell>
                            </TableRow>
                          );
                         } else {
                            console.log('no transaction')
                         }
                        
                      })
                    : null :          
                        <span style={{marginLeft:'30%',textAlign:'center'}}>
                           <img style={{width:'350px',height:'250px'}} src={notran}/>
                           <p>no transaction</p>
                        </span>

                }
              {paddingHeight > 0 && (
                <TableRow
                  style={{
                    height: paddingHeight,
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
          count={DATA.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel id="studentPay" 
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}