import React from 'react'
// import Table from './Table'
import { useSearchParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { Grid } from '@material-ui/core'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
 
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'; 
import FormLabel from '@mui/material/FormLabel';
import { TextareaAutosize } from '@mui/base';
import { BorderStyle } from '@material-ui/icons';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#444',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

 const useStyles = makeStyles({
    table: {
      minWidth: 50,
    },
  });

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },'&$focusVisible': {
        backgroundColor: theme.palette.action.selected,
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected,
      },
      '&$disabled': {
        opacity: 0,
      },
    },
  }))(TableRow);
 
 
const SubscriptionRequestRecord = () => {
  
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });

    function createData(name, calories, fat, carbs) {
        return { name, calories, fat, carbs };
      } 
    
    const rows = [
        createData('1', 'Edwin', '561615616', 'Activo'),
      ];
      const [messageError,setMessageError] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [Name, setName] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6); 
    const classes = useStyles(); 
    const [ListUser] = React.useState([]); 
    const now = new Date()
    const formatDate = (date) => {
        return date < 10 ? `0${date}` : date
    }
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    
    const [ValueCombo, setValueCombo] = React.useState(0);
    const [codigoRs,setcodigoRs]= React.useState('');

 const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
     
    const setList = [
        {
           "NombredelCliente":"Jimenez Tode Roberto",
           "CuentaBT":"1027",
           "CodigoParticipe":"263081",
           "TipoCliente":"Particular",
           "Segmento":"Premium",
           "TipoDocdelTitular":"L.E/.D.N.I",
           "NumeroDocdelTitular":"07808494",
           "TC":"",
           "Estatus":"", 
        }
     ];
 
    const options = [{label: "Recibido", value: 1}, {label: "Pendiente", value: 2},{label: "Observado", value: 3}];
    const userIdHandler = (value) => {
     console.log(value);
    };
 
     
    const handleClickselect = (event) =>{
        console.log(event.target.value); 
        if(event.target.value==='1'){ 
            setValueCombo(1);
        }else if(event.target.value==='2'){
            setValueCombo(2);
        }
     } 


     function handleAlerta(event){ 
        console.log(event.currentTarget.id); 
        console.log(event.target.value); 

      if(event.currentTarget.id==1){
        Swal.fire({
            title: 'Alerta',
            text: "El partícipe tiene pendiente la firma del contrato. Por favor, hacer firmar contrato y enviarlo a DEPSA(PN) y a SCOTIAFONDOS(PJ).",
            // icon: 'warning',
            //  showCancelButton: true,
             confirmButtonColor: '#cc2229',
            //  cancelButtonColor: '#cc2229',
             confirmButtonText: 'Cerrar'
          }).then((result) => {
            if (result.isConfirmed) {
            //   PostEditUser();
            }
          })
      }else{ 
      } 
     }
     const handleClose = () => {
      setShow(false);       
    };

     const handleFilterName = (e) =>{
      setName(e.target.value.toString());
    }

    const handleRadioButtonTipoEmpresa= (event) => {
      console.log("entra al radio button");
      console.log(event.target.value);
          const value=event.target.value;
          setcodigoRs(value); 
          console.log(codigoRs);

          // if (value == 1) {
          //     console.log('1----true');
          //     setesobligatoriounvalor(true);
          // } 
          // else if (value == 2) {
          //     console.log('2---false');
          //    setesobligatoriounvalor(false);
          // }
  };
 
    return (
        <>  
               
                    {/* <div className='report-body-filters'> 
                            <div className='report-filters-container'>       
                            <div className='report-filters-group'>
                             <label>Fondo Mutuo:</label>
                                <select className='date-range-input'  >
                                    <option value="1"></option>
                                    <option value="2"></option>
                                </select>
                             </div>

                             <div className='report-filters-group'> 
                                <p>Ult Valor Cuota:</p>
                                <input type='text' placeholder='Ult Valor Cuota' id='date-range-input' value={'S/ 16,7873'} disabled  />
                                <p>Fecha(dd/mm/yyyy):</p>
                                <input type='text' id='date-range-input'  placeholder='31/05/2023' disabled />
                                <p>Hora(HH:MM:SS):</p>
                                <input type='text' id='date-range-input' placeholder='21:03:31' disabled   />
                             </div>
 

                              <div className='report-filters-group'> 
                                <input type='checkbox'  id='date-range-input' disabled checked />
                                <label>Firmo el Contrato Global:</label> 
                              </div>


                             <div className='report-filters-group'>  
                                <p>Nro. Total Cuotas Vig:</p>
                                <input type='text' placeholder='Nro. Total Cuotas Vig' id='date-range-input' value={'0.0000'} disabled  />
                                <p>Valorizado:</p>
                                <input type='text' id='date-range-input'  placeholder='Valorizado' value={'S/0.00'} disabled />   
                             </div>


                             <div className='report-filters-group'>  
                                <p>Cod. Ofic</p>
                                <input type='text' placeholder='Cod. Ofic' id='date-range-input' value={'010'} disabled  />
                                <p>Ofic. de Atencion:</p>
                                <input type='text' id='date-range-input'  placeholder='Ofic. de Atencion' value={'Centro Historico'} disabled />   
                                <p>Monto de Suscrip:</p>
                                <input type='text' id='date-range-input'  placeholder='0.00'     />   
                             </div>


                             <div className='report-filters-group'>  
                                <p>Codigo de Empleado</p>
                                <input type='text' placeholder='Codigo de Empleado' id='date-range-input' value={'23117'} disabled  />
                                <p>Empleado</p>
                                <input type='text' placeholder='Empleado' id='date-range-input' value={'Chavez Mestazana jahnsen deiby'}  disabled/>
                             </div>


                             <div className='report-filters-group'>  
                                <p>Seleccione Personal de Venta:</p>
                                <input type='text' placeholder='Codigo del RS o Personal' id='date-range-input'  />
                                <input type='radio'  id='date-range-input' value={'Codigo del RS o Personal de apoyo en la venta:'}  disabled/>
                                <input type='radio'  id='date-range-input' value={'Asesor'}  disabled/>
                             </div>
                           </div>
                    </div> */}
             <div className='report-header'> 
               <div className='report-title'>
                    <h1>Registros de Solicitudes de Suscripción</h1>
                </div>  
                </div>
                 
        <div style={{marginLeft:50, marginRight:30, backgroundColor:'#fff'}}>
            <Grid container style={{marginTop:40}}>
              <Grid item xs={8} >
                  <strong><p style={{margin:4, fontSize:'12pt'}}>28- RODRIGUEZ LARRIN GONZALES DEL RIEGO DE AVENDAÑO LETICIA</p></strong>  
              </Grid>  
                <Grid item xs={2} >
                 <div className='report-body-btns'>
                        <button className='btn btn-primary'>Grabar</button>
                        <button className='btn btn-default'>Limpiar</button>
                        <button className='btn btn-default'>Salir</button>
                 </div>
                 </Grid>
            </Grid> 
            <Grid container style={{marginTop:10 }}></Grid> 
            <div style={{paddingBottom:10}}  >   
             <div  style= {{
                          border: '1px solid #d0d0d0',
                          // borderRadius: '0.1rem',
                          backgroundColor: '#fff',
                          // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                          padding: '1.5rem 0.6rem',
                          margin: 'auto',
                          width: '75%', 
                          borderWidth: '1px',
                          BorderStyle: 'solid',
                          }}>
               <Grid container> 
                &nbsp;  
                <Grid item xs={1} >
                </Grid> 
                <Grid item xs={10}> 
                <Box sx={{ minWidth: 120 }}>  
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Fondo Mutuo:</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={1}
                  label="Fondo Mutuo"
                  // onChange={handleChange}
                >
                  <MenuItem value={1}>Seleccione</MenuItem>
                  <MenuItem value={2}>SCOTIA FONDO PREMIUM $</MenuItem>
                  <MenuItem value={3}>SCOTIA FONDO CASH $</MenuItem>
                  <MenuItem value={4}>SCOTIA FONDO CASH S/.</MenuItem>
                  <MenuItem value={5}>SCOTIA FONDO PREMIUM S/.</MenuItem>
                </Select>
              </FormControl> 
              </Box>
                </Grid>
              </Grid>
              <Grid container style={{marginTop:20}}></Grid>
              <Grid container>
                <Grid item xs={1} >
                </Grid> 
                <Grid item xs={4}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" placeholder='Ult Valor Cuota'  variant="outlined" style={{width:'100%'}}  />
                </Grid>  
                &nbsp; 
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense"   label="Fecha(dddd/mm/yyyy)"  value={'01/06/2023'} variant="outlined" style={{width:'100%'}}  />
                </Grid> 
                &nbsp; 
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Hora(HH:MM:SS)" value={'14:36:24'}  variant="outlined" style={{width:'100%'}}  />
                </Grid> 
              </Grid> 
              </div>
               
              <Grid container style={{marginTop:20}}></Grid>  
 
              <div  style= {{
                         border: '1px solid #d0d0d0',
                         // borderRadius: '0.1rem',
                         backgroundColor: '#fff',
                         // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                         padding: '1.5rem 0.6rem',
                         margin: 'auto',
                         width: '75%', 
                         borderWidth: '1px',
                         BorderStyle: 'solid',
                          }}>
              <Grid container> 
                <Grid item xs={1} >
                </Grid> 
                <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      disabled
                    />
                  }
                  style={{position:'inherit'}}
                  label="Firmó el Contrato Global"
                />
                </Grid>
              </Grid>
 
              <Grid container style={{marginTop:20}}></Grid>

              <Grid container>
                <Grid item xs={1} >
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Nro Total Cuotas  Vig:" value={'0.0000'} variant="outlined" style={{width:'100%'}}  />
                </Grid>
                &nbsp; 
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Valorizado:" variant="outlined" value={'US$ 0.00'}  style={{width:'100%'}}  />
                </Grid>
              </Grid>
              </div>
              <Grid container style={{marginTop:20}}></Grid>
              <div  style= {{
                          border: '1px solid #d0d0d0',
                          // borderRadius: '0.1rem',
                          backgroundColor: '#fff',
                          // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                          padding: '1.5rem 0.6rem',
                          margin: 'auto',
                          width: '75%', 
                          borderWidth: '1px',
                          BorderStyle: 'solid',
                          }}>
              <Grid container>
                <Grid item xs={1} >
                </Grid>
                <Grid item xs={2}>
                    <TextField disabled id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Cod. Ofic:" value={'010'} variant="outlined" style={{width:'100%'}}  />
                </Grid>
                &nbsp; 
                <Grid item xs={5}>
                    <TextField disabled id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Ofic de Atención:" variant="outlined" value={'Centro Historico'}  style={{width:'100%'}}  />
                </Grid>
                &nbsp; 
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Monto de Suscrip:" variant="outlined" value={'0.00'}  style={{width:'100%'}}  />
                </Grid>
              </Grid> 
               </div>

              <Grid container style={{marginTop:20}}></Grid>
              <div  style= {{
                          border: '1px solid #d0d0d0',
                          // borderRadius: '0.1rem',
                          backgroundColor: '#fff',
                          // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                          padding: '1.5rem 0.6rem',
                          margin: 'auto',
                          width: '75%', 
                          borderWidth: '1px',
                          BorderStyle: 'solid',
                          }}>
              <Grid container>
                <Grid item xs={1} >
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Codigo de Empleado" value={'23117'} variant="outlined" style={{width:'100%'}}  />
                </Grid>
                &nbsp; 
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Empleado" value={'Chavez Mestanza jhansen deiby'}  variant="outlined"  style={{width:'100%'}}  />
                </Grid>
              </Grid>  
            </div> 
              <Grid container style={{marginTop:20}}></Grid> 
         
         
              <div  style= {{
                         border: '1px solid #d0d0d0',
                         // borderRadius: '0.1rem',
                         backgroundColor: '#fff',
                         // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                         padding: '1.5rem 0.6rem',
                         margin: 'auto',
                         width: '75%', 
                         borderWidth: '1px',
                         BorderStyle: 'solid',
                          }}>
              <Grid container>
                <Grid item xs={1} >
                </Grid> 
                <Grid item xs={3} style={{paddingTop:10, textAlign:'left'}} >
                    <a style={{fontSize:15}}>Seleccione Personal de Venta:</a>
                </Grid>
                &nbsp; 
                <Grid item xs={5}>
                <FormControl> 
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="female"
                    checked={codigoRs == "1"}
                    name="radio-buttons-group"
                    onChange={(event) => handleRadioButtonTipoEmpresa(event)}
                  >
                 <FormControlLabel  value="1"  style={{fontSize:15}}  control={<Radio />} label="Código del RS O personal de apoyo en la venta" /> 
                 </RadioGroup>
                 </FormControl>
                </Grid> 
                &nbsp;  
                  <Grid item xs={1}>
                  <FormControl> 
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="female"
                    // checked={codigoRs === "2"}
                    name="radio-buttons-group"
                    onChange={(event) => handleRadioButtonTipoEmpresa(event)}
                  >
                  <FormControlLabel value="2" control={<Radio />} label="Asesor" /> 
                  </RadioGroup>
                  </FormControl>
                  </Grid>   
                 </Grid> 
                 <Grid container style={{marginTop:20}}></Grid>  
                 <Grid container>
                <Grid item xs={1} >
                </Grid>
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Codigo del RS personal" variant="outlined" style={{width:'100%'}}  />
                </Grid> 
              </Grid>  
              </div> 
              <Grid container style={{marginTop:20}}></Grid> 
              <div  style= {{
                         border: '1px solid #d0d0d0',
                         // borderRadius: '0.1rem',
                         backgroundColor: '#fff',
                         // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                         padding: '1.5rem 0.6rem',
                         margin: 'auto',
                         width: '75%', 
                         borderWidth: '1px',
                         BorderStyle: 'solid',
                          }}>
              <Grid container style={{marginTop:20}}></Grid>
                <Grid container>
                <Grid item xs={1} >
                </Grid>
                   <Grid item xs={5}>
                      <Grid item xs={5} style={{paddingTop:10, textAlign:'left'}} >
                          <a style={{fontSize:18}}>Formas de Pago de la Suscripcion:</a>
                      </Grid>
                  </Grid> 
                  <Grid item xs={5}>
                      <Grid item xs={8} style={{paddingTop:10, textAlign:'left'}} >
                          <a style={{fontSize:18}}>Cuenta Bancaria del Participe:</a>
                      </Grid>
                  </Grid>  
                </Grid>    
               <Grid container>  
               <Grid item xs={1} >
                </Grid>
               <Grid item xs={5}>
               <Grid item xs={6} style={{paddingTop:10, textAlign:'left'}} >
                <FormControl> 
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                 <FormControlLabel value="female" control={<Radio />} label="Asesor" /> 
                 <FormControlLabel value="female" control={<Radio />} label="Cargo en Cuenta" /> 
                 <FormControlLabel value="female" control={<Radio />} label="Cheque Mismo Banco" /> 
                 <FormControlLabel value="female" control={<Radio />} label="Cheque Otro Banco" /> 
                 </RadioGroup>
                 </FormControl>
                 </Grid>   
                 </Grid>
                 <Grid item xs={6}>
                      <Grid item xs={7} style={{paddingTop:2, textAlign:'left'}} >
                      <Grid item xs={10}>
                             <FormControl fullWidth>
                               <InputLabel id="demo-simple-select-label">Nro. Cuenta:</InputLabel>
                               <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={1}
                                label="Nro. Cuenta"
                                // onChange={handleChange}
                               >
                                <MenuItem value={1}>Seleccione</MenuItem>
                                <MenuItem value={2}>opcion1</MenuItem>
                                <MenuItem value={3}>opcion2</MenuItem>
                               </Select>
                             </FormControl>   
                             <Grid item xs={12}>
                              <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Tipo Cuenta:"    variant="outlined"  style={{width:'100%'}}  />
                             </Grid> 
                             <Grid item xs={12} style={{paddingTop:10, textAlign:'left'}} >
                             <FormControlLabel
                              control={
                                <Checkbox
                                  checked={state.checkedA}
                                  onChange={handleChange}
                                  name="checkedA"
                                />
                              }
                              style={{position:'inherit'}}
                              label="Nueva Cuenta"
                            />
                        </Grid>   
                     </Grid>   
                   </Grid>   
                 </Grid>
                 </Grid>
                    
                 </div>
                 <Grid container style={{marginTop:20}}></Grid>


                 <div  style= {{
                         border: '1px solid #d0d0d0',
                         // borderRadius: '0.1rem',
                         backgroundColor: '#fff',
                         // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                         padding: '1.5rem 0.6rem',
                         margin: 'auto',
                         width: '75%', 
                         borderWidth: '1px',
                         BorderStyle: 'solid',
                          }}>
                 <Grid container>
                 <Grid item xs={1} >
                 </Grid>
                 <Grid item xs={5}>  
                      <Grid item xs={8}>
                             <FormControl fullWidth>
                               <InputLabel id="demo-simple-select-label">Origen de Fondos:</InputLabel>
                               <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={1}
                                label="Origen de Fondos"
                                // onChange={handleChange}
                               >
                                <MenuItem value={1}>Seleccione</MenuItem>
                                <MenuItem value={2}>opcion1</MenuItem>
                                <MenuItem value={3}>opcion2</MenuItem>
                               </Select>
                             </FormControl>    
                   </Grid>   
                   </Grid>   
                   <Grid item xs={5}>
                        <Grid item xs={8}>
                             <FormControl fullWidth>
                               <InputLabel id="demo-simple-select-label">Proposito de fondo mutuo:</InputLabel>
                               <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={1}
                                label="Proposito de fondo mutuo"
                                // onChange={handleChange}
                               >
                                <MenuItem value={1}>Seleccione</MenuItem>
                                <MenuItem value={2}>opcion1</MenuItem>
                                <MenuItem value={3}>opcion2</MenuItem>
                               </Select>
                             </FormControl>    
                     </Grid>   
                </Grid>
                 </Grid>

                 <Grid container style={{marginTop:20}}></Grid>
                 
                 <Grid container>
                <Grid item xs={1} >
                </Grid>
                    <Grid item xs={5}>  
                      <Grid item xs={8}>
                      <p style={{margin:5, fontSize:'12pt'}}>¿Los fondos que ingresaran a esta cuenta son de propiedad y/o en beneficio de un tercero?</p>
                     </Grid>
                    </Grid>   
                   <Grid item xs={3}>
                     <FormControl> 
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                      <FormControlLabel value="female" control={<Radio />} label="SI" />  
                      </RadioGroup>
                     </FormControl> 

                     <FormControl> 
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                      <FormControlLabel value="female" control={<Radio />} label="NO" />  
                      </RadioGroup>
                     </FormControl> 
                   </Grid>
                 </Grid>
            </div>

            <Grid container style={{marginTop:20}}></Grid> 
            <div  style= {{
                          border: '1px solid #d0d0d0',
                          // borderRadius: '0.1rem',
                          backgroundColor: '#fff',
                          // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                          padding: '1.5rem 0.6rem',
                          margin: 'auto',
                          width: '75%', 
                          borderWidth: '1px',
                          BorderStyle: 'solid',
                          }}>
              <Grid container>
                 <Grid item xs={1}>
                 </Grid>
                    <Grid item xs={4}>  
                      <Grid item xs={8}>
                      <p style={{margin:5, fontSize:'12pt'}}>Canal de Atención:</p>
                     </Grid>
                    </Grid>   
                   <Grid item xs={5}>
                     <FormControl> 
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                      <FormControlLabel value="female" control={<Radio />} label="Red de Agencias" />  
                      </RadioGroup>
                     </FormControl>  
                     <FormControl> 
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                      <FormControlLabel value="female" control={<Radio />} label="Scotia en Linea - Joy" />  
                      </RadioGroup>
                     </FormControl> 
                   </Grid>
                 </Grid>  
                 </div> 
                 <Grid container style={{marginTop:20}}></Grid> 
                 <div  style= {{
                          border: '1px solid #d0d0d0',
                          // borderRadius: '0.1rem',
                          backgroundColor: '#fff',
                          // boxShadow: '0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)',
                          padding: '1.5rem 0.6rem',
                          margin: 'auto',
                          width: '75%', 
                          borderWidth: '1px',
                          BorderStyle: 'solid',
                          }}>
                <Grid container>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>  
                      <Grid item xs={11}>
                      <TextareaAutosize label="Observaciones" variant="outlined" placeholder='Observaciones'  minRows={6}  id="outlined-margin-dense"   margin="dense"   style={{width:'100%'}}  />
                     </Grid>
                    </Grid>    
                 </Grid> 
                </div> 
              </div>  
           </div>  
        </>
    )
}

export default SubscriptionRequestRecord