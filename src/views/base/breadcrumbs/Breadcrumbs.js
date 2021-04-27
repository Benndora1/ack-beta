import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'




const Table = () => { 

  const [modal, setModal] = useState(true)
  const [small, setSmall] = useState(false)

  return (
    <>
  

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  {/* <th className="text-center"><CIcon name="cil-people" /></th> */}
                  <th>Role</th>
                  <th>Out-Patient Limit</th>
                  <th>In-Patient Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Bishop
                  </td>
                  <td>
                   kSH 100,000
                  </td>
                  <td>
                   kSH 100,000,00
                  </td>
                  </tr>
                  <tr>
                    <td>
                    Archdeacons
                      </td>
                      <td>
                        Ksh 80,000
                      </td>
                      <td>
                      Ksh 100,000,000
                      </td>
                      </tr>   
                      <tr>
                    <td>
                    Area Deans
                      </td>
                      <td>
                        Ksh 70,000
                      </td>
                      <td>
                      Ksh 750,000
                      </td>
                      </tr>   
                      <tr>
                    <td>
                    Finance Manager
                      </td>
                      <td>
                        Ksh 70,000
                      </td>
                      <td>
                      Ksh 750,000
                      </td>
                      </tr>   
                      <tr>
                    <td>
                    Clergy
                      </td>
                      <td>
                        Ksh 50,000
                      </td>
                      <td>
                      Ksh 500,000
                      </td>
                      </tr>   
                      <tr>
                    <td>
                    child
                      </td>
                      <td>
                        Ksh 50,000
                      </td>
                      <td>
                      Ksh 500,000
                      </td>
                      </tr>   
                      <tr>
                    <td>
                    Evangelists
                      </td>
                      <td>
                        Ksh 50,000
                      </td>
                      <td>
                      Ksh 500,000
                      </td>
                      </tr>   
              </tbody>
            </table>
            </>
            )
};


export default Table