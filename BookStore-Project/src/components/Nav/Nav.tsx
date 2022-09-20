import React from 'react'
import styles from './Nav.module.css'
import {links} from './links.json'

type Link = {
    label: string;
    href: string;
}

const Nav: React.FC<{}> = () => {
  return (

    <nav className={styles.navbar}>
        <div className={styles['logo-container']}>
       <span>logo</span> 
        </div>
        <div className={styles['links-container']}>
            {links.map((link: Link) =>{
               return(
                <div key={link.href} className={styles['link']}>
                    <a href={link.href}>
                        {link.label}
                    </a>

                </div>
               ) 
            })}
        </div>

    </nav>


  )
}

export default Nav