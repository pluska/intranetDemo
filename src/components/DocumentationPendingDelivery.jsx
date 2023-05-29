import React from 'react'
import Table from './Table'
import { useSearchParams } from "react-router-dom";
import Select from 'react-select';
 
const DocumentationPendingDelivery = () => { 
    const [searchParams, setSearchParams] = useSearchParams(); 
    const now = new Date()
    const formatDate = (date) => {
        return date < 10 ? `0${date}` : date
    }
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${formatDate(now.getHours())}:${formatDate(now.getMinutes())}`
    const [ValueCombo, setValueCombo] = React.useState(false); 
    const tableData = {
        th: [
            { name: 'FONDO', className: 'date' },
            { name: 'NUMERO DE SOLICITUD', className: 'fund' },
            { name: 'FECHA DE SOLICITUD', className: 'bank-account' },
            { name: 'IMPORTE', className: 'currency' },
            { name: 'CODIGO PARTICIPE', className: 'account-number' },
            { name: 'NOMBRE DEL PARTICIPE', className: 'module-balance' },
            { name: 'FUNCIONARIO QUE ATENDIO LA SOLICIRTUD', className: 'bt-balance' },
            { name: 'DOCUMETOS QUE ADEUDA', className: 'difference' },
        ],
        data: [
            ['', 'Angamos-043', '', '', '', '','', ''],
            ['SFP $', '51303', '19/08/2003', '73,735.58', '16689', 'LAZARTE MELGAR O LAZART','ORLOFF FERNANDEZ CARMEN IVAOVA', 'CONTRATO' ]
        ]
    }

    const options = [{label: "Recibido", value: 1}, {label: "Pendiente", value: 2},{label: "Observado", value: 3}];
       
    const userIdHandler = (value) => {
     console.log(value);
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
          <div className='documentDebGeneration-table'>
          <Table data={tableData} />
          </div>  
        </>
    )
}

export default DocumentationPendingDelivery