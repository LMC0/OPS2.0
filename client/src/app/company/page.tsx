"use client";
import React from 'react'; // Reactをインポートする
import styles from "@/app/page.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion';



export default function Company() {
    const router = useRouter();

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
                <p>企業の基本情報を閲覧・編集可能</p>
                <button className={styles.button} onClick={() => router.push('/company/detail')}>企業情報</button>
            </li>

            <li>
                <p>FAQを確認してもわからないことに関して問い合わせてもらう↓は問い合わせフォームリンク</p>
                <button className={styles.button}>問い合わせ</button>
            </li>
            </>
            }
            </ul>
            </div>
    
        </div>
    </main>
    );
}
