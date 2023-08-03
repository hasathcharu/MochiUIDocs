import React from 'react';
import {motion} from 'framer-motion';
import styles from "./loader.module.scss";
export default function Loader(props){
        return(
                <motion.div 
                    className={styles.loaderContainer}
                    key='loader'
                    initial = {{opacity:1,y:0}}
                    exit = {{opacity:0,transition:{duration:.2}}}
                >
                        <motion.span className={styles.loader}></motion.span>
                </motion.div>
        );
}