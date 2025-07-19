"use client"
import React from 'react'
import { Button } from '../../components/ui/button'
import { FileText, Github, Linkedin } from 'lucide-react'

const socials = [
    {
        name: "Resume",
        link: 'https://drive.google.com/drive/folders/1qfen1IlVD3V-dI6xLf25zWJ8G16kPIeh?usp=sharing',
        icon: <FileText size={16} />
    },
    {
        name: "GitHub",
        link: 'https://github.com/HamadUllah16',
        icon: <Github size={16} />
    },
    {
        name: "Linkedin",
        link: 'https://www.linkedin.com/in/hamadullah16/',
        icon: <Linkedin size={16} />
    }
]

function SocialButtons() {
    return (
        <div className="w-full flex flex-wrap gap-2 justify-center">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        className="group gap-0 min-w-10 min-h-10 rounded-full flex items-center overflow-hidden px-2 transition-all duration-300"
                    >
                        {social.icon}
                        <span
                            className="
                max-w-0 
                group-hover:max-w-[200px] 
                group-hover:ml-2
                overflow-hidden 
                whitespace-nowrap 
                transition-all 
                duration-300
              "
                        >
                            {social.name}
                        </span>
                    </Button>
                </a>
            ))}
        </div>
    )
}

export default SocialButtons
