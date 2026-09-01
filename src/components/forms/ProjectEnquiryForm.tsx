import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { useAppStore } from '../../store/useStore';
import { CheckCircle2, Shield } from 'lucide-react';

const enquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$|^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  city: z.string().min(2, 'Please specify your location or project city'),
  projectType: z.enum([
    'Residential Villa',
    'Commercial Space',
    'Architectural Design Only',
    'Luxury Interior',
    'Turnkey Renovation'
  ], { message: 'Please select a project type' }),
  plotArea: z.string().min(1, 'Please specify approximate area (e.g. 5,000 sft)'),
  estimatedBudget: z.string().min(1, 'Please select your estimated budget'),
  plotStatus: z.enum([
    'Ready for Construction',
    'Plot Purchased / In Progress',
    'Searching for Land',
    'Existing Structure to Demolish'
  ]),
  preferredStartDate: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(10, 'Please share a few details about your vision (min 10 characters)')
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
      email: '',
      phone: '',
      city: 'Hyderabad',
      projectType: (defaultService as any) || 'Residential Villa',
      plotArea: '5,000 - 8,000 sq.ft',
      estimatedBudget: '₹3.5 Cr - ₹5.0 Cr',
      plotStatus: 'Ready for Construction',
      preferredStartDate: 'Within 1-3 Months',
      message: ''
    }
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedData(data);
    setIsSubmitted(true);
    showToast('Consultation request received. A Senior Project Director from RAM Constructions will contact you within 24 hours.');
    if (onSuccess) onSuccess();
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="bg-[#F0F9FF] border border-sky-200 p-8 text-center rounded-xl space-y-5">
        <div className="w-16 h-16 rounded-full bg-sky-100 mx-auto flex items-center justify-center border border-sky-300">
          <CheckCircle2 className="w-8 h-8 text-[#0284C7]" />
        </div>
        <div>
          <span className="text-xs font-mono tracking-widest text-[#0284C7] uppercase font-bold">Consultation Confirmed</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0B2545] mt-1">
            Thank you, {submittedData.fullName}
          </h3>
          <p className="text-sm font-normal text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
            Your project brief for <strong className="text-[#0B2545] font-semibold">{submittedData.projectType}</strong> ({submittedData.plotArea}) has been assigned to our Senior Project Director in {submittedData.city}.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg text-left border border-slate-200 space-y-2 text-xs text-slate-700 font-mono shadow-sm">
          <div className="flex justify-between border-b border-slate-100 pb-1">
            <span>Reference ID:</span>
            <span className="text-[#0284C7] font-bold">RAM-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div className="flex justify-between border-b border-slate-100 pb-1">
            <span>Estimated Budget:</span>
            <span className="text-[#0B2545] font-semibold">{submittedData.estimatedBudget}</span>
          </div>
          <div className="flex justify-between">
            <span>Target Initiation:</span>
            <span className="text-[#0B2545] font-semibold">{submittedData.preferredStartDate}</span>
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setIsSubmitted(false);
              reset();
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  const inputClasses = "w-full bg-white border border-slate-200 px-4 py-3 text-sm text-[#0B2545] placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-colors rounded-lg font-normal shadow-sm";
  const labelClasses = "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 font-mono";
  const errorClasses = "text-xs text-rose-600 mt-1 font-mono";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className={labelClasses}>
            Full Name <span className="text-[#0284C7]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rajesh Sharma"
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
        {/* Email Address */}
        <div>
          <label className={labelClasses}>
            Email Address <span className="text-[#0284C7]">*</span>
          </label>
          <input
            type="email"
            placeholder="name@domain.com"
            {...register('email')}
            className={inputClasses}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>

        {/* Location / City */}
        <div>
          <label className={labelClasses}>
            Project City / Site Location <span className="text-[#0284C7]">*</span>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Project Type */}
        <div>
          <label className={labelClasses}>
            Project Typology <span className="text-[#0284C7]">*</span>
          </label>
          <select {...register('projectType')} className={inputClasses}>
            <option value="Residential Villa">Residential Villa / Estate</option>
            <option value="Commercial Space">Commercial & Corporate Headquarters</option>
            <option value="Architectural Design Only">Architectural & Structural Design Only</option>
            <option value="Luxury Interior">Luxury Interior Architecture</option>
            <option value="Turnkey Renovation">Turnkey Historic / Villa Renovation</option>
          </select>
          {errors.projectType && <p className={errorClasses}>{errors.projectType.message}</p>}
        </div>

        {/* Plot Area */}
        <div>
          <label className={labelClasses}>
            Approx. Built-Up Area <span className="text-[#0284C7]">*</span>
          </label>
          <select {...register('plotArea')} className={inputClasses}>
            <option value="Under 4,000 sq.ft">Under 4,000 sq.ft</option>
            <option value="4,000 - 6,500 sq.ft">4,000 - 6,500 sq.ft</option>
            <option value="6,500 - 10,000 sq.ft">6,500 - 10,000 sq.ft</option>
            <option value="10,000 - 18,000 sq.ft">10,000 - 18,000 sq.ft</option>
            <option value="Above 18,000 sq.ft">Above 18,000 sq.ft (Estate)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Budget */}
        <div>
          <label className={labelClasses}>Budget Allocation</label>
          <select {...register('estimatedBudget')} className={inputClasses}>
            <option value="₹2.5 Cr - ₹3.5 Cr">₹2.5 Cr - ₹3.5 Cr</option>
            <option value="₹3.5 Cr - ₹5.0 Cr">₹3.5 Cr - ₹5.0 Cr</option>
            <option value="₹5.0 Cr - ₹8.0 Cr">₹5.0 Cr - ₹8.0 Cr</option>
            <option value="₹8.0 Cr - ₹15.0 Cr">₹8.0 Cr - ₹15.0 Cr</option>
            <option value="₹15.0 Cr+">₹15.0 Cr+</option>
          </select>
        </div>

        {/* Plot Status */}
        <div>
          <label className={labelClasses}>Site Readiness</label>
          <select {...register('plotStatus')} className={inputClasses}>
            <option value="Ready for Construction">Ready for Construction</option>
            <option value="Plot Purchased / In Progress">Plot Purchased / In Progress</option>
            <option value="Existing Structure to Demolish">Existing Structure to Demolish</option>
            <option value="Searching for Land">Searching for Land</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className={labelClasses}>Preferred Start</label>
          <select {...register('preferredStartDate')} className={inputClasses}>
            <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
            <option value="Within 1-3 Months">Within 1-3 Months</option>
            <option value="Within 3-6 Months">Within 3-6 Months</option>
            <option value="Planning for Next Year">Planning for Next Year</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClasses}>
          Project Brief & Architectural Aspirations <span className="text-[#0284C7]">*</span>
        </label>
        <textarea
          rows={compact ? 3 : 4}
          placeholder="Describe your site dimensions, architectural style preferences, special spatial requirements..."
          {...register('message')}
          className={inputClasses}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-normal">
          <Shield className="w-4 h-4 text-[#0284C7] shrink-0" />
          <span>Strict Client NDA Protection. Zero spam guarantee.</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          icon="arrow-right"
          disabled={isSubmitting}
          className="w-full sm:w-auto shadow-md shadow-sky-600/20"
        >
          {isSubmitting ? 'Transmitting Brief...' : 'Request Architectural Consultation'}
        </Button>
      </div>
    </form>
  );
};
