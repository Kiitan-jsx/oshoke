import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'


export default function HiddenMenu({toggleMenu}) {


    const navAnimate = {
        hidden: {
            scaleX: 0,
        },
        show: {
            scaleX: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            width: 0,
            transition: {
                delay: 0.4
            }
        }
    }

    const animateLink = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.7,
            }
        }
    }


    const linkStagger = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1, 
            y: 0,
            transition: {
                ease: "easeOut"
            }
        }

    }







  return (
    <motion.nav 
        key="slideBox"
        className="menu-dropdown flex w-full h-full transform origin-right"
        variants={navAnimate}
        initial="hidden"
        animate="show"
        exit="exit"
    >
        
        <div className='bg-black w-40 h-full flex flex-col items-center justify-center pot'>
         <div className='text-white hidden text-md mt-10 sm:hidden md:flex lg:flex xl:flex'>\con <span className='text-black'>tent\</span></div>

        </div>
        <div>
          <motion.ul 
            className='pt-60 h-full'
            variants={animateLink}
            initial="hidden"
            animate="show"
            exit="exit"
        >

            <Link to="/work"> 
                <motion.li 
                    className='pb-5 ml-16 ' 
                    variants={linkStagger}
                    onClick={toggleMenu}

                > 
                    <span className='pr-5' >01</span> 
                    <span className='border-b border-teal-600 '>WORK</span> 
                </motion.li>
            </Link>

            <motion.li 
                className='pb-5 ml-16'
                variants={linkStagger}
                onClick={toggleMenu}
            > 
                <span className='pr-5'>02</span> <span className='border-b border-teal-600 '>CAREER</span></motion.li>
            <motion.li 
                className='pb-5 ml-16'
                variants={linkStagger}
                onClick={toggleMenu}
            >
                <span className='pr-5'>03</span> <span className='border-b border-teal-600 '>PROJECTS</span></motion.li>
            <motion.li 
                className='pb-5 ml-16'
                variants={linkStagger}
                onClick={toggleMenu}
            >
                <span className='pr-5'>04</span> <span className='border-b border-teal-600 '>THOUGHTS</span></motion.li>
            <motion.li 
                onClick={toggleMenu} 
                className='pb-5 ml-16 text-teal-700 font-semibold '
                variants={linkStagger}
            >
                    <span className='pr-8'>X</span> <span>CLOSE</span>
            </motion.li>
          </motion.ul>
        </div>
    </motion.nav>
  )
}
