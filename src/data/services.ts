import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'residential-construction',
    slug: 'residential-construction',
    number: '01',
    title: 'Residential Construction',
    tagline: 'End-to-end bespoke villa and luxury home construction executed with structural mastery.',
    shortDescription: 'We build architecturally ambitious residences with uncompromising quality control, guaranteed fixed pricing, and digital milestone tracking.',
    fullDescription: 'From subterranean foundations to delicate rooftop finishes, our residential construction practice delivers heirloom-quality homes. We eliminate the friction of traditional contracting through in-house master engineers, rigorous structural quality protocols, and strict timeline adherence.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
    iconName: 'Home',
    deliverables: [
      'Comprehensive Site Survey, Soil Testing & Geo-Technical Analysis',
      'RCC Framed & Post-Tensioned Structural Execution',
      'Thermal-Break Cavity Walls & Advanced Waterproofing Systems',
      'Precision Architectural Masonry & Plastering',
      'Complete MEP (Mechanical, Electrical, Plumbing) Infrastructure',
      'Digital Weekly Progress Reports with 360° Site Scans'
    ],
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Geotechnical & Substructure',
        details: 'Soil bearing test, deep excavation, waterproofing barrier, and seismic-rated foundation casting.'
      },
      {
        phase: 'Phase 02',
        title: 'Superstructure & Frame',
        details: 'High-grade RCC casting, post-tensioned slabs, cantilevered elements, and precision brickwork.'
      },
      {
        phase: 'Phase 03',
        title: 'MEP & Envelope Enclosure',
        details: 'Concealed conduit runs, plumbing hydro-testing, thermal insulation, and facade glazing installation.'
      },
      {
        phase: 'Phase 04',
        title: 'Architectural Finishes & Handover',
        details: 'Stone flooring, premium wood carpentry, automated systems commissioning, and 120-point quality audit.'
      }
    ],
    engineeringStandards: [
      'IS 456:2000 code compliant RCC construction with ultrasonic testing',
      'Multi-layer polyurethane membrane waterproofing with 10-year warranty',
      'Ultrasonic pulse velocity testing on all load-bearing structural columns',
      'Zero-tolerance laser leveling across all floor surfaces'
    ],
    featuredProjectsCount: 140
  },
  {
    id: 'commercial-construction',
    slug: 'commercial-construction',
    number: '02',
    title: 'Commercial Construction',
    tagline: 'High-performance commercial buildings, boutique headquarters, and retail spaces.',
    shortDescription: 'Delivering landmark commercial spaces with rigorous structural engineering, fast-track scheduling, and sustainable building systems.',
    fullDescription: 'We engineer commercial and institutional properties that reflect corporate prestige while maximizing operational efficiency. Our commercial team specializes in large-span structures, energy-efficient building envelopes, and advanced MEP installations.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    iconName: 'Building2',
    deliverables: [
      'Turnkey Commercial Shell & Core Construction',
      'Post-Tensioned Long-Span Floor Plates',
      'Parametric Facade Engineering & Unitized Curtain Walls',
      'Central VRV/HVAC, Fire Fighting & Building Automation Systems',
      'LEED / IGBC Green Building Certification Assistance',
      'Fast-Track Critical Path Method (CPM) Project Delivery'
    ],
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Planning & Value Engineering',
        details: 'Constructability reviews, structural optimization, and municipal statutory approval coordination.'
      },
      {
        phase: 'Phase 02',
        title: 'Civil & Facade Delivery',
        details: 'High-speed slab cycling, pre-fabricated steel integration, and thermal-performance envelope.'
      },
      {
        phase: 'Phase 03',
        title: 'Services & Occupancy Testing',
        details: 'Fire safety pressure testing, acoustic commissioning, and complete municipal occupancy certification.'
      }
    ],
    engineeringStandards: [
      'NBC (National Building Code) 2016 Fire & Life Safety Standards',
      'High-grade M40-M60 self-compacting concrete formulations',
      'Integrated BMS (Building Management System) telemetry'
    ],
    featuredProjectsCount: 45
  },
  {
    id: 'architecture-structural',
    slug: 'architecture-and-structural-design',
    number: '03',
    title: 'Architecture & Structural Design',
    tagline: 'Visionary spatial design backed by mathematically rigorous structural engineering.',
    shortDescription: 'We merge artistic architectural form with cutting-edge structural modeling in 3D BIM, delivering plans optimized for buildability and beauty.',
    fullDescription: 'Great architecture begins with an intuitive understanding of light, climate, and human movement. Our architecture and structural division works as an integrated unit, ensuring bold design ideas are backed by sound engineering calculations from day one.',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=80',
    iconName: 'Compass',
    deliverables: [
      'Comprehensive Concept Architectural Masterplans',
      '3D Photorealistic BIM Modeling & VR Walkthroughs',
      'Structural Analysis & Post-Tensioned Slab Calculations (ETABS/SAFE)',
      'Solar Path, Thermal & Natural Ventilation Computational Modeling',
      'Municipal Drawing Sets & Sanction Documentation',
      'Detailed Bill of Quantities (BOQ) with Material Specifications'
    ],
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Discovery & Spatial Brief',
        details: 'Understanding your lifestyle, site topography, microclimate, and spatial requirements.'
      },
      {
        phase: 'Phase 02',
        title: 'Concept & 3D Spatial Modeling',
        details: 'Massing studies, floor plans, material palettes, and 3D architectural renders.'
      },
      {
        phase: 'Phase 03',
        title: 'Structural & Working Drawings',
        details: 'Detailed structural framing, electrical schematics, plumbing layouts, and sanction sets.'
      }
    ],
    engineeringStandards: [
      'Full Level of Development (LOD) 350 BIM clash detection',
      'Wind tunnel simulations for exposed and high-altitude structures',
      'Comprehensive seismic resilience modeling'
    ],
    featuredProjectsCount: 190
  },
  {
    id: 'interior-design',
    slug: 'interior-architecture-and-design',
    number: '04',
    title: 'Interior Design & Joinery',
    tagline: 'Bespoke interior architecture, custom millwork, and sensory materiality.',
    shortDescription: 'Harmonious living environments sculpted with rare natural stones, warm seasoned timbers, curated architectural lighting, and artisanal joinery.',
    fullDescription: 'Our interior architecture practice crafts spaces that feel calm, tactile, and deeply personalized. We do not apply superficial decor; we sculpt volumes, direct shadow and illumination, and manufacture custom joinery in our dedicated millwork facility.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80',
    iconName: 'Sparkles',
    deliverables: [
      'Custom Millwork & Architectural Joinery Manufacturing',
      'Natural Stone & Marble Bookmatching Selection',
      'Architectural Lighting Design & Scene Programming',
      'Custom Sanitaryware & Luxury Bathroom Layouts',
      'Acoustic Treatment & Concealed Sound Systems',
      'Curated Loose Furniture, Art Curation & Styling'
    ],
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Material Mood & Spatial Concept',
        details: 'Texture boards, marble quarry selection trips, color stories, and custom lighting plans.'
      },
      {
        phase: 'Phase 02',
        title: 'Factory Millwork Fabrication',
        details: 'Precision CNC routing, veneering, polyurethane lacquering in climate-controlled factory.'
      },
      {
        phase: 'Phase 03',
        title: 'On-Site Integration & Styling',
        details: 'Dry-stone installation, seamless shadow gap trims, fixture wiring, and final dressing.'
      }
    ],
    engineeringStandards: [
      'E1 European Emission Grade low-VOC marine grade ply & timber',
      'Blum & Hettich luxury hardware with life-cycle cycle guarantees',
      'Color rendering index (CRI) 95+ museum-grade LED illumination'
    ],
    featuredProjectsCount: 110
  },
  {
    id: 'renovation-remodeling',
    slug: 'renovation-and-restoration',
    number: '05',
    title: 'Renovation & Remodeling',
    tagline: 'Transforming existing structures through structural retrofitting and modern aesthetic renewal.',
    shortDescription: 'Breathing new life into older homes and estates through seismic reinforcement, spatial reconfiguration, and contemporary finishes.',
    fullDescription: 'Whether modernizing an aging 1990s villa or sensitively restoring a heritage estate, our renovation division tackles complex structural retrofitting, wall removals, MEP overhauls, and envelope rejuvenation with minimal disturbance.',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=80',
    iconName: 'Wrench',
    deliverables: [
      'Non-Destructive Structural Condition Assessment',
      'Carbon Fiber & Steel Beam Retrofitting for Open Floor Plans',
      'Complete Plumbing & Electrical Re-wiring to Modern Code',
      'Facade Renewal, Thermal Insulation & Modern Glazing',
      'Underpinning & Waterproofing Rehabilitation',
      'Phased Execution for Minimal Living Disruption'
    ],
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Structural Audit & Scanning',
        details: 'Rebound hammer testing, corrosion mapping, and structural feasibility modeling.'
      },
      {
        phase: 'Phase 02',
        title: 'Shoring & Load Transfer',
        details: 'Temporary steel propping, demolition of non-load bearing partitions, and structural steel beam installation.'
      },
      {
        phase: 'Phase 03',
        title: 'Modernization & Handover',
        details: 'New services integration, acoustic insulation, contemporary architectural cladding, and handover.'
      }
    ],
    engineeringStandards: [
      'Sika structural carbon wrap strengthening certification',
      'High-pressure chemical epoxy injection grouting',
      'Full compliance with historic preservation guidelines where applicable'
    ],
    featuredProjectsCount: 65
  },
  {
    id: 'project-management',
    slug: 'turnkey-project-management',
    number: '06',
    title: 'Turnkey Project Management',
    tagline: 'Single-source responsibility from inception to occupancy with zero subcontracting risk.',
    shortDescription: 'Dedicated client coordinators, live project portals, rigorous budget controls, and transparent escrow-based stage milestones.',
    fullDescription: 'We eliminate the anxiety of construction. By acting as the sole accountable partner managing design, statutory sanctions, procurement, contractor supervision, and quality assurance, we guarantee on-time and on-budget delivery.',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=80',
    iconName: 'ShieldCheck',
    deliverables: [
      'Single Point of Contact Dedicated Project Director',
      'Cloud-Based Client Dashboard with Daily Photo Feeds',
      'Strict Material Quality Lab Testing Logs (Cube testing, Steel tensile)',
      'Escrow Milestone-Based Payment Schedule',
      'Statutory Clearances & Occupancy Certificate Assistance',
      'Post-Handover 10-Year Structural & 1-Year Comprehensive Warranty'
    ],
    workflow: [
      {
        phase: 'Phase 01',
        title: 'Milestone & Budget Baseline',
        details: 'Locking guaranteed maximum price (GMP), setting 40+ project milestone gates.'
      },
      {
        phase: 'Phase 02',
        title: 'Digital Execution Control',
        details: 'Daily site QA audits, material test documentation, drone photography, and weekly client syncs.'
      },
      {
        phase: 'Phase 03',
        title: 'Handover & Warranty Onboarding',
        details: 'Snagging resolution, as-built drawing handover, warranty certificate issuance, and maintenance schedule.'
      }
    ],
    engineeringStandards: [
      'ISO 9001:2015 Quality Management Systems',
      'Zero Cost-Overrun Guarantee under standard contract terms',
      '24/7 client resolution protocol'
    ],
    featuredProjectsCount: 310
  }
];
