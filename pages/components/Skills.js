import React from 'react'

export default function Skills() {
    return (
        <section className="py-10">
        <div className="container-lg mx-auto flex flex-col md:flex-row flex-wrap px-4 lg:px-0">
          <div class="md:w-1/3">
            <h4>Proficient with:</h4>
            <ul className="list-disc leading-none">
              <li>WordPress</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Jekyll</li>
              <li>Sass/SCSS/CSS</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
              <li>Git/Github</li>
              <li>Twig Templating</li>
              <li>Twig for WordPress</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
          <div class="md:w-1/3">
            <h4>Comfortable with:</h4>
            <ul className="list-disc leading-none">
              <li>React</li>
              <li>Gatsby</li>
              <li>Next.js</li>
              <li>Drupal</li>
              <li>Gulp</li>
            </ul>
          </div>
          <div class="md:w-1/3">
            <h4>Teaching myself:</h4>
            <ul className="list-disc leading-none">
              <li>Python</li>
              <li>Django</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
      </section>
    )
}
