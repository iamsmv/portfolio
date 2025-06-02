'use client'

import React, { useState, useEffect } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaSun, FaMoon } from 'react-icons/fa'
import { SiTypescript, SiMongodb } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-primary">Shreyas MV</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer | UI/UX Enthusiast | Problem Solver
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/iamsmv" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-300">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shreyas--mv" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/IamShreyasMV" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/shreyas77757/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              I'm a passionate developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create
              seamless user experiences and robust solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              technical writing.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Skill with icon and text */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center">
              <FaReact size={32} className="mb-2 text-blue-500" />
              <span>React</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center">
              <SiTypescript size={32} className="mb-2 text-blue-700" />
              <span>TypeScript</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center">
              <FaNodeJs size={32} className="mb-2 text-green-600" />
              <span>Node.js</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center">
              <FaPython size={32} className="mb-2 text-yellow-500" />
              <span>Python</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center">
              <FaAws size={32} className="mb-2 text-orange-500" />
              <span>AWS</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center">
              <FaDocker size={32} className="mb-2 text-blue-400" />
              <span>Docker</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center">
              <FaGitAlt size={32} className="mb-2 text-orange-600" />
              <span>Git</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center">
              <SiMongodb size={32} className="mb-2 text-green-700" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of the project and its key features.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

// ThemeToggle component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // On mount, check the current theme
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement
      if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        setIsDark(false)
      } else {
        html.classList.add('dark')
        setIsDark(true)
      }
    }
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {isDark ? <FaSun className="text-yellow-400" size={22} /> : <FaMoon className="text-gray-800" size={22} />}
    </button>
  )
} 