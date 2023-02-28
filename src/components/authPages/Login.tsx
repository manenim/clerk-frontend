import React, { useState } from 'react'
import styles from '@/styles/Login.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/auth/Logo.png';

const Login = () => {
  
    const handleBackButton = () => {
      window.history.back();
    };
    
  return (
    <div className={styles.registration}>
        <div className={styles.reg_container}>
            <div className={styles.reg_back}>
                <span onClick={handleBackButton} className={styles.arrow_back}><ArrowBackIosIcon fontSize='small' />Back</span>

                <p>Dont have an account? <Link style={{ textDecoration: 'none', color: '#242F9B' }} href="/registration">Create Account</Link></p>
            </div>

            <div className={styles.reg_field}>
                <div className={styles.reg__field}>
                    <div className={styles.reg_logo}>
                        <Image src={logo} alt="logo" />
                        <div>
                            <h2>Sign In</h2>
                            <span>Sign in to access your account and all the features we have to offer.</span>
                        </div>
                    </div>
                    
                    <div>
                        <form className={styles.form}>
                            <div className={styles.input_field}>
                                <label>Email</label>
                                <input type="email" className={styles.input} placeholder="Enter your email" required />
                            </div>

                            <div className={styles.input_field}>
                                <label>Password</label>
                                <input type="password" className={styles.input} placeholder="Enter your password" style={{ padding: '10px' }} required />
                            </div>

                            <div className={styles.forgot_password}>
                                <p>Forgot password?</p>
                            </div>


                            <Link style={{ width: '100%' }} href="/setPassword"> 
                                <button className={styles.next_button}>Next</button>
                            </Link>
                        </form>
                    </div>

                    <div style={{ width: '90%', marginLeft: '1em', marginBottom: '1em' }}>
                    <p style={{ fontSize: '.7em', color: 'gray', textAlign: 'center' }}>By signing in, you agree to our <Link style={{ color: 'blue', textDecoration: 'underline', fontSize: '1.3em' }} href="/">Terms of Service</Link> and <Link style={{ color: 'blue', textDecoration: 'underline', fontSize: '1.3em' }} href="/">Privacy Policy.</Link></p>
                </div>
                </div>
            </div>


        </div>        
    </div>
  )
}

export default Login