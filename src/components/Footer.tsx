'use client'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 via-black to-black text-gray-400 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h2 className="text-white text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                            Music School
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-400">
                            A premier institution dedicated to teaching the art and science of music. 
                            We nurture talent from the ground up, fostering a vibrant community of musicians.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm hover:text-teal-400 transition-colors duration-300 inline-flex items-center group"
                                >
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/courses"
                                    className="text-sm hover:text-teal-400 transition-colors duration-300 inline-flex items-center group"
                                >
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm hover:text-teal-400 transition-colors duration-300 inline-flex items-center group"
                                >
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm hover:text-teal-400 transition-colors duration-300 inline-flex items-center group"
                                >
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                                <span className="text-teal-400 mr-2">📍</span>
                                <span>New Delhi, India<br />Delhi 10001</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-teal-400 mr-2">✉️</span>
                                <a href="mailto:info@musicschool.com" className="hover:text-teal-400 transition-colors">
                                    info@musicschool.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <span className="text-teal-400 mr-2">📞</span>
                                <a href="tel:+11234567890" className="hover:text-teal-400 transition-colors">
                                    (123) 456-7890
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <span className="text-white">f</span>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <span className="text-white">𝕏</span>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <span className="text-white">📷</span>
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="YouTube"
                            >
                                <span className="text-white">▶</span>
                            </a>
                        </div>
                        <div className="pt-4">
                            <p className="text-sm mb-2">Subscribe to our newsletter</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-teal-500 transition-colors"
                                />
                                <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-r-lg transition-colors text-sm font-semibold">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>© 2026 Music School. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-teal-400 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="hover:text-teal-400 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer