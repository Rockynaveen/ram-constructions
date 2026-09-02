import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articlesData } from '../../data/articles';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const featuredArticles = articlesData.slice(0, 4);

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeading
            eyebrow="Our Blog"
            title="Latest Articles &"
            titleHighlight="Insights."
            description="Explore our latest blog posts on construction guides, cost planning, architectural trends, and engineering standards."
          />
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#0284C7] uppercase hover:text-[#0B2545] transition-colors group shrink-0 font-bold"
          >
            <span>View All Blogs</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4 Blog Cards Grid (Compact & Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#0284C7] transition-all duration-300 shadow-xs hover:shadow-lg shadow-slate-900/5 max-w-sm mx-auto w-full"
            >
              <div>
                {/* Image (Reduced Height) */}
                <Link to={`/insights/${article.slug}`} className="block relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-[#0284C7] border border-slate-200 uppercase tracking-wider font-bold shadow-xs">
                    {article.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#0284C7]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#0284C7]" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link to={`/insights/${article.slug}`} className="block group-hover:text-[#0284C7] transition-colors">
                    <h3 className="text-sm sm:text-base text-[#0B2545] font-bold leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs font-normal text-slate-600 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More Footer */}
              <div className="px-4 pb-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#0284C7]"
                  />
                  <div className="text-[10px]">
                    <span className="text-[#0B2545] block font-semibold leading-tight">{article.author.name}</span>
                    <span className="text-slate-500 font-light block leading-tight">{article.author.role}</span>
                  </div>
                </div>

                <Link
                  to={`/insights/${article.slug}`}
                  className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0284C7] group-hover:text-white group-hover:border-[#0284C7] transition-colors"
                  aria-label="Read full blog post"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
