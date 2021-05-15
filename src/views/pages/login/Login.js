import React, {useState, useContext} from 'react'
import { Link, Redirect, useHistory, withRouter} from 'react-router-dom'
import ack from '../../../img/ack.jpg'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {AuthContext} from '../../../Auth'


const Login = () => {
  let history = useHistory();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const {authenticate, getSession} = useContext(AuthContext);
  
  const handleLogin = e =>{
    e.preventDefault();

    authenticate(email, password)
      .then(data =>{
        console.log('Logged in!', data)
        history.push("/")
      })
      .catch(err =>{
        console.error('Login Failed!', err)
      })
  }
  const styleBac ={ backgroundImage: "url('/img/a.jpg')"};


  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }

  return (
      <div className="c-app c-default-layout flex-row align-items-center" style= {styleBac}>
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" name="email" value={email} placeholder="Email" onChange={e=>setEmail(e.target.value)} autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="password" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)} autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={handleLogin}>Login</CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-secondary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>ACK INSURANCE</h2>
                    <p>A church that transforms lives by offering a top notch insurance service</p>
                    {/* <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default withRouter(Login);
