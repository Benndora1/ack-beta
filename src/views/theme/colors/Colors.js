import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CSwitch,
  CInputCheckbox,
  CInputRadio,
  CInputFile,
  CCardFooter,
  CSelect,
  CTextarea,
  CFormText,
  CForm,
  CLabel,
  CInput,
  CFormGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


//members

const Table = () => { 

  const [modal, setModal] = useState(true)
  const [small, setSmall] = useState(false)

  return (
    <>
   <CButton color="primary"
              onClick={() => setModal(!modal)} 
              className="mr-1"
            >Add Member</CButton>
            <CModal 
              show={modal} 
              onClose={setModal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Member Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CCard>
            {/* <CCardHeader>
              Member Details
            </CCardHeader> */}
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="First Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Last Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="number-input">Id Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="input-number" name="number-input" placeholder="Id Number"></CInput>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Phone Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="input-number" name="number-input" placeholder="0700000000"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Phone Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="input-number" name="number-input" placeholder="0700000000"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">NHIF Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="input-number" name="number-input" placeholder="NHIF Number"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">YoB</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="input-number" name="number-input" placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Card Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="input-number" name="number-input" placeholder="Card-Number"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Rank</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select Rank</option>
                      <option value="1">Bishop</option>
                      <option value="2">Archdeacons</option>
                      <option value="3">Area Deans</option>             
                      <option value="1">Clergy</option>
                      <option value="1">Office Staffs</option>
                      <option value="1">Chaplains</option>
                      <option value="1">Evangelists</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            {/* <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter> */}
          </CCard>
                </CModalBody>
              <CModalFooter>
                {/* <CButton color="primary">Do Something</CButton>{' '}
                <CButton 
                  color="secondary" 
                  onClick={() => setModal(false)}
                >Cancel</CButton> */}
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger" onClick={() => setModal(false)}><CIcon name="cil-ban" /> Close</CButton>
              </CModalFooter>
            </CModal>

            <table className="table table-hover table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center"><CIcon name="cil-people" /></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>DoB</th>
                  <th>IdNo</th>
                  <th>Phone No</th>
                  <th>Payroll No</th>
                  <th>Card No</th>
                  <th>Rank</th>
                  <th>Insuarance Plan</th>
                  <th>Spouce</th>
                  <th>Action</th>
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
};


export default Table