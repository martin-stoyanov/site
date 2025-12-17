import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import { BlogPost } from './components/BlogPost'
import CreatingBlogSection, { frontmatter as blog1Meta } from './content/blog/creating-blog-section.mdx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blogs/creating-blog-section"
          element={
            <BlogPost title={blog1Meta.title} date={blog1Meta.date}>
              <CreatingBlogSection />
            </BlogPost>
          }
        />
      </Routes>
    </Layout>
  )
}

export default App
