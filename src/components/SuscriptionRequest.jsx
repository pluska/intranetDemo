import React, { useState } from 'react'
import SearchSelect from './SearchSelect'

const SuscriptionRequest = () => {
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
    return (
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
                            <SearchSelect label='Seleccione un fondo' options={[{name: "Fondo 1"}, {name: "Fondo 2"}]} />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Ult. Valor Cuota:</label>
                            <input type='text' className='form-control' placeholder='S/.' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Fecha:</label>
                            <input type='date'  />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Hora:</label>
                            <input type='time' className='form-control' />
                        </div>
                    </div>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item__checkbox'>
                            <label className='suscription-record-card__body__item__label'>Firmo el contrato:</label>
                            <input type='checkbox' className='form-control' />
                        </div>
                    </div>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Nro. Total Cuotas Vig:</label>
                            <input type='number' className='form-control' placeholder='0' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Valorizado:</label>
                            <input type='text' className='form-control' placeholder='S/.' />
                        </div>
                    </div>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Cod. Oficio:</label>
                            <input type='text' className='form-control' placeholder='0' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Ofic. de atención:</label>
                            <SearchSelect label='Seleccione una oficina' options={[{name: "Oficina 1"}, {name: "Oficina 2"}]} />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Monto Suscripción:</label>
                            <input type='text' className='form-control' placeholder='S/.' />
                        </div>
                    </div>
                </div>
            }
            {currentTag === 2 &&
                <div className='suscription-record-card__body'>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Cod. Empleado:</label>
                            <input type='text' className='form-control' placeholder='0000' />
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Empleado:</label>
                            <input type='text' className='form-control' placeholder='Nombre del empleado' />
                        </div>
                    </div>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item_radio_group'>
                            <legend className='suscription-record-card__body__item__label'>Tipo de Seleccione Personal de Venta:</legend>
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
                                <SearchSelect label='Seleccione un asesor' options={[{name: "Asesor 1"}, {name: "Asesor 2"}]} />
                            </div>
                        </>
                        }
                    </div>
                    <div className='suscription-record-card__body__group'>
                        <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Monto de Flujos Nuevos</label>
                            <input type='text' className='form-control' placeholder='S/.' />
                        </div>
                    </div>
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
                        <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>N° de Cuenta:</label>
                            <input type='text' className='form-control' placeholder='0000' />
                        </div>
                        }
                        {paymentMethod === 'checkSameBank' &&
                        <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>N° de Cheque:</label>
                            <input type='text' className='form-control' placeholder='0000' />
                        </div>
                        }
                        {paymentMethod === 'checkOtherBank' &&
                        <>
                        <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>N° de Cheque:</label>
                            <input type='text' className='form-control' placeholder='0000' />
                        </div>
                        <div className='suscription-record-card__body__item w-50'>
                            <label className='suscription-record-card__body__item__label'>Banco:</label>
                            <input type='text' className='form-control' placeholder='Nombre del banco' />
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
                                <option value=''>Fondos Propios</option>
                                <option value=''>Fondos de Terceros</option>
                            </select>
                        </div>
                        <div className='suscription-record-card__body__item'>
                            <label className='suscription-record-card__body__item__label'>Propósito del Fondo Mutuo:</label>
                            <select className='form-control'>
                                <option value=''>Seleccione una opción</option>
                                <option value=''>Fondos Propios</option>
                                <option value=''>Fondos de Terceros</option>
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
                    <div className='suscription-record-card__body__group__btns'>
                        <button className='btn btn-primary'>Grabar</button>
                        <button className='btn btn-default'>Limpiar</button>
                        <button className='btn btn-default'>Salir</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default SuscriptionRequest