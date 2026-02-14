'use client'
import Link from "next/link"
import { HoverEffect } from "@/components/ui/card-hover-effect";

const UpComingWebinar = () => {

    const featureWebinars = [
        {
            title: "Mastering Guitar Chords",
            description:
                "Join this live webinar to learn essential guitar chords, smooth transitions, and strumming techniques to play your favorite songs with confidence.",
            slug: "mastering-guitar-chords",
            isFeatured: true,
        },
        {
            title: "Piano Basics for Beginners",
            description:
                "A beginner-friendly session covering finger placement, scales, and simple melodies to kickstart your piano learning journey.",
            slug: "piano-basics-for-beginners",
            isFeatured: false,
        },
        {
            title: "Vocal Training & Breath Control",
            description:
                "Improve your singing voice with expert vocal exercises, breathing techniques, and tips to enhance pitch and vocal strength.",
            slug: "vocal-training-breath-control",
            isFeatured: true,
        },
        {
            title: "Understanding Music Theory",
            description:
                "Learn the fundamentals of music theory including notes, chords, progressions, and rhythm to become a better musician and composer.",
            slug: "understanding-music-theory",
            isFeatured: false,
        },
        {
            title: "Drumming Rhythm Essentials",
            description:
                "Explore core drumming patterns, timing, and coordination drills in this interactive webinar designed for beginners and enthusiasts.",
            slug: "drumming-rhythm-essentials",
            isFeatured: true,
        },
        {
            title: "Advanced Guitar Solo Techniques",
            description:
                "Take your guitar skills to the next level by learning solo improvisation, scales, speed-building exercises, and performance tips.",
            slug: "advanced-guitar-solo-techniques",
            isFeatured: false,
        },
    ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-lg md:text-xl text-teal-500 font-semibold tracking-widest uppercase">Featured Webinar</h2>
                    <p className="mt-4 text-4xl md:text-6xl lg:text-7xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                        items={featureWebinars.map((webinar) => ({
                            title: webinar.title,
                            description: webinar.description,
                            link: `/webinars/${webinar.slug}`,
                        }))}
                    />
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/"}
                        className='inline-block px-8 py-3 rounded-lg border-2 border-teal-500 text-teal-400 bg-transparent hover:bg-teal-500 hover:text-white font-semibold transition-all duration-300 hover:shadow-lg'
                    >
                        View all Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpComingWebinar