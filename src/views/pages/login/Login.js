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
import app,{auth} from '../../../config'

const Login = (props) => {
  let history = useHistory();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

 
  
  const clearData = ()=>{
     setEmail('');
     setPassword('');   
  };
  const handleAuth =async(e) =>{
    const provider = new app.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(result=>{
      const token = result.credential.accessToken;
      const user = result.user
    }).catch(error =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      const email=error.email;
      const credential = error.credential;
    })
  };
  const handleLogin = async(e) =>{
    // e.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
      // clearData();
    }catch(err){
      console.log(err)
    }
    
      // .then(data =>{
      //   console.log('Logged in!', data)
      //   history.push("/")
      // })
      // .catch(err =>{
      //   console.error('Login Failed!', err)
      // })
      
  }
  

  const {currentUser} = useContext(AuthContext);
  
  if (currentUser){
    <Redirect to='/'/>
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center" >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={e=>e.preventDefault && false}>
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
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0" onClick={handleAuth}>Login with google</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
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
