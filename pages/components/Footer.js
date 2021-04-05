import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer({ siteTitle }) {
    return (
        <footer className="min-h-full bg-green-800 text-white py-10 mt-5">
        <div className="custom-container mx-auto flex flex-col md:flex-row justify-between px-4 lg:px-0">
            <div className="mb-2">
                <Link className="hover:opacity-75" href="/"><a>{siteTitle}</a></Link> © {new Date().getFullYear()}
            </div>
            <div>
              <ul className="list-none m-0">
                <li className="inline-block pr-2"><a className="text-2xl hover:opacity-75" href="mailto:leroyrosales@gmail.com"><FontAwesomeIcon icon="envelope" /></a></li>
                <li className="inline-block pr-2"><a className="text-2xl hover:opacity-75" href="https://github.com/leroyrosales/"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                <li className="inline-block"><Link className="text-2xl hover:opacity-75" href="https://www.linkedin.com/in/leroyrosales/"><a><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></Link></li>
              </ul>
            </div>
        </div>
      </footer>
    )
}
