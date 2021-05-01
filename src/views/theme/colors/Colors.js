import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CPagination,
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
import Amplify,{API} from 'aws-amplify';
import config from '../../../config';



Amplify.configure({
    API: {
        endpoints: [
            {
                name: "memberApi",
                endpoint: "https://alppz8qbf7.execute-api.us-east-2.amazonaws.com/dev"
            },
            // {
            //     name: "MyCustomCloudFrontApi",
            //     endpoint: "https://api.my-custom-cloudfront-domain.com",

            // }
        ]
    }
});
Amplify.configure(config);
API.configure(config);
//children

const Table = () => { 

  const [modal, setModal] = useState(false)
  const [small, setSmall] = useState(false)
  const [members,setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [columnFilterValue, setColumnFilterValue] = useState();
  const [tableFilterValue, setTableFilterValue] = useState("");
  const [sorterValue, setSorterValue] = useState();

  const [fetchTrigger, setFetchTrigger] = useState(0);
    
  const params = {
    page,
    columnFilterValue: JSON.stringify(columnFilterValue),
    tableFilterValue,
    sorterValue: JSON.stringify(sorterValue),
    itemsPerPage
  };

  // const fetchMembers = async ()=>{
  //   try{
  //     const mbrData = await API.get('memberApi','/members/member_id');
  //     console.log(mbrData);
  //   }catch(error){}
  // }

  useEffect(()=>{
    setLoading(true)
    fetch('https://alppz8qbf7.execute-api.us-east-2.amazonaws.com/dev/members')
    .then(function (data) {
        data.json().then((json) => {
          console.log(json);
          setMembers(json.members);
          setPages(json.pages);
          setLoading(false);
        });
      })
      .catch((e) => {
        // wait for code sandbox server to unhibernate
        setTimeout(() => {
          setFetchTrigger(fetchTrigger + 1);
        }, 2000);
      });
  }, [fetchTrigger]);
   
    // API.get('memberApi','/members/member_id')
    // .then(res=>console.log(res));
 

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
                    <CLabel htmlFor="text-input">Middle Name</CLabel>
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
                      <CLabel htmlFor="phone-number">Employment Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="input-number" name="number-input" placeholder="Payroll-number"></CInput>
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
                      <CLabel htmlFor="phone-number">Age</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="input-number" name="number-input" placeholder="Card-Number"></CInput>
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
                    <CLabel htmlFor="select">Role</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select Rank</option>
                      <option value="1">Bishop</option>
                      <option value="2">Archdeacons</option>
                      <option value="3">Area Deans</option>             
                      <option value="1">Clergy</option>
                      <option value="1">Office children</option>
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
            <CCard className="p-5">
              <CDataTable
                items={members}
                fields={["fname", "mname", "lname", "yob","id_nbr","phone_nbr","employment_nbr","rank","insuarance_limit_outpatient","nhif","age"]}
                loading={loading}
                hover
                cleaner
                columnFilter={{ external: true }}
                columnFilterValue={columnFilterValue}
                onColumnFilterChange={setColumnFilterValue}
                tableFilter={{ external: true }}
                tableFilterValue={tableFilterValue}
                onTableFilterChange={setTableFilterValue}
                sorter
                sorterValue={sorterValue}
                onSorterValueChange={setSorterValue}
                itemsPerPageSelect={{ external: true }}
                itemsPerPage={itemsPerPage}
                onPaginationChange={setItemsPerPage}
              />
              <CPagination
                pages={pages}
                activePage={page}
                onActivePageChange={setPage}
                className={pages < 2 ? "d-none" : ""}
              />
            </CCard>  
     
            </>
            )
};


export default Table;