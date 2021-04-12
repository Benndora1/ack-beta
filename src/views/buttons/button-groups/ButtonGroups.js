import React from 'react'

import CIcon from '@coreui/icons-react'

const Table = () => { 
  return (
    <>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center"><CIcon name="cil-people" /></th>
                  <th>Aliements</th>
                  <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    {/* fetch data from the db */}
                  </td>
                </tr>
              </tbody>
            </table>
            </>
            )
}

export default Table