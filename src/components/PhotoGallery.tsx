import { useState } from 'react'

interface Photo {
  src: string
  alt: string
  camera: string
  film: string
  location: string
  date: string
}

interface PhotoGalleryProps {
  photos: Photo[]
  initialCount?: number
}

export function PhotoGallery({ photos, initialCount }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visiblePhotos = initialCount && !showAll ? photos.slice(0, initialCount) : photos
  const hasMore = initialCount ? photos.length > initialCount : false

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visiblePhotos.map((photo, index) => (
          <div key={index} className="flex flex-col bg-dark/50 rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedPhoto(photo)}
              className="w-full cursor-pointer group relative"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity bg-black/50 px-3 py-1 rounded">
                  Click to enlarge
                </span>
              </div>
            </button>
            <div className="p-3 text-center space-y-1">
              <p className="text-sm text-gray-200 font-medium">
                📍 {photo.location}
              </p>
              <p className="text-xs text-gray-300">
                📅 {photo.date}
              </p>
              <p className="text-xs text-gray-300">
                📷 {photo.camera} · 🎞️ {photo.film}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All / Show Less */}
      {hasMore && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-mono text-sm text-light-purple hover:text-white border border-light-purple/40 hover:border-light-purple px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            {showAll ? 'Show less' : `View all (${photos.length})`}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="max-w-full max-h-[75vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 bg-black/70 px-6 py-3 rounded-lg text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-white text-base font-medium">📍 {selectedPhoto.location}</p>
            <p className="text-gray-300 text-sm mt-1">
              📅 {selectedPhoto.date} · 📷 {selectedPhoto.camera} · 🎞️ {selectedPhoto.film}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
