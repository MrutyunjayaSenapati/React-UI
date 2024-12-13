import React from 'react'

export  function DataGridd(props) {
  return (
    <table className={`table table-hover caption-top ${props.theme}`}>
    <caption>{props.caption}</caption>
    <thead>
       <tr>
          {
            props.fields.map(field=>
              <th key={field}>
                   
                    <div className="dropdown" id="filters">
                    <button data-bs-target="#filters" data-bs-toggle="dropdown" className="bi bi-three-dots-vertical btn btn-light ms-3">
                      {field.toUpperCase()}
                    </button>
                     <ul className="dropdown-menu">
                        <li className="dropdown-item">
                            <span className="dropdown-item-text"> Sort Asc <span className="bi bi-sort-alpha-down"></span> </span>
                        </li>
                        <li className="dropdown-item">
                            <span className="dropdown-item-text"> Sort Desc <span className="bi bi-sort-alpha-up"></span> </span>
                        </li>
                     </ul>
                    </div>

              </th>
            )
          }
          <th>Actions</th>
       </tr>
    </thead>
    <tbody>
        {
            props.data.map(record=>
                <tr key={record}>
                    {
                        Object.keys(record).map(field=>
                            <td key={field}> {record[field]} </td>
                           
                        )
                    }
                    <td>
                        <button className="btn btn-warning bi bi-pen-fill"></button>
                        <button className="btn btn-danger bi bi-trash ms-2"></button>
                    </td>
                </tr>
            )
        }
    </tbody>
    <tfoot>
        <tr>
            <td>{props.footer}</td>
        </tr>
    </tfoot>
</table>

  )
}
