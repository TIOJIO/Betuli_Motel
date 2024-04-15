import React, { useState } from "react";
import Card from '@mui/material/Card';
import { CardActionArea,Paper,TextField, MenuItem , Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import { PieChart, Pie, Cell ,Legend} from 'recharts';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ArrowDownward } from '@mui/icons-material';
import { ArrowUpward } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core/styles';
import Man4Icon from '@mui/icons-material/Man4';
import ClassroomStatistic from './ClassroomStatistic'

const useStyles = makeStyles({
    blockitem:{
      flexWrap:'wrap',
      width:'100%',
      height:'auto',
      borderRadius:'10px',
      fontFamily: "Times New Roman, Times, serif",
      display:'flex',
      justifyContent:'space-evenly',
   },
   wrapper :{
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  block1: {
    flex: '1 1 300px',
    margin: '10px',
    padding: '20px',
    width:'30%'
  },
  
  block2 : {
    flex: '1 1 300px',
    margin: '10px',
    padding: '20px',
    width:'60%',
    alignItems:'center'
  }

  
  });

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function ActionAreaCard() {

    const [filterValue, setFilterValue] = useState("all");
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const classroom = ["all", "SIL", "CP", "CE1","CE2","CM1","CM2"];

    
    const datas = [
        { name: 'SIL', value:60, montant:985415.5 ,total:100, completed:54 , notcompleted:16},
        { name: 'CP', value:35 ,montant:89564 ,total:150, completed:54 , notcompleted:16},
        { name: 'CE1', value:80 , montant:235841 ,total:200, completed:150 , notcompleted:50 },
        { name: 'CE2', value:20 , montant:24587 ,total:80, completed:25 , notcompleted:55},
        { name: 'CM1', value:5 , montant:98745 ,total:50, completed:10 , notcompleted:30},
        { name: 'CM2', value:10  , montant:68815.1 ,total:200, completed:100 , notcompleted:100},
      
      ];
  
    const handleFilterChange = (event) => {
      setFilterValue(event.target.value);
    };
  
    const [selectedGroup, setSelectedGroup] = useState("all");

    
    const filteredData = filterValue === "all" 
    ? datas 
    : datas.filter(d => d.name === filterValue);

  const onGroupSelectChange = (event) => {
    setSelectedGroup(event.target.value);
  };



     
    const classes = useStyles();   
  return (
  <div >
     <div  style={{padding:'0px 0px 5px 15px'}}>
        <Typography id="studentPay" style={{color:'green',fontWeight:'bold'}}>Classrrom Statistic</Typography>
         <label>current transfert</label>
      </div>
    <Paper style={{ width: 'auto' , height:'auto'}}>
         <Grid className={classes.wrapper}>
             <Grid className={classes.block1}>
                    <Grid container spacing={1}>
                        <Grid  item xs={12} sm={6}>
                            <TextField
                            style={{width:'100%',padding:'20px 0px 0px 10px'}}
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
                             <Typography style={{padding:'10px 0px 10px 10px'}}>Statistic By classroom <label style={{fontWeight:'bold'}}>{filterValue}</label></Typography>

                            <div style={{marginLeft:'-35px'}}>
                              <PieChart  width={300} height={260} >
                                  <Pie
                                  data={filteredData}
                                  dataKey="student_number"
                                  nameKey="name"
                                  fill="#8884d8"
                                  label
                                  cx="auto" cy="auto" innerRadius={60} outerRadius={80}
                                  >
                                  {filteredData.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                                  </Pie>
                                  <Legend style={{padding:'10px 0px 10px 0px'}}/>
                              </PieChart>
                          </div>
                        </Grid>
                    
                    </Grid>
                        <Typography style={{padding:'10px 0px 10px 0px'}} align="center" fontWeight={10}>SOLDE : <label style={{fontWeight:'bold'}}>{filterValue=="all"? '9874889.8':filteredData.map((item)=> item.montant)}XAF</label></Typography>
                                {
                                    filterValue=="all"? 
                                                <Grid className={classes.blockitem} >
                                                    <Typography variant='h8'  style={{color:'green',fontWeight:'bold'}}> <Man4Icon sx={{fontSize:20}}/> 984</Typography>
                                                    <Typography variant='h8' style={{color:'blue',fontWeight:'bold'}}> <Man4Icon sx={{fontSize:20}}/> 900</Typography>
                                                    <Typography variant='h8' style={{color:'red',fontWeight:'bold'}}> <Man4Icon sx={{fontSize:20}}/> 84</Typography>
                                                </Grid>
                                        :
                                        filteredData.map((item)=> (
                                            <Grid className={classes.blockitem} >
                                                <Typography variant='h8'  style={{color:'green',fontWeight:'bold'}}> <Man4Icon sx={{fontSize:20}}/> {item.total}</Typography>
                                                <Typography variant='h8' style={{color:'blue',fontWeight:'bold'}}> <Man4Icon sx={{fontSize:20}}/> {item.completed}</Typography>
                                                <Typography variant='h8' style={{color:'red',fontWeight:'bold'}}> <Man4Icon sx={{fontSize:20}}/> {item.notcompleted}</Typography>
                                            </Grid>
                                        ))
                                }      
                </Grid>
                <Grid id="classroomstatistic" className={classes.block2}>
                    <ClassroomStatistic filterValue={filterValue}/>
               </Grid>
         </Grid>
    </Paper>
    </div>
  );
}

