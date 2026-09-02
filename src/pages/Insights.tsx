import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articlesData } from '../data/articles';
import type { Article } from '../types';
import { Search, Calendar, Clock, ArrowUpRight } from 'lucide-react';

export const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Architecture',
    'Construction',
    'Interiors',
    'Planning',
    'Materials',
    'Cost & Budget'
  ];

  const filteredArticles = articlesData.filter((art: Article) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-24 pb-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#0284C7] uppercase font-bold">
              Architectural Journal & Guides
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#0B2545] leading-[1.12]">
            Thoughts on design, craft <br />
            <span className="italic text-brand-gradient">& structural wisdom.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg font-normal text-slate-600 max-w-2xl leading-relaxed">
            Essential readings on materials, realistic budgeting, passive solar planning, and heirloom construction practices.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-4 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0284C7] text-white font-bold shadow-md shadow-sky-600/20'
                      : 'bg-[#F8FAFC] text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-[#0B2545]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search essays & guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-200 pl-10 pr-4 py-2 text-xs text-[#0B2545] placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] rounded-lg font-mono"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredArticles.map((article: Article) => (
              <motion.article
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
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
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0284C7] group-hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};
