import React from 'react'
import { Button } from '../../components/ui/button'
import { FileText, Github, Linkedin } from 'lucide-react'

function SocialButtons() {
    return (
        <div className='flex flex-wrap gap-2 max-sm:justify-center'>
            <a href={'https://drive.google.com/drive/folders/1qfen1IlVD3V-dI6xLf25zWJ8G16kPIeh?usp=sharing'} target='_blank'>
                <Button>
                    <FileText />
                    Resume
                </Button>
            </a>
            <a href='https://github.com/HamadUllah16' target='_blank'>
                <Button variant={'outline'}>
                    <Github />
                    GitHub
                </Button>
            </a>

            <a href='https://www.linkedin.com/in/hamadullah16/' target='_blank'>
                <Button variant={'outline'}>
                    <Linkedin />
                    Linkedin
                </Button>
            </a>
        </div>
    )
}

export default SocialButtons