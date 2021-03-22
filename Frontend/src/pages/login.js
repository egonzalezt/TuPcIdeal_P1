import React, { Component } from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../components/login/FormikControl'
import Login from '../images/login2.png';
import axiosInstance from '../axios'
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar/Navbar';
import {FooterContainer} from '../components/footer/containers/footer'
import '../styles/login.css'
export default class Mainpage extends Component {

    render(){

        const initialValues ={
            email: '',
            password: ''
            
        }
        
        const islogin = localStorage.getItem('access_token')? 'JWT ' + localStorage.getItem('access_token'): null
        

        const validationSchema = Yup.object({
            
            email: Yup.string().email('email incorrecto').required('required'),
            password: Yup.string().required('required')
        })

        let onSubmit = (values) =>{
            axiosInstance.post(`token/`, {
				email: values.email,
				password: values.password
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
        
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Sesion iniciada'
                  })
				//console.log(res);
				//console.log(res.data);
			}).then( () =>
            {
               window.location = "http://localhost:3000/";
            }).catch((err)=>{
                
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario o contraseña invalido',
                    text: 'intenta nuevamente',
                    timer: 2000,
                    timerProgressBar: true,
                  })
            })
        }

        return(
                <div className="container">
                    <Navbar/>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        
                        {
                            formik=>{
                                if(islogin)
                                {
                                    window.location = "http://localhost:3000/";
                                }else
                                {
                                    return <Form >

                                    <div className="div_login">
                                        <div className="img_div">
                                            <img className="foto_login" src={Login} className="login"  />
                                        </div>
                                        
                                        <div className="form_login"> 
                                            <div className="email_login">
                                                <FormikControl
                                                    control= 'input'
                                                    type ='email'
                                                    label ='Email '
                                                    name= 'email'
                                                />
                                            </div>
                                            <div className="cont_login">
                                                <FormikControl
                                                    control= 'input'
                                                    type = 'password'
                                                    label='Password '
                                                    name ='password'
                                                /> 
                                            </div>
                                            <button type='submit' className="btn" disabled={!formik.isValid}>Submit</button>
                                        </div>
                                    </div>
                                    </Form>
                                }
                            }
                        }
                    </Formik>
                    <FooterContainer/>
                </div>
        )
    }
    
}
