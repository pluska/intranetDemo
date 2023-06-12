import React, { useState } from 'react'
import SearchSelect from './SearchSelect'
import Table from './Table'

const RecordRansomRequests = () => {
    const [currentTag, setCurrentTag] = useState(1);
    const [personalSales, setPersonalSales] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [thirdPartyFunds, setThirdPartyFunds] = useState(false);
    const [attentionChannel, setAttentionChannel] = useState("");
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
                <h3 className='suscription-record-card__title'>32- CASTRO VELASQUEZ LEONCIO HERMOGENES</h3>
            </div> 
            {currentTag === 1 &&
                <div className='suscription-record-card__body'>
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
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Cod. Empleado:</label>
                            <input type='text' className='form-control' placeholder='23117' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Empleado:</label>
                            <input type='text' className='form-control' placeholder='CHAVEZ MESTAZANA JHANSEN DEIBY' />
                        </div>
 
                    </div>


                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item__checkbox'>
                            <label className='suscription-record-card__body__item__label'>Incluir Asesor:</label>
                            <input type='checkbox' className='form-control' />
                        </div>
                     </div>

                     <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <div className='suscription-record-card__body__item_radio_group'>
                                <legend className='suscription-record-card__body__item__label'>Formas de Pago de la Suscripción:</legend>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='paymentMethod' value={"cash"} onChange={handlePaymentMethod} />
                                    <label className='suscription-record-card__body__item__label' for="cash">Abono en Cuenta</label>
                                </div>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='paymentMethod' value={"chargeOnAccount"} onChange={handlePaymentMethod} />
                                    <label className='suscription-record-card__body__item__label' for="chargeOnAccount">Orden Pago en Agencia</label>
                                </div>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='paymentMethod' value={"checkSameBank"} onChange={handlePaymentMethod} />
                                    <label className='suscription-record-card__body__item__label' for="checkSameBank">Transferencia BCRP</label>
                                </div>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='paymentMethod' value={"checkOtherBank"} onChange={handlePaymentMethod} />
                                    <label className='suscription-record-card__body__item__label' for="checkOtherBank">Transferencia al Exterior</label>
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
                        {paymentMethod === 'cash' &&
                         <> 
                         <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Cuenta Bancaria de Participe:</label>
                            <SearchSelect label='Tipo Cuenta' 
                             options= {[{name: "CCME"},
                                       {name: "LHME"},
                             ]} /> 
                        </div>
                           
                          <div className='suscription-record-card__body__item w-20'>
                            <label className='suscription-record-card__body__item__label'>Nro. Cuenta:</label>
                            <input type='text' className='form-control' name='Nro. Cuenta'    />
                         </div>

                         <div className='suscription-record-card__body__item w-10'>   
                             <div className='suscription-record-card__body__item__checkbox'>
                               <label className='suscription-record-card__body__item__label'>Nueva Cuenta:</label>
                               <input type='checkbox' className='form-control' />
                             </div> 
                         </div> 
                         </>
                        } 
                    </div>   
                </div>
            }
            {currentTag === 3 &&
                <div className='suscription-record-card__body'>
                    
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'> 
                            <label className='suscription-record-card__body__item__label'>Codigo de CDR:</label>
                            <input type='text' className='form-control' placeholder='010' /> 
                        </div>
                        <div className='suscription-record-card__body__item'> 
                            <label className='suscription-record-card__body__item__label'>Oficina de Atencion:</label>
                            <input type='text' className='form-control' placeholder='Centro Historico' /> 
                        </div>
                    </div>
 

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
                     
              
                    <div className='suscription-record-card__body__group__btns'>
                        <button className='btn btn-primary'>Grabar</button>
                        <button className='btn btn-default'>Limpiar</button>
                        <button className='btn btn-default'>Salir</button>
                 </div> 
                </div>
          
          
          }  

                  
         </div>

          
          </div>

         
    )
}

export default RecordRansomRequests