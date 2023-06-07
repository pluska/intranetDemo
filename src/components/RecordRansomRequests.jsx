import React from 'react'
//  import Table from './Table'
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
      fontSize: 10,
      padding:8,
      border: '1px solid #d0d0d0',
    },
    body: {
      fontSize: 1,
    },
  }))(TableCell);

 const useStyles = makeStyles({
    table: {
      minWidth: 10,
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
 
 
const RecordRansomRequests = () => {
  
  const [state, setState] = React.useState({checkedA: true});

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
    
    const now = new Date();
    const formatDate = (date) => {
        return date < 10 ? `0${date}` : date
    }

    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${formatDate(now.getHours())}:${formatDate(now.getMinutes())}`
   

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    
    const [ValueCombo, setValueCombo] = React.useState(0);
    const [codigoRs,setcodigoRs]= React.useState('');

 const handleChange = (event) => { 
    console.log(event.target.checked);
    console.log(event.target.name); 
    setState({ ...state, [event.target.name]: event.target.checked });
  };
     
  console.log(state);

  const tableData = {
    th: [
         
        { name: 'Nro. Certificado', className: 'fund' },
        { name: 'Numero Cuotas', className: 'bank-account' },
        { name: '¿Rescatar?', className: 'currency' },
        { name: 'Val. IGV', className: 'account-number' },
        { name: 'Dias Corridos', className: 'module-balance' },
        { name: 'Ganancia', className: 'bt-balance' },
        { name: '¿Resc.Prog.?', className: 'difference' },
        { name: '¿Emitido?', className: 'bt-balance' },
        { name: 'Valor Actual', className: 'bt-balance' },
        { name: 'Tipo RESC.', className: 'bt-balance' },
        { name: 'Monto RESC.', className: 'bt-balance' },
        { name: 'Cuotas RESC.', className: 'bt-balance' },
        { name: 'Tipo SOLI.', className: 'bt-balance' },
        { name: 'Nro.RPROG.', className: 'bt-balance' },
        { name: 'Comision(%)', className: 'bt-balance' },
        { name: 'Cod.EL', className: 'bt-balance' },

    ],
    data: [
        [  '8074272', 'Razon social', 'Rescate Parcial valor desconocido', 1, 1,
            '23454566', 'Recibido', 'Completo', 'Observado', 'Doir', 
            'Falta Firma Participe','perfiles de inversión'],

        [  '80742256', 'Razon social', 'Deposito', 1, 2,
            '1234567', 'Pendiente', 'Incompleto', 'Regula_Cliente', '', '', 
            'perfiles de inversión']
    ]
}


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
             <div className='report-header'> 
               <div className='report-title'>
                    <h1>Registros de Solicitudes de Rescate</h1>
                </div>  
                </div>
                 
        <div style={{marginLeft:50, marginRight:30, backgroundColor:'#fff'}}>
            <Grid container style={{marginTop:40}}>
              <Grid item xs={8} >
                  <strong><p style={{margin:4, fontSize:'12pt'}}>28- RODRIGUEZ LARRIN GONZALES DEL RIEGO DE AVENDAÑO LETICIA</p></strong>  
              </Grid> 
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
  
                 <Grid container > 
                 <Grid item xs={6} >
                    <TableContainer component={Paper}></TableContainer>
                        <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow> 
                            <StyledTableCell align="left">Nro. Certificado</StyledTableCell>
                            <StyledTableCell align="left">Numero Cuotas</StyledTableCell>
                            <StyledTableCell align="left">¿Rescatar?</StyledTableCell>
                            <StyledTableCell align="left">Val. IGV'</StyledTableCell>
                            <StyledTableCell align="left">Dias Corridos</StyledTableCell>
                            <StyledTableCell align="left">Ganancia</StyledTableCell>
                            <StyledTableCell align="left">¿Resc.Prog.?</StyledTableCell>
                            <StyledTableCell align="left">¿Emitido?</StyledTableCell>
                            <StyledTableCell align="left">Valor Actual</StyledTableCell>
                            <StyledTableCell align="left">Tipo RESC.</StyledTableCell>
                            <StyledTableCell align="left">Monto RESC.</StyledTableCell>
                            <StyledTableCell align="left">Cuotas RESC.</StyledTableCell>
                            <StyledTableCell align="left">Tipo SOLI.</StyledTableCell>
                            <StyledTableCell align="left">Nro.RPROG.</StyledTableCell>
                            <StyledTableCell align="left">Comision(%)</StyledTableCell>
                            <StyledTableCell align="left">Cod.EL</StyledTableCell> 
                        </TableRow>
                        </TableHead>
                        {/* <TableBody>
                            {
                            setList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((element,key) =>
                            <StyledTableRow 
                            rows={rows} 
                            >   
                            <StyledTableCell  align="center" id={1} style={{color: "blue", textDecorationLine: "underline", cursor: "pointer"}}  onClick={(e) => handleAlerta(e)} >{element.NombredelCliente}</StyledTableCell>
                            <StyledTableCell align="left">{element.CuentaBT}</StyledTableCell>
                            <StyledTableCell align="left">{element.CodigoParticipe}</StyledTableCell>
                            <StyledTableCell align="left">{element.TipoCliente}</StyledTableCell> 
                            <StyledTableCell align="left">{element.Segmento}</StyledTableCell>
                            <StyledTableCell align="left">{element.TipoDocdelTitular}</StyledTableCell>
                            <StyledTableCell align="left">{element.NumeroDocdelTitular}</StyledTableCell>
                            <StyledTableCell align="left">{element.TC}</StyledTableCell>  
                            <StyledTableCell align="left">{element.Estatus}</StyledTableCell>  
                            </StyledTableRow>
                            )}
                            {emptyRows > 0 && (
                            <TableRow style={{ height: 1 * emptyRows }}>
                            <TableCell colSpan={10} style={{display:'none'}}/>
                            </TableRow>
                            )}
                        </TableBody>               */}
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[6, 10, 15]}
                            component="div"
                            count={ListUser.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            // onChangePage={handleChangePage}
                            // onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                        </Grid>
                            <Grid item xs={1} >
                            </Grid>
                            </Grid>  
               

                <Grid container style={{marginTop:20}}></Grid>

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
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Cuotas  Vig:" value={'0.0000'} variant="outlined" style={{width:'100%'}}  />
                </Grid>
                &nbsp; 
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Valor Actual:" variant="outlined" value={'US$ 0.00'}  style={{width:'100%'}}  />
                </Grid>
                &nbsp; 
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Nro CRT's a Rescatar:" variant="outlined" value={'0'}  style={{width:'100%'}}  />
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
                    <TextField   id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Codigo de Empleado:" value={'23117'} variant="outlined" style={{width:'100%'}}  />
                </Grid>
                &nbsp; 
                <Grid item xs={4}>
                    <TextField   id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Empleado" value={'CHAVEZ MESTANZA JHANSEY DEIBY'}  variant="outlined"   style={{width:'100%'}}  />
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
                            <Grid item xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={state.checkedA}
                                  onChange={handleChange}
                                  name="checkedA"
                                />
                              }
                              style={{position:'inherit'}}
                              label="Incluir Asesor"
                            />
                            </Grid>
               </Grid>   

{
    state.checkedA==true?
    <Grid container> 
                <Grid item xs={1} >
                </Grid> 
                <Grid item xs={4}> 
                <Box sx={{ minWidth: 120 }}>  
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tipo de Asesor:</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={1}
                  label="Tipo de Asesor"
                  // onChange={handleChange}
                >
                  <MenuItem value={0}>Seleccione</MenuItem>
                  <MenuItem value={1}>Asesor Corpotarivo Inversiones</MenuItem> 
                  <MenuItem value={2}>Ejecutivo de Inversion</MenuItem> 
                </Select>
                </FormControl> 
                </Box> 
                </Grid>   
                 &nbsp;
                <Grid item xs={4}> 
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
               
               :

               <></>
}
                
                 </div>  
                <Grid container style={{marginTop:20}}>
                </Grid> 
            
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
                   <Grid item xs={6}>
                      <Grid item xs={8} style={{paddingTop:0, textAlign:'left'}} >
                          <a style={{fontSize:18}}>Formas de Pago de la Suscripcion:</a>
                      </Grid>
                  </Grid> 

                  {/* <Grid item xs={5}>
                      <Grid item xs={8} style={{paddingTop:0, textAlign:' '}} >
                          <a style={{fontSize:18}}>Cuenta Bancaria del Participe:</a>
                      </Grid>
                  </Grid>   */}
                </Grid>    
               <Grid container>  
               <Grid item xs={1} >
                </Grid>
               <Grid item xs={6}>
               <Grid item xs={6} style={{paddingTop:10, textAlign:'left'}} >
                <FormControl> 
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                 <FormControlLabel value="female" control={<Radio />} label="Abono en Cuenta" /> 
                 <FormControlLabel value="female" control={<Radio />} label="Orden Pago en Agencia" /> 
                 <FormControlLabel value="female" control={<Radio />} label="Transferencia BCRP" /> 
                 <FormControlLabel value="female" control={<Radio />} label="Transferencia al Exterior" /> 
                 </RadioGroup>
                 </FormControl>
                 </Grid>   
                 </Grid>


                 {/* <Grid item xs={5}>
                      <Grid item xs={7} style={{paddingTop:2, textAlign:' '}} >
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
                 </Grid> */}


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
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Codigo de CDR:" value={'010'} variant="outlined" style={{width:'100%'}}  />
                </Grid>
                &nbsp; 
                <Grid item xs={3}>
                    <TextField id="outlined-margin-dense" className={classes.formControl} margin="dense" label="Oficina de Atencion:" variant="outlined" value={'CENTRO HISTORICO'}  style={{width:'100%'}}  />
                </Grid>
                 </Grid>

                 <Grid container style={{marginTop:20}}>
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

export default RecordRansomRequests