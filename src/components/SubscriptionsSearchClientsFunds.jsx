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
import SubscriptionRequestRecord from "./SubscriptionRequestRecord";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

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
 
 
const SubscriptionsSearchClientsFunds = () => {
  
    const navigate = useNavigate();


    function createData(name, calories, fat, carbs) {
        return { name, calories, fat, carbs };
      } 
    
    const rows = [
        createData('1', 'Edwin', '561615616', 'Activo'),
      ];
 

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
 
    // const tableData = {
    //     th: [
    //         { name: 'Nombre del Cliente', className: 'date' },
    //         { name: 'Cuenta BT', className: 'date' },
    //         { name: 'Codigo Participe', className: 'date' },
    //         { name: 'Tipo Cliente', className: 'date' },
    //         { name: 'Segmento', className: 'date' },
    //         { name: 'Tipo Doc.del Titular', className: 'fund' },
    //         { name: 'Numero Doc.del Titular', className: 'bt-balance' },
    //         { name: 'T/C', className: 'bt-balance' },
    //         { name: 'Estatus', className: 'bt-balance' },
    //     ],
    //     data: [
    //         [  'Jimenez Tode Roberto', '1027', '263081','Particular' ,'Premium' ,
    //             'L.E/.D.N.I', '07808494', '', ''], 
    //     ]
    // }
 
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
 
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

      
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
            //   showCancelButton: true,
             confirmButtonColor: '#cc2229',
            //  cancelButtonColor: '#cc2229',
             confirmButtonText: 'Cerrar'
          }).then((result) => {
            console.log(result); 
            if (result.isConfirmed) {
                //PostEditUser();
                console.log('entraaaa'); 
                // return <Navigate to='/' /> 
                navigate("/Subscription-Request-Record")
            }
          })
      } 
     }
  
 
    return (
        <> 
            <div className='report-header'>
                <div className='report-title'>
                    <h1>Suscripciones-Busqueda de clientes de Fondos Mutuos</h1>
                </div>
                <div className='report-body'>
                    <div className='report-body-filters'> 
                            <div className='report-filters-container'>      

                             <div className='report-filters-group'>
                                <label >Nombre de Cliente: </label>
                                <input type='text' id='date-range-input'   />
                             </div>

                            <div className='report-filters-group'>
                                <label>seleccionar:</label>
                                <select className='date-range-input' onChange={(e) => handleClickselect(e)} >
                                    <option value="1">Cuenta BT</option>
                                    <option value="2">Codigo Participe</option>
                                </select>
                                <div className='report-filters-group'>
                                :
                                {
                                ValueCombo==0? 
                                <input type='text' id='date-range-to' placeholder='Cuenta BT' className='date-range-input' />
                                :
                                ValueCombo==2? 
                                <input type='text' id='date-range-to' placeholder='Codigo Participe' className='date-range-input' />
                                :
                                <input type='text' id='date-range-to' placeholder='Cuenta BT' className='date-range-input' />
                                }
                            
                                </div>                            
                                 <label>Nro.Documento:</label>
                                 <input type='text' id='date-range-to'   className='date-range-input' />                  
                                </div> 
                           </div>
                    </div>
                    <div className='report-body-btns'>
                        <button className='btn btn-primary'>Buscar</button>
                        <button className='btn btn-default'>Limpiar</button>
                        <button className='btn btn-default'>Salir</button>
                    </div>
                </div>
            </div>
 
          <div className='report-table'>
          {/* <Table data={tableData} /> */}
 
          <Grid container >
          <Grid item xs={1} >
          </Grid>
          <Grid item xs={10} >
            <TableContainer component={Paper}></TableContainer>

       
      <Table    className={classes.table} aria-label="customized table">
      <TableHead>
      <TableRow style={{background:'red'}}> 
          <StyledTableCell align="left">Nombre del Cliente</StyledTableCell>
          <StyledTableCell align="left">Cuenta BT</StyledTableCell>
          <StyledTableCell align="left">Codigo Participe</StyledTableCell>
          <StyledTableCell align="left">Tipo Cliente</StyledTableCell>
          <StyledTableCell align="left">Segmento</StyledTableCell>
          <StyledTableCell align="left">Tipo Doc.del Titular</StyledTableCell>
          <StyledTableCell align="left">Numero Doc.del Titular</StyledTableCell>
           <StyledTableCell align="left">T/C</StyledTableCell>
           <StyledTableCell align="left">Estatus</StyledTableCell>
      </TableRow>
      </TableHead>
      <TableBody>
        {
          setList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((element,key) =>
          <StyledTableRow 
          rows={rows} 
          >  
  
          <StyledTableCell  align="center" id={1} style={{color: "blue", textDecorationLine: "underline", cursor: "pointer"}}  onClick={(e) => handleAlerta(e)} >{element.NombredelCliente}</StyledTableCell>
          <StyledTableCell align="left">{element.CuentaBT}</StyledTableCell>
          <StyledTableCell align="left">{element.CodigoParticipe}</StyledTableCell>
          <StyledTableCell align="left">{element.TipoCliente}</StyledTableCell> 
          {/* <TableCell align="center" rowSpan={2}> o <TableCell   align="center"> */}
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
      </TableBody>              
      </Table>
      <TablePagination
        rowsPerPageOptions={[6, 10, 15]}
        component="div"
        count={ListUser.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </Grid>
          <Grid item xs={1} >
          </Grid>
        </Grid>

          </div> 
          
        </>
    )
}

export default SubscriptionsSearchClientsFunds