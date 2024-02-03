'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useLayoutEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Logo from '../Logo/Logo'
import NavList from './NavList'
import styles from './styles.module.scss'
import { logoAnim } from './anim'
import Hamburger from '../Hamburger/Hamburger'
import Menu from '../Menu/Menu'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const popRef = useRef<null | HTMLDivElement>(null)
  const mobileRef = useRef<null | HTMLDivElement>(null)
  const menuRef = useRef<null | HTMLDivElement>(null)

  useOnClickOutside(menuRef, () => setOpen(false), [popRef, mobileRef])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(popRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: '70px',
        end: '70px',
        onLeave: () => {
          gsap.to(popRef.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out'
          })
        },
        onEnterBack: () => {
          gsap.to(popRef.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out'
          })
        }
      }
    })

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  return (
    <>
      <div className={styles['popup-hb']} ref={popRef}>
        <Hamburger isOpen={open} setIsOpen={setOpen} />
      </div>
      <div className={styles['mobile-hb']} ref={mobileRef}>
        <Hamburger isOpen={open} setIsOpen={setOpen} />
      </div>
      <AnimatePresence>{open && <Menu ref={menuRef} />}</AnimatePresence>
      <div className={styles.navbar}>
        <motion.div variants={logoAnim} initial="initial" animate="animate">
          <Logo.branding height="42" width="42" />
        </motion.div>
        <NavList />
      </div>
    </>
  )
}

export default Navbar
