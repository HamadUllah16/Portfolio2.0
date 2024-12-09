import React from 'react'
import { Button } from '../../components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'
const pfp = '/pfp.jpg'


function MyInfoCard() {
    return (
        <div className='
        flex
        p-4
        gap-2
        border
        rounded-2xl
        items-center
        bg-input
            '>
            <motion.div
                className='w-40 h-40 min-w-16 min-h-16 min-sm:hidden relative'
                initial={{ opacity: 0, rotate: 45, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.3, bounceDamping: 10, bounceStiffness: 600 }}
            >
                <Image
                    src={pfp}
                    alt='a profile picture'
                    fill
                    style={{ objectFit: 'cover', padding: '8px', borderRadius: '40px', zIndex: 1000 }}
                />
            </motion.div>

            <div className='flex flex-1 gap-8 lg:flex-row  md:flex-col max-sm:flex-col items-start'>

                <motion.div
                    className='flex flex-col justify-center gap-3 w-full'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, bounceDamping: 10, bounceStiffness: 600, delay: 0.3, ease: 'easeInOut' }}
                >
                    <h3 className='text-2xl font-bold max-sm:text-center'>
                        Hamad Ullah
                    </h3>
                    <h6 className='max-w-80 text-sm'>
                        Software Engineer specialized in Front-End Development and Decentralized Applications.
                    </h6>
                    <div className='flex gap-2 max-sm:justify-center'>
                        <a href={'https://drive.google.com/drive/folders/1qfen1IlVD3V-dI6xLf25zWJ8G16kPIeh?usp=sharing'} target='_blank'>
                            <Button>
                                Resume
                            </Button>
                        </a>
                        <a href='https://github.com/HamadUllah16' target='_blank'>
                            <Button variant={'outline'}>
                                <Github />
                            </Button>
                        </a>

                        <a href='https://www.linkedin.com/in/hamadullah16/' target='_blank'>
                            <Button variant={'outline'}>
                                <Linkedin />
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default MyInfoCard