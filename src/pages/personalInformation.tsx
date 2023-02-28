import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Slider, PersonalInformation } from '../components'

export default function PersonalInfo() {
  return (
    <>
      <Head>
        <title>Perosnal information</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
      </Head>
      <main className={styles.main}>

        <div className={styles.slider_wrapper}>
          <Slider />
        </div>

        <div>
          <PersonalInformation />
        </div>

      </main>
    </>
  )
}
