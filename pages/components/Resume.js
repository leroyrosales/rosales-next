import React from 'react'
import Link from 'next/link'


export default function Resume() {
    return (
        <section className="py-10">
        <div className="custom-container mx-auto px-4 lg:px-0">
          <p className="text-2xl leading-tight"><a href="mailto:leroyrosales@gmail.com" className="text-green-600 hover:text-green-800 hover:underline">Email me</a>, <a href="#" target="_blank" className="text-green-600 hover:text-green-800 hover:underline">view my resume</a>, <a href="https://github.com/leroyrosales/" target="_blank" className="text-green-600 hover:text-green-800 hover:underline">follow me on GitHub</a>, and <a href="https://www.linkedin.com/in/leroyrosales/" target="_blank" className="text-green-600 hover:text-green-800 hover:underline">connect with me on LinkedIn</a>.</p>
        </div>
      </section>
    )
}
