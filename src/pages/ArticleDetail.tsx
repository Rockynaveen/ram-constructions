import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { articlesData } from '../data/articles';
import type { Article } from '../types';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Quote } from 'lucide-react';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article: Article | undefined = articlesData.find((a: Article) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = articlesData
    .filter((a: Article) => a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-[#0284C7] transition-colors uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-sky-50 border border-sky-200 text-[#0284C7] rounded text-xs font-mono uppercase tracking-widest font-bold">
              {article.category}
            </span>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#0284C7]" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#0284C7]" />
                {article.readTime}
              </span>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B2545] font-normal leading-[1.14]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg font-normal text-slate-600 leading-relaxed border-l-4 border-[#0284C7] pl-4 italic">
            {article.excerpt}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-4 py-4 border-y border-slate-200">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#0284C7]"
            />
            <div>
              <span className="font-serif text-base text-[#0B2545] font-semibold block">
                {article.author.name}
              </span>
              <span className="text-xs font-mono text-[#0284C7] font-bold">
                {article.author.role}
              </span>
            </div>
          </div>
        </div>

        {/* Feature Cover Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 my-10 shadow-xl shadow-slate-900/5">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Rich Article Body */}
        <div className="space-y-10 text-slate-700 font-normal text-base sm:text-lg leading-relaxed">
          {article.sections.map((section, idx: number) => (
            <div key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0B2545] font-semibold pt-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para: string, pIdx: number) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {section.calloutQuote && (
                <div className="my-8 p-6 sm:p-8 bg-[#F0F9FF] border border-sky-200 rounded-xl relative">
                  <Quote className="w-8 h-8 text-[#0284C7]/20 absolute top-4 right-4" />
                  <blockquote className="font-serif text-xl sm:text-2xl text-[#0B2545] italic font-normal leading-snug">
                    "{section.calloutQuote}"
                  </blockquote>
                </div>
              )}

              {section.keyTakeaways && (
                <div className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl space-y-3 shadow-sm">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-bold block mb-2">
                    Key Architectural Takeaways
                  </span>
                  <div className="space-y-2 text-sm text-slate-700">
                    {section.keyTakeaways.map((takeaway: string, tIdx: number) => (
                      <div key={tIdx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
          {article.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 bg-[#F8FAFC] text-slate-600 border border-slate-200 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related Reading */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-20 pt-16 border-t border-slate-200">
        <h3 className="font-serif text-2xl text-[#0B2545] font-semibold mb-8">Related Architectural Essays</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedArticles.map((rel: Article) => (
            <Link
              key={rel.id}
              to={`/insights/${rel.slug}`}
              className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-xl group hover:border-[#0284C7] transition-all block shadow-sm hover:shadow-md"
            >
              <span className="text-[10px] font-mono text-[#0284C7] font-bold uppercase tracking-wider block mb-2">
                {rel.category} • {rel.readTime}
              </span>
              <h4 className="font-serif text-lg text-[#0B2545] group-hover:text-[#0284C7] transition-colors leading-snug">
                {rel.title}
              </h4>
              <span className="text-xs font-mono text-slate-500 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold">
                Read Article <ArrowUpRight className="w-3.5 h-3.5 text-[#0284C7]" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
