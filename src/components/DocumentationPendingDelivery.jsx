import React from 'react'
// import Table from './Table'
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
import { useSearchParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField'; 


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#cc2229',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

 const useStyles = makeStyles({
    table: {
      minWidth: 200,
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
 
 
const DocumentationPendingDelivery = () => { 

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

    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${formatDate(now.getHours())}:${formatDate(now.getMinutes())}`
    const [ValueCombo, setValueCombo] = React.useState(false); 
    
    
    // const tableData = {
    //     th: [
    //         { name: 'FONDO', className: 'date' },
    //         { name: 'NUMERO DE SOLICITUD', className: 'fund' },
    //         { name: 'FECHA DE SOLICITUD', className: 'bank-account' },
    //         { name: 'IMPORTE', className: 'currency' },
    //         { name: 'CODIGO PARTICIPE', className: 'account-number' },
    //         { name: 'NOMBRE DEL PARTICIPE', className: 'module-balance' },
    //         { name: 'FUNCIONARIO QUE ATENDIO LA SOLICIRTUD', className: 'bt-balance' },
    //         { name: 'DOCUMETOS QUE ADEUDA', className: 'difference' },
    //     ],
    //     data: [
    //         ['', 'Angamos-043', '', '', '', '','', ''],
    //         ['SFP $', '51303', '19/08/2003', '73,735.58', '16689', 'LAZARTE MELGAR O LAZART','ORLOFF FERNANDEZ CARMEN IVAOVA', 'CONTRATO' ],
    //         ['', 'TOT.DEUDAS ANGAMOS', '', '', 'CONTRATO:1 BOLETAS SUSCRIPCION: 0'+' BOLETAS RESCATES :0','', ''],
          
    //         ['', 'Angamos-043', '', '', '', '','', ''],
    //         ['SFP $', '51303', '19/08/2003', '73,735.58', '16689', 'LAZARTE MELGAR O LAZART','ORLOFF FERNANDEZ CARMEN IVAOVA', 'CONTRATO' ],
    //         ['', 'TOT.DEUDAS ANGAMOS', '', '', 'CONTRATO:1 BOLETAS SUSCRIPCION: 0'+' BOLETAS RESCATES :0','', ''],
          
    //         ['', 'Angamos-043', '', '', '', '','', ''],
    //         ['SFP $', '51303', '19/08/2003', '73,735.58', '16689', 'LAZARTE MELGAR O LAZART','ORLOFF FERNANDEZ CARMEN IVAOVA', 'CONTRATO' ],
    //         ['', 'TOT.DEUDAS ANGAMOS', '', '', 'CONTRATO:1 BOLETAS SUSCRIPCION: 0'+' BOLETAS RESCATES :0','', ''],
          
    //     ]
    // }

    function createData(name, calories, fat, carbs) {
        return { name, calories, fat, carbs };
      }

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
       
    const setListUser = [
        {
           "Fondo":"",
           "NumerodeSolicitud":"Angamos - 043",
           "FechadeSolicitud":"",
           "Importe":"",
           "CodigoParticipe":"",
           "NombredelParticipe":"",
           "FuncionarioqueAtendiolaSolicitud":"",
           "DocumentosqueAdeuda":""
        },
        {
            "Fondo":"SFP $",
           "NumerodeSolicitud":"51303",
           "FechadeSolicitud":"19/08/2003",
           "Importe":"73,735.58",
           "CodigoParticipe":"16689",
           "NombredelParticipe":"Lazarte Melgar Zoila",
           "FuncionarioqueAtendiolaSolicitud":"Orloff Fernandez Carmen Ivanoa",
           "DocumentosqueAdeuda":"Contrato"
        },
        {
            "Fondo":"",
            "NumerodeSolicitud":"Tot. Deudas Angamos",
            "FechadeSolicitud":"",
            "Importe":"",
            "CodigoParticipe":"Cotrato : 1",
            "NombredelParticipe":"Boletas Suscripcion : 0",
            "FuncionarioqueAtendiolaSolicitud":"Boletas Rescates : 0",
            "DocumentosqueAdeuda":""
        },
        {
            "Fondo":"",
            "NumerodeSolicitud":"Brasil - 221",
            "FechadeSolicitud":"",
            "Importe":"",
            "CodigoParticipe":"",
            "NombredelParticipe":"",
            "FuncionarioqueAtendiolaSolicitud":"",
            "DocumentosqueAdeuda":""
         },
         {
             "Fondo":"SFP $",
            "NumerodeSolicitud":"53785",
            "FechadeSolicitud":"26/08/2003",
            "Importe":"79,735.58",
            "CodigoParticipe":"16689",
            "NombredelParticipe":"Matta Castro Vda de Herrera",
            "FuncionarioqueAtendiolaSolicitud":"Jolay Acuña Claudia Ivonne",
            "DocumentosqueAdeuda":"Contrato"
         },
         {
             "Fondo":"",
             "NumerodeSolicitud":"Tot. Deudas Brasil",
             "FechadeSolicitud":"",
             "Importe":"",
             "CodigoParticipe":"Cotrato : 1",
             "NombredelParticipe":"Boletas Suscripcion : 0",
             "FuncionarioqueAtendiolaSolicitud":"Boletas Rescates : 0",
             "DocumentosqueAdeuda":""
         }
     ];

     const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

      
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    return (
        <>  
            <div className='documentDebGeneration-header'>
                <div className='documentDebGeneration-title'>
                    <h1>Reporte de Documentacion Pendiente de Entrega por Suscripciones y Rescates de Fondos Mutuos CDR:043 de Todas las Agencias Pendientes al 29/05/2023</h1>
                </div>
                <div className='documentDebGeneration-body'> 
                    <div className='documentDebGeneration-body-filters'>
                        <div className='date-range'> 
                        </div>
                    </div> 
                        <button className='btn btn-primary'>Consultar</button>
                        <button className='btn btn-primary'>Exportar</button>
                        <button className='btn btn-primary'>Imprimir</button>
                        <button className='btn btn-primary'>Salir</button> 
                </div>
            </div>  

          <div>
           {/* <Table  data={tableData} /> */}
      <Grid item xs={12} >
      <TableContainer component={Paper}></TableContainer> 
      <Table    className={classes.table} aria-label="customized table">
      <TableHead>
      <TableRow style={{background:'red'}}> 
          <StyledTableCell align="left">Fondo</StyledTableCell>
          <StyledTableCell align="left">Numero de Solicitud</StyledTableCell>
          <StyledTableCell align="left">Fecha de Solicitud</StyledTableCell>
          <StyledTableCell align="left">Importe</StyledTableCell>
          <StyledTableCell align="left">Codigo Participe</StyledTableCell>
          <StyledTableCell align="left">Nombre del Participe</StyledTableCell>
          <StyledTableCell align="left">Funcionario que Atendio la Solicitud</StyledTableCell>
          <StyledTableCell align="left">Documentos que Adeuda</StyledTableCell> 
      </TableRow>
      </TableHead>
      <TableBody>
        {
          setListUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((element,key) =>
          <StyledTableRow 
          rows={rows}
          
          >  
          <StyledTableCell align="center" colSpan={1} >{element.Fondo}</StyledTableCell>
          <StyledTableCell align="left">{element.NumerodeSolicitud}</StyledTableCell>
          <StyledTableCell align="left">{element.FechadeSolicitud}</StyledTableCell>
          <StyledTableCell align="left">{element.Importe}</StyledTableCell> 
          {/* <TableCell align="center" rowSpan={2}> o <TableCell   align="center"> */}
          <StyledTableCell align="left">{element.CodigoParticipe}</StyledTableCell>
          <StyledTableCell align="left">{element.NombredelParticipe}</StyledTableCell>
          <StyledTableCell align="left">{element.FuncionarioqueAtendiolaSolicitud}</StyledTableCell>
          <StyledTableCell align="left">{element.DocumentosqueAdeuda}</StyledTableCell>  
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

          </div>  

        </>
    )
}

export default DocumentationPendingDelivery