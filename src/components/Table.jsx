import React from 'react'

const Table = ({data}) => {

  return (
    <div className='table'>
      <div className='table-body'>
        <table>
          <thead>
            <tr>
              {data.th.map((item, index) => {
                return <th key={index} className={item.className}>{item.name}</th>
              }
              )}
            </tr>
          </thead>
          <tbody>
              {data.data.map((tr, index) => {
                return (
                  <tr key={index}>
                    {tr.map((item, index) => {
                      return <td key={index}>{item}</td>
                    })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table