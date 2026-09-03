import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppStore } from '../../store/useStore';
import { 
  X, 
  ShieldCheck, 
  ArrowRight, 
  Loader2, 
  CheckCircle2, 
  Building2, 
  Award, 
  PhoneCall 
} from 'lucide-react';

const consultationSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^[6-9]\d{9}$|^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email address'),
  city: z.string().min(2, 'Please enter location / city'),
  projectType: z.string().min(1, 'Please select project type'),
  message: z.string().optional()
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

export const ConsultationModal: React.FC = () => {
  const { 
    isConsultationModalOpen, 
    closeConsultationModal, 
    initialServiceForModal,
    showToast 
  } = useAppStore();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      city: 'Hyderabad',
      projectType: initialServiceForModal || 'Luxury Residential Villa',
      message: ''
    }
  });

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (isConsultationModalOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeConsultationModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isConsultationModalOpen, closeConsultationModal]);

  const onSubmit = async (data: ConsultationFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedName(data.fullName);
    setIsSubmitted(true);
    showToast('Consultation request received. Our Senior Director will call you shortly.');
    setTimeout(() => {
      closeConsultationModal();
      reset();
      setIsSubmitted(false);
    }, 3500);
  };

  if (!isConsultationModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeConsultationModal}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm cursor-pointer"
        />

        {/* Two-Column Split Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col lg:flex-row my-auto max-h-[92vh]"
        >
          {/* Close Button on Top-Right */}
          <button
            onClick={closeConsultationModal}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/90 lg:bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-sm cursor-pointer focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT COLUMN: Simple Clean Form */}
          <div className="w-full lg:w-[58%] p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-5 pr-8">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0072CE] animate-pulse" />
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#0072CE] uppercase font-bold">
                    RAM Constructions Concierge
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00224D] leading-tight">
                  Request Architectural Consultation
                </h2>
                <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                  Connect directly with our Senior Civil & Structural Directors for a private project feasibility discussion.
                </p>
              </div>

              {/* Form or Success View */}
              {isSubmitted ? (
                <div className="bg-[#F0F9FF] border border-sky-200 p-6 text-center rounded-xl space-y-4 animate-in fade-in zoom-in-95 duration-200 my-4">
                  <div className="w-12 h-12 rounded-full bg-[#0284C7]/15 mx-auto flex items-center justify-center text-[#0284C7]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider text-[#0284C7] uppercase">
                      Request Confirmed
                    </span>
                    <h3 className="text-xl text-[#0B2545] font-bold mt-1">
                      Thank You, {submittedName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Your brief has been forwarded to our executive team. We will contact you within 24 business hours to schedule your private architectural review.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-[#0072CE]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Anand Varma"
                        {...register('fullName')}
                        className="w-full bg-[#F8FAFC] border border-slate-300 focus:border-[#0072CE] focus:bg-white focus:ring-2 focus:ring-[#0072CE]/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-[#0072CE]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register('phone')}
                        className="w-full bg-[#F8FAFC] border border-slate-300 focus:border-[#0072CE] focus:bg-white focus:ring-2 focus:ring-[#0072CE]/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address <span className="text-[#0072CE]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="anand@example.com"
                        {...register('email')}
                        className="w-full bg-[#F8FAFC] border border-slate-300 focus:border-[#0072CE] focus:bg-white focus:ring-2 focus:ring-[#0072CE]/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Plot / Site Location <span className="text-[#0072CE]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Jubilee Hills, Hyderabad"
                        {...register('city')}
                        className="w-full bg-[#F8FAFC] border border-slate-300 focus:border-[#0072CE] focus:bg-white focus:ring-2 focus:ring-[#0072CE]/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                      />
                      {errors.city && (
                        <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.city.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Typology */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Project Typology <span className="text-[#0072CE]">*</span>
                    </label>
                    <select
                      {...register('projectType')}
                      className="w-full bg-[#F8FAFC] border border-slate-300 focus:border-[#0072CE] focus:bg-white focus:ring-2 focus:ring-[#0072CE]/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all cursor-pointer"
                    >
                      <option value="Luxury Residential Villa">Luxury Residential Villa / Independent House</option>
                      <option value="Commercial Space">Commercial Building & Corporate Landmark</option>
                      <option value="Architectural Design Only">Architectural, Structural & 3D BIM Design</option>
                      <option value="Luxury Interior">Bespoke Interior Architecture</option>
                      <option value="Turnkey Renovation">Turnkey Restoration & Renovation</option>
                    </select>
                  </div>

                  {/* Message (Compact) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Brief Requirements / Notes <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. 500 sq. yard plot, ground + 2 floors, interested in turnkey construction..."
                      {...register('message')}
                      className="w-full bg-[#F8FAFC] border border-slate-300 focus:border-[#0072CE] focus:bg-white focus:ring-2 focus:ring-[#0072CE]/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button & Trust Note */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                      <ShieldCheck className="w-4 h-4 text-[#0072CE] shrink-0" />
                      <span>100% Confidential • Fixed-Cost Guarantee</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#002D62] to-[#0072CE] hover:brightness-110 text-white text-xs font-mono font-bold tracking-wider uppercase px-6 py-3 rounded-lg transition-all shadow-md shadow-[#002D62]/25 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Quick Contact Footer */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#0072CE]" />
                <span>+91 40 6899 4400</span>
              </span>
              <span>Jubilee Hills • Hyderabad</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Construction Imagery & Trust Highlights */}
          <div className="relative hidden lg:block lg:w-[42%] bg-[#001738] overflow-hidden">
            {/* Background Construction Image */}
            <img
              src="/images/hero-site.jpg"
              alt="RAM Construction Active Civil Engineering Site"
              className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
            />

            {/* Deep architectural gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001738] via-[#00224D]/50 to-[#001738]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#001738]/30" />

            {/* Content Overlaid on Construction Image */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
              {/* Top Pill Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#001738]/85 backdrop-blur-md border border-[#38BDF8]/40 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-sky-200 uppercase">
                    Civil & Structural Prowess
                  </span>
                </div>
              </div>

              {/* Bottom Feature Cards Overlaid */}
              <div className="space-y-3 bg-[#001738]/85 backdrop-blur-md p-4 rounded-xl border border-white/15 shadow-xl">
                <p className="text-xs font-serif italic text-slate-200 leading-relaxed">
                  "Every millimeter matters when engineering a landmark residence or commercial space."
                </p>

                <div className="pt-2 border-t border-white/15 grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 text-sky-200">
                    <Building2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    <span>300+ Delivered</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sky-200">
                    <Award className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    <span>10-Yr Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sky-200 col-span-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    <span>Zero Subcontracting • In-House Trades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
