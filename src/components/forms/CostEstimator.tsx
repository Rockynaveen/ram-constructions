import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { useAppStore } from '../../store/useStore';
import { formatCurrencyINR } from '../../utils';
import { Calculator, Check } from 'lucide-react';

interface TierOption {
  id: string;
  name: string;
  baseRatePerSft: number;
  tagline: string;
  specs: string[];
}

const tiers: TierOption[] = [
  {
    id: 'bespoke',
    name: 'Bespoke Luxury',
    baseRatePerSft: 3450,
    tagline: 'Refined modern luxury with premium marble, cavity wall thermal envelope & German fixtures.',
    specs: [
      'RCC post-tensioned frame with M35 grade concrete',
      'Italian Silver Travertine / Botticino marble flooring',
      'Schüco / Reynaers thermal-break double glazing',
      'Daikin VRV air conditioning infrastructure',
      '10-Year complete structural warranty'
    ]
  },
  {
    id: 'signature',
    name: 'Signature Architectural Monument',
    baseRatePerSft: 4850,
    tagline: 'Museum-grade architectural execution with board-formed concrete, custom millwork & full automation.',
    specs: [
      'Exposed board-formed concrete monolithic casting',
      'Bookmatched Nero Marquina & Statuario marble',
      'Full KNX bus automation & motorized slim sliding panels',
      'Geothermal / integrated solar battery infrastructure',
      'Dedicated on-site senior project director'
    ]
  },
  {
    id: 'commercial',
    name: 'Corporate & Studio Architecture',
    baseRatePerSft: 2950,
    tagline: 'Long-span structural plates, high-efficiency unitized facades & sustainable systems.',
    specs: [
      'Large clear-span post-tensioned floor plates',
      'Low-E acoustic curtain glazing envelope',
      'Central BMS & intelligent fire-life-safety systems',
      'LEED / IGBC green building compliance delivery'
    ]
  }
];

export const CostEstimator: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState('bespoke');
  const [area, setArea] = useState(6500);
  const [hasBasement, setHasBasement] = useState(false);
  const [hasPool, setHasPool] = useState(true);
  const [hasAutomation, setHasAutomation] = useState(true);
  const [hasSolar, setHasSolar] = useState(true);

  const { openConsultationModal } = useAppStore();

  const selectedTier = tiers.find((t) => t.id === selectedTierId) || tiers[0];

  // Calculations
  const baseCost = area * selectedTier.baseRatePerSft;
  const basementCost = hasBasement ? 2500 * (area * 0.3) : 0;
  const poolCost = hasPool ? 1800000 : 0;
  const automationCost = hasAutomation ? area * 250 : 0;
  const solarCost = hasSolar ? 1200000 : 0;

  const totalEstimatedCost = baseCost + basementCost + poolCost + automationCost + solarCost;
  const effectiveRatePerSft = Math.round(totalEstimatedCost / area);

  // Breakdown percentages
  const civilStructure = Math.round(totalEstimatedCost * 0.34);
  const mepAutomation = Math.round(totalEstimatedCost * 0.22);
  const envelopeGlazing = Math.round(totalEstimatedCost * 0.24);
  const luxuryFinishes = Math.round(totalEstimatedCost * 0.20);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl shadow-slate-900/5">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Controls Column */}
        <div className="w-full lg:w-7/12 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#0284C7] uppercase mb-1 font-bold">
              <Calculator className="w-4 h-4" />
              <span>Interactive Estimator</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0B2545]">
              Configure Your Architectural Build
            </h3>
            <p className="text-sm text-slate-500 font-normal mt-1">
              Transparent baseline estimates grounded in current market material specifications and labor craftsmanship.
            </p>
          </div>

          {/* Tier Selection */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
              Select Specification Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`p-4 text-left border-2 rounded-xl transition-all duration-200 cursor-pointer ${
                    selectedTierId === tier.id
                      ? 'border-[#0284C7] bg-sky-50/70 text-[#0B2545] shadow-md shadow-sky-500/10'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="block text-xs font-mono text-[#0284C7] uppercase tracking-wider font-bold">
                    ₹{tier.baseRatePerSft}/sft
                  </span>
                  <span className="block font-serif text-base font-semibold text-[#0B2545] mt-1">
                    {tier.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div className="space-y-3 bg-[#F8FAFC] p-5 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                Built-Up Floor Area
              </label>
              <span className="font-serif text-2xl text-[#0284C7] font-bold">
                {area.toLocaleString('en-IN')} <span className="text-xs font-mono text-slate-500">sq.ft</span>
              </span>
            </div>
            <input
              type="range"
              min={3000}
              max={25000}
              step={250}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>3,000 sft (Villa)</span>
              <span>10,000 sft</span>
              <span>25,000 sft (Estate)</span>
            </div>
          </div>

          {/* Add-on Features */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
              Architectural Elements & Infrastructure
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setHasBasement(!hasBasement)}
                className={`flex items-center justify-between p-3.5 border rounded-lg text-left text-xs transition-all cursor-pointer ${
                  hasBasement ? 'border-[#0284C7] bg-sky-50 text-[#0B2545] font-semibold' : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span>Subterranean Basement / Cellar</span>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center ${hasBasement ? 'bg-[#0284C7] text-white' : 'border border-slate-300'}`}>
                  {hasBasement && <Check className="w-3 h-3" />}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setHasPool(!hasPool)}
                className={`flex items-center justify-between p-3.5 border rounded-lg text-left text-xs transition-all cursor-pointer ${
                  hasPool ? 'border-[#0284C7] bg-sky-50 text-[#0B2545] font-semibold' : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span>Infinity Plunge Pool & Deck</span>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center ${hasPool ? 'bg-[#0284C7] text-white' : 'border border-slate-300'}`}>
                  {hasPool && <Check className="w-3 h-3" />}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setHasAutomation(!hasAutomation)}
                className={`flex items-center justify-between p-3.5 border rounded-lg text-left text-xs transition-all cursor-pointer ${
                  hasAutomation ? 'border-[#0284C7] bg-sky-50 text-[#0B2545] font-semibold' : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span>Full KNX Bus Smart Automation</span>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center ${hasAutomation ? 'bg-[#0284C7] text-white' : 'border border-slate-300'}`}>
                  {hasAutomation && <Check className="w-3 h-3" />}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setHasSolar(!hasSolar)}
                className={`flex items-center justify-between p-3.5 border rounded-lg text-left text-xs transition-all cursor-pointer ${
                  hasSolar ? 'border-[#0284C7] bg-sky-50 text-[#0B2545] font-semibold' : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span>Solar PV (15kW) + Battery Backup</span>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center ${hasSolar ? 'bg-[#0284C7] text-white' : 'border border-slate-300'}`}>
                  {hasSolar && <Check className="w-3 h-3" />}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Output Column */}
        <div className="w-full lg:w-5/12 bg-[#0B2545] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase block mb-1 font-bold">
              Estimated Total Investment
            </span>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight">
              {formatCurrencyINR(totalEstimatedCost)}
            </div>
            <div className="text-xs font-mono text-sky-200 mt-1">
              Approx. ₹{effectiveRatePerSft.toLocaleString('en-IN')}/sft turnkey estimate
            </div>

            {/* Estimated Breakdown */}
            <div className="mt-8 space-y-3 pt-6 border-t border-white/15">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-200 block mb-2 font-bold">
                Project Capital Breakdown
              </span>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-200">Civil & Structural Core (34%)</span>
                <span className="font-mono text-white font-bold">{formatCurrencyINR(civilStructure)}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#38BDF8] h-full" style={{ width: '34%' }} />
              </div>

              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-slate-200">Envelope, Glazing & Facade (24%)</span>
                <span className="font-mono text-white font-bold">{formatCurrencyINR(envelopeGlazing)}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#0EA5E9] h-full" style={{ width: '24%' }} />
              </div>

              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-slate-200">MEP, HVAC & Automation (22%)</span>
                <span className="font-mono text-white font-bold">{formatCurrencyINR(mepAutomation)}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#0284C7] h-full" style={{ width: '22%' }} />
              </div>

              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-slate-200">Bespoke Finishes & Joinery (20%)</span>
                <span className="font-mono text-white font-bold">{formatCurrencyINR(luxuryFinishes)}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-sky-100 h-full" style={{ width: '20%' }} />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
            <Button
              variant="primary"
              size="md"
              icon="arrow-right"
              onClick={() => openConsultationModal(selectedTier.name)}
              className="w-full bg-[#0284C7] hover:bg-[#0369A1] shadow-lg shadow-black/20"
            >
              Request Itemized BOQ & Sanction Plan
            </Button>
            <p className="text-[11px] text-slate-300 text-center font-light">
              Exact quote locked post architectural soil test & 3D BIM model.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
