"use client"
import { FaGithub } from "react-icons/fa"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import Link from "next/link";

type SideBarProps = {
    currentPage: '/company' | '/analytics' | '/employee' | '/manager';
};

export default function SideBar({ currentPage }: SideBarProps) {
    const MenuList = [
        {
            title:"Home",
            icon: <i className="fa fa-home" style={iconStyle}></i>,
            link:"/company"
        },
        {
            title:"Analytics",
            icon: <i className="far fa-chart-bar" style={iconStyle}></i>,
            link:"/analytics"
        },
        {
            title:"Employee",
            icon: <i className="far fa-chart-bar" style={iconStyle}></i>,
            link:"/employee"
        },
        {
            title:"Manager",
            icon: <i className="FaGithub" style={iconStyle}></i>,
            link:"/manager"
        }
    ]
    return (
        <>
            {MenuList.map((list, i) => (
                <motion.div key={i} 
                transition={{ type: "spring", damping: 22, mass: 0.99 }}
                initial={{ opacity: 0, x: -2000 * (i + 1) }}
                animate={{ opacity: 1, x: 0 }}>
                    
                    <ul style={listStyle}>
                        <Link href={list.link} style={{textDecoration : "none"}}>

                            <motion.li style={currentPage === list.link
                            ? { ...listItemStyle, backgroundColor: "orange" } : listItemStyle}
                            whileHover={{ scale: 1.1 }}>
                                <motion.span transition={{ type: "spring", damping: 30, mass: 0.99 }}
                                initial={{ opacity: 0, x: -10000 * (i + 1) }} animate={{ opacity: 1, x: 0 }}>
                                    {list.icon}
                                    {list.title}
                                </motion.span>
                            </motion.li>

                        </Link>
                    </ul>

                </motion.div>
            ))}
        </>
    );
}

const sidebarStyle = {
    width: '250px',
    height: '100vh',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '1rem',
};


const listStyle = {
    listStyleType: 'none',
    padding: 0,
    minWidth:'200px'
};

const listItemStyle = {
    color: "black",
    marginBottom: '1rem',
    fontSize: '1.2rem',
    padding:'10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius:'10px'
};



const iconStyle = {
    marginRight: '0.5rem',
};
