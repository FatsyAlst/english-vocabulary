import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getMediaById, getVocabularyForMedia, banners } from "../lib/vocabularyData";
import { VocabularyCard } from "../components/VocabularyCard";
import { getMediaColors } from "../lib/colors";

const MediaDetailPage = () => {
  const { mediaId } = useParams<{ mediaId: string }>();
  const media = mediaId ? getMediaById(mediaId) : undefined;
  const vocabulary = mediaId ? getVocabularyForMedia(mediaId) : [];
  const colors = mediaId ? getMediaColors(mediaId) : getMediaColors("default");
  const bannerImage = mediaId ? banners[mediaId] : undefined;

  if (!media) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-300 mb-4">Media Not Found</h1>
          <Link 
            to="/" 
            className="text-violet-400 hover:text-violet-300 transition-colors"
          >
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Full-width banner with gradient fade */}
      {bannerImage && (
        <div className="relative w-full h-64 md:h-80">
          <img 
            src={bannerImage} 
            alt={media.title}
            className="w-full h-full object-cover object-[50%_25%]"
          />
          {/* Gradient overlay - fades to background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900" />
        </div>
      )}

      <div className="px-4 md:px-8 -mt-16 relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-zinc-400 hover:text-zinc-200 transition-colors mb-6"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Back to Gallery
          </Link>
          
          {/* Title and badge */}
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-200 uppercase">
              {media.title}
            </h1>
            <span className={`${colors.gradient} text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}>
              {media.vocabularyCount} vocabularies
            </span>
          </div>
        </motion.header>

        {/* Vocabulary Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12"
        >
          {vocabulary.map((word, index) => (
            <motion.div
              key={word.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <VocabularyCard 
                word={word} 
                mediaId={mediaId!} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {vocabulary.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-xl">No vocabulary words yet.</p>
            <p className="text-zinc-600 mt-2">Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaDetailPage;
