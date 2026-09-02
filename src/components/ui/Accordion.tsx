import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils';

interface AccordionContextProps {
  value: string | string[];
  onValueChange: (val: string) => void;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
}

const AccordionContext = createContext<AccordionContextProps | null>(null);

export const Accordion = ({
  type = 'single',
  collapsible = true,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  children,
  ...props
}: {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue || '');
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = (itemValue: string) => {
    let nextValue = itemValue;
    if (type === 'single') {
      if (collapsible && currentValue === itemValue) {
        nextValue = '';
      }
    }
    if (controlledValue === undefined) {
      setInternalValue(nextValue);
    }
    if (onValueChange) {
      onValueChange(nextValue);
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        type,
        collapsible,
      }}
    >
      <div className={cn('space-y-2.5', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItemContext = createContext<{ value: string; isOpen: boolean } | null>(null);

export const AccordionItem = ({
  value,
  className,
  children,
  ...props
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const context = useContext(AccordionContext);
  const isOpen = context?.value === value;

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        className={cn(
          'border border-slate-200 rounded-xl transition-all duration-200 overflow-hidden shadow-xs',
          isOpen ? 'bg-[#F8FAFC] border-[#0284C7] shadow-sm' : 'bg-white hover:border-slate-300',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionTrigger = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const accordionContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!itemContext) return null;
  const { value, isOpen } = itemContext;

  return (
    <button
      type="button"
      onClick={() => accordionContext?.onValueChange(value)}
      className={cn(
        'flex flex-1 items-center justify-between py-4 px-5 font-bold text-left transition-all cursor-pointer w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]',
        isOpen ? 'text-[#0284C7]' : 'text-[#0B2545] hover:text-[#0284C7]',
        className
      )}
      aria-expanded={isOpen}
      {...props}
    >
      <span className="text-base sm:text-lg font-bold leading-snug">{children}</span>
      <span className={cn(
        'w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200',
        isOpen ? 'border-[#0284C7] bg-[#0284C7] text-white rotate-180' : 'border-slate-200 text-slate-400 bg-white'
      )}>
        <ChevronDown className="h-3.5 w-3.5" />
      </span>
    </button>
  );
};

export const AccordionContent = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const itemContext = useContext(AccordionItemContext);
  if (!itemContext) return null;
  const { isOpen } = itemContext;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className={cn('px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100', className)} {...props}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
