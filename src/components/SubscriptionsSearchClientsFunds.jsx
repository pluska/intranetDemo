import React from 'react'
import Table from './Table'
import { useSearchParams } from "react-router-dom";
 
 
const SubscriptionsSearchClientsFunds = () => {

     

    const now = new Date()
    const formatDate = (date) => {
        return date < 10 ? `0${date}` : date
    }
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${formatDate(now.getHours())}:${formatDate(now.getMinutes())}`
   
    const [ValueCombo, setValueCombo] = React.useState(0);
 
    const tableData = {
        th: [
            { name: 'Nombre del Cliente', className: 'date' },
            { name: 'Cuenta BT', className: 'fund' },
            { name: 'Codigo Participe', className: 'bank-account' },
            { name: 'Tipo Cliente', className: 'currency' },
            { name: 'Segmento', className: 'account-number' },
            { name: 'Tipo Doc.del Titular', className: 'module-balance' },
            { name: 'Numero Doc.del Titular', className: 'bt-balance' },
        ],
        data: [
            ['Stahl jashcke edmundp', '', '263','Mancomunado' ,'No identificado' ,
                'L.E/.D.N.I', '10268564', '', ''],
             
        ]
    }

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
        

     console.log(ValueCombo);


    return (
        <> 
            <div className='subscriptionSearchClients-header'>
                <div className='subscriptionSearchClients-title'>
                    <h2>Suscripciones-Busqueda de clientes de Fondos Mutuos</h2>
                </div>
                <div className='subscriptionSearchClients-body'> 
                    <div className='subscriptionSearchClients-body-filters'>
                        <div className='date-range'> 
                             <div className='date-range-container'> 
                                <label htmlFor='date-range-to'>Nombre de Cliente:</label>
                                <input type='text' id='date-range-to' className='date-range-input' />
                            </div>
                            <div className='date-range-container'>
                                <label   htmlFor='date-range-to'  >Seleccione:</label>
                                <select className='date-range-input' onChange={(e) => handleClickselect(e)}>
                                    <option value="1">Código Partícipe</option>
                                    <option value="2" selected>Cuenta BT</option> 
                                </select>    
                                &nbsp; &nbsp; 

                    {
                        ValueCombo == 0 ?
                        <input type='text' id='date-range-to' placeholder='Cuenta BT' className='date-range-input'/> 
                        :
                        ValueCombo == 1 ?
                        <input type='text' id='date-range-to' placeholder='Código Partícipe' className='date-range-input'/>                         
                        : 
                        <input type='text' id='date-range-to' placeholder='Cuenta BT' className='date-range-input'/>                               
                    }
                                   
                                
                                &nbsp; &nbsp;  
                                <label htmlFor='date-range-to'>Nro.Documento:</label>

                                <input type='text' id='date-range-to' className='date-range-input' />
                            </div>
                        </div>
                    </div>
                    <div className='subscriptionSearchClients-body-btns'>
                        <button className='btn btn-primary'>Buscar</button>
                        <button className='btn btn-primary'>Limpiar</button>
                        <button className='btn btn-primary'>Salir</button>
                    </div>
                </div>
            </div>
 
          <div className='subscriptionSearchClients-table'>
          <Table data={tableData} />
          </div> 
          
        </>
    )
}

export default SubscriptionsSearchClientsFunds