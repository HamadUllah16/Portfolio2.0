'use client'
import { motion } from "motion/react";


function AboutMe() {
    return (
        <div className="flex flex-col gap-3">
            <motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-2xl text-center font-medium'>
                About Me
            </motion.h3>
            <motion.div
                className="py-5 sm:py-1 max-sm:py-3 flex flex-col gap-3"
                variants={{
                    hidden: { opacity: 0, x: -40 },
                    show: { opacity: 1, x: 0, transition: { staggerChildren: 0.7, type: 'keyframes' } },
                }}
                exit={{
                    opacity: 0,
                    x: 40
                }}
                initial='hidden'
                animate='show'
            >
                <p>
                    I am a <strong>Software Engineer</strong> with a passion for designing and building user-centric interfaces that deliver exceptional user experiences. My journey in tech began in 2022 as a Front-End Developer, where I initially struggled with elements like color schemes, typography, and design principles. Over time, I developed a deep appreciation for these details, which now significantly influence my work.
                </p>
                <p>
                    In 2023, I enrolled in <strong>Meta Front-End Developer Specialization</strong> on Coursera through DLSEI, thanks to Higher Education Commission Pakistan. This intensive program enhanced my skills in <strong>React</strong>, <strong>Bootstrap</strong>, and <strong>CSS pre-processors</strong> through hands-on projects and rigorous assessments. Completing the specialization within six months was a rewarding challenge, culminating in a portfolio that showcased my growth and achievements. React taught me that front-end development is more than just visual design—it’s about crafting dynamic, interactive user interfaces powered by robust business logic.
                </p>
                <p>
                    To further expand my expertise, I delved into <strong>Next.js</strong>, a framework that transformed my approach to web application development. While concepts like static site generation, client components and server components initially seemed complex, I soon recognized their power in enabling <strong>serverless architecture</strong>, <strong>SEO optimization</strong>, and <strong>high-performance applications</strong>. Managing both client-side and server-side logic within a single repository streamlined development and deepened my appreciation for full-stack capabilities.
                </p>

                <p>
                    Currently, I am working at <strong>Grayhat</strong> as a Web Developer.
                </p>
            </motion.div>
        </div>
    );
}

export default AboutMe;
