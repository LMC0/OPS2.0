import styles from "@/app/page.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";

export default function Analytics() {

    return (
        <main className={styles.main}>
    
        <Header></Header>
    
        <div className={styles.containerStyle}>
        
        <section className={styles.content}>
            <SideBar currentPage="/analytics"/>
        </section>
        
        <div className={styles.grouper}>
            <h1 className={styles.title}>分析ダッシュボード</h1>
            <ul className={styles.ulGroupStyle}>
            {
            <>
            <li>
                <p>分析</p>
                <button className={styles.button}>???</button>
            </li>
            </>
            }
            </ul>
            </div>
    
        </div>
    </main>
    );
}