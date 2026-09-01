import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-24">
      <div className="max-w-md text-center space-y-6">
        <span className="font-serif text-7xl sm:text-8xl text-[#0284C7] font-bold block">
          404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#0B2545] font-semibold">
          Structure Not Found
        </h1>
        <p className="text-sm font-normal text-slate-600 leading-relaxed">
          The architectural plan or page you requested does not exist or has been relocated within our blueprints.
        </p>
        <div className="pt-4">
          <Link to="/">
            <Button variant="primary" size="md" icon="arrow-right">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
