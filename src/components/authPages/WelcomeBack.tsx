import React from 'react';
import styles from '@/styles/WelcomeBack.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/auth/Logo.png';
import icon1 from '../../../public/images/icons/school.svg';
import icon2 from '../../../public/images/icons/Vector.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WelcomeBack = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome_back}>

        <div className={styles.create_account}>
          <p>Dont't have an account? <Link style={{ textDecoration: 'none', color: '#242F9B' }} href="/registration"><span>Create an Account</span></Link></p>
        </div>

        <div className={styles.welcome_card}>

         <div className={styles.card_container}>

          <div className={styles.welcome_logo}>
            <Image src={logo} alt="logo" />
            <div>

              <h2>Welcome Back</h2>
              <span>Do you want to login in as a school or as a teacher</span>
            </div>
          </div>

            <Link style={{ textDecoration: 'none', color: '#000' }} href="/registration">
              <div className={styles.school}>
                <div>
                  <Image src={icon1} alt="school-icon" />
                  <p>School</p>
                </div>
                <ArrowForwardIcon />
              </div>
            </Link>

            <Link style={{ textDecoration: 'none', color: '#000' }} href="/registration">         
              <div className={styles.teacher}>
                <div>
                  <Image src={icon2} alt="school-icon" />
                  <p>Teacher</p>
                </div>
                <ArrowForwardIcon />
              </div>
            </Link>
         </div>   
        </div>
        
      </div>
      
    </div>
  )
}

export default WelcomeBack