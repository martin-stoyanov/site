import { useEffect, useState } from 'react'

interface Movie {
  title: string
  rating: number
  watchedDate: string
  link: string
}

export function LetterboxdFeed() {
  const [recentMovie, setRecentMovie] = useState<Movie | null>(null)
  const [recent5Star, setRecent5Star] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchFeed() {
      try {
        const corsProxy = 'https://api.allorigins.win/raw?url='
        const feedUrl = encodeURIComponent('https://letterboxd.com/martinooooooooo/rss')
        const response = await fetch(`${corsProxy}${feedUrl}`)
        
        if (!response.ok) throw new Error('Failed to fetch feed')
        
        const text = await response.text()
        const parser = new DOMParser()
        const xml = parser.parseFromString(text, 'text/xml')
        const items = xml.querySelectorAll('item')
        
        let foundRecent = false
        let found5Star = false
        
        for (const item of items) {
          const title = item.querySelector('title')?.textContent || ''
          const link = item.querySelector('link')?.textContent || ''
          const pubDate = item.querySelector('pubDate')?.textContent || ''
          
          // Parse rating from letterboxd:memberRating
          const ratingEl = item.getElementsByTagName('letterboxd:memberRating')[0]
          const rating = ratingEl ? parseFloat(ratingEl.textContent || '0') : 0
          
          // Parse watched date from letterboxd:watchedDate
          const watchedEl = item.getElementsByTagName('letterboxd:watchedDate')[0]
          const watchedDate = watchedEl?.textContent || pubDate
          
          // Format the date
          const formattedDate = new Date(watchedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
          
          // Extract just the movie title (remove year and rating stars)
          const cleanTitle = title.replace(/,\s*\d{4}\s*-\s*★.*$/, '').trim()
          
          const movie: Movie = {
            title: cleanTitle,
            rating,
            watchedDate: formattedDate,
            link
          }
          
          if (!foundRecent) {
            setRecentMovie(movie)
            foundRecent = true
          }
          
          if (!found5Star && rating === 5) {
            setRecent5Star(movie)
            found5Star = true
          }
          
          if (foundRecent && found5Star) break
        }
        
        setLoading(false)
      } catch (err) {
        setError('Could not load Letterboxd feed')
        setLoading(false)
      }
    }
    
    fetchFeed()
  }, [])

  if (loading) {
    return (
      <div className="mb-8 p-6 bg-light-purple/10 rounded-lg border border-light-purple/30">
        <div className="h-6 w-48 bg-light-purple/20 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-dark/50 rounded">
            <div className="h-3 w-16 bg-gray-600/50 rounded animate-pulse mb-2" />
            <div className="h-5 w-32 bg-gray-500/50 rounded animate-pulse mb-2" />
            <div className="h-4 w-40 bg-gray-600/50 rounded animate-pulse" />
          </div>
          <div className="p-4 bg-dark/50 rounded">
            <div className="h-3 w-20 bg-gray-600/50 rounded animate-pulse mb-2" />
            <div className="h-5 w-28 bg-gray-500/50 rounded animate-pulse mb-2" />
            <div className="h-4 w-36 bg-gray-600/50 rounded animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return null
  }

  return (
    <div className="mb-8 p-6 bg-light-purple/10 rounded-lg border border-light-purple/30">
      <h2 className="text-lg font-mono text-light-purple mb-4">🎬 Recently Watched</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recentMovie && (
          <a
            href={recentMovie.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-dark/50 rounded hover:bg-dark/70 transition-colors"
          >
            <p className="text-xs text-gray-400 mb-1">Latest</p>
            <p className="font-medium text-white">{recentMovie.title}</p>
            <p className="text-sm text-gray-400">
              {'★'.repeat(Math.floor(recentMovie.rating))}
              {recentMovie.rating % 1 ? '½' : ''} · {recentMovie.watchedDate}
            </p>
          </a>
        )}
        {recent5Star && (
          <a
            href={recent5Star.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-dark/50 rounded hover:bg-dark/70 transition-colors"
          >
            <p className="text-xs text-gray-400 mb-1">Latest 5 star</p>
            <p className="font-medium text-white">{recent5Star.title}</p>
            <p className="text-sm text-gray-400">
              ★★★★★ · {recent5Star.watchedDate}
            </p>
          </a>
        )}
      </div>
    </div>
  )
}
