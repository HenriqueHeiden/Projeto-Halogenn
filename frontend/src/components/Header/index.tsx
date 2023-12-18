'use client'
import styles from '@/components/Header/header.module.scss'
import Logo from '@/assets/logo.svg'
import ImageTop from '@/assets/Component 3.svg'
import ImageBottom from '@/assets/Component 4.svg'
import ImageHeader from '@/assets/Component5.svg'
import Menu from '@/assets/menuIcon.svg'
import Setting from '@/assets/settings.svg'
import Rectangle from '@/assets/rectangle.svg'
import Gless from '@/assets/gless.svg'
import Thermometer from '@/assets/thermometer.svg'
import Glasses from '@/assets/glasses.svg'
import Plastico from '@/assets/plastico.svg'
import Porcelana from '@/assets/porcelanas.svg'
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { RiFileListLine } from "react-icons/ri"
import Image from 'next/image'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NavItem } from '../NavItem'
import { useState } from 'react'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className={styles.container} onClick={() => setMenuOpen(false)}>
            <Image src={ImageBottom} alt='' className={styles.imageBottom} />
            <div className={styles.content}>
                <Image src={Logo} alt='' />
                <div className={styles.navigation}>
                    <NavItem title='Início' />
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild 
                        onPointerUp={(e) => toggleMenu()}
                        onPointerDown={(e) => toggleMenu()}
                         >
                            <div>
                                {
                                    menuOpen ?
                                        <div className={`${styles.trigger} ${styles.open}`} >
                                            produtos
                                            <FiChevronUp />
                                        </div>
                                        :
                                        <div className={styles.trigger}>
                                            produtos
                                            <FiChevronDown />
                                        </div>
                                }
                            </div>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <div className={styles.dropdown}>
                                <DropdownMenu.Content className={styles.dropdownContent}

                                    sideOffset={5}>
                                    <DropdownMenu.Item className={styles.dropdownItem}>
                                        <div className={styles.dropdownSubtitleItem}>
                                            <p>Catálogo completo </p>
                                            <p>de itens para você</p>
                                        </div>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className={styles.dropdownItem}>
                                        <div className={styles.dropdownColumn}>
                                            <span className={styles.dropdownColumnTitle}>Laboratório</span>
                                            <div className={styles.labItems}>
                                                <span className={styles.labList}>
                                                    <Image src={Setting} alt='' />
                                                    Equipamentos
                                                </span>
                                                <span className={styles.labList}>
                                                    <Image src={Thermometer} alt='' />
                                                    Termômetros
                                                </span>
                                            </div>
                                            <div className={styles.labItems}>
                                                <span className={styles.labList}>
                                                    <Image src={Glasses} alt='' />
                                                    Acessórios
                                                </span>
                                            </div>
                                        </div>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className={styles.dropdownItem}>
                                        <div className={styles.dropdownColumn}>
                                            <span className={styles.dropdownColumnTitle}>Utensílios</span>
                                            <div className={styles.labItems}>
                                                <span className={styles.labList}>
                                                    <Image src={Rectangle} alt='' />
                                                    Inox e Ferragens
                                                </span>
                                                <span className={styles.labList}>
                                                    <Image src={Gless} alt='' />
                                                    Vidrarias
                                                </span>
                                            </div>
                                            <div className={styles.labItems}>
                                                <span className={styles.labList}>
                                                    <Image src={Plastico} alt='' />
                                                    Plásticos
                                                </span>
                                                <span className={styles.labList}>
                                                    <Image src={Porcelana} alt='' />
                                                    Porcelanas
                                                </span>
                                            </div>
                                        </div>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </div>

                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                    <NavItem title='Laudos' />
                    <NavItem title='Sobre nós' />
                    <NavItem title='Certificações' />
                    <NavItem title='Contato' />
                </div>
                <div className={styles.button}>
                    <button className={styles.buttonContent}>
                        <RiFileListLine className={styles.icon} />
                        <span className={styles.text}>Orçamento</span>
                    </button>
                </div>
                <div className={styles.menu}>
                    <button>
                        <Image src={Menu} alt='' width={28.94} height={28.94} onClick={toggleMenu} />
                    </button>
                    {menuOpen && (
                        <div className={styles.mobileContentMenu}>
                            <div>
                                <span className={styles.titleMobileList}>Navegue por <br /> nosso site</span>
                                <ul className={styles.Ul}>
                                    <li>Início</li>
                                    <li>Laudos</li>
                                    <li>Sobre nós</li>
                                    <li>Certificações</li>
                                    <li>Contato</li>
                                </ul>
                                <span className={styles.titleMobileListCatalog}>Catálogo completo <br /> de itens para você</span>
                                <div>
                                    <div className={styles.dropdownColumn}>
                                        <span className={styles.dropdownColumnTitle}>Laboratório</span>
                                        <div className={styles.labItems}>
                                            <span className={styles.labList}>
                                                <Image src={Setting} alt='' />
                                                Equipamentos
                                            </span>
                                            <span className={styles.labList}>
                                                <Image src={Thermometer} alt='' />
                                                Termômetros
                                            </span>
                                        </div>
                                        <div className={styles.labItems}>
                                            <span className={styles.labList}>
                                                <Image src={Glasses} alt='' />
                                                Acessórios
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <span className={styles.dropdownColumnTitle}>Utensílios</span>
                                        <div className={styles.labItems}>
                                            <span className={styles.labList}>
                                                <Image src={Rectangle} alt='' />
                                                Inox e Ferragens
                                            </span>
                                            <span className={styles.labList}>
                                                <Image src={Gless} alt='' />
                                                Vidrarias
                                            </span>
                                        </div>
                                        <div className={styles.labItems}>
                                            <span className={styles.labList}>
                                                <Image src={Plastico} alt='' />
                                                Plásticos
                                            </span>
                                            <span className={styles.labList}>
                                                <Image src={Porcelana} alt='' />
                                                Porcelanas
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.mobileContent}>

                </div>
            </div>
            <div className={styles.titleMobile}>
                <span>Qualidade e expertise em produtos <span className={styles.titleBlue}>químicos e acessórios</span></span>
                <span className={styles.subtitle}>
                    Estamos preparados para te entender e atender da melhor forma para suprir todas as suas demandas em químicos e similares.
                </span>
                <div>
                    <div>
                        <Image src={ImageHeader} alt='' className={styles.imgHeaderMobile} />
                    </div>
                </div>
            </div>
            <div className={styles.containerImgTop}>
                <div className={styles.contentImgTop}>
                    <Image src={ImageTop} alt='' />
                </div>
            </div>
        </div>
    )
}