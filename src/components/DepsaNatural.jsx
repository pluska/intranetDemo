import React, { useState, useEffect } from 'react';
import Table from "./Table";

const DepsaNatural = ()=> {
  
  const data = {}
  
  return (
    <div className='report-container'>
      <div className='report-header'>
        <div className='report-title'>
          <h1>
            Cargo Electrónico de Documentos para enviar a DEPSA  Persona Natural
          </h1>
        </div>
        <div className='report-body'>
          <div className='report-body-filters'>
            <div className='report-filters-container'>
              <div className='report-filters-group'>
                <label>CDR</label>
                <input className='form-control' type='text' />
              </div>
              <div className='report-filters-group'>
                <label>Documentos:</label>
                <div className='radio-input-group'>
                  <label>De operaciones</label>
                  <input type='radio' name='documents' />
                  <label>Actualizados por Usuario</label>
                  <input type='radio' name='documents' />
                </div>
              </div>
              <div className='report-filters-group'>
                <div className='filter-date-group'>
                  <label>Desde:</label>
                  <input className='form-control' type='date' placeholder='Desde'/>
                  <label>Hasta</label>
                  <input className='form-control' type='date' placeholder='Hasta'/>
                </div>
              </div>
            </div>
            <div className='report-filters-container'>
              <div className='report-filters-group'>
                <label>Oficina</label>
                <input className='form-control' type='text' />
              </div>
              <div className='report-filters-group'>
                <label>Tipos de documentos</label>
                <select className='form-control'>
                  <option>Seleccionar</option>
                  <option>Todos</option>
                  <option>Suscripciones</option>
                  <option>Rescates</option>
                  <option>Afiliaciones Virtuales</option>
                  <option>Actualización de Datos</option>
                  <option>DJ Fuera de Perfil</option>
                </select>
              </div>
              <div className='report-filters-group'>
                <label>Total de Operaciones</label>
                <input className='form-control' type='number' />
              </div>
            </div>
          </div>
          <div className='report-body-btns'>
              <button className='btn btn-primary'>Buscar</button>
              <button className='btn btn-default'>Imprimir Excel</button>
              <button className='btn btn-default'>Salir</button>
          </div>
        </div>
      </div>
      <Table data={data} />
      <div className='report-legend'>
        <div className='report-legend-column'>
          <p>Bol.: Boleta</p>
          <p>Ren: Reniec</p>
          <p>Fir: Firma</p>
        </div>
        <div className='report-legend-column'>
          <p>Cont.: Contrato</p>
          <p>2° Doc: 2° Documento para extranjeros</p>
          <p>DOF: Declaración Origen de Fondos</p>
        </div>
        <div className='report-legend-column'>
          <p>DJur.: Declaración Jurada</p>
          <p className="required-document"><input type='checkbox' className='form-check-input' /></p>
        </div>
      </div>
    </div>
  );
}

export default DepsaNatural;