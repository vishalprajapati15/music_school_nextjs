'use client'
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from '@/data/music_courses.json'
import Link from "next/link";

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    ogImage: string;
}

const page = () => {
    const [filter, setFilter] = useState<'all' | 'featured'>('all');
    
    const filteredCourses = filter === 'featured' 
        ? courseData.courses.filter((course: Course) => course.isFeatured)
        : courseData.courses;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
            <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Explore Our Courses
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Discover {courseData.courses.length} expertly crafted music courses designed to elevate your skills from beginner to professional
                    </p>
                    
                    <div className="flex justify-center gap-4 mt-10">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                                filter === 'all'
                                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/50'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            All Courses ({courseData.courses.length})
                        </button>
                        <button
                            onClick={() => setFilter('featured')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                                filter === 'featured'
                                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/50'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            Featured ({courseData.courses.filter((c: Course) => c.isFeatured).length})
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course: Course) => (
                        <CardContainer key={course.id} className="inter-var">
                            <CardBody className="relative group/card bg-gray-900 hover:shadow-2xl hover:shadow-teal-500/20 border border-gray-800 hover:border-teal-500/50 w-full h-full rounded-2xl p-6 transition-all duration-300">
                                {course.isFeatured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                                            FEATURED
                                        </span>
                                    </div>
                                )}
                                <CardItem translateZ="100" className="w-full mb-4">
                                    <div className="relative overflow-hidden rounded-xl aspect-video">
                                        <img
                                            src={course.ogImage}
                                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                                            alt={course.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </CardItem>
                                <div className="space-y-4">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-white line-clamp-2 min-h-[3.5rem]"
                                    >
                                        {course.title}
                                    </CardItem>

                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-gray-400 text-sm leading-relaxed line-clamp-3 min-h-[4rem]"
                                    >
                                        {course.description}
                                    </CardItem>

                                    {/* Instructor */}
                                    <CardItem translateZ="40" className="flex items-center gap-2 text-sm text-gray-400">
                                        <span className="text-teal-400">👨‍🏫</span>
                                        <span>{course.instructor}</span>
                                    </CardItem>

                                    {/* Price & Actions */}
                                    <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
                                        <CardItem translateZ={20} className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                                            ${course.price}
                                        </CardItem>
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href={`/courses/${course.slug}`}
                                            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 cursor-pointer text-white text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-teal-500/50 hover:scale-105"
                                        >
                                            Enroll Now
                                        </CardItem>
                                    </div>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No courses found in this category.</p>
                    </div>
                )}
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
                <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 border border-teal-500/30 rounded-2xl p-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Contact us and we'll help you find the perfect course for your musical journey
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/50 hover:scale-105"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page