import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import {useHistory} from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import {auth} from '../config'


const TheHeaderDropdown = () => {
  let history = useHistory();

  const handleLogout = async(e) =>{
    // e.preventDefault();
    try{
      await auth.signOut();
      history.push('/login');
      // clearData();
    }catch(err){
      console.log(err)
    }
  }  

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/ack.jpg'}
            className="c-avatar-img"
            alt="admin"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" onClick={handleLogout} />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
