import React, { useState } from 'react'
import SearchSelect from './SearchSelect'
import Swal from 'sweetalert2';
 
import { useNavigate } from "react-router-dom";

const SuscriptionRequest = () => {

    const navigate = useNavigate();
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
        setPaymentMethod(e.target.value);
    }
    const handleThirdPartyFunds = (e) => {
        setThirdPartyFunds(e.target.value);
    }
    const handleAttentionChannel = (e) => {
        setAttentionChannel(e.target.value);
    }

    const HandleGuardar=(event)=>{ 
            console.log(event.currentTarget.id); 
            console.log(event.target.value);
            if(event.currentTarget.value==1){
            Swal.fire({
                title: 'Confirmación',
                // text: "Importante confirmar con el cliente lo siguiente:  El Fondo Mutuo elegido es :Scotia Fondo Cash $",
                html: `
                <div style="text-align:justify;">
                <p>Importante confirmar con el cliente lo siguiente:</p>
                <label>El Fondo Mutuo elegido es : SCOTIA FONDO CASH $</label> 
                <label>El Monto a suscribir es : $565,656.00</label> 
                <label>La moneda del fondo Mutuo es :$</label> 
                <label>Asesor: Bayona Mac Pherson Tiksi</label> 
                <label>Monto de Flujo Nuevo :$565.00</label>
                <br><br>
                <label>Una vez confirmada la operacion en ventanilla , esta no podra ser extornada</label>  
                <br><br>
                <label>¿confirma los datos de la suscripcion?</label>  
                </div>
                `,
                // icon: 'warning',
                 showCancelButton: true,
                 confirmButtonColor: '#cc2229',
                 cancelButtonColor: '#fffff',
                 confirmButtonText: 'Aceptar'
              }).then((result) => {
                console.log(result); 
                if (result.isConfirmed) {
                    //PostEditUser();
                    console.log('entraaaa'); 
                    // return <Navigate to='/' /> 
                    // navigate("/Subscription-Request-Record")
                    Swal.fire({
                        title: 'Confirmación',
                        html: `
                        <div style="text-align:justify;"> 
                        <label>¿Deseas continuar con la solicitud de suscripcion?</label>  
                        </div>
                        `,
                         showCancelButton: true,
                         confirmButtonColor: '#cc2229',
                         cancelButtonColor: '#fffff',
                         confirmButtonText: 'Aceptar'
                      }).then((result) => {
                         console.log(result); 
                         if (result.isConfirmed) { 
                                Swal.fire({
                                title: 'Informacion',
                                html: `
                                <div style="text-align:justify;"> 
                                <label>El registro de la solicitud de suscripcion fue un exito</label>  
                                </div>
                                `,
                                 showCancelButton: false,
                                 confirmButtonColor: '#cc2229',
                                //scancelButtonColor: '#fffff',
                                 confirmButtonText: 'cerrar'
                                 }).then((result) => {
                                     navigate("/Subscriptions-Search-Clients-Funds")
                                 }) 
                         }}) 
                   } 
              })
           } 
        }
  

    return (
        <>
        <h2 style={{color:'red'}} className='suscription-record-card__title'>Registro de Solicitudes de Suscripcion</h2>
        <div className='group-btns'>
            <button className='btn btn-primary' onClick={(e) => HandleGuardar(e)}     value={1}>Grabar</button>
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
                <h3 className='suscription-record-card__title'>28- RODRIGUEZ LARRIN GONZALES DEL RIEGO DE AVENDAÑO LETICIA</h3>
            </div>
            {currentTag === 1 &&
                <div className='suscription-record-card__body'>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Fondo mutuo:</label>
                            <SearchSelect label='Seleccione un fondo' 
                            options={[{name: "Scotia Fondo Premium $"}, 
                                      {name: "Scotia Fondo Cash $"},
                                      {name: "Scotia Fondo Cash S/."},
                                      {name: "Scotia Fondo Premium s/."},
                                      {name: "Scotia Fondo Mixto Balanceado"},
                                      {name: "Scotia Fondo DE Fondos Cortos Plazo Internacional"}]} />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Ult. Valor Cuota:</label>
                            <input type='text' className='form-control' placeholder='US$. 24.790280' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Fecha:</label>
                            <input type='date' placeholder='13/06/2023' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Hora:</label>
                            <input type='time' className='form-control' placeholder='16:33:00' />
                        </div>
                    </div>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                        <div className='suscription-record-card__body__item__checkbox'>
                            <label className='suscription-record-card__body__item__label'>Firmo el contrato:</label>
                            <input type='checkbox' className='form-control' />
                        </div>
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Nro. Total Cuotas Vig:</label>
                            <input type='number' className='form-control' placeholder='0.000' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Valorizado:</label>
                            <input type='text' className='form-control' placeholder='US$. 0.00' />
                        </div> 
                    </div>
                  
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Cod. Oficio:</label>
                            <input type='text' className='form-control' placeholder='010' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Ofic. de atención:</label>
                            <input type='text' className='form-control' placeholder='CENTRO HISTORICO' />
                           
                            {/* <SearchSelect label='Seleccione una oficina' options={[{name: "Oficina 1"}, {name: "Oficina 2"}]} /> */}
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Monto de Suscripción:</label>
                            <input type='text' className='form-control' placeholder='0.00' />
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
                            <input type='text' className='form-control' placeholder='CHAVES MENTANZA JHANSEN DEIBY' />
                        </div>
                    </div>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item_radio_group'>
                            <legend className='suscription-record-card__body__item__label'>Seleccione Personal de Venta:</legend>
                            <div className='suscription-record-card__body__item__radio'>
                                <input type='radio' className='form-control' name='PersonalSales' value={"RSCode"} onChange={handlePersonalSales} />
                                <label className='suscription-record-card__body__item__label' for="RSCode">Código del RS o personal de apoyo en la venta</label>
                            </div>
                            <div className='suscription-record-card__body__item__radio'>
                                <input type='radio' className='form-control' name='PersonalSales' value={"adviser"} onChange={handlePersonalSales} />
                                <label className='suscription-record-card__body__item__label' for="adviser">Asesor</label>
                            </div>
                        </div>
                    </div>
                    <div className='suscription-record-card__body__group'>
                        {personalSales === 'RSCode' &&
                        <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Cod. Del RS personal:</label>
                            <input type='text' className='form-control' placeholder='0000' />
                        </div>
                        }
                        {personalSales === 'adviser' &&
                        <>
                            <div className='suscription-record-card__body__item'>
                                <label className='suscription-record-card__body__item__label'>Tipo de Asesor:</label>
                                <select className='form-control'>
                                    <option value=''>Seleccione una opción</option>
                                    <option value=''>Asesor Corporativo Inversiones</option>
                                    <option value=''>Ejecutivo de Inversión</option>
                                </select>
                            </div>
                            <div className='suscription-record-card__body__item'>
                                <label className='suscription-record-card__body__item__label'>Seleccione Asesor:</label> 
                                <select className='form-control'>
                                    <option value=''>Seleccione una opción</option>
                                    <option value=''>BAYONA MAC PHERSON TIKSI</option>
                                    <option value=''>BERTINI WIESSE LUIS CRLOS</option>
                                    <option value=''>CATERIANO MENDOZA LILIANA PAOLA</option>
                                </select>
                            </div>

                            <div className='suscription-record-card__body__item'>
                                <label className='suscription-record-card__body__item__label'>Seleccione Cliente:</label>
                                     
                                 <select className='form-control'>
                                    <option value=''>Seleccione una opción</option>
                                    <option value=''>PF:Profuturo</option>
                                    <option value=''>PRO:Premium</option>
                                    <option value=''>CP:Cartera Propia</option>
                                 </select>
                            </div>
                        </>
                        }
                    </div>
                    {/* <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Monto de Flujos Nuevos</label>
                            <input type='text' className='form-control' placeholder='S/.' />
                        </div>
                    </div> */}
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <div className='suscription-record-card__body__item_radio_group'>
                                <legend className='suscription-record-card__body__item__label'>Formas de Pago de la Suscripción:</legend>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='paymentMethod' value={"cash"} onChange={handlePaymentMethod} />
                                    <label className='suscription-record-card__body__item__label' for="cash">Efectivo</label>
                                </div>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='paymentMethod' value={"chargeOnAccount"} onChange={handlePaymentMethod} />
                                    <label className='suscription-record-card__body__item__label' for="chargeOnAccount">Cargo en Cuenta</label>
                                </div>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='paymentMethod' value={"checkSameBank"} onChange={handlePaymentMethod} />
                                    <label className='suscription-record-card__body__item__label' for="checkSameBank">Cheque Mismo Banco</label>
                                </div>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='paymentMethod' value={"checkOtherBank"} onChange={handlePaymentMethod} />
                                    <label className='suscription-record-card__body__item__label' for="checkOtherBank">Cheque Otro Banco</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='suscription-record-card__body__group'>
                        {paymentMethod === 'chargeOnAccount' && 
                        <>   
                           <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Cuenta Bancaria del Participe:</label>
                                <select className='form-control'>
                                    <option value=''>Seleccione Tipo Cuenta</option>
                                    <option value=''>CCMN</option>
                                    <option value=''>CCME</option>
                                    <option value=''>LHMN</option>
                                 </select>
                           </div>

                           <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Nro. Cuenta:</label>
                            <input type='text' className='form-control' placeholder='0000' />
                           </div>

                           <div className='suscription-record-card__body__item w-50'>
                              <div className='suscription-record-card__body__item__checkbox'>
                              <label className='suscription-record-card__body__item__label'>Nueva Cuenta:</label>
                              <input type='checkbox' className='form-control' />
                              </div>
                           </div>
                        </>
                       
                        }
                        {paymentMethod === 'checkSameBank' &&

                      <>
                          <div className='suscription-record-card__body__item w-50'>
                                <label className='suscription-record-card__body__item__label'>Banco:</label>
                                <select className='form-control'>
                                    <option value=''>Scotiabank Peru S.A.A.</option>
                                 </select>
                          </div>
                          <div className='suscription-record-card__body__item w-50'>
                                   <label className='suscription-record-card__body__item__label'>N° de Cheque:</label>
                                      <input type='text' className='form-control' placeholder='0000' />
                          </div>
                          <div className='suscription-record-card__body__item w-50'>
                                         <label className='suscription-record-card__body__item__label'>N° de Cuenta:</label>
                                      <input type='text' className='form-control' placeholder='0000' />
                          </div>       
                       </> 
                        }
                        {paymentMethod === 'checkOtherBank' &&
                        <>
                               <div className='suscription-record-card__body__item w-50'>
                                <label className='suscription-record-card__body__item__label'>Banco:</label>
                                <select className='form-control'>
                                    <option value=''>Banco de Credito del Peru</option>
                                    <option value=''>Banco Pichincha</option>
                                    <option value=''>Banco del Trabajo</option>
                                    <option value=''>Banco Central de Reserva del Peru</option> 
                                 </select>
                          </div>
                          <div className='suscription-record-card__body__item w-50'>
                                   <label className='suscription-record-card__body__item__label'>N° de Cheque:</label>
                                      <input type='text' className='form-control' placeholder='0000' />
                          </div>
                          <div className='suscription-record-card__body__item w-50'>
                                         <label className='suscription-record-card__body__item__label'>N° de Cuenta:</label>
                                      <input type='text' className='form-control' placeholder='0000' />
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
                            <label className='suscription-record-card__body__item__label'>Origen de Fondos:</label>
                            <select className='form-control'>
                                <option value=''>Seleccione una opción</option>
                                <option value=''>Ahorros</option>
                                <option value=''>Herencia/Donaciones</option>
                                <option value=''>Otorgamiento de un Credito</option>
                                <option value=''>Venta de Bienes</option>
                                <option value=''>Sueldo / Cts</option>
                            </select>
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Propósito del Fondo Mutuo:</label>
                            <select className='form-control'>
                                <option value=''>Seleccione una opción </option>
                                <option value=''>Rentabilizar </option>
                                <option value=''>Planes futuros </option>
                                <option value=''>Vacaciones </option>
                                <option value=''>Estudios </option>
                                <option value=''>Ahorrar </option>
                                <option value=''>Garantia de Operacion de Credito</option>
                            </select>
                        </div>
                    </div>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <div className='suscription-record-card__body__item_radio_group'>
                                <legend className='suscription-record-card__body__item__label'>¿El origen de los fondos es de un tercero?</legend>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='thirdPartyFunds' value={"yes"} onChange={handleThirdPartyFunds} />
                                    <label className='suscription-record-card__body__item__label' for="yes">Si</label>
                                </div>
                                <div className='suscription-record-card__body__item__radio'>
                                    <input type='radio' className='form-control' name='thirdPartyFunds' value={"no"} onChange={handleThirdPartyFunds} />
                                    <label className='suscription-record-card__body__item__label' for="no">No</label>
                                </div>
                            </div>
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
                </div>
            }
        </div>
        </>
    )
}

export default SuscriptionRequest