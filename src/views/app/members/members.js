import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CDropdown,
  DropdownToggle,
  DropdownMenu,
  // DropdownItem,
  CBadge,
  CCollapse,
  CForm,
  CLabel,
  CInput,
  CFormGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  } from '@coreui/react'

import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import Amplify,{API} from 'aws-amplify';
import axios from 'axios';


Amplify.configure({
    API: {
        endpoints: [
            {
                name: "medicare-stack",
                endpoint: "g2lvjeru1b.execute-api.us-east-2.amazonaws.com/Prod/api/values/"
            },
            
        ]
    }
});


const Table = () => { 

  const [modal, setModal] = useState(false)
  const [members,setMembers] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page] = useState(1);
  const [pages, setPages] = useState(5);
  const [itemsPerPage] = useState(5);
  const [columnFilterValue] = useState();
  const [tableFilterValue] = useState("");
  const [sorterValue] = useState();

  const [fetchTrigger, setFetchTrigger] = useState(0);
  const [memberDetails,setMemberDetails] = useState({
     "member_name":'',
      "member_nbr": '',
      "id_no":'',
      "date_of_b":'',
      "tel_no":'',
      "nhif_no":'',
      "member_role":'',
      "total_bal":'',
      "inpatient_bal":'',
      "outpatient_bal":'',
      "card_status":'',
      "charge_id":'',
      "dependancy":''
  });
    const [updateMember,setUpdateMember] = useState({
     "member_name":'',
      "member_nbr": '',
      "id_no":'',
      "date_of_b":'',
      "tel_no":'',
      "nhif_no":'',
      "member_role":'',
      "total_bal":'',
      "inpatient_bal":'',
      "outpatient_bal":'',
      "card_status":'',
      "charge_id":'',
      "dependancy":''
  });
    
  const params = {
    page,
    columnFilterValue: JSON.stringify(columnFilterValue),
    tableFilterValue,
    sorterValue: JSON.stringify(sorterValue),
    itemsPerPage
  };

  const fields = [
    { key: 'member_name',_style: {width: '18%'}},
    { key: 'member_nbr', _style: {width: '15%'}},
    { key: 'id_no', _style: {width: '15%'}},
    { key: 'total_bal', _style: {width: '15%'}},
    { key: 'inpatient_bal', _style: {width: '15%'}},
    { key: 'outpatient_bal', _style: {width: '15%'}},
    { key: 'status', _style: { width: '20%'}},   
    {key: 'show_details',
      label: "",
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]
  const getBadge = (status)=>{
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      default: return 'success'
    }
  }
  
  const handle = (e) =>{
    const newMember = {...memberDetails}
    newMember[e.target.id]=e.target.value 
    setMemberDetails(newMember)
    console.log(newMember)
    
  }
  const update = (e) =>{
    const updateMember = {...memberDetails}
    updateMember[e.target.id]=e.target.value 
    setUpdateMember(updateMember)
    console.log(updateMember)
    
  }
  

  const handleSubmit = ()=>{
     const url = "https://itp8vfbr9a.execute-api.us-east-2.amazonaws.com/Prod/api/values";
     axios.post(url,{
      "member_name":memberDetails.member_name,
      "member_nbr": memberDetails.member_nbr,
      "id_no":memberDetails.id_no,
      "date_of_b":memberDetails.date_of_b,
      "tel_no":memberDetails.tel_no,
      "nhif_no":memberDetails.nhif_no,
      "member_role":memberDetails.member_role,
      "total_bal":memberDetails.total_bal,
      "inpatient_bal":memberDetails.inpatient_bal,
      "outpatient_bal":memberDetails.outpatient_bal,
      "card_status":memberDetails.card_status,
      "charge_id":memberDetails.charge_id,
      "dependancy":memberDetails.dependancy
     }).then(res=>{
       console.log(res.data)
     }).catch(error=>{
       console.log(error)
     })
  }


  const handleUpdate = (id)=>{
    const url = "https://itp8vfbr9a.execute-api.us-east-2.amazonaws.com/Prod/api/values/"
    axios.patch(`url${id}`,{
      "member_name":members.member_name,
      "member_nbr": members.member_nbr,
      "id_no":members.id_no,
      "date_of_b":members.date_of_b,
      "tel_no":members.tel_no,
      "nhif_no":members.nhif_no,
      "member_role":members.member_role,
      "total_bal":members.total_bal,
      "inpatient_bal":members.inpatient_bal,
      "outpatient_bal":members.outpatient_bal,
      "card_status":members.card_status
    })
  }



  
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  useEffect(()=>{
    setLoading(true)
    axios.get('https://g2lvjeru1b.execute-api.us-east-2.amazonaws.com/Prod/api/values/')
    .then((res)=> {
          console.log(res.data);
          setMembers(res.data);
          setPages(pages);
          setLoading(false);
        
      })
      .catch((e) => {
        setTimeout(() => {
          setFetchTrigger(fetchTrigger + 1);
        }, 2000);
      });
  }, [fetchTrigger]);
  

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
              <CForm action="" onSubmit={e=>e.preventDefault() && false} method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Member Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="member_name" onChange={(e)=>handle(e)} value={memberDetails.member_name} name="text-input" placeholder="Doe" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="number-input">Id Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="id_no" onChange={(e)=>handle(e)} value={memberDetails.id_no} name="number-input" placeholder="Id Number"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Phone Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="tel_no" onChange={(e)=>handle(e)} value={memberDetails.tel_no} name="number-input" placeholder="0700000000"></CInput>
                    </CCol>
                  </CFormGroup>
            
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">NHIF Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="nhif_no" onChange={(e)=>handle(e)} value={memberDetails.nhif_no} name="number-input" placeholder="NHIF Number"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">YoB</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="date_of_b" onChange={(e)=>handle(e)} value={memberDetails.date_of_b} name="number-input" placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Total Balance</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="total_bal" onChange={(e)=>handle(e)} value={memberDetails.total_bal} name="number-input" placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">In-patient Limit</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="inpatient_bal" onChange={(e)=>handle(e)} value={memberDetails.inpatient_bal} name="number-input" placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Out-Patient Limit</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="outpatient_bal" onChange={(e)=>handle(e)} value={memberDetails.outpatient_bal} name="number-input" placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Card Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="member_nbr" onChange={(e)=>handle(e)} value={memberDetails.member_nbr} name="number-input" placeholder="Card-Number"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Dependancy</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="card_status" onChange={(e)=>handle(e)} value={memberDetails.dependancy} name="number-input" placeholder="Depenancy"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Charge Member</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="card_status" onChange={(e)=>handle(e)} value={memberDetails.charge_id} name="number-input" placeholder="Charge Member"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Card Status</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="card_status" onChange={(e)=>handle(e)} value={memberDetails.card_status} name="number-input" placeholder="Active"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Rank</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CInput id="member_role" onChange={(e)=>handle(e)} value={memberDetails.member_role} name="number-input" placeholder="Active"></CInput>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
                </CModalBody>
              <CModalFooter>
                <CButton type="submit" size="sm" color="primary" onClick={handleSubmit}><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger" onClick={() => setModal(false)}><CIcon name="cil-ban" /> Close</CButton>
              </CModalFooter>
            </CModal>                
            <CCard className="p-5">
              <CDataTable
                items={members}
                fields={fields}
                loading={loading}
                hover
                cleaner
                columnFilter
                tableFilter
                itemsPerPageSelect
                itemsPerPage={10}
                hover
                sorter
                pagination
                scopedSlots = {{
                  'status':
                    (members)=>(
                      <td>
                        <CBadge color={getBadge(members.status)}>
                          {members.card_status}
                        </CBadge>
                      </td>
                    ),
                  'show_details':
                    (member, index)=>{
                      return (
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={()=>{toggleDetails(index)}}
                          >
                            {details.includes(index) ? 'Hide' : 'Show'}
                          </CButton>
                        </td>
                        )
                    },
                  'details':
                      (members, index)=>{
                        return (
                          <CCollapse show={details.includes(index)}>
                            <CCardBody>                             
                                <CButton color="info"
                              onClick={() => setModal(!modal)} 
                                  className="mr-2"
                                          >Edit Member</CButton>
                                          <CModal
                                            id ={members.member_uid} 
                                            show={modal} 
                                            onClose={setModal}
                                          >
                                            <CModalHeader closeButton>
                                              <CModalTitle>Member Details</CModalTitle>
                                            </CModalHeader>
                                            <CModalBody>
                                            <CCard>
                                          <CCardBody>
                                            <CForm action="" method="patch" encType="multipart/form-data" className="form-horizontal">
                                              <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="text-input">Member Name</CLabel>
                                                </CCol>
                                                <CCol xs="12" md="9">
                                                  <CInput id="member_name" onChange={(e)=>update(e)} value={members.member_name} name="text-input" placeholder="Doe" />
                                                </CCol>
                                              </CFormGroup>
                                              <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="number-input">Id Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="id_no" onChange={(e)=>update(e)} value={members.id_no} name="number-input" placeholder="Id Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Phone Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="tel_no" onChange={(e)=>update(e)} value={members.tel_no} name="number-input" placeholder="0700000000"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                        
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">NHIF Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="nhif_no" onChange={(e)=>update(e)} value={members.nhif_no} name="number-input" placeholder="NHIF Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">YoB</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="date_of_b" onChange={(e)=>update(e)} value={members.date_of_b} name="number-input" placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Total Balance</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="total_bal" onChange={(e)=>update(e)} value={members.total_bal} name="number-input" placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">In-patient Limit</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="inpatient_bal" onChange={(e)=>update(e)} value={members.inpatient_bal} name="number-input" placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Out-Patient Limit</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="outpatient_bal" onChange={(e)=>update(e)} value={members.outpatient_bal} name="number-input" placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Card Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="member_nbr" onChange={(e)=>update(e)} value={members.member_nbr} name="number-input" placeholder="Card-Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Card Status</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="card_status" onChange={(e)=>update(e)} value={members.card_status} name="number-input" placeholder="Active"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Dependancy</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="card_status" onChange={(e)=>update(e)} value={members.dependancy} name="number-input" placeholder="Active"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Charge Member</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="card_status" onChange={(e)=>update(e)} value={members.charge_id} name="number-input" placeholder="Active"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="select">Rank</CLabel>
                                                </CCol>
                                                <CCol xs="12" md="9">
                                                <CInput id="member_role" onChange={(e)=>update(e)} value={members.member_role} name="number-input" placeholder="Active"></CInput>
                                                </CCol>
                                              </CFormGroup>
                                            </CForm>
                                          </CCardBody>
                                        
                                        </CCard>
                                              </CModalBody>
                                            <CModalFooter>
                                              <CButton type="submit" onClick={()=>{handleUpdate(members.member_uid)}} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                                            <CButton type="reset" size="sm" color="danger" onClick={() => setModal(false)}><CIcon name="cil-ban" /> Close</CButton>
                                            </CModalFooter>
                                          </CModal> 
                                          <br/>       
                                {/* <CButton onClick={e=>window.confirm("Are you sure?") && handleDelete(e)} size="sm" color="danger" className="ml-1">
                                  Delete Member
                                </CButton> */}
                              </CCardBody>
                            </CCollapse>

                      )
                    }
                }}
                />
          
            </CCard>  
     
            </>
            )
};


export default Table;