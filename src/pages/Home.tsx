import { TypingIntro } from '../components/TypingIntro'
import { TextIntro } from '../components/TextIntro'
import { SectionHeader } from '../components/SectionHeader'
import { WorkCard } from '../components/WorkCard'
import { ProjectCard } from '../components/ProjectCard'
import { LetterboxdFeed } from '../components/LetterboxdFeed'
import { PhotoGallery } from '../components/PhotoGallery'

// Import images
import cornellSeal from '../assets/images/cornell_seal.png'
import bwLogo from '../assets/images/bw_logo.png'
import s1Logo from '../assets/images/s1logo.png'

// Photography
import vitosha from '../assets/images/photography/vitosha.jpg'
import nevsky from '../assets/images/photography/nevsky.jpg'
import dcSunset from '../assets/images/photography/dc-sunset.jpg'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-[74vh] bg-dark">
        <TypingIntro />
        <TextIntro />
      </div>

      {/* Work Experience Section */}
      <section id="work" className="py-8 bg-light-blue/10">
        <SectionHeader color="#b3ccff">Work Experience</SectionHeader>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 px-[5vw] mt-8 max-w-7xl mx-auto justify-items-center [&>*:last-child:nth-child(odd)]:min-[900px]:col-span-2 [&>*:last-child:nth-child(odd)]:min-[900px]:justify-self-center [&>*:last-child:nth-child(odd)]:min-[900px]:w-[min(100%,600px)]">
          <WorkCard
            title="Cornell University."
            date="October 2019 - May 2021"
            role="Software Development Lead"
            description="Frontend lead for the team that develops and maintains Cornell's in-house Course Management System, used by over 8000 students and course staff every semester. Currently leading projects to improve initial load time, improve code reuse, and rewrite the user documentation site."
            tags="React, Typescript, Java"
            image={cornellSeal}
            link="https://www.cs.cornell.edu/projects/cms/cmsx/"
          />
          <WorkCard
            title="Bandwidth Inc."
            date="May 2020 - July 2020, August 2021 - December 2023"
            role="Software Developer II"
            description={
              <>
                Worked on company's web dashboard, which is built with React,
                Typescript, Redux, and SWR. Created unit, functional, and integration
                tests using Jest, React Testing Library, & Cypress.
                <p className="mt-2">
                  Front-end lead on initiative to globalize the company's dashboard to
                  support international customers
                </p>
              </>
            }
            tags="React, Typescript, Material UI, Jest, Cypress"
            image={bwLogo}
            link="https://www.bandwidth.com/"
          />
          <WorkCard
            title="SentinelOne Inc."
            date="December 2023 - Present"
            role="Software Developer, Frontend"
            description="Adding features to web console/dashboard. Testing them with Playwright"
            tags="React, Typescript, Nx, Material UI, Playwright"
            image={s1Logo}
            imageSize={50}
            link="https://www.sentinelone.com/"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-8 py-8">
        <SectionHeader color="#deb1c0">Projects</SectionHeader>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 px-[5vw] mt-8 max-w-7xl mx-auto justify-items-center [&>*:last-child:nth-child(odd)]:min-[900px]:col-span-2 [&>*:last-child:nth-child(odd)]:min-[900px]:justify-self-center [&>*:last-child:nth-child(odd)]:min-[900px]:w-[min(100%,600px)]">
          <ProjectCard
            title="ViewFinder"
            description="A photo spot recommender. Give the app a city and some photo genres (nature, skyline, etc.), and ViewFinder parses Google reviews and returns photo spots you might like! Note: the backend server uses Heroku's free tier so there will be a ~30 second startup delay"
            tags="Flask, Python, Axios, React"
            link="https://travel-bucket.vercel.app/"
            github="https://github.com/foxhatleo/travel-bucket-frontend"
          />
          <ProjectCard
            title="HyperparametersJS"
            description="HPJS is a Javascript hyperparameter optimization library for tensorflow.js machine learning models. I built the website showcasing the library. The frontend uses React/Next.JS with Tensorflow.js to showcase examples of the library in action. I build the backend with Python, using Django, Postgres, and GraphQL"
            tags="Django, Python, Postgres, GraphQL, Gatsby, React"
            link="https://hyperjs.herokuapp.com/"
            github="https://github.com/martin-stoyanov/hyperparameters-site"
          />
          <ProjectCard
            title="This Website!"
            description="I built this portfolio website with Vite, React, TypeScript, and Tailwind CSS. It's a place to show off my projects and share my thoughts."
            tags="Vite, React, TypeScript, Tailwind CSS"
            github="https://github.com/martin-stoyanov/site"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="mt-8 py-8 bg-light-purple/10">
        <SectionHeader color="#c6b3ff">About Me</SectionHeader>
        <div className="max-w-4xl mx-auto px-8 mt-8">
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            I'm a frontend developer with 5+ years of experience building web applications at SentinelOne, Bandwidth, and at Cornell University. I specialize in React, TypeScript, and modern frontend tooling, with a focus on accessibility, testing, and delivering polished user experiences.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            Outside of work, I love traveling, board games, and getting into unfamiliar situations, and I'm getting into photography. 
            Here's what I've been up to lately:
          </p>
          
          <LetterboxdFeed />
          
          {/* Photo Gallery */}
          <div className="p-6 bg-light-purple/10 rounded-lg border border-light-purple/30">
            <h3 className="text-lg font-mono text-light-purple mb-4">📷 Recent Photos</h3>
            <PhotoGallery
              photos={[
                { src: nevsky, alt: 'Alexander Nevsky Cathedral', camera: 'Smena 8m', film: 'Harman Phoenix', location: 'Nevsky Cathedral, Sofia, BG', date: 'Oct 2025' },
                { src: vitosha, alt: 'Vitosha mountain', camera: 'Smena 8m', film: 'Harman Phoenix', location: 'Vitosha Mountain, Sofia, BG', date: 'Oct 2025' },
                { src: dcSunset, alt: 'DC Sunset', camera: 'Smena 8m', film: 'Harman Phoenix', location: 'Washington DC', date: 'Nov 2025' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
