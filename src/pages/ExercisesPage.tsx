import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { exerciseSets } from "../lib/exercisesData";

const ExercisesPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="text-xl font-bold text-zinc-300">📄 Exercises</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-zinc-100 mb-4">
            Vocabulary Practice
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            These exercise sets are designed for self-study. Each set includes a PDF with exercises and a separate answer sheet so you can check your work. Download or view them directly in your browser.
          </p>
        </motion.div>

        {/* Exercise Sets */}
        <div className="grid gap-6">
          {exerciseSets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="p-6 rounded-2xl bg-zinc-800/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Set Number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                  <span className="text-2xl font-bold text-zinc-300">#{set.number}</span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-100 mb-2">
                    {set.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {set.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Exercises PDF */}
                  <div className="flex gap-2">
                    <a
                      href={set.exercisePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-700/50 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 transition-all text-sm font-medium"
                      title="View Exercises"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Exercises
                    </a>
                    <button
                      onClick={async () => {
                        const response = await fetch(set.exercisePdf);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = set.exercisePdf.split('/').pop() || 'exercises.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                      }}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-700/30 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-300 transition-all cursor-pointer"
                      title="Download Exercises"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>

                  {/* Answers PDF */}
                  <div className="flex gap-2">
                    <a
                      href={set.answersPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-900/30 text-emerald-400 hover:bg-emerald-900/50 hover:text-emerald-300 transition-all text-sm font-medium"
                      title="View Answers"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Answers
                    </a>
                    <button
                      onClick={async () => {
                        const response = await fetch(set.answersPdf);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = set.answersPdf.split('/').pop() || 'answers.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                      }}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-900/20 text-emerald-500 hover:bg-emerald-900/40 hover:text-emerald-400 transition-all cursor-pointer"
                      title="Download Answers"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl bg-zinc-800/20 border border-zinc-800/50"
        >
          <h4 className="text-zinc-300 font-medium mb-2">💡 How to use</h4>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Complete the exercises without looking at the answers first. Once you've finished, use the answer sheet to check your work and identify areas for improvement. Try to revisit any words you got wrong and add them to your study list.
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
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

export default ExercisesPage;
