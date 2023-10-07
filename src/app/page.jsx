import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar/NavBar'
import { VotingProvider } from './constants/voter'


export default function Home() {
// const {votingTitle} = React.useContext(VotingContext) 
  return (
    <VotingProvider>
    <main className={styles.main}>
      <div className={styles.description}>
      <NavBar />
      {/* {votingTitle} */}
      </div>
    </main>
    </VotingProvider>
  );  
  // </VotingProvider>
  
}
