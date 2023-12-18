import styles from '@/components/Categories/categories.module.scss'
import Image from 'next/image'
import productIcon from '@/assets/products.svg'
import chemicalsIcon1 from '@/assets/bottle.svg'
import tools from '@/assets/tools.svg'
import frame from '@/assets/Frame207.svg'
import frameTools from '@/assets/Frame207tools.svg'

export function Categories() {
    return (
        <div className={styles.content}>
            <div className={styles.products}>
                <span className={styles.titles}>PRODUTOS</span>
                <Image src={productIcon} alt='' className={styles.icon} />
                <span className={styles.subtitle}>Vidrarias e Equipamentos</span>
                <Image src={frame} alt='' className={styles.frame} />
            </div>
            <div className={styles.chemicals}>
                <span className={styles.titles}>QUÍMICOS</span>                
                    <Image src={chemicalsIcon1} alt='' className={styles.iconChemicals}/>                
                <span className={styles.subtitleChemicals}>Materiais Químicos</span>
                <Image src={frame} alt='' className={styles.frame} />
            </div>
            <div className={styles.products}>
                <span className={styles.titles}>LABORATÓRIOS</span>
                <Image src={tools} alt='' className={styles.iconTools} />
                <span className={styles.subtitleLab}>Ferramentas e Utensílios</span>
                <Image src={frameTools} alt='' className={styles.frame} />
            </div>
        </div>
    )
}