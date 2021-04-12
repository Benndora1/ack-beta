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
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'

//insuarance



const Table = () => { 
  const [modal, setModal] = useState(true)
  const [small, setSmall] = useState(false)
  



  return (
    <>


<CButton color="primary"
              onClick={() => setModal(!modal)} 
              className="mr-1"
            >Add Insuarance Plan</CButton>
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
            </CModal>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center"><CIcon name="cil-people" /></th>
                  <th>Insuarance Plan</th>
                  <th>Price Limit</th>
                  <th>Action</th>
                  {/* <th>Email</th>
                  <th>Phone No</th>
                  <th>Employment No</th>
                  <th>Card No</th>
                  <th>Role</th>
                  <th>Insuarance Plan</th>
                  <th>Spouce</th>
                  <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    {/* <div className="c-avatar">
                      <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                      <span className="c-avatar-status bg-success"></span>
                    </div> */}
                  </td>
                  <td>
                    {/* <div>Yiorgos Avraamu</div>
                    <div className="small text-muted">
                      <span>New</span> | Registered: Jan 1, 2015
                    </div> */}
                  </td>
                  {/* <td className="text-center">
                    <CIcon height={25} name="cif-us" title="us" id="us" />
                  </td> */}
                  <td>
                    {/* <div className="clearfix">
                      <div className="float-left">
                        <strong>50%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <CProgress className="progress-xs" color="success" value="50" />
                  </td>
                  <td className="text-center">
                    <CIcon height={25} name="cib-cc-mastercard" /> */}
                  </td>
                  <td>
                    {/* <div className="small text-muted">Last login</div>
                    <strong>10 sec ago</strong> */}
                  </td>
                </tr>
              </tbody>
            </table>
            </>
            )
}

export default Table