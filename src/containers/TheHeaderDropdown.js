import React,{useContext} from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import {useHistory} from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import app,{auth} from '../config'
import {AuthContext} from '../Auth'


const TheHeaderDropdown = () => {
  let history = useHistory();
  const {currentUser,logout} = useContext(AuthContext);

  const handleLogout = (e) =>{
    try{
      auth.signOut()
      history.push('/login')
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
          <CIcon name="cil-lock-locked" className="mfe-2" onClick={logout} />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
