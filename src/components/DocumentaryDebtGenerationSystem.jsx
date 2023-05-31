import React from 'react'
import Table from './Table'
import { useSearchParams } from "react-router-dom";
<<<<<<< HEAD
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';


=======
 
>>>>>>> dd80ae66dceb094747f2c9d8fd36ac3c427683ba
const DocumentaryDebtGenerationSystem = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const now = new Date()
    const formatDate = (date) => {
        return date < 10 ? `0${date}` : date
    }

    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${formatDate(now.getHours())}:${formatDate(now.getMinutes())}`
    const [ValueCombo, setValueCombo] = React.useState(false);
 
    const tableData = {
        th: [
            { name: 'Fecha de operación', className: 'date' },
            { name: 'Código cliente', className: 'fund' },
            { name: 'Razón Social', className: 'bank-account' },
            { name: 'Tipo de Operación', className: 'currency' },
            { name: 'Id de Oficina gestora', className: 'account-number' },
            { name: 'Tipo DOI', className: 'module-balance' },
            { name: 'Número de DOI', className: 'bt-balance' },
            { name: 'Estado de Recepción', className: 'difference' },
            { name: 'Estado de Completitud', className: 'difference' },
            { name: 'Estado Validacion', className: 'difference' },
            { name: 'Documentos faltantes', className: 'difference' },
            { name: 'Motivo rechazo', className: 'difference' },
            { name: 'Fecha de regularización', className: 'difference' },
            { name: 'Tipo de Perfil', className: 'difference' },
        ],
        data: [
            [`${date}`, '8074272', 'Razon social', 'Rescate Parcial valor desconocido', 1, 1,
                '23454566', 'Recibido', 'Completo', 'Observado', 'Doir', 'Falta Firma Participe', `${date}`,'perfiles de inversión'],
            [`${date}`, '80742256', 'Razon social', 'Deposito', 1, 2,
                '1234567', 'Pendiente', 'Incompleto', 'Regula_Cliente', '', '', `${date}`,'perfiles de inversión']
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
                    <h2>Generación de reporte de seguimiento de deuda documentaria en sistema</h2>
                </div>
                <div className='documentDebGeneration-body'> 
                    <div className='documentDebGeneration-body-filters'>
                        <div className='date-range'>
                            <div className='date-range-container'>
                                <label htmlFor='date-range-to'>Fecha Inicio:</label>
                                <input type='date' id='date-range-to' className='date-range-input' />
                                <label htmlFor='date-range-to'>Fecha Final:</label>
                                <input type='date' id='date-range-to' className='date-range-input' />
                                <label htmlFor='date-range-to'>Tipo de Fondos:</label>
                                <select className='date-range-input'>
                                    <option value="0" selected>seleccionar</option>
                                    <option value="">01    SCOTIA FONDO PREMIUM $    </option>
                                    <option value="">02    SCOTIA FONDO CASH $     </option>
                                    <option value="">03    SCOTIA FONDO CASH S/.    </option>
                                    <option value="">04    BWS FONDO RENTA SELECT      </option>
                                    <option value="">05    SCOTIA FONDO PREMIUM S/.     </option>
                                    <option value="">08    SCOTIA FONDO ACCIONES       </option>
                                    <option value="">07    SCOTIA FONDO MIXTO MODERADO   </option>
                                    <option value="">12    SCOTIA FONDO DEPOSITO DISPONIBLE S/. </option>
                                    <option value="">11    SCOTIA FONDO DEPOSITO DISPONIBLE $   </option>
                                    <option value="">09    SCOTIA FONDO MIXTO BALANCEADO S/.   </option>
                                    <option value="">13    SCOTIA FONDO RENTA LATAM 4 Y      </option>
                                    <option value="">14    SCOTIA FONDO DE FONDOS ACCIONES EMERGENTES  </option>
                                    <option value="">15    SCOTIA FONDO DE FONDOS ACCIONES US    </option>
                                    <option value="">06    SCOTIA FONDO MIXTO BALANCEADO     </option>
                                    <option value="">16    SCOTIA FONDO RENTA DOLARES 2Y    </option>
                                    <option value="">17    SCOTIA FONDO RENTA SOLES 5 AÑOS   </option>
                                    <option value="">18    SCOTIA FONDO RENTA LATAM 4Y II    </option>
                                    <option value="">19    SCOTIA FONDO RENTA LATAM 6Y      </option>
                                    <option value="">20    SCOTIA FONDO RENTA SOLES 4.5Y     </option>
                                    <option value="">21    SCOTIA FONDO RENDIMIENTO BINARIO DOLARES  </option>
                                    <option value="">22    SCOTIA FONDO RENTA DOLARES 2Y II       </option>
                                    <option value="">23    SCOTIA FONDO RENDIMIENTO BINARIO SOLES   </option>
                                    <option value="">24    SCOTIA FONDO RENDIMIENTO BINARIO DOLARES II   </option>
                                    <option value="">25    SCOTIA FONDO RENDIMIENTO MEJORADO SOLES I      </option>
                                    <option value="">26    SCOTIA FONDO RENTA DOLARES 2Y III    </option>
                                    <option value="">27    SF RENTA DOLARES 6M              </option>
                                    <option value="">28    SF RENDIMIENTO BINARIO DOLARES IV  </option>
                                    <option value="">29    SF RENDIMIENTO BINARIO SOLES II     </option>
                                    <option value="">30    SF RENDIMIENTO BINARIO DOLARES III   </option>
                                    <option value="">31    SF RENDIMIENTO MEJORADO SOLES II    </option>
                                    <option value="">32    SF RENTA DOLARES 6M II           </option>
                                    <option value="">33    SCOTIA FONDO DE FONDOS ACCIONES EUROPA     </option>
                                    <option value="">34    SCOTIA FONDO DE FONDOS DEUDA IG      </option>
                                    <option value="">35    SCOTIA FONDO DE FONDOS DEUDA HY     </option>
                                    <option value="">36    SF RENDIMIENTO BINARIO DOLARES V    </option>
                                    <option value="">37    SF RENDIMIENTO MEJORADO SOLES IV    </option>
                                    <option value="">38    SF RENDIMIENTO CONDICIONAL SOLES    </option>
                                    <option value="">39    SF RENDIMIENTO BINARIO DOLARES VII   </option>
                                    <option value="">40    SF RENTA DOLARES 6M III             </option>
                                    <option value="">41    SCOTIA FONDO RENTA DOLARES 2Y IV    </option>
                                    <option value="">42    SF RENDIMIENTO CONDICIONAL SOLES II    </option>
                                    <option value="">43    SF RENTA DOLARES 1Y             </option>
                                    <option value="">44    SF RENDIMIENTO ACTIVO DOLARES     </option>
                                    <option value="">45    SF RENDIMIENTO BINARIO SOLES IV     </option>
                                    <option value="">46    SF RENTA DOLARES 6M IV           </option>
                                    <option value="">48    SF RENDIMIENTO BINARIO DOLARES IX      </option>
                                    <option value="">47    SF RENDIMIENTO MEJORADO SOLES V FMIV      </option>
                                    <option value="">49    SF RENTA SOLES 1Y                </option>
                                    <option value="">50    SF RENTA DOLARES 1Y II           </option>
                                    <option value="">51    SF RENDIMIENTO BINARIO DOLARES VIII     </option>
                                    <option value="">52    SF RENDIMIENTO MEJORADO SOLES VI      </option>
                                    <option value="">53    SF INSTITUCIONAL RENTA $ I         </option>
                                    <option value="">54    SF INSTITUCIONAL RENTA $ II       </option>
                                    <option value="">55    SF INSTITUCIONAL RENTA $ III     </option>
                                    <option value="">56    SF RENTA DOLARES 6M V          </option>
                                    <option value="">57    SF INSTITUCIONAL GLOBAL         </option>
                                    <option value="">58    SF INSTITUCIONAL RENTA 2Y       </option>
                                    <option value="">59    SF INSTITUCIONAL RENTA 1Y       </option>
                                    <option value="">60    SF RENTA DOLARES 1Y III         </option>
                                    <option value="">62    SF INSTITUCIONAL BINARIO $ I     </option>
                                    <option value="">63    SF INSTITUCIONAL RENTA 3Y    </option>
                                    <option value="">64    SCOTIA FONDO DE FONDOS DISTRIBUTIVO IG   </option>
                                    <option value="">65    SCOTIA FONDO DE FONDOS DISTRIBUTIVO HY  </option>
                                    <option value="">66    SF NOTA ESTRUCTURADA I         </option>
                                    <option value="">67    SF RENTA DOLARES 6M VI        </option>
                                    <option value="">68    SF INSTITUCIONAL RENTA 1Y II   </option>
                                    <option value="">69    SF RENTA DOLARES 6M VII       </option>
                                    <option value="">61    SF RENDIMIENTO BINARIO SOLES VII     </option>
                                    <option value="">70    SCOTIA FONDO DE FONDOS DISTRIBUTIVO HY II   </option>
                                    <option value="">71    SF NOTA ESTRUCTURADA II              </option>
                                    <option value="">72    SF INSTITUCIONAL RENTA 1YIII     </option>
                                    <option value="">74    SF RENTA DOLARES 6M IX        </option>
                                    <option value="">75    SCOTIA FONDO DE FONDOS IGUALDAD DE GENERO </option>
                                    <option value="">76    SF RENTA DOLARES 6M X            </option>
                                    <option value="">77    SCOTIA FONDO DE FONDOS CORTO PLAZO INTERNACIONAL   </option>
                                    <option value="">78    SF INSTITUCIONAL RENTA 1Y IV               </option>
                                    <option value="">73    SF RENTA DOLARES 6M VIII      </option>
                                    <option value="">79    SF NOTA ESTRUCTURADA IV       </option>
                                    <option value="">80    SF RENTA DOLARES 6M XI        </option>
                                    <option value="">81    SF RENTA SOLES 1Y IV           </option>
                                    <option value="">82    SF RENTA DOLARES 6M XII        </option>
                                    <option value="">83    SF NOTA ESTRUCTURADA V                </option>
                                    <option value="">85    SF RENDIMIENTO BINARIO SOLES IX    </option>
                                    <option value="">87    SF INSTITUCIONAL DE RENTA $ VII    </option>
                                    <option value="">88    SF RENDIMIENTO BINARIO SOLES X    </option>
                                    <option value="">89    SF INSTITUCIONAL DE RENTA $ VI    </option>
                                    <option value="">84    SF INSTITUCIONAL DE RENTA $ V    </option>
                                    <option value="">86    SF RENTA SOLES 6M             </option>
                                    <option value="">90    SF RENDIMIENTO BINARIO DOLARES XI    </option>
                                    <option value="">91    SF RENTA DOLARES  6M XIII    </option>
                                    <option value="">92    SF RENTA DOLARES 6M XIV      </option>
                                    <option value="">93    SF RENTA DOLARES 3M        </option>
                                    <option value="">94    SF RENTA DOLARES 1Y IV      </option>
                                    <option value="">95    SCOTIA FONDO LIQUIDEZ SOLES    </option>
                                    <option value="">96    SF INSTITUCIONAL DE RENTA $ VIII    </option>
                                    <option value="">97    SF INSTITUCIONAL RENTA 1Y V        </option>
                                    <option value="">98    SCOTIA FONDO LIQUIDEZ  $      </option>
                                    <option value="">99    SF RENTA SOLES 6M II        </option>
                                    <option value="">A0    SF RENTA DOLARES 6M XV      </option>
                                    <option value="">A1    SF RENTA DOLARES 6M XVI      </option>
                                    <option value="">A2    SF RENTA DOLARES 1Y V       </option>
                                    <option value="">A3    SF INSTITUCIONAL DE RENTA $  IX   </option>
                                    <option value="">A4    SF INSTITUCIONAL DE RENTA $  X    </option>
                                </select>
                            </div>
                            <div className='date-range-container'>
                                <label>Tipo:</label>
                                <select className='date-range-input'>
                                    <option value="0" selected>seleccionar</option>
                                    <option value="1">Recibido</option>
                                    <option value="2">Pendiente</option>
                                    <option value="3">Observado</option>
                                </select>
                        
                                <label>Tipo Operacion:</label>
                                <select className='date-range-input'>
                                    <option value="0" selected>seleccionar</option>
                                    <option value="">  GENERICO  </option>
                                    <option value="">  COMPRA   </option>
                                    <option value="">  VENTA    </option>
                                    <option value="">  DEPOSITO  </option>
                                    <option value="">  COMPRA CONTADO </option>
                                    <option value="">  VENTA PLAZO  </option>
                                    <option value="">  LIQUIDACION ANTICIPADA </option>
                                    <option value="">  PRE-PAGO     </option>
                                    <option value="">  ACCIONES LIBERADAS   </option>
                                    <option value="">  DIVIDENDOS EFECTIVO   </option>
                                    <option value="">  INTERESES CUPON      </option>
                                    <option value=""> REDENCION/VENCIMIENTO   </option>
                                    <option value=""> COBRO A CUENTA documentDebGenerationES RF  </option>
                                    <option value=""> INTERESES DE AHORROS        </option>
                                    <option value=""> RESCATE PARCIAL VALOR CONOCIDO  </option>
                                    <option value=""> RESCATE PARCIAL VALOR DESCONOCIDO    </option>
                                    <option value=""> RESCATE TOTAL VALOR DESCONOCIDO   </option>
                                    <option value=""> RESCATE TOTAL VALOR CONOCIDO     </option>
                                    <option value=""> SUSCRIPCION A VALOR CONOCIDO    </option>
                                    <option value=""> SUSCRIPCION A VALOR DESCONOCIDO  </option>
                                    <option value=""> TRANSFERENCIA PARCIAL CUOTAS    </option>
                                    <option value=""> TRANSFERENCIA TOTAL CUOTAS    </option>
                                    <option value=""> GENERICO      </option>
                                    <option value="1"> VARIOS     </option>
                                    <option value="1"> VARIOS     </option>
                                    <option value="1"> GENERICO    </option>
                                    <option value="1"> TRANSFERENCIA (CUENTAS)   </option>
                                    <option value="1"> GENERICO     </option>
                                    <option value="1"> VARIOS      </option>
                                    <option value="1"> VARIOS      </option>
                                    <option value="1"> GENERICO     </option>
                                    <option value="1"> CAMBIO VALOR NOMINAL   </option>
                                    <option value="1"> VARIOS          </option>
                                    <option value="1"> SUSCRIPCION PREFERENTE-COMPRA  </option>
                                    <option value="1"> SUSCRIPCION PREFERENTE-VENTA  </option>
                                    <option value="1"> PAGO COMISIONES DE RESCATES   </option>
                                    <option value="1"> PAGO COMISIONES DE SUSCRIPCIONES</option>
                                    <option value="1"> PAGO REMUNERACION A LA ADMINISTRADORA  </option>
                                    <option value="1"> RESCATE POR GANANCIA VALOR CONOCIDO       </option>
                                    <option value="1"> RESCATE POR GANANCIA VALOR DESCONOCIDO     </option>
                                    <option value="1"> FRACCIONAMIENTO DE CERTIFICADOS    </option>
                                    <option value="1"> CAMBIO DE CERTIFICADOS POR EXTRAVIO/DETERIORO </option>
                                    <option value="1"> AMORTIZACION              </option>
                                    <option value="1"> DESMATERIALIZACION-INGRESO  </option>
                                    <option value="1"> DESMATERIALIZACION-SALIDA   </option>
                                    <option value="1"> GASTOS OPERATIVOS        </option>
                                    <option value="1"> CIERRE CUENTAS DE AHORRO   </option>
                                    <option value="1"> UNIFICACION DE CERTIFICADOS  </option>
                                    <option value="1"> INTERESES CTAS. CTES.      </option>
                                    <option value="1"> OPERACIONES DE CAMBIO     </option>
                                    <option value="1"> PAGO COMISION POR SUPERVISION CONASEV </option>
                                    <option value="1"> CIERRE SUSCRIPCIONES       </option>
                                    <option value="1"> ALQUILER BANCO REPUBLICA  </option>
                                    <option value="1"> INGRESO POR LIQUID. DE FWDS   </option>
                                    <option value="1"> EGRESO POR LIQUID. DE FWDS   </option>
                                    <option value="1"> PAGO IMPUESTO RENTA       </option>
                                    <option value="1"> RETENCIONES DEVENGADAS    </option>
                                    <option value="1"> OPCIONES - CALL          </option>
                                    <option value="1"> OPCIONES - PUT            </option>
                                    <option value="1"> OPCIONES - CALL SPREAD     </option>
                                    <option value="1"> OPCIONES - PUT SPREAD      </option>
                                    <option value="1"> PAGO DE BENEFICIOS A PARTÍCIPES    </option>
                                </select>
                                <label htmlFor='date-range-to'>CDR:</label>
                                <input type='text' id='date-range-to' className='date-range-input' />
                            </div>

                            <div className='date-range-container'>
                                <label htmlFor='date-range-to'>Funcionario Negocio:</label>
                                <select className='date-range-input'>
                                    <option value="0" selected>seleccionar</option>
                                    <option value="1">Funcionario</option> 
                                </select>       
                                <label></label>
                                <label></label>
                                <label></label> 
                                <label></label>
                                <label></label>
                                <label></label> 
                            </div>
                        </div>
                    </div>
                    <div className='documentDebGeneration-body-btns'> 
                       <Grid item xs={1} style={{paddingBottom:10, textAlign:'left',paddingRight:10}}>
                        <Button variant="contained" style={{backgroundColor:'#2B8701',color:'#fff',textTransform:'none', width:'150%'}}  >
                        Consultar
                        </Button>
                       </Grid>
                       <Grid item xs={1} style={{paddingBottom:10, textAlign:'left'}}>
                            <Button variant="contained" style={{backgroundColor:'#1B6DB8', color:'#fff',textTransform:'none', width:'100%'}}  >
                            Exportar
                            </Button>
                        </Grid>
                        <Grid item xs={1} style={{paddingBottom:10, textAlign:'left'}}>
                            <Button variant="contained" style={{backgroundColor:'#bf2e1a', color:'#fff',textTransform:'none', width:'100%'}}  >
                            Salir
                            </Button>
                        </Grid> 
                       {/* 
                        <button className='btn btn-primary'>Consultar</button>
                        <button className='btn btn-primary'>Exportar Excel</button>
                        <button className='btn btn-primary'>Salir</button> */}
                    </div>
                </div>
            </div>
 
          <div className='documentDebGeneration-table'>
          <Table data={tableData} />
          </div> 
          
        </>
    )
}

export default DocumentaryDebtGenerationSystem