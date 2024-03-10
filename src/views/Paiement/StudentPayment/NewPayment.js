import React ,{useState , useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Add from '@material-ui/icons/Add';
import Slide from '@mui/material/Slide';
import { Typography,Grid,TextField,MenuItem,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@mui/material/Autocomplete';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tranche from './Tranche';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import orangeMoney from '../images/orange.png';
import mtnMoney from '../images/mtn.png';
import djanguiPay from '../images/djangui.png';
import expressunion from '../images/expressunion.png';
import fall from '../images/fall.png';
import cashmoney from '../images/cash.png';
import TrapFocus from '@mui/base/TrapFocus';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import QRCode from "qrcode.react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from '../images/applogo.png';
import signature from '../images/signature.png';



const useStyles = makeStyles((theme) => ({

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    wrapper :{
      display: 'flex',
      flexWrap: 'wrap',
    },
    
    block1: {
      flex: '1 1 100px',
      margin: '10px',
      padding: '10px',
      width:'50%'
    },
    blockimg: {
      flex: '1 1 50px',
      margin: '1px',
      padding: '1px',
      width:'10%'
    },
    
    block2 : {
      flex: '1 1 100px',
      margin: '10px',
      padding: '20px',
      width:'50%'
    }
  
    
    
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="Down" ref={ref} {...props} />;
  });

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

export default function DraggableDialog({row,setAnchorEl,handleSelectedStudent}) {
  var ladate=new Date(); 
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [openerror, setOpenerror] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(ladate.getDate()+"-"+(ladate.getMonth()+1)+"-"+ladate.getFullYear()+"  "+ladate.getHours()+"-"+(ladate.getMinutes()+1)+"-"+ladate.getSeconds());
  const [paymentby, setPaymentby] = useState("");
  const [costof, setCostof] = useState("");
  const PaymentMode = ["All","Cash", "Orange Money", "Mtn Money", "Djangui Pay", "Express Union"];
  const PaymentType = ["Inscription", "Pension annuel", " Tranche 1", "Tranche 2"];
  const [studentTransition, setStudentTransition] = useState(JSON.parse(localStorage.getItem('studentTransitions')) || []);
  const [student, setStudent] = useState(JSON.parse(localStorage.getItem('ELEVES')) || []);



  
  useEffect(() => {
      const newstudent = JSON.parse(localStorage.getItem('ELEVES'));
      setStudent(newstudent);
      console.log(student);
  },[]);

  const handleClickOpen = () => {
    setAnchorEl(null)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenBill = () => {
    const id=row.id;
    const school_name=row.school_name;
    const firstnames=row.firstnames;
    const classroom=row.classroom ;
    const profil=row.profil ;
    const annual_pension = row.annual_pension;
    if ( amount=='' ||  costof=='' || paymentby=='') {
      setOpenerror(true);
    } else {
      const newStudentTransaction = { school_name,firstnames, classroom , profil,amount,costof,paymentby,date ,annual_pension};
      const updatedStudents = [...student];
      const index = updatedStudents.findIndex((item)=> item.id ===id);

      if (Number(updatedStudents[index].annual_pension > Number(amount))) {
        setStudentTransition([...studentTransition, newStudentTransaction]);
        localStorage.setItem('studentTransitions', JSON.stringify([...studentTransition, newStudentTransaction]));
        updatedStudents[index].amount = Number(updatedStudents[index].amount) + Number(amount); 
        setStudent(updatedStudents);
        localStorage.setItem('ELEVES', JSON.stringify(updatedStudents));
        setOpen(false);
        setOpen1(true);
      } else {
        alert('your amount is greater than the annual pension. please check the amount remaining to be paid !!')
      }

     
      
    }

  };

  const handleCloseError = () => {
    setOpenerror(false);
  };
  const handleCloseBill = () => {
    setOpen1(false);
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(10);
    doc.setTextColor("#1a1a1a");
    doc.text("REPUBLIQE DU CAMEROUN \n PAIX-TRAVAIL-PATRIE\nFacture de Paiement \n "+row.school_name, 105, 20, null, null, "center");
    doc.addImage(logo, "PNG", 10, 10, 40, 40);
    doc.addImage(row.profil, "PNG", 155, 10, 40, 40);
    doc.addImage(signature, "PNG", 155, 160, 40, 40);
    doc.autoTable({
      startY: 70,
      headStyles: { fillColor: "#f0f0f0" },
      body: [
        { name: "School Name", value: row.school_name },
        { name: "School Email", value: row.school_email },
        { name: "School phone", value: row.school_phone },
        { name: "student Name", value: row.firstnames },
        { name: "Classroom", value: row.classroom },
        { name: "Payment ", value: costof },
        { name: "Payment Mode ", value: paymentby },
        { name: "Amount", value: amount+"XAF" },
        { name: "Date", value: date },
      ],
    });
    const base64Img = document.getElementById("qrCode").toDataURL("image/png");
    doc.addImage(base64Img, "PNG", 150, 80, 25, 25);
    doc.save("FacturePayment.pdf");
    setOpen1(false);
  };

  const [cash, setCash] = React.useState(true);
  const [orange, setOrange] = React.useState(true);
  const [mtn, setMtn] = React.useState(true);
  const [djangui, setDjangui] = React.useState(true);
  const [express, setExpress] = React.useState(true);
  const handlechangeImage =(paymentby)=>{
    if (paymentby.target.value=="Cash") {
     setOrange(false); setMtn(false); setDjangui(false); setExpress(false)
   } else if (paymentby.target.value=="Orange Money") {
     setCash(false); setOrange(true);  setMtn(false); setDjangui(false); setExpress(false)
   }else if (paymentby.target.value=="Mtn Money") {
   setCash(false); setOrange(false);  setMtn(true); setDjangui(false); setExpress(false)
   }else if (paymentby.target.value=="Djangui Pay") {
     setCash(false); setOrange(false);  setMtn(false); setDjangui(true); setExpress(false)
   }else if (paymentby.target.value=="Express Union") {
     setCash(false); setOrange(false);  setMtn(false); setDjangui(false); setExpress(true)
   }
   else if (paymentby.target.value=="All") {
     setCash(true); setOrange(true);  setMtn(true); setDjangui(true); setExpress(true)
   }
}

  const classes = useStyles();
  return (
    <div>
      <MenuList>
      <MenuItem onClick={ handleClickOpen}>
          <ListItemIcon>
            <AddCardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText> New payment</ListItemText>
        </MenuItem>
    </MenuList>

      <Dialog
        maxWidth='md'
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogTitle style={{ cursor: 'move',color:'green', fontWeight:'bold' }} id="draggable-dialog-title">
          New Payment
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            this information concerns the student's financial status for this year
            school as well as these payments. 
          </DialogContentText>

          <Grid className={classes.wrapper}>
                <Grid className={classes.blockimg}>
                    <img style={{width:'130px',height:'130px'}} src={row.profil}/>
                </Grid>
            
                <Grid className={classes.block1}>
                    <Typography style={{fontWeight:'bold'}}>Student name : {row.firstnames} </Typography>
                    <Typography style={{fontWeight:'bold'}}>Classroom  : {row.classroom}</Typography>
                    <Typography style={{fontWeight:'bold'}}>annual pension* </Typography>
                    <Typography style={{fontWeight:'bold',color:'green'}}>{row.annual_pension}XAF </Typography>
                     
                </Grid>
                <Grid className={classes.block2} >

                </Grid>
         </Grid>
         <Grid className={classes.wrapper}>
                <Grid className={classes.blockimg}>
                    <Typography style={{fontWeight:'bold',}}> Cost of   *</Typography>
                    <TextField
                        style={{width:'100%'}}
                        select
                        color="success"
                        label="Payment mode" variant="filled"
                        value={costof} onChange={(e) => setCostof(e.target.value)}
                        >
                        {PaymentType.map((item) => (
                            <MenuItem key={item} value={item}>
                            {item}
                            </MenuItem>
                        ))}
                    </TextField>
                    <p>.</p>
                    <Typography style={{fontWeight:'bold',}}> Versement   *</Typography>
                    <TextField
                        style={{width:'100%'}}
                        select
                        color="success"
                        label="Payment mode" variant="filled"
                        value={paymentby} onChange={(e) => setPaymentby(e.target.value)}
                        onClick={(paymentby)=>handlechangeImage(paymentby)}
                        >
                        {PaymentMode.map((item) => (
                            <MenuItem key={item} value={item}>
                            {item}
                            </MenuItem>
                        ))}
                    </TextField><p>.</p>

                    <Box   style={{ width:'60%',display:'flex',justifyContent:'space-between' }} >
                        {cash && (
                            <TrapFocus cash>
                                  <img style={{width:'60px',height:'60px'}} src={cashmoney}/>
                            </TrapFocus>
                          )}
                          {orange && (
                            <TrapFocus orange>
                                  <img style={{width:'60px',height:'60px'}} src={orangeMoney}/>
                            </TrapFocus>
                          )}
                          {mtn && (
                            <TrapFocus mtn>
                                  <img style={{width:'60px',height:'60px'}} src={mtnMoney}/>
                            </TrapFocus>
                          )}
                          {djangui && (
                            <TrapFocus djangui>
                                  <img style={{width:'60px',height:'60px'}} src={djanguiPay}/>
                            </TrapFocus>
                          )}
                          {express && (
                            <TrapFocus express>
                                  <img style={{width:'60px',height:'60px'}} src={expressunion}/>
                            </TrapFocus>
                          )}
                      </Box><br></br>
*                </Grid>
            
                <Grid className={classes.block1}>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                            <Typography style={{fontWeight:'bold',}}> Amount   *</Typography>
                                <Input
                                    id="standard-adornment-password"
                                    type='text' 
                                    value={amount} onChange={(e) => setAmount(e.target.value)}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        >
                                        <MonetizationOnIcon /> 
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                         <p>.</p>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                            <Typography style={{fontWeight:'bold',}}> comment   *</Typography>
                                <Input
                                    id="standard-adornment-password"
                                    type='text' 
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        >
                                        <MonetizationOnIcon /> 
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                        <p>.</p>
                        <p>.</p>
                        <Button style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white',margin:'auto'}} onClick={()=>handleClickOpenBill()}>Pay</Button>

                </Grid>
               
         </Grid>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>See Bill</Button>
        </DialogActions>
      </Dialog>


      <Dialog open={open1} onClose={handleCloseBill}>
        <DialogTitle>Facture Payment of {costof} </DialogTitle>
        <DialogContent>
          <div className="invoice-content">
            <div className="invoice-logo">
              <img src={logo} width="50px" alt="Logo" />
            </div>
            <div className="invoice-details">
              <table >
                <tbody>
                  <tr>
                    <td>School Name :</td>
                    <td style={{fontWeight:'bold'}}>{row.school_name}</td>
                  </tr>
                  <tr>
                    <td>School Email :</td>
                    <td style={{fontWeight:'bold'}}>{row.school_email}</td>
                  </tr>
                  <tr>
                    <td>student name:</td>
                    <td style={{fontWeight:'bold'}}>{row.firstnames}</td>
                  </tr>
                  <tr>
                    <td>classroom:</td>
                    <td  style={{color:'green'}}>{row.classroom}</td>
                  </tr>
                  <tr>
                    <td>payment:</td>
                    <td>{costof}</td>
                  </tr>
                  <tr>
                    <td>Amount:</td>
                    <td>{amount}</td>
                  </tr>
                  <tr>
                    <td>Payment Mode :</td>
                    <td>{paymentby}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="qr-code">
              <QRCode
                id="qrCode"
                value={`${row.firstnames} ${amount} ${paymentby} ${costof} ${row.classroom} ${date} ${row.profil}`}
              />
            </div>

            <Button onClick={generatePdf} style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white',margin:'auto'}} >Generate Bill</Button>

          </div>
        </DialogContent>
      </Dialog>

      
      <Dialog style={{textAlign:'center'}} open={openerror} onClose={handleCloseError}>
        <DialogTitle style={{color:'red'}}>Transaction Fail <WarningAmberIcon/></DialogTitle>
        <DialogContent>
          <div className="invoice-content">
            <div >
              <img src={fall} width="80px" alt="Logo" />
            </div>
            <br></br>  
            <div className="invoice-details">
              <b>veillez remplir toute les informations !!</b>
               <br></br>  <br></br>   
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="success" autoFocus onClick={handleCloseError}> Cancel </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}