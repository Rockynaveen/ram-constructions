import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppStore } from '../../store/useStore';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Loader2, 
  CheckCircle2 
} from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^[6-9]\d{9}$|^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email address'),
  city: z.string().min(2, 'Please enter location / city'),
  projectType: z.string().min(1, 'Please select project type'),
  message: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const HomeContactSection: React.FC = () => {
  const { showToast } = useAppStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      city: 'Hyderabad',
      projectType: 'Luxury Residential Villa',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedName(data.fullName);
    setIsSubmitted(true);
    showToast('Inquiry received. Our Senior Project Director will connect with you shortly.');
  };

  return (
    <section id="contact" className="py-8 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-light-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-8">
          <SectionHeading
            eyebrow="Direct Studio Access"
            title="Let’s discuss your landmark"
            titleHighlight="vision & build."
            description="Share your plot details, architectural requirements, or schedule a private consultation with our Senior Civil & Structural Directors."
          />
        </div>

        {/* 2-Column Grid: Contact Info on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Studio Information & Direct VIP Hotline (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Hyderabad Flagship Studio Card */}
            <div className="bg-white border border-slate-200/90 p-5 sm:p-6 rounded-2xl shadow-xs hover:shadow-md hover:border-[#0072CE]/40 transition-all duration-300 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#0072CE]">
                  <Building2 className="w-4 h-4" />
                  <span className="text-[11px] uppercase tracking-wider font-bold">Headquarters Atelier</span>
                </div>
                <span className="text-[10px] font-bold bg-[#F0F9FF] text-[#0072CE] border border-sky-200 px-2 py-0.5 rounded-full">
                  Hyderabad
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#001738]">
                Jubilee Hills Studio
              </h3>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0072CE] shrink-0 mt-0.5" />
                  <span>Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#0072CE] shrink-0" />
                  <a href="tel:+914068994400" className="text-[#001738] font-semibold hover:text-[#0072CE] transition-colors">
                    +91 40 6899 4400 / +91 98490 12345
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#0072CE] shrink-0" />
                  <a href="mailto:info@ramconstructions.in" className="text-[#0072CE] font-semibold hover:underline">
                    info@ramconstructions.in
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-500 pt-2 border-t border-slate-100">
                  <Clock className="w-3.5 h-3.5 text-[#0072CE] shrink-0" />
                  <span>Mon – Sat: 09:30 AM – 07:00 PM (By Appointment)</span>
                </div>
              </div>
            </div>

            {/* Bengaluru Atelier Card */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-xs hover:shadow-md hover:border-[#0072CE]/40 transition-all duration-300 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#0072CE]">
                  <Building2 className="w-4 h-4" />
                  <span className="text-[11px] uppercase tracking-wider font-bold">Southern Atelier</span>
                </div>
                <span className="text-[10px] font-bold bg-[#F0F9FF] text-[#0072CE] border border-sky-200 px-2 py-0.5 rounded-full">
                  Bengaluru
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#001738]">Lavelle Road Studio</h4>
              <p className="text-xs text-slate-600 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0072CE] shrink-0 mt-0.5" />
                <span>Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru 560001</span>
              </p>
            </div>

            {/* VIP Director Line & Accreditation */}
            <div className="p-4 bg-gradient-to-r from-[#001738] to-[#00224D] rounded-2xl text-white shadow-md flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-widest block">
                  VIP Direct Hotline
                </span>
                <a href="tel:+919849012345" className="text-sm font-bold text-white hover:text-[#38BDF8] transition-colors">
                  +91 98490 12345
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#38BDF8] border border-white/15 px-3 py-1.5 rounded-lg bg-white/5">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="text-[11px] font-semibold">COA & ISO Certified</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Clean Standardized Form (Col 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-lg p-5 sm:p-8">
            
            <div className="mb-6 pb-3 border-b border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0072CE] block mb-1">
                Direct Project Brief
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#001738]">
                Send an Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your project coordinates below and our engineering team will connect within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#F0F9FF] border border-sky-200 p-8 text-center rounded-xl space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#0072CE]/15 mx-auto flex items-center justify-center text-[#0072CE]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#0072CE] uppercase">
                    Inquiry Received
                  </span>
                  <h4 className="text-xl text-[#001738] font-bold mt-1">
                    Thank You, {submittedName}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed max-w-md mx-auto">
                    Your project details have been forwarded to our executive team. A Senior Project Director will reach out to you within 24 business hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    reset();
                  }}
                  className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#001738] bg-white border border-slate-300 hover:bg-slate-50 rounded-lg shadow-xs cursor-pointer transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                {/* Email Address & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                {/* Requirements / Notes */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Requirements / Notes <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about plot dimensions, floors, architectural preferences, estimated timeline..."
                    {...register('message')}
                    className="w-full bg-[#F8FAFC] border border-slate-300 focus:border-[#0072CE] focus:bg-white focus:ring-2 focus:ring-[#0072CE]/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#0072CE] shrink-0" />
                    <span>100% Confidential • Fixed-Cost Guarantee</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#001738] via-[#00224D] to-[#0072CE] hover:brightness-110 text-white text-[11px] font-sans font-bold tracking-[0.14em] uppercase px-6 py-3 rounded-lg transition-all duration-300 shadow-sm shadow-[#001738]/25 hover:shadow-md hover:shadow-[#0072CE]/30 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
