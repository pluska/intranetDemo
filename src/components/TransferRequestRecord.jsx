import React, { useState } from 'react'
import SearchSelect from './SearchSelect'
import Table from './Table'

const TransferRequestRecord = () => {
    const [currentTag, setCurrentTag] = useState(1);
    const [personalSales, setPersonalSales] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [thirdPartyFunds, setThirdPartyFunds] = useState(false);
    const [attentionChannel, setAttentionChannel] = useState(""); 
    const [checked, setChecked] = React.useState(false); 
     
    const handleStage = (n) => {
        setCurrentTag(n);
    }
    const handlePersonalSales = (e) => {
        setPersonalSales(e.target.value);
    }
    const handlePaymentMethod = (e) => {
         console.log(e.target.value);
         setPaymentMethod(e.target.value);
    }
    const handleThirdPartyFunds = (e) => {
        setThirdPartyFunds(e.target.value);
    }
    const handleAttentionChannel = (e) => {
        setAttentionChannel(e.target.value);
    }

     const handleChange = (e) => {
        console.log("entra check"); 
        setChecked(!checked);
      };

      const handleSelectlgr =(e) => {
        console.log(e.target.value);

      }
 
    console.log(checked);

    const tableData = {
      th: [
          { name: 'Nro. Certificado', className: 'module-balance' },
          { name: 'Numero Cuotas', className: 'module-balance' },
          { name: '¿Rescatar?', className: 'module-balance' },
          { name: 'Val. Comi', className: 'currency' },
          { name: 'Val. IGV', className: 'account-number' },
          { name: 'Dias Corridos', className: 'module-balance' },
          { name: 'Ganancia', className: 'bt-balance' },
          { name: '¿Resc. Prog.?', className: 'difference' },
          { name: '¿Emitido?', className: 'difference' },
          { name: 'Valor Actual', className: 'difference' },
          { name: 'Tipo RESC.', className: 'difference' },
          { name: 'Monto RESC.', className: 'difference' },
          { name: 'Cuotas RESC.', className: 'difference' },
          { name: 'Tipo SOLI.', className: 'difference' },
          { name: 'Nro .RPROG', className: 'difference' },
          { name: 'Comision(%)', className: 'difference' },
          { name: 'Cod.El', className: 'difference' },
          ],
      data: [ 
          ['', '', '', , ,'', '', '', '', '', '' ,'']
      ]
  }
 

    return (
      <div>
            <h2 style={{color:'red'}} className='suscription-record-card__title'>Registro de Solicitudes de Traspaso</h2>
            <div className='group-btns'>
            <button className='btn btn-primary'>Grabar</button>
            <button className='btn btn-default'>Limpiar</button>
            <button className='btn btn-default'>Salir</button>
            </div>
            <div className='suscription-record-card'>
            <div className='suscription-record-card__header'>
            <div className='suscription-record-card__header__tags'>
                <span
                className={currentTag === 1 ?
                "suscription-record-card__header__tag active"
                : "suscription-record-card__header__tag"}
                onClick={() => handleStage(1)}>
                    Parte 1
                </span>
                <span className={currentTag === 2 ?
                "suscription-record-card__header__tag active"
                : "suscription-record-card__header__tag"}
                onClick={() => handleStage(2)}>
                    Parte 2
                </span>
                <span className={currentTag === 3 ?
                "suscription-record-card__header__tag active"
                : "suscription-record-card__header__tag"}
                onClick={() => handleStage(3)}>
                    Parte 3
                </span>
            </div>
                <h3 className='suscription-record-card__title'>4 - RICCE NICOLI JOSE O PFLUCKER MORENO MARIA LUISA</h3>
            </div>  
            {currentTag === 1 && 
             <div className='suscription-record-card__body'>
                 <h3 className='suscription-record-card__title' style={{color:'red'}}>Fondo Origen</h3>

                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Fondo mutuo:</label>
                            <SearchSelect label='Seleccione un fondo' 
                             options={[{name: "Seleccione"},
                                       {name: "Scotia Fondo Premium $"},
                                       {name: "Scotia Fondo Cash $"},
                                       {name: "Scotia Fondo Cash S/."}]} />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Ult. Valor Cuota:</label>
                            <input type='text' className='form-control' placeholder='S/.' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Fecha(dd/mm/yyyy):</label>
                            <input type='date'  />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Hora(HH:MM:SS):</label>
                            <input type='time' className='form-control' />
                        </div>
                    </div>

                  <div className='suscription-record-card__body__group'> 
                     <div style={{ fontSize:12 }}  className='report-table'>
                        <Table data={tableData} />
                     </div>
                     </div>

                     <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item__checkbox'>
                            <label className='suscription-record-card__body__item__label'>Firmo el contrato G:</label>
                            <input type='checkbox' className='form-control' />
                        </div>
                     </div>
                     <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Cuotas Vig:</label>
                            <input type='number' className='form-control' placeholder='0.000' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Valor Actual:</label>
                            <input type='text' className='form-control' placeholder='US$ 0.00' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Nro CRT's a Rescatar:</label>
                            <input type='text' className='form-control' placeholder='0' />
                        </div> 
                    </div> 
                </div>
            }

            {currentTag === 2 && 


<div className='suscription-record-card__body'>
<h3 className='suscription-record-card__title' style={{color:'red'}}>Fondo Destino</h3>

   <div className='suscription-record-card__body__group'>
       <div className='suscription-record-card__body__item'>
           <label className='suscription-record-card__body__item__label'>Fondo mutuo:</label>
           <SearchSelect label='Seleccione un fondo' 
            options={[{name: "Seleccione"},
                      {name: "Scotia Fondo Premium $"},
                      {name: "Scotia Fondo Cash $"},
                      {name: "Scotia Fondo Cash S/."}]} />
                   </div>
                      <div className='suscription-record-card__body__item'>
                        <label className='suscription-record-card__body__item__label'>Ult. Valor Cuota:</label>
                        <input type='text' className='form-control' placeholder='S/.' />
                       </div> 
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Cod. Empleado:</label>
                            <input type='text' className='form-control' placeholder='23117' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Nombre Empleado:</label>
                            <input type='text' className='form-control' placeholder='CHAVEZ MESTAZANA JHANSEN DEIBY' />
                        </div> 
                    </div>

                    <div className='suscription-record-card__body'> 
                     <div className='suscription-record-card__body__group'>
                      <div className='suscription-record-card__body__item'>
                          <div className='suscription-record-card__body__item__checkbox'>
                            <label className='suscription-record-card__body__item__label'>Asesor:</label>
                            <input type='checkbox' className='form-control' 
                            // value={LastAsesor}   
                            checked={checked}
                            onChange={handleChange}
                            />
                          </div> 
                          </div>   
                        
                     {
                      checked == true ?
                      <> 
                      <div className='suscription-record-card__body__item'>
                      <label className='suscription-record-card__body__item__label'>Tipo Asesor:</label>
                      <SearchSelect   label='Seleccione'  
                                      options={[{name: "Seleccione"},
                                      {name: "Asesor Corporativo Inversiones"},
                                      {name: "Ejecutivo de Inversion"},
                                      ]} />
                      </div> 
                      <div className='suscription-record-card__body__item'>
                      <label className='suscription-record-card__body__item__label'>Asesor:</label>
                      <SearchSelect    label='Seleccione'  
                         options={[{name: "Seleccione"},
                                 {name: "BAYONA MAC PHERSON TIKSI"},
                                 {name: "BERTINI WIESEE LUIS CARLOS"},
                                 {name: "CATERIAO MENDOZA LILIANA PAOLA"}]} />
                     </div>
                        {/* {
                            <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Origen Cliente:</label>
                            <SearchSelect label='Seleccione' 
                                options={[{name: "Seleccione"},
                                        {name: "PF:Profuturo"},
                                        {name: "PRO:Premium"},
                                        {name: "CP:Cartera Propia"}]} />
                            </div>
                    } */}
                     </> 
                     :  
                     <> 
                     </> 
                     } 

                     </div>  
                     <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <div className='suscription-record-card__body__item_radio_group'>
                            <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>CDR</label>
                            <input type='number' className='form-control' placeholder='010' />
                        </div> 
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Oficina de Atencion:</label>
                            <input type='number' className='form-control' placeholder='Centro Historico' />
                        </div> 
                        <div className='suscription-record-card__body__item'>
                          <label className='suscription-record-card__body__item__label'>Proposito del Fondo Mutuo:</label>
                           <SearchSelect label='Seleccione' 
                             options={[{name: "Seleccione"},
                                         {name: "Rentabilizar"},
                                         {name: "Planes Futuros"},
                                         {name: "Vacaciones"},
                                         {name: "Estudios"},
                                         {name: "Ahorrar"},
                                         {name: "Garantia de Operaciones de credito"}
                                         ]} />
                            </div> 
                         </div>
                      </div>
                    </div>  
                  <div className='suscription-record-card__body__group'>
                        {paymentMethod === 'chargeOnAccount' && 
                         
                      <>  
                      <div className='suscription-record-card__body__item w-20'>
                        <label className='suscription-record-card__body__item__label'>Orden de Pago en Agencia:</label>
                        <input type='text' className='form-control' name='Nro. Cuenta'    />
                      </div>

                      <div className='suscription-record-card__body__item w-50'>
                        <label className='suscription-record-card__body__item__label'>Seleccione Agencia:</label>
                        <SearchSelect label='Tipo Cuenta' 
                          options= {[{name: "Abancay"},
                                    {name: "Aduana Maritima"},
                                    {name: "Agencia Cerro de Pasco"},
                                    {name: "Agencia Gamarra 3"},
                                    {name: "Agencia la Merced"},
                                    {name: "Agencia Larapa"}, 
                          ]} /> 
                      </div> 
                      </> 
                           
                        }
                        {paymentMethod === 'checkSameBank' &&
                          <>  
                          <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Seleccione Banco:</label>
                            <SearchSelect label='Tipo Cuenta' 
                              options= {[{name: "Banco del Credito del Peru"},
                                        {name: "Banco Internacional del Peru - Interbank"},
                                        {name: "Banco Pichincha"},
                                        {name: "Banco del Trabajo"},
                              ]} /> 
                          </div>  
                          <div className='suscription-record-card__body__item w-20'>
                            <label className='suscription-record-card__body__item__label'>Nro. Cuenta:</label>
                            <input type='text' className='form-control' name='Nro. Cuenta'    />
                          </div> 
                          </>   
                        }
                        {paymentMethod === 'checkOtherBank' &&
                        <>
                         <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Seleccione Banco:</label>
                            <SearchSelect label='Tipo Cuenta' 
                              options= {[{name: "Banco del Credito del Peru"},
                                        {name: "Banco Internacional del Peru - Interbank"},
                                        {name: "Banco Pichincha"},
                                        {name: "Banco del Trabajo"},
                              ]} /> 
                         </div>  
                         <div className='suscription-record-card__body__item w-20'>
                            <label className='suscription-record-card__body__item__label'>Nro. Cuenta:</label>
                            <input type='text' className='form-control' name='Nro. Cuenta'    />
                         </div>
                        </>
                        }
                      
                    </div>   
                </div>
                </div>
            }
           
            {currentTag === 3 &&

            
                <div className='suscription-record-card__body'> 

<h3 className='suscription-record-card__title' style={{color:'red'}}>Fondo Destino</h3>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <div className='suscription-record-card__body__item_radio_group'>
                                <legend className='suscription-record-card__body__item__label'>Canal de Atención</legend>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='attentionChannel' value={"branch"} onChange={handleAttentionChannel} />
                                    <label className='suscription-record-card__body__item__label' for="branch">Red de Agencias</label>
                                </div>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='attentionChannel' value={"online"} onChange={handleAttentionChannel} />
                                    <label className='suscription-record-card__body__item__label' for="online">Scotia en Línea-Joy</label>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Observaciones:</label>
                            <textarea className='form-control' rows='3' placeholder='Ingrese sus observaciones'></textarea>
                        </div>
                    </div> 
                  
                </div> 
             }   
          </div> 
          </div> 
    )
}

export default TransferRequestRecord