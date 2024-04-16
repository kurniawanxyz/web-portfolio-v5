import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='px-10'>
        <div className='flex w-full'>
            <div className='w-full'>
                <div className='w-[96%]'>
                    <h1 className='text-4xl font-bold text-primary'>About me</h1>
                    <p>Hi, I'm Adi Kurniawan a high school vocation student majoring in Software Engineering, a lifetime learner, and a Fullstack Web Developer based in Jawa Timur, Indonesia.</p>
                    <p>I am someone who is interested in the world of technology, linux operating systems and open source software development.</p>
                    <p>I love learning new things, even when I'm bored I often learn new things. I fill my free time by learning new things, trying new linux distros, playing games, and sometimes watching anime.</p>
                </div>
            </div>
            <Image
                src={"/images/myfoto.jpg"}
                alt="Adi Kurniawan"
                loading="lazy"
                width={1000}
                height={1000}
                objectFit="cover"
                className="w-32 lg:w-60 rounded-xl border-secondary border-[5px] mx-auto  rotate-12"
            />
        </div>
        <div className='mt-10'>
            <h2 className='text-4xl font-bold text-primary'>Skillset</h2>
            <div className='grid grid-cols-3 gap-5 '>
                <div className='border-accent border-2 p-2'>
                    <h3>Language</h3>
                    <div className='grid grid-cols-2 gap-2 mt-3'>
                        {
                            language.map((item:string,i:number)=>(
                                <Badge className='hover:bg-primary cursor-pointer hover:text-white' variant={"secondary"} key={i+"language"}>{item}</Badge>
                            ))
                        }
                    </div>
                </div>
                <div className='border-accent border-2 p-2'>
                    <h3>Frontend</h3>
                    <div className='grid grid-cols-2 gap-2 mt-3'>
                        {
                            frontend.map((item:string,i:number)=>(
                                <Badge className='hover:bg-primary cursor-pointer hover:text-white' variant={"secondary"} key={i+"language"}>{item}</Badge>
                            ))
                        }
                    </div>
                </div>
                <div className='border-accent border-2 p-2'>
                    <h3>Backend</h3>
                    <div className='grid grid-cols-2 gap-2 mt-3'>
                        {
                            backend.map((item:string,i:number)=>(
                                <Badge className='hover:bg-primary cursor-pointer hover:text-white' variant={"secondary"} key={i+"language"}>{item}</Badge>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const language = [
    "Html & Css","JavaScript","Java","PHP","TypeScript","C#","Kotlin","Python"
]

const frontend = [
    "React.JS","Next.JS","Tailwind CSS","ShadCn","Daisy UI"
]

const backend = [
    ".Net Framework","Laravel","Mysql","Postgresql","Sql Server","Adonis.JS"
]

export default page