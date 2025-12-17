import { MDXProvider } from '@mdx-js/react'
import type { ComponentType, ReactNode } from 'react'

interface BlogPostProps {
  title: string
  date: string
  children: ReactNode
}

const components = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-pink-300 no-underline hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold mt-6" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-medium mt-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mt-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mt-4" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-gray-800 px-1 rounded text-sm" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mt-4" {...props} />
  ),
}

export function BlogPost({ title, date, children }: BlogPostProps) {
  return (
    <div className="my-8 max-w-3xl mx-auto px-8">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p className="text-center text-gray-400 italic mt-2">{date}</p>
      <div className="mt-8 font-medium">
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </div>
  )
}

export function withBlogLayout(
  Component: ComponentType,
  frontmatter: { title: string; date: string }
) {
  return function BlogPostWrapper() {
    return (
      <BlogPost title={frontmatter.title} date={frontmatter.date}>
        <Component />
      </BlogPost>
    )
  }
}
