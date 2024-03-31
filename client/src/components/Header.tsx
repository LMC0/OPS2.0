"use client";
import {motion} from "framer-motion"

export default function Header(){
    return (
        <header style={headerStyle}>
            <motion.div style={leftContainerStyle}
            transition={{type:"spring",dumping:1,mass:0.99}}
            initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}}
            >
                <h1 style={titleStyle}>OPS2.0 App</h1>

                <motion.input type="text" placeholder="search..." style={searchInputStyle} 
                initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}}
                />

            </motion.div>
        </header>
    )
}

const headerStyle = {
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding: "1rem 1rem 1rem 0",
    color: "#fff"

}

const leftContainerStyle = {
    display: "flex",
    alignItems:"center"
}

const titleStyle ={
    marginRight: "2rem",
    color:"black"
}

const searchInputStyle={
    padding:"0.7rem 1rem",
    marginLeft:"3.6rem",
    borderRadius:"70px",
    backgroundColor:"rgb(251,251,251)",
    border: "2px solid lightgray",
    minWidth: "300px"
}