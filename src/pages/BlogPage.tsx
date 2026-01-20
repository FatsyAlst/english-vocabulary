import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, blogCategories, searchBlogPosts } from "../lib/blogData";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    
    if (searchQuery.trim()) {
      posts = searchBlogPosts(searchQuery);
    }
    
    if (selectedCategory) {
      posts = posts.filter(post => post.categories.includes(selectedCategory));
    }
    
    return posts;
  }, [searchQuery, selectedCategory]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const getCategoryColor = (category: string, isSelected?: boolean) => {
    const colors: Record<string, { normal: string; selected: string; filter: string; filterSelected: string }> = {
      "Vocabulary": {
        normal: "bg-blue-900/50 text-blue-400",
        selected: "bg-blue-500 text-white ring-2 ring-blue-400 ring-offset-1 ring-offset-zinc-900",
        filter: "bg-blue-900/30 text-blue-400 hover:bg-blue-900/50",
        filterSelected: "bg-blue-500 text-white"
      },
      "Etymology": {
        normal: "bg-purple-900/50 text-purple-400",
        selected: "bg-purple-500 text-white ring-2 ring-purple-400 ring-offset-1 ring-offset-zinc-900",
        filter: "bg-purple-900/30 text-purple-400 hover:bg-purple-900/50",
        filterSelected: "bg-purple-500 text-white"
      },
    };
    const defaultColors = {
      normal: "bg-zinc-700/50 text-zinc-400",
      selected: "bg-zinc-500 text-white ring-2 ring-zinc-400 ring-offset-1 ring-offset-zinc-900",
      filter: "bg-zinc-800 text-zinc-400 hover:bg-zinc-700",
      filterSelected: "bg-zinc-100 text-zinc-900"
    };
    const colorSet = colors[category] || defaultColors;
    return isSelected ? colorSet.selected : colorSet.normal;
  };

  const getFilterButtonColor = (category: string | null, isSelected: boolean) => {
    if (category === null) {
      return isSelected
        ? "bg-zinc-100 text-zinc-900"
        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300";
    }
    const colors: Record<string, { normal: string; selected: string }> = {
      "Vocabulary": {
        normal: "bg-blue-900/30 text-blue-400 hover:bg-blue-900/50",
        selected: "bg-blue-500 text-white"
      },
      "Etymology": {
        normal: "bg-purple-900/30 text-purple-400 hover:bg-purple-900/50",
        selected: "bg-purple-500 text-white"
      },
    };
    const colorSet = colors[category] || { normal: "bg-zinc-800 text-zinc-400 hover:bg-zinc-700", selected: "bg-zinc-100 text-zinc-900" };
    return isSelected ? colorSet.selected : colorSet.normal;
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="text-xl font-bold text-zinc-300">📝 Blog</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-zinc-100 mb-4">
            Thoughts on Language
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Exploring the fascinating world of English vocabulary, etymology, and the stories behind the words we use every day.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts..."
              className="w-full px-5 py-3 pl-12 bg-zinc-800/60 border border-zinc-700 rounded-2xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${getFilterButtonColor(null, selectedCategory === null)}`}
            >
              All
            </button>
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${getFilterButtonColor(category, selectedCategory === category)}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchQuery}-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-300">
                      {/* Cover Image */}
                      <div className="md:w-64 md:h-44 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-zinc-700 to-zinc-800">
                        {post.coverImage ? (
                          <img 
                            src={post.coverImage} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-6xl">
                            📝
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category) => (
                            <span
                              key={category}
                              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${getCategoryColor(category, selectedCategory === category)}`}
                            >
                              {category}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>•</span>
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-zinc-500 text-lg">No posts found matching your criteria.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Link 
            to="/" 
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            ← Back to Vocabulary Tracker
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
