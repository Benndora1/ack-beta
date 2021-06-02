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
  // CFormSelect,
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
     member_name:'',
     member_nbr:'',
     id_no:'',
     date_of_b:'',
     tel_no:'',
     nhif_no:'',
     member_role:'',
     total_bal:'',
     inpatient_bal:'',
     outpatient_bal:'',
     card_status:'',
     charge_id:'',
     dependancy:''
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
    newMember[e.target.name]=e.target.value
    setMemberDetails(newMember)
    console.log(memberDetails)

  }

  const update = (e)=>{
    console.log(updateMember)
    const updateMbr = {...updateMember,[e.target.name]:e.target.value}
    updateMbr[e.target.name]=e.target.value
    setUpdateMember(updateMbr)
    console.log(updateMbr)
  }
  const updates = (member) =>{

    setUpdateMember({
      member_name:member.member_name,
      member_nbr:member.member_nbr,
      id_no:member.id_no,
      date_of_b:member.date_of_b,
      tel_no:member.tel_no,
      nhif_no:member.nhif_no,
      member_role:member.member_role,
      total_bal:member.total_bal,
      inpatient_bal:member.inpatient_bal,
      card_status:member.card_status,
      charge_id:member.charge_id,
      dependancy:member.dependancy
    })


  }
  const updatesMember = (id, updatedMember) => {
    // setEditing(false)

    setMembers(members.map((member) => (member.member_uid === id ? updatedMember : member)))
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
    axios.put(`https://itp8vfbr9a.execute-api.us-east-2.amazonaws.com/Prod/api/values/${id}`,updateMember)
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
                    <CInput name="member_name" onChange={handle} value={memberDetails.member_name}  placeholder="Doe" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="number-input">Id Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="id_no" onChange={(e)=>handle(e)} value={memberDetails.id_no}  placeholder="name Number"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Phone Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="tel_no" onChange={(e)=>handle(e)} value={memberDetails.tel_no}  placeholder="0700000000"></CInput>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">NHIF Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="nhif_no" onChange={(e)=>handle(e)} value={memberDetails.nhif_no}  placeholder="NHIF Number"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">YoB</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="date_of_b" onChange={(e)=>handle(e)} value={memberDetails.date_of_b}  placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Total Balance</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="total_bal" onChange={(e)=>handle(e)} value={memberDetails.total_bal}  placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">In-patient Limit</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="inpatient_bal" onChange={(e)=>handle(e)} value={memberDetails.inpatient_bal}  placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Out-Patient Limit</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="outpatient_bal" onChange={(e)=>handle(e)} value={memberDetails.outpatient_bal}  placeholder="1900"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Card Number</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="member_nbr" onChange={(e)=>handle(e)} value={memberDetails.member_nbr}  placeholder="Card-Number"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Dependancy</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="card_status" onChange={(e)=>handle(e)} value={memberDetails.dependancy} placeholder="Active"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Charge Member</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="card_status" onChange={(e)=>handle(e)} value={memberDetails.charge_id}  placeholder="Active"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="phone-number">Card Status</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput name="card_status" onChange={(e)=>handle(e)} value={memberDetails.card_status}  placeholder="Active"></CInput>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Rank</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CInput name="member_role" onChange={(e)=>handle(e)} value={memberDetails.member_role}  placeholder="Active"></CInput>
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
                              onClick={() => {setModal(!modal); updates(member)}}
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
                                            <CForm action="" onSubmit={e=>{e.preventDefault(); updatesMember(member.member_uid,updateMember)}} method="put" encType="multipart/form-data" className="form-horizontal">

                                              <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="text-input">Member Name</CLabel>
                                                </CCol>
                                                <CCol xs="12" md="9">
                                                  <CInput name="member_name" onChange={update} value={updateMember.member_name}  placeholder="Doe" />
                                                </CCol>
                                              </CFormGroup>
                                              <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="number-input">Id Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="id_no" onChange={update} value={updateMember.id_no}  placeholder="Id Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Phone Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="tel_no" onChange={update} value={updateMember.tel_no}  placeholder="0700000000"></CInput>
                                                  </CCol>
                                                </CFormGroup>

                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">NHIF Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="nhif_no" onChange={(e)=>update(e)} value={updateMember.nhif_no}  placeholder="NHIF Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">YoB</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="date_of_b" onChange={(e)=>update(e)} value={updateMember.date_of_b} placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Total Balance</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="total_bal" onChange={(e)=>update(e)} value={updateMember.total_bal}  placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">In-patient Limit</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="inpatient_bal" onChange={(e)=>update(e)} value={updateMember.inpatient_bal}  placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Out-Patient Limit</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="outpatient_bal" onChange={(e)=>update(e)} value={updateMember.outpatient_bal}  placeholder="1900"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Card Number</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="member_nbr" onChange={(e)=>update(e)} value={updateMember.member_nbr}  placeholder="Card-Number"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Card Status</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <select name="card_status" onChange={(e)=>update(e)} value={updateMember.card_status}  placeholder="Active">
                                                      <option value ="Active">Active</option>
                                                      <option value ="InActive">InActive</option>
                                                    </select>
                                                  </CCol>
                                                </CFormGroup>
                                                {/* <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Dependancy</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="card_status" onChange={(e)=>update(e)} value={member.dependancy} name="number-input" placeholder="Active"></CInput>
                                                  </CCol>
                                                </CFormGroup> */}
                                                <CFormGroup row>
                                                  <CCol md="3">
                                                    <CLabel htmlFor="phone-number">Charge Member</CLabel>
                                                  </CCol>
                                                  <CCol xs="12" md="9">
                                                    <CInput name="card_status" onChange={(e)=>update(e)} value={updateMember.charge_id}  placeholder="Active"></CInput>
                                                  </CCol>
                                                </CFormGroup>
                                                <CFormGroup row>
                                                <CCol md="3">
                                                  <CLabel htmlFor="select">Rank</CLabel>
                                                </CCol>
                                                <CCol xs="12" md="9">
                                                <CInput name="member_role" onChange={(e)=>update(e)} value={updateMember.member_role}  placeholder="Active"></CInput>
                                                </CCol>
                                              </CFormGroup>
                                            </CForm>
                                          </CCardBody>

                                        </CCard>
                                              </CModalBody>
                                            <CModalFooter>
                                              <CButton type="submit" onClick={()=>{handleUpdate(member.member_uid)}} size="sm" color="primary"><CIcon name="cil-scrubber" /> Update</CButton>
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