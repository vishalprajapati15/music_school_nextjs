'use client'
import React from 'react'
import courseData from '@/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';

interface Courses {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

const FeaturedCourses = () => {

    const featuredCourses = courseData.courses.filter((course: Courses) => course.isFeatured)

    return (
        <div className='py-16 md:py-20 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-lg md:text-xl text-teal-500 font-semibold tracking-widest uppercase'>Featured Courses</h2>
                    <p className='mt-4 text-4xl md:text-6xl lg:text-7xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>Learn With the Best</p>
                </div>
            </div>
            <div className='mt-12 px-4 md:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center max-w-7xl mx-auto'>
                    {featuredCourses.map((course: Courses) => (
                        <div key={course.id} className="flex justify-center h-full">
                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-gradient-to-b from-slate-900 to-slate-800 dark:bg-zinc-900 overflow-hidden h-full max-w-sm shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 border border-teal-500/20'>
                                <div className='px-6 py-8 sm:p-8 flex flex-col items-center text-center grow'>
                                    <p className='text-2xl sm:text-3xl text-white font-bold mt-2 mb-4 dark:text-neutral-100 line-clamp-2'>{course.title}</p>
                                    <p className='text-sm md:text-base text-gray-300 dark:text-neutral-400 grow leading-relaxed mb-6'>{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}>
                                        <span className='inline-block px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-200'>Learn more</span>
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/courses"}
                    className='inline-block px-8 py-3 rounded-lg border-2 border-teal-500 text-teal-400 bg-transparent hover:bg-teal-500 hover:text-white font-semibold transition-all duration-300 hover:shadow-lg'
                >
                    View all courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses