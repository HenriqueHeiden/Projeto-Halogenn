'use client'
import { ReactNode } from "react"
import styles from '@/components/NavItem/nav.module.scss'

export interface NavItemProps {
    title: string
    icon?: ReactNode
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
    return (
        <div className={styles.nav}>
            <div className={styles.menu}>
                {title}
                {Icon && <div className={styles.icon}>{Icon}</div>}
            </div>            
        </div>
    )
}