import { LetterboxdFeed } from '../components/LetterboxdFeed'
import { PhotoGallery } from '../components/PhotoGallery'

// Photography
import vitosha from '../assets/images/photography/vitosha.jpg'
import nevsky from '../assets/images/photography/nevsky.jpg'
import dcSunset from '../assets/images/photography/dc-sunset.jpg'

export default function About() {
  return (
    <div className="py-8 bg-light-purple/10">
      <h1 className="text-3xl font-bold text-center mb-8">About Me</h1>
      <div className="max-w-4xl mx-auto px-8">
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          I'm a frontend developer with 5+ years of experience building web applications at places like SentinelOne, Bandwidth, and at Cornell University. I specialize in React, TypeScript, and modern frontend tooling, with a focus on accessibility, testing, and delivering polished user experiences.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-8">
          Outside of work, I love traveling, board games, unfamiliar situations, and I'm getting into photography. 
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
    </div>
  )
}
