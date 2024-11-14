import React from 'react'

function AboutMe() {
    return (
        <div className='px-14 flex flex-col gap-3'>
            <p>
                A Software Engineer who likes to design and build amazing user interfaces and experiences.
            </p>
            <p>
                I started my journey as a Front-End Developer in 2022. I've been more of a hardware guy right from the get go and could not break color scheme, fonts, good design principles and some other patterns. It just wouldn't make sense to me but as I went on, I kinda figured it out.
            </p>

            <p>In 2023, I enrolled into <span style={{ fontWeight: 'bold' }}>Meta's Front-End Specialization</span> through HEC Sponsorship and got the chance to learn React with other great technologies including Bootstrap, and CSS pre-processors. Thanks to the Meta's great instructors, I was able to complete the specialization within 6 months by going through weekly assessments, module assessments and a final project where we had to build a portfolio for ourselves. React is where the fun started, being able to creatively code user interface components and adding business logic to it made me realize Front-End is not all about "changing the color of a button".</p>

            <p>I kept on creating personal projects on React until I found about NextJs a few months after the specialization and it just couldn't get any confusing. Why am I working on static pages again? Server components on Front-End!? What's going on here. Yeah I apologize, I wasn't familiar with their game.</p>
            <p>After reading about how it works, how React suffers with Google crawler and learned how serverless architecture works, it amazed me. I was excited to learn NextJs because why not? A single repository holding all of your application together while performing at a blazing fast speed? That's a yes yes.</p>

            <p style={{ fontStyle: 'italic' }}>My current status? I'm currently working on my Final Year Project, the goal is to create a <span style={{ fontWeight: 'bold' }}>Decentralized Electronic Voting Application</span> that would introduce ease in the process of voting, security, voter anoymity and of course, make the process cost effective.</p>
        </div>
    )
}

export default AboutMe