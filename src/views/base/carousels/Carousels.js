import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CBadge,
  CCollapse,
  CSelect,
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
import config from '../../../config';
import axios from 'axios';


Amplify.configure({
    API: {
        endpoints: [
            {
                name: "medicare-stack",
                endpoint: "g2lvjeru1b.execute-api.us-east-2.amazonaws.com/Prod/api/values/"
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
  // const [small, setSmall] = useState(false)
  const [members,setMembers] = useState([]);
  const [details, setDetails] = useState([]);
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

  const fields = [
    { key: 'member_name',_style: {width: '18%'}},
    { key: 'member_nbr', _style: {width: '15%'}},
    {key: 'hospital_id', stle: {width: '15%'}},
    {key: 'hospital_name', stle: {width: '15%'}},
    {key: 'transaction_token', style: {width: '14%'}},
    { key: 'total_bal', _style: {width: '15%'}},
    {key: 'member_charge', style:{width:'16%'}},
    {key: 'date_time', style:{width: '15%'}},
    // {key: 'member_pic'},
    

    // { key: 'status', _style: {width: '20%'}},
    // { key: 'status', _style: {width: '20%'}},
    // {
    //   key: 'show_details',
    //   // label: "",
    //   _style: { width: '1%' },
    //   sorter: false,
    //   filter: false
    // }
    // { key: 'lname', _style: {width: '40%'}},



    
    // "id_nbr","rank","nhif","status","show_details"
  ]
  const getBadge = (status)=>{
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      // case 'Pending': return 'warning'
      // case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  
  const handle = (e) =>{
    const newMember = {...memberDetails}
    newMember[e.target.id]=e.target.value 
    setMemberDetails(newMember)
    
  }

  
  const toggleDetails = (index) => {
    const position = details.indexOf(members)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, members]
    }
    setDetails(newDetails)
  }
  // const fetchMembers = async ()=>{
  //   try{
  //     const mbrData = await API.get('memberApi','/members/member_id');
  //     console.log(mbrData);
  //   }catch(error){}
  // }

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
            
                />
            
            </CCard>  
     
            </>
            )
};


export default Table;