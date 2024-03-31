import styles from "@/app/page.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import { motion } from 'framer-motion';


export default function Home() {

return (
    <main className={styles.main}>
    
        <Header></Header>
    
        <div className={styles.containerStyle}>
        
        <section className={styles.content}>
            
            <SideBar currentPage="/company"/>
        </section>
        
        <div className={styles.grouper}>
            <h1 className={styles.title}>Company</h1>
            <ul className={styles.ulGroupStyle}>
            {
            <>
            <li>
                <p>企業情報表示</p>
                <button className={styles.button}>Edit</button>
            </li>
            </>
            }
            </ul>
            </div>
    
        </div>
    </main>
    );
}
