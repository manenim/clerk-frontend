import React, { useState } from 'react'
import styles from '@/styles/Registration.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/auth/Logo.png';

const Registration = () => {

    // const [value, setValue] = useState("");

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //   setValue(event.target.value as string);
    // };
  
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
                    <Link style={{ textDecoration: 'none', color: '#808080' }} href="/personalInformation">
                        <p>Personal Information</p>
                    </Link>
                    <div className={styles.line2} />
                </div>

                <div>
                    <div className={styles.three}><span>3</span></div>
                    <Link style={{ textDecoration: 'none', color: '#808080' }} href="/setPassword">
                        <p>Set Password</p>
                    </Link>
                </div>

            </div>

            <div className={styles.reg_field}>
                <div className={styles.reg__field}>
                    <div className={styles.reg_logo}>
                        <Image src={logo} alt="logo" />
                        <div>
                            <h2>School Information</h2>
                            <span>Please fill in  the correct information about the school below</span>
                        </div>
                    </div>
                    
                    <div>
                        <form className={styles.form}>
                            <div className={styles.input_field}>
                                <label>School Name</label>
                                <input type="text" className={styles.input} placeholder="Enter School Name" required />
                            </div>

                            <div className={styles.input_field}>
                                <label>School Address</label>
                                <input type="text" className={styles.input} placeholder="Enter School Address" required />
                            </div>

                            <div className={styles.input_field}>
                                <label>Registration Status</label>
                                <select className={styles.select_field}  style={{color: '#757575'}}>
                                    <option value="" disabled selected hidden>Registration Status</option>
                                    <option style={{ color: '#000' }}>Registered</option>
                                    <option style={{ color: '#000' }}>Not Registered</option>
                                </select>
                            </div>

                            <div className={styles.input_field}>
                                <label>Education Level</label>
                                <select className={styles.select_field}  style={{color: '#757575'}}>
                                    <option value="" disabled selected hidden>Education Level</option>
                                    <option style={{ color: '#000' }}>100</option>
                                    <option style={{ color: '#000' }}>200</option>
                                </select>
                            </div>

                            <Link style={{ width: '100%' }} href="/personalInformation"> 
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

export default Registration