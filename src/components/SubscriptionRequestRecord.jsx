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
  
 
    return (
        <> 
            <div className='report-header'>
                <div className='report-title'>
                    <h1>Registros de Solicitudes de Suscripción</h1>
                </div>
                <div className='report-body'>
                    <div className='report-body-filters'> 
                            <div className='report-filters-container'>      


                            <div className='report-filters-group'>
                             <label>Fondo Mutuo:</label>
                                <select className='date-range-input'  >
                                    <option value="1"></option>
                                    <option value="2"></option>
                                </select>
                             </div>


                             <div className='report-filters-group'> 
                                <input type='text' placeholder='Ult Valor Cuota' id='date-range-input' disabled  />

                                <label >Fecha(dd/mm/yyyy):</label>
                                <input type='text' id='date-range-input'  placeholder='31/05/2023' disabled />

                                <label >Hora(HH:MM:SS):</label>
                                <input type='text' id='date-range-input' placeholder='21:03:31' disabled   />

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
                        <button className='btn btn-primary'>Grabar</button>
                        <button className='btn btn-default'>Limpiar</button>
                        <button className='btn btn-default'>Salir</button>
                    </div>
                </div>
            </div>
 
          <div className='report-table'>
          {/* <Table data={tableData} /> */}
   
          </div> 
          
        </>
    )
}

export default SubscriptionRequestRecord