import React from 'react'

import CIcon from '@coreui/icons-react'

const Table = () => { 
  return (
    <>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center"><CIcon name="cil-people" /></th>
                  <th>Aliements</th>
                  <th>Price</th>
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