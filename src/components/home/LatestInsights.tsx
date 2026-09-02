import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articlesData } from '../../data/articles';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

export const LatestInsights: React.FC = () => {
  const featuredArticles = articlesData.slice(0, 3);

  return (
    <section className="py-10 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Architectural Journal"
            title="Insights on design, craft"
            titleHighlight="and modern building."
            description="Essays, cost analyses, and engineering principles authored by our studio directors to guide your building journey."
          />
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#0284C7] uppercase hover:text-[#0B2545] transition-colors group shrink-0 font-bold"
          >
            <span>Read All Articles</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#0284C7] transition-all duration-300 shadow-sm hover:shadow-xl shadow-slate-900/5"
            >
              <div>
                {/* Image */}
                <Link to={`/insights/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-[#0284C7] border border-slate-200 uppercase tracking-wider font-bold shadow-sm">
                    {article.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500">
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
                    <h3 className="font-serif text-lg text-[#0B2545] font-semibold leading-snug">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs font-normal text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-[#0284C7]"
                  />
                  <div className="text-[11px]">
                    <span className="text-[#0B2545] block font-semibold">{article.author.name}</span>
                    <span className="text-slate-500 font-light block">{article.author.role}</span>
                  </div>
                </div>

                <Link
                  to={`/insights/${article.slug}`}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0284C7] group-hover:text-white group-hover:border-[#0284C7] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
