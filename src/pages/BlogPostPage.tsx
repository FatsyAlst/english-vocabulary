import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogPostBySlug } from "../lib/blogData";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Vocabulary": "bg-blue-900/50 text-blue-400",
      "Etymology": "bg-purple-900/50 text-purple-400",
    };
    return colors[category] || "bg-zinc-800 text-zinc-400";
  };

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 text-zinc-300 mb-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Horizontal rule
      if (trimmedLine === '---') {
        flushList();
        elements.push(<hr key={index} className="border-zinc-700 my-8" />);
        return;
      }

      // Headers
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-zinc-100 mb-6 mt-8">
            {trimmedLine.slice(2)}
          </h1>
        );
        return;
      }

      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-zinc-200 mb-4 mt-8">
            {trimmedLine.slice(3)}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-zinc-200 mb-3 mt-6">
            {trimmedLine.slice(4)}
          </h3>
        );
        return;
      }

      // Blockquotes
      if (trimmedLine.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={index} className="border-l-4 border-zinc-600 pl-4 py-2 my-4 text-zinc-400 italic bg-zinc-800/30 rounded-r-lg pr-4">
            {trimmedLine.slice(2)}
          </blockquote>
        );
        return;
      }

      // List items
      if (trimmedLine.startsWith('- ')) {
        listItems.push(trimmedLine.slice(2));
        return;
      }

      // Empty line
      if (trimmedLine === '') {
        flushList();
        return;
      }

      // Regular paragraph
      flushList();
      
      // Process inline formatting
      let processedLine = trimmedLine;
      
      // Links - match title (url) format
      processedLine = processedLine.replace(
        /([^(]+)\s*\(([^)]+)\)/g,
        (match, title, url) => {
          // Check if it looks like a URL
          if (url.startsWith('http://') || url.startsWith('https://')) {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">${title.trim()}</a>`;
          }
          return match;
        }
      );

      elements.push(
        <p 
          key={index} 
          className="text-zinc-300 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/blog" 
            className="text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">Back to Blog</span>
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category}
                className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(category)}`}
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8">
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-700 to-zinc-800 mb-10">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          {renderContent(post.content)}
        </motion.div>
      </article>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-12">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <Link 
            to="/blog" 
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            ← Back to Blog
          </Link>
          <div className="text-zinc-600 text-sm">
            <Link to="/" className="hover:text-zinc-400 transition-colors">
              Vocabulary Tracker
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;
