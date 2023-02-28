import React, { useState } from 'react'
import styles from '@/styles/SetPassword.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/auth/Logo.png';

const PersonalInformation = () => {
  
    const handleBackButton = () => {
      window.history.back();
    };
    
  return (
    <div className={styles.registration}>
        <div className={styles.reg_container}>
            <div className={styles.reg_back}>
                <span onClick={handleBackButton} className={styles.arrow_back}><ArrowBackIosIcon fontSize='small' />Back</span>

                <p>Already have an account? <Link style={{ textDecoration: 'none', color: '#242F9B' }} href="/login">Login</Link></p>
            </div>

            <div className={styles.onBoard}>
                <div>
                    <div className={styles.one}><span>1</span></div>
                    <Link style={{ textDecoration: 'none', color: '#242F9B' }} href="/registration">
                        <p>School Profile</p>
                    </Link>
                    <div className={styles.line1} />
                </div>

                <div>
                    <div className={styles.two}><span>2</span></div>
                    <Link style={{ textDecoration: 'none', color: '#242F9B' }} href="/personalInformation">
                        <p>Personal Information</p>
                    </Link>
                    <div className={styles.line2} />
                </div>

                <div>
                    <div className={styles.three}><span>3</span></div>
                    <Link style={{ textDecoration: 'none', color: '#242F9B' }} href="/setPassword">
                        <p>Set Password</p>
                    </Link>
                </div>

            </div>

            <div className={styles.reg_field}>
                <div className={styles.reg__field}>
                    <div className={styles.reg_logo}>
                        <Image src={logo} alt="logo" />
                        <div>
                            <h2>Setup Password</h2>
                            <span>Please choose a password that includes a mix of letters, numbers, and symbols, and is at least 8 characters long.</span>
                        </div>
                    </div>
                    
                    <div>
                        <form className={styles.form}>
                            <div className={styles.input_field}>
                                <label>Password</label>
                                <input type="password" className={styles.input} placeholder="Enter a secure password" required />
                            </div>

                            <div className={styles.input_field}>
                                <label>Confirm Password</label>
                                <input type="password" className={styles.input} placeholder="Confirm password" required />
                                <p style={{ fontSize: '.7em', color: '#808080' }}>Please Re-Enter Your Password To Conform</p>
                            </div>


                            <Link style={{ width: '100%' }} href="/pricing"> 
                                <button className={styles.next_button}>Next</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>


        </div>        
    </div>
  )
}

export default PersonalInformation