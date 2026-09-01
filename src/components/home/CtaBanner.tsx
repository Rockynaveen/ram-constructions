import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CostEstimator } from '../forms/CostEstimator';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-10 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8">
          <SectionHeading
            align="center"
            eyebrow="Turnkey Project Estimation"
            title="Precision planning starts with"
            titleHighlight="transparent numbers."
            description="Explore ballpark budgets for your residential or commercial vision with our real-time architectural cost calculator."
          />
        </div>

        {/* Embedded Interactive Estimator */}
        <CostEstimator />

      </div>
    </section>
  );
};
