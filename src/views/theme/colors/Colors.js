import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CDataTable,
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
  const [updateMember,setUpdateMember] = useState(members)
    //  member_name:members.member_name,
    //  member_nbr:members.member_nbr,
    //  id_no:members.id_no,
    //  date_of_b:members.date_of_b,
    //  tel_no:members.tel_no,
    //  nhif_no:members.member_nhif_no,
    //  member_role:members.member_role,
    //  total_bal:members.total_bal,
    //  inpatient_bal:members.inpatient_bal,
    //  outpatient_bal:members.outpatient_bal,
    //  card_status:members.card_status,
    //  charge_id:members.charge_id,
    //  dependancy:members.dependancy
  //});

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
    console.log(memberDetails)

  }
  const update = (e) =>{
    console.log(updateMember)
    const updateMbr = {...updateMember, [e.target.id]:e.target.value}
    // updateMbr[e.target.id]=e.target.value
    setUpdateMember(updateMbr)
    console.log(updateMbr)

  }


  const handleSubmit = ()=>{
     axios.post("https://itp8vfbr9a.execute-api.us-east-2.amazonaws.com/Prod/api/values",memberDetails)
     .then(res=>{
       console.log(res.data)
     })
     .catch(error=>{
       console.log(error)
     })
  }


  const handleUpdate = (id)=>{
    axios.put(`https://itp8vfbr9a.execute-api.us-east-2.amazonaws.com/Prod/api/values/${id}`,{
      "member_name":updateMember.member_name,
      "member_nbr": updateMember.member_nbr,
      "id_no":updateMember.id_no,
      "date_of_b":updateMember.date_of_b,
      "tel_no":updateMember.tel_no,
      "nhif_no":updateMember.nhif_no,
      "member_role":updateMember.member_role,
      "total_bal":updateMember.total_bal,
      "inpatient_bal":updateMember.inpatient_bal,
      "outpatient_bal":updateMember.outpatient_bal,
      "card_status":updateMember.card_status
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
        }, 1000);
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
                <CModalTitle>NewMember Details</CModalTitle>
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
                      <CInput id="card_status" onChange={(e)=>handle(e)} value={memberDetails.dependancy} name="number-input" placeholder="Active"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Charge Member</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="card_status" onChange={(e)=>handle(e)} value={memberDetails.charge_id} name="number-input" placeholder="Active"></CInput>
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
                {/* <CButton color="primary">Do Something</CButton>{' '}
                <CButton
                  color="secondary"
                  onClick={() => setModal(false)}
                >Cancel</CButton> */}
                <CButton type="submit" size="sm" color="primary" onClick={handleSubmit}><CIcon name="cil-scrubber" /> Add User </CButton>
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
                    (member)=>(
                      <td>
                        <CBadge color={getBadge(member.status)}>
                          {member.card_status}
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
                      (member, index)=>{
                        return (
                          <CCollapse show={details.includes(index)}>
                            <CCardBody>
                                <CButton color="info"
                              onClick={() => setModal(!modal)}
                                  className="mr-2"
                                          >Edit Member</CButton>
                                          <CModal
                                            id ={member.member_uid}
                                            show={modal}
                                            onClose={setModal}
                                          >
                                            <CModalHeader closeButton>
                                              <CModalTitle>Member Details</CModalTitle>
                                            </CModalHeader>
                                            <CModalBody>
                                            <CCard>
                                          <CCardBody>
                                            <CForm action="" method="put" encType="multipart/form-data" className="form-horizontal">

                                              <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="text-input">Member Name</CLabel>
                                                </CCol>
                                                <CCol xs="12" md="9">
                                                  <CInput id="member_name" onChange={update} value={member.member_name} name="text-input" placeholder="Doe" />
                                                </CCol>
                                              </CFormGroup>
                                              <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="number-input">Id Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="id_no" onChange={update} value={member.id_no} name="number-input" placeholder="Id Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Phone Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="tel_no" onChange={update} value={member.tel_no} name="number-input" placeholder="0700000000"></CInput>
                                                  </CCol>
                                                </CFormGroup>

                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">NHIF Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="nhif_no" onChange={(e)=>update(e)} value={member.nhif_no} name="number-input" placeholder="NHIF Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">YoB</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="date_of_b" onChange={(e)=>update(e)} value={member.date_of_b} name="number-input" placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Total Balance</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="total_bal" onChange={(e)=>update(e)} value={member.total_bal} name="number-input" placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">In-patient Limit</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="inpatient_bal" onChange={(e)=>update(e)} value={member.inpatient_bal} name="number-input" placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Out-Patient Limit</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="outpatient_bal" onChange={(e)=>update(e)} value={member.outpatient_bal} name="number-input" placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Card Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="member_nbr" onChange={(e)=>update(e)} value={member.member_nbr} name="number-input" placeholder="Card-Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Card Status</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="card_status" onChange={(e)=>update(e)} value={member.card_status} name="number-input" placeholder="Active"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                {/* <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Dependancy</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="card_status" onChange={(e)=>update(e)} value={member.dependancy} name="number-input" placeholder="Active"></CInput>
                                                  </CCol>
                                                </CFormGroup> */}
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Charge Member</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput id="card_status" onChange={(e)=>update(e)} value={member.charge_id} name="number-input" placeholder="Active"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="select">Rank</CLabel>
                                                </CCol>
                                                <CCol xs="12" md="9">
                                                <CInput id="member_role" onChange={(e)=>update(e)} value={member.member_role} name="number-input" placeholder="Active"></CInput>
                                                </CCol>
                                              </CFormGroup>
                                            </CForm>
                                          </CCardBody>

                                        </CCard>
                                              </CModalBody>
                                            <CModalFooter>
                                              <CButton type="submit" onClick={()=>{handleUpdate(member.member_uid)}} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
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