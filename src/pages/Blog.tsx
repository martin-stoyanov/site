import { Link } from 'react-router-dom'

export default function Blog() {
  const blogs = [
    {
      path: '/blogs/creating-blog-section',
      title: 'Creating the blog section of my site',
      date: 'October 24, 2023',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold text-center">Blog</h1>
      <div className="mt-8">
        {blogs.map((blog) => (
          <Link
            key={blog.path}
            to={blog.path}
            className="block text-pink-300 no-underline"
          >
            <div className="w-full flex flex-row justify-between items-center my-4 p-2 rounded-lg md:text-sm hover:bg-light-purple/20 transition-colors">
              <span className="text-pink-300">{blog.title}</span>
              <span className="text-pink-300">{blog.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
