import React, { useState, useEffect } from 'react'
import {
  CCard,
  CDataTable,

  } from '@coreui/react'
import Amplify,{ API } from 'aws-amplify';
import config from '../../../config';
import axios from 'axios';


Amplify.configure({
    API: {
        endpoints: [
            {
                name: "medicare-stack",
                endpoint: "https://itp8vfbr9a.execute-api.us-east-2.amazonaws.com/Prod/api/values"
            },

        ]
    }
});
Amplify.configure(config);
API.configure(config);


const Table = () => {

  const [members,setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page] = useState(1);
  const [pages, setPages] = useState(5);
  const [itemsPerPage] = useState(5);
  const [columnFilterValue] = useState();
  const [tableFilterValue] = useState("");
  const [sorterValue] = useState();

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
    // { key: 'total_bal', _style: {width: '15%'}},
    {key: 'member_charge', style:{width:'16%'}},
    {key: 'date_time', style:{width: '15%'}},

  ]

  useEffect(()=>{
    setLoading(true)
    axios.get('https://itp8vfbr9a.execute-api.us-east-2.amazonaws.com/Prod/api/values')
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