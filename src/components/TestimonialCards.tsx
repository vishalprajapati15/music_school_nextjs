'use client'

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { GridBackground } from "@/components/ui/GridBackground";

const testimonials = [
    {
        quote:
            "This platform completely changed the way I learn music. The lessons are structured, engaging, and super easy to follow. I never thought learning guitar online could feel this interactive and fun.",
        name: "Aarav Sharma",
        title: "Beginner Guitar Student",
    },
    {
        quote:
            "The instructors explain everything with so much clarity and patience. I was able to play my first piano song within a week, and now I feel motivated to practice every single day.",
        name: "Neha Verma",
        title: "Piano Learner",
    },
    {
        quote:
            "I love how interactive and well-organized the courses are. The practice exercises and guidance helped me improve faster than I expected, even with a busy schedule.",
        name: "Rohan Mehta",
        title: "Music Enthusiast",
    },
    {
        quote:
            "A perfect place for beginners and advanced learners alike. The content quality is top-notch, and the step-by-step approach makes even complex techniques feel achievable.",
        name: "Simran Kaur",
        title: "Advanced Guitar Player",
    },
    {
        quote:
            "The vocal training sessions boosted my confidence tremendously. I can finally control my pitch, breathing, and tone properly. The improvement in my voice is noticeable.",
        name: "Priya Singh",
        title: "Vocal Training Student",
    },
    {
        quote:
            "The drum basics course was incredibly fun and energetic. I learned rhythm patterns, coordination, and timing in a way that felt simple yet very effective.",
        name: "Kunal Joshi",
        title: "Drum Course Participant",
    },
    {
        quote:
            "Music theory always felt confusing before, but this course made everything clear. Understanding chords and progressions helped me become a much better musician overall.",
        name: "Ananya Patel",
        title: "Music Theory Student",
    },
    {
        quote:
            "Digital music production was exactly what I needed. I learned how to mix, create beats, and produce tracks professionally. It opened up a whole new creative world for me.",
        name: "Rahul Kapoor",
        title: "Aspiring Music Producer",
    },
    {
        quote:
            "The DJ mixing masterclass was amazing. I can now smoothly transition between tracks and build live sets with confidence. The course feels very practical and industry-focused.",
        name: "Ishita Malhotra",
        title: "DJ & Performer",
    },
];



const TestimonialCards = () => {
    return (
        <div className="w-full min-h-[40rem] bg-white dark:bg-black relative flex flex-col items-center justify-center overflow-hidden">
            <GridBackground className="opacity-50" />
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-center mb-8">Hear our Harmony: Voices of successs</h2>
                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards