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
   {/* <CButton color="primary"
              onClick={() => setModal(!modal)} 
              className="mr-1"
            >Add Role</CButton>
            <CModal 
              show={modal} 
              onClose={setModal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary">Do Something</CButton>{' '}
                <CButton 
                  color="secondary" 
                  onClick={() => setModal(false)}
                >Cancel</CButton>
              </CModalFooter>
            </CModal> */}

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  {/* <th className="text-center"><CIcon name="cil-people" /></th> */}
                  <th>Rank</th>
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
                   kSH 700,000
                  </td>
                  </tr>
                  <tr>
                    <td>
                    Archdeacons
                      </td>
                      <td>
                        Ksh 70,000
                      </td>
                      <td>
                      Ksh 500,000
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
                      Ksh 350,000
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
                      Ksh 350,000
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
                      Ksh 300,000
                      </td>
                      </tr>   
                      <tr>
                    <td>
                    Staff
                      </td>
                      <td>
                        Ksh 50,000
                      </td>
                      <td>
                      Ksh 300,000
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
                      Ksh 250,000
                      </td>
                      </tr>   
              </tbody>
            </table>
            </>
            )
};


export default Table