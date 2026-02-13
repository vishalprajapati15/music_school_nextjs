import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
    return (
        <div
            className='min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto px-4 py-16 md:py-24'
        >
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className='relative z-10 w-full text-center'>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
                >
                    Master the art of music
                </h1>
                <p
                    className='mt-6 font-normal text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto'
                >Dive into our comprehensive music courses and trnasform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potentials.</p>
                <div className='mt-8'>
                    <Link href={"/courses"}>
                        <Button
                            borderRadius='1.75rem'
                            containerClassName='p-[2px] h-[4.5rem] w-44'
                            borderClassName='h-24 w-24'
                            className='border-2 text-lg cursor-pointer'
                        >
                            Explore courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection