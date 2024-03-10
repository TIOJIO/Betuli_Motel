import React,{useState,useEffect} from 'react'
import {Typography,TextField, Box,Button,Paper,Grid} from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Visibility from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import orangeMoney from '../../Transaction/images/orange.png';
import mtnMoney from '../../Transaction/images/mtn.png';
import djanguiPay from '../../Transaction/images/djangui.png';
import cashmoney from '../../Transaction/images/cash.png';
import expressunion from '../../Transaction/images/expressunion.png';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import QRCode from "qrcode.react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from '../../Transaction/images/logo.png';
import fall from '../../Transaction/images/fall.png';
import img1 from '../../Transaction/images/img1.png';
import img2 from '../../Transaction/images/img2.png';
import img3 from '../../Transaction/images/img3.png';
import img4 from '../../Transaction/images/img4.png';
import img5 from '../../Transaction/images/img5.png';
import img6 from '../../Transaction/images/img6.png';
import img7 from '../../Transaction/images/img7.png';
import im1 from '../../Transaction/images/im1.jpg';
import im2 from '../../Transaction/images/im2.jpg';
import im3 from '../../Transaction/images/im3.jpg';
import im4 from '../../Transaction/images/im4.jpg';
import signature from '../../Transaction/images/signature.png';

import { event } from 'jquery';
import { SnackbarProvider, useSnackbar } from 'notistack';
import TrapFocus from '@mui/base/TrapFocus';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
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
    flex: '1 1 300px',
    margin: '10px',
    padding: '10px',
    width:'50%'
  },
  
  block2 : {
    flex: '1 1 300px',
    margin: '10px',
    padding: '20px',
    width:'20%'
  }

  
  
}));





const Transaction = ({setOpenDialogue}) => {
  var ladate=new Date(); 
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentby,  setPaymentby] = useState("");
  const [costof,  setCostof] = useState("");
  const [date, setDate] = useState(ladate.getDate()+"-"+(ladate.getMonth()+1)+"-"+ladate.getFullYear()+"  "+ladate.getHours()+"-"+(ladate.getMinutes()+1)+"-"+ladate.getSeconds());

  const [open, setOpen] = useState(false);
  const [openerror, setOpenerror] = useState(false);
  const classrooms = ["all", "SIL", "CP", "CE1","CE2","CM1","CM2"];
  const [filterValueStatut, setFilterValueStatut] = useState("all");
  const [filterValue, setFilterValue] = useState("all");
  const [mode, setMode] = useState("all");
  const PaymentMode = ["All","Cash","Orange Money", "Mtn Money", "Djangui Pay", "Express Union"];
  const Payments = ["Inscription", "pension annuel", "Tranche1", "Tranche2"];
  const [studentTransition, setStudentTransition] = useState(JSON.parse(localStorage.getItem('studentTransitions')) || []);
  const [student, setStudent] = useState(JSON.parse(localStorage.getItem('STUDENT')) || []);
  const [infoTransaction, setInfoTransaction] = useState([])




  
  const students = [
    {school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',firstnames:'tiojio junior ro',classroom:'SIL',profil:img1,annual_pension:100000,inscription:20000,tranche1:40000,tranche2:40000 },
    {school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',firstnames:'karl junior jean',classroom:'CP',profil:img2,annual_pension:200000,inscription:20000,tranche1:90000,tranche2:90000},
    {school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',firstnames:'Brenda leclaires',classroom:'CP',profil:im1,annual_pension:20000,inscription:20000,tranche1:90000,tranche2:90000},
    {school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',firstnames:'Paul Albert Jean',classroom:'SIL',profil:img7,annual_pension:10000,inscription:20000,tranche1:40000,tranche2:40000},
    {school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',firstnames:'Ruth Lui labe',classroom:'CM2',profil:img6,annual_pension:600000,inscription:20000,tranche1:299000,tranche2:299000},
    {school_name:'GROUPE SCOLAIRE BILINGUE EXCELLENCE',firstnames:'Jacque raba',classroom:'CE1',profil:img3,annual_pension:300000,inscription:20000,tranche1:140000,tranche2:140000},
    ];


  useEffect(() => {
    const newstudent = JSON.parse(localStorage.getItem('STUDENT'));
    setStudent(newstudent);
    console.log(student);
},[]);


  
  const handleCloseError = () => {
    setOpenerror(false);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredData =filterValue === "all"
      ? student
      : student.filter((item) =>  item.classroom === filterValue   );




   const filteredStudent = student.filter((item) =>  item.firstnames==name)
        let id ;
        let school_name ;
        let firstnames ;
        let profil ;
        let annual_pension ;
        let tranche1;
        let classroom;
        let tranche2;
        let inscription;

        filteredStudent.map((item)=>(
          id=item.id,
          classroom=item.classroom,
          annual_pension=item.annual_pension,
          tranche1=item.tranche1,
          tranche2=item.tranche2,
          inscription=item.inscription
       ))
        

 const generatePdf = () => {
     try {
        let school_name ;
        let school_email ;
        let school_phone ;
        let firstnames ;
        let classroom ;
        let profil ;
        let annual_pension ;

        infoTransaction.map((item)=>(
          school_name = item.school_name,
          school_email = item.school_email,
          school_phone = item.school_phone,
          firstnames=item.firstnames,
          classroom =item.classroom,
          profil=item.profil,
          annual_pension=item.annual_pension
        ))
        const doc = new jsPDF();
        doc.setFontSize(10);
        doc.setTextColor("#1a1a1a");
        doc.text("REPUBLIQE DU CAMEROUN \n PAIX-TRAVAIL-PATRIE\nFacture de Paiement \n "+school_name, 105, 20, null, null, "center");
        doc.addImage(logo, "PNG", 10, 10, 40, 40);
        doc.addImage(profil, "PNG", 155, 10, 40, 40);
        doc.addImage(signature, "PNG", 155, 160, 40, 40);

        doc.autoTable({
          startY: 70,
          headStyles: { fillColor: "#f0f0f0" },
          body: [
            { name: "School Name", value: school_name },
            { name: "School Email", value: school_email },
            { name: "School Phone", value: school_phone },
            { name: "student Name", value: firstnames },
            { name: "Classroom", value: classroom },
            { name: "Payment ", value: costof },
            { name: "Payment Mode ", value: paymentby },
            { name: "Amount", value: amount },
            { name: "Date", value: date },
          ],
        });
        const base64Img = document.getElementById("qrCode").toDataURL("image/png");
        doc.addImage(base64Img, "PNG", 150, 80, 20, 20);
        doc.save("FacturePayment.pdf");
         setName('');
         setAmount('');
         setCostof('');
         setPaymentby('');
         setFilterValue('all');
        setOpen(false)
     } catch (error) {
       console.log(error);
     }
  };


   //function new transaction     
  const handlePay =() => {
     let id;
    console.log(filteredStudent)
        filteredStudent.map((item)=>(
           id = item.id,
           school_name = item.school_name,
           firstnames=item.firstnames,
           classroom =item.classroom,
           profil=item.profil,
           annual_pension=item.annual_pension
        ))
  
        if ( amount=='' ||  firstnames=='' || classroom=='' || profil=='' || paymentby=='') {
          setOpenerror(true);
        } else {
          const newStudentTransaction = { school_name,firstnames, classroom , profil,annual_pension,amount,costof,paymentby,date };
          const updatedStudents = [...student];
          const index = updatedStudents.findIndex((item)=> item.id ===id);
          if (Number(updatedStudents[index].annual_pension > Number(amount))) {
            setStudentTransition([...studentTransition, newStudentTransaction]);
            localStorage.setItem('studentTransitions', JSON.stringify([...studentTransition, newStudentTransaction]));
            updatedStudents[index].amount = Number(updatedStudents[index].amount) + Number(amount); 
            setStudent(updatedStudents);
            localStorage.setItem('ELEVES', JSON.stringify(updatedStudents));

            if ( setOpenDialogue) {
                setOpenDialogue(false);
            }
            setOpen(true);
            setInfoTransaction(filteredStudent);
            console.log(infoTransaction);
          } else {
            alert('your amount is greater than the annual pension. please check the amount remaining to be paid !!')
          }

        }
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
 <SnackbarProvider maxSnack={3}>
   <Paper >
        <Typography style={{fontWeight:'bold',fontSize:'30px', padding:'10px 0px 0px 10px'}}> Pay a Bill </Typography><br></br>
        <Grid className={classes.wrapper}>
               <Grid className={classes.block1}>
                   <Typography> Select student </Typography><br></br>
                       <Grid style={{border:'1px solid black',width:'100%',height:'auto',borderRadius:'20px'}}>
                             <span style={{padding:'30px 0px 10px 10px'}}>
                         <TextField
                              id="jour" select
                             style={{ width: '98%'}} 
                             SelectProps={{native: true,}} 
                             variant="standard"
                            label=" Filter by classroom"
                            value={filterValue} onChange={handleFilterChange}
                          >
                             {classrooms.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                         </TextField>
                            </span>
                   </Grid><br></br><br></br>
                   
                       <Typography style={{fontWeight:'bold',}}> name of student  *</Typography>
                       <TextField
                            style={{width:"100%"}}
                            id="outlined-select-currency-native"
                            select
                            value={name} onChange={(e) => setName(e.target.value)}
                            SelectProps={{
                              native: true,
                            }}
                          >
                            <option>name ... </option>
                            {filteredData.map((item) => (
                              <option>
                                {item.firstnames}
                              </option>
                            ))}
                        </TextField>
                       
                       <br></br><br></br>

                  <Typography style={{fontWeight:'bold',}}> Versement   *</Typography>
                  <TextField
                      style={{width:'100%'}}
                      select
                      color="success"
                      value={paymentby}
                      onClick={(paymentby)=>handlechangeImage(paymentby)}
                      onChange={(e) => setPaymentby(e.target.value)}
                      label="Payment mode" variant="filled"
                    >
                      {PaymentMode.map((item) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                  </TextField> 
                
      </Grid>

      <Grid className={classes.block1}><br></br>

      <Typography style={{fontWeight:'bold',}}> Payment   *</Typography>
                  <TextField
                      style={{width:'100%'}}
                      select
                      color="success"
                      value={costof}
                      onChange={(e) => setCostof(e.target.value)}
                      label="Cost Of" variant="filled"
                    >
                      {Payments.map((item) => (
                              <MenuItem key={item} value={item}>
                                 {item} 
                              </MenuItem>
                         ))
                      }
                  </TextField> <br></br> <br></br>     
                  


       <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
       <Typography style={{fontWeight:'bold',}}> Amount   *</Typography>
          <Input
            id="standard-adornment-password"
            type='text' 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
        </FormControl><br></br><br></br>

       
        <Typography style={{fontWeight:'bold',}}> Payment Mode   *</Typography>
         
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

          <Button style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white',margin:'auto'}} onClick={()=>handlePay()}>Pay</Button>   
               
        </Grid>   
      </Grid> 

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Facture Payment </DialogTitle>
        <DialogContent>
          <div className="invoice-content">
            <div className="invoice-logo">
              <img src={logo} width="50px" alt="Logo" />
            </div>
            <br></br>  
            <div className="invoice-details">
              <b>Transaction effectuer avec success !!</b>
              {
                infoTransaction.map((item)=>(
                  <div className="invoice-details">
                  <table >
                    <tbody>
                      <tr>
                        <td>School Name :</td>
                        <td style={{fontWeight:'bold'}}>{item.school_name}</td>
                      </tr>
                      <tr>
                        <td>School Email :</td>
                        <td style={{fontWeight:'bold'}}>{item.school_email}</td>
                      </tr>
                      <tr>
                        <td>student name:</td>
                        <td style={{fontWeight:'bold'}}>{item.firstnames}</td>
                      </tr>
                      <tr>
                        <td>classroom:</td>
                        <td  style={{color:'green'}}>{item.classroom}</td>
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
                  <div className="qr-code">
                    <QRCode
                      id="qrCode"
                      value={`${item.firstnames} ${amount} ${paymentby} ${costof} ${item.classroom} ${date} ${item.profil}`}
                    />
                  </div>
                </div>
                ))
              }
              
               <br></br>   
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
          
   </Paper>
   </SnackbarProvider>

  )
}

export default Transaction;
