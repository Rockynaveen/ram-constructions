import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppStore } from '../../store/useStore';
import { CheckCircle2, Shield, ArrowRight, Loader2 } from 'lucide-react';

const enquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^[6-9]\d{9}$|^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  city: z.string().min(2, 'Please enter your project location / city'),
  message: z.string().min(10, 'Please enter at least 10 characters describing your project')
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;

interface ProjectEnquiryFormProps {
  defaultService?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const ProjectEnquiryForm: React.FC<ProjectEnquiryFormProps> = ({
  defaultService,
  onSuccess,
  compact = false
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryFormValues | null>(null);
  const { showToast } = useAppStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      projectType: defaultService || 'Residential Villa',
      city: 'Hyderabad',
      message: ''
    }
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedData(data);
    setIsSubmitted(true);
    showToast('Inquiry received. Our team will get in touch with you shortly.');
    if (onSuccess) onSuccess();
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="bg-[#F0F9FF] border border-sky-200 p-8 text-center rounded-2xl space-y-5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-full bg-[#0284C7]/10 mx-auto flex items-center justify-center border border-[#0284C7]/30 text-[#0284C7]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase">Inquiry Submitted</span>
          <h3 className="text-2xl text-[#0B2545] font-bold mt-1">
            Thank You, {submittedData.fullName}
          </h3>
          <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
            We have received your project details for <strong className="text-[#0B2545]">{submittedData.projectType}</strong> in {submittedData.city}. A Senior Director will review and connect with you within 24 hours.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl text-left border border-slate-200 space-y-2 text-xs text-slate-700 shadow-sm max-w-md mx-auto">
          <div className="flex justify-between border-b border-slate-100 pb-1.5">
            <span className="text-slate-500">Contact Number:</span>
            <span className="font-semibold text-[#0B2545]">{submittedData.phone}</span>
          </div>
          <div className="flex justify-between border-b border-slate-100 pb-1.5">
            <span className="text-slate-500">Email Address:</span>
            <span className="font-semibold text-[#0B2545]">{submittedData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Project Type:</span>
            <span className="font-semibold text-[#0284C7]">{submittedData.projectType}</span>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              reset();
            }}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-white hover:bg-slate-50 text-[#0B2545] border border-slate-300 rounded-lg text-xs font-bold tracking-wider uppercase transition-all shadow-sm cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  const inputClasses = "w-full bg-white border border-slate-300 hover:border-slate-400 focus:border-[#0284C7] focus:ring-4 focus:ring-[#0284C7]/15 rounded-lg px-4 py-3 text-sm text-[#0B2545] placeholder:text-slate-400 outline-none transition-all shadow-xs";
  const labelClasses = "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5";
  const errorClasses = "text-xs text-rose-600 mt-1.5 font-medium";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className={labelClasses}>
            Full Name <span className="text-[#0284C7]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            {...register('fullName')}
            className={inputClasses}
          />
          {errors.fullName && <p className={errorClasses}>{errors.fullName.message}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className={labelClasses}>
            Phone Number <span className="text-[#0284C7]">*</span>
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            {...register('phone')}
            className={inputClasses}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className={labelClasses}>
            Email Address <span className="text-[#0284C7]">*</span>
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            {...register('email')}
            className={inputClasses}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>

        {/* City / Location */}
        <div>
          <label className={labelClasses}>
            Site Location / City <span className="text-[#0284C7]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Jubilee Hills, Hyderabad"
            {...register('city')}
            className={inputClasses}
          />
          {errors.city && <p className={errorClasses}>{errors.city.message}</p>}
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label className={labelClasses}>
          Project Typology <span className="text-[#0284C7]">*</span>
        </label>
        <select {...register('projectType')} className={inputClasses}>
          <option value="Residential Villa">Luxury Residential Villa / Independent House</option>
          <option value="Commercial Space">Commercial Building & Corporate Space</option>
          <option value="Architectural Design Only">Architectural, Structural & 3D BIM Design</option>
          <option value="Luxury Interior">Bespoke Interior Architecture</option>
          <option value="Turnkey Renovation">Turnkey Restoration & Renovation</option>
        </select>
        {errors.projectType && <p className={errorClasses}>{errors.projectType.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className={labelClasses}>
          Project Requirements & Notes <span className="text-[#0284C7]">*</span>
        </label>
        <textarea
          rows={compact ? 3 : 4}
          placeholder="Tell us about your plot size, architectural preferences, estimated budget or timeline..."
          {...register('message')}
          className={inputClasses}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      {/* Submit Button & Confidentiality */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Shield className="w-4 h-4 text-[#0284C7] shrink-0" />
          <span>NDA Protected • 100% Confidential</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0B2545] hover:bg-[#0284C7] text-white text-xs font-bold tracking-wider uppercase px-8 py-3.5 rounded-lg transition-all duration-200 shadow-md shadow-slate-900/10 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Brief...</span>
            </>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
