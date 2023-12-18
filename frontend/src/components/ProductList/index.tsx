import React from 'react'
import styles from '@/components/ProductList/productList.module.scss'
import { ProductItem } from '../ProductItem'
import prod1 from '@/assets/Frame 1.jpg'
import prod2 from '@/assets/Frame 2.jpg'
import prod3 from '@/assets/Frame 3.jpg'
import Image from 'next/image'
import ImageTop from '@/assets/Component 3.svg'
import ImageBottom from '@/assets/Component 4.svg'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/services/api'

export function ProductList() {
    const url = 'https://s3.amazonaws.com/hmsahre.upload'
    const {data, isLoading} = useQuery({
        queryKey:['product'],
        queryFn: async () => api.get('/product'),
        refetchOnWindowFocus: false,

        
      })
    return (
        <div className={styles.container}>
            <span className={styles.title}>PRODUTOS</span>
            <div className={styles.productList}>
                <div className={styles.products}>
                {isLoading ? 'Carregando': data?.data.map((e: any, index:number) => (
                       <ProductItem key={index}
                       image={`${url}/${e.imagem}`}
                       title={e.nome}
                       note={e.nota}
                       price={e.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                   /> 
                    ))}
                </div>
            </div>
            <Image src={ImageBottom} alt='' className={styles.img} />
        </div>
    )
}