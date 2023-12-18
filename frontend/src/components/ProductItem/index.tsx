import React from 'react'
import styles from '@/components/ProductItem/productItem.module.scss'
import Image from 'next/image'

export interface ProductItemProps {
    image?: string
    title?: string
    note?: string
    price?: string
}

export function ProductItem({ image, title, note, price }: ProductItemProps) {
    return (
        <div className={styles.box}>
            <Image src={image || ''} alt='' width={376} height={178} quality={100}/>
            <div className={styles.boxInfo}>
                <div className={styles.info}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.note}>Nota: {note}</span>
                </div>
                <div className={styles.price}>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    )
}