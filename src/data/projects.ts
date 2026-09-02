import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'courtyard-residence',
    slug: 'the-courtyard-residence',
    title: 'The Courtyard Residence',
    tagline: 'An introspective sanctuary carved around a private central biophilic atrium.',
    category: 'Residential',
    status: 'Ongoing',
    location: 'Jubilee Hills, Hyderabad',
    year: '2025',
    area: '9,200 sq.ft',
    duration: '16 Months',
    budgetRange: '₹4.8 Cr - ₹5.4 Cr',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'External architectural massing featuring cantilevered exposed concrete and bronze louvers.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Double-height central courtyard with water body and water-harvesting granite basin.',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Living pavilion opening completely to the lush tropical garden via motorized pocket doors.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
        caption: 'Custom monolithic dining counter with raw edge walnut and recessed architectural strip lighting.',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
        caption: 'Master suite terrace featuring seamless glass balustrade and micro-cement flooring.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'Commissioned by a prominent surgeon and art collector, The Courtyard Residence reimagines traditional Deccan courtyard architecture through clean brutalist lines, warm timber soffits, and thermal-break double glazing.',
    architecturalConcept: 'The plan wraps around a central microclimate courtyard that functions as both a thermal chimney and a private green oasis shielded from the dense urban surroundings. Passive solar orientation minimizes direct heat gain while cross-ventilating the principal living volumes.',
    spatialFeatures: [
      'Double-height biophilic central atrium with temperature regulation',
      'Cantilevered master wing overlooking private infinity plunge pool',
      'Custom subterranean temperature-controlled wine cellar & screening lounge',
      'Solar-integrated rooftop terrace with automated pergola louvers',
      'Zero-threshold indoor-to-outdoor terrazzo transition'
    ],
    materials: [
      { name: 'Silver Travertine', description: 'Cross-cut unfilled travertine sourced directly from Tivoli quarries.' },
      { name: 'Exposed Board-Form Concrete', description: 'M35 grade monolithic casting with rough-sawn pine shuttering.' },
      { name: 'Burmese Teak Paneling', description: 'Sustainably sourced quarter-sawn teak for exterior soffits and master millwork.' },
      { name: 'Champagne Anodized Aluminum', description: 'Thermal-break minimalist slim profile sliding system from Schüco.' }
    ],
    specifications: [
      { label: 'Foundation & Structure', value: 'Seismic Zone III RCC Framed with Post-Tensioned Slabs' },
      { label: 'External Envelope', value: 'Double Leaf Cavity Wall with 50mm Rockwool Thermal Insulation' },
      { label: 'Home Automation', value: 'KNX Full Bus System controlling HVAC, lighting, and blinds' },
      { label: 'Energy Performance', value: '12.5 kW Grid-Tied Solar with Tesla Powerwall Storage' },
      { label: 'Rainwater Harvesting', value: '45,000 Litre underground filtration and recharge sump' }
    ],
    featured: true,
    clientTestimonial: {
      quote: 'RAM Constructions approached our residence not merely as contractors, but as master craftsmen and design custodians. Every junction, concrete line, and custom timber element was executed to millimeter precision.',
      author: 'Dr. Anand & Gayatri Varma',
      role: 'Homeowners, Jubilee Hills'
    }
  },
  {
    id: 'glass-pavilion-estate',
    slug: 'the-glass-pavilion',
    title: 'The Glass Pavilion Estate',
    tagline: 'A seamless dialogue between floating steel canopies and rugged natural granite terrain.',
    category: 'Residential',
    status: 'Completed',
    location: 'Gandipet Lake Ridge, Hyderabad',
    year: '2024',
    area: '11,800 sq.ft',
    duration: '18 Months',
    budgetRange: '₹6.2 Cr - ₹7.1 Cr',
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
        caption: 'Overhanging cantilever roof providing deep solar shading to floor-to-ceiling glass facades.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Frameless glass corner in the formal pavilion with views across the lake horizon.',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'Custom infinity pool tiled in Sukabumi volcanic stone with sunken fire pit.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'Constructed atop a sloping granite boulder outcrop overlooking the lake, this residence utilizes structural steel framing to hover lightly over the preserved natural landscape.',
    architecturalConcept: 'Lightness, transparency, and structural poise. By lifting the primary pavilion on slender steel columns, we preserved 90% of the site’s native granite boulders and centuries-old neem trees.',
    spatialFeatures: [
      '18-meter clear-span columnless living and entertaining hall',
      'Cantilevered cantilever terrace suspended over natural rock formations',
      'Private spa pavilion with sauna and cold plunge pool',
      'Dedicated guest cottage connected via elevated glazed bridge'
    ],
    materials: [
      { name: 'Structural Steel Box Columns', description: 'Flawlessly finished matte anthracite protective coating.' },
      { name: 'Low-E Acoustic Glazing', description: 'Triple laminated safety glass with 68% solar heat rejection.' },
      { name: 'Green Sukabumi Stone', description: 'Indonesian natural stone for wet deck and pool surfaces.' }
    ],
    specifications: [
      { label: 'Structural Type', value: 'Composite Steel and RCC Deck System' },
      { label: 'Glazing System', value: 'Reynaers Hi-Finity Ultra-Slim Frameless Sliding' },
      { label: 'HVAC', value: 'Daikin VRV IV-X with hidden linear slot diffusers' }
    ],
    featured: true,
    clientTestimonial: {
      quote: 'Their engineering precision made our dream of a floating house on the rocks possible without compromising a single natural tree on the property.',
      author: 'Rajiv & Meghna Reddy',
      role: 'Tech Entrepreneurs'
    }
  },
  {
    id: 'amber-monolith',
    slug: 'amber-monolith-villa',
    title: 'Amber Monolith Villa',
    tagline: 'Warm terracotta, pigmented concrete, and geometric sun-screens.',
    category: 'Architecture',
    status: 'Ongoing',
    location: 'Banjara Hills, Hyderabad',
    year: '2025',
    area: '7,600 sq.ft',
    duration: '14 Months',
    budgetRange: '₹4.2 Cr - ₹4.8 Cr',
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
        caption: 'Warm pigmented earth facade with custom geometric terracotta jaali screens.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sculptural curved helical staircase cast in continuous white terrazzo.',
        aspectRatio: 'tall'
      }
    ],
    overview: 'A bold, monolithic urban home that uses deep earthy tones and patterned shadow play to establish calm and privacy in the center of the city.',
    architecturalConcept: 'Thermal massing and sculpted light apertures. The home was designed as an earthy sculpture carved from within to capture morning breeze and diffuse evening light.',
    spatialFeatures: [
      'Parametrically perforated brick jaali with dynamic shadow casting',
      'Triple-height spiral staircase anchoring three residential levels',
      'Rooftop botanical kitchen garden and dining terrace'
    ],
    materials: [
      { name: 'Wire-cut Terracotta Bricks', description: 'Locally fired artisanal clay tiles.' },
      { name: 'White Terrazzo', description: 'In-situ hand-polished marble aggregate flooring.' }
    ],
    specifications: [
      { label: 'Acoustic Rating', value: 'STC 52 throughout perimeter' },
      { label: 'Insulation', value: 'Expanded Polyurethane Foam spray-applied under slab' }
    ],
    featured: true
  },
  {
    id: 'botanica-residence',
    slug: 'the-botanica-residence',
    title: 'The Botanica Residence',
    tagline: 'A seamless blend of Japanese wabi-sabi minimalism and tropical modernism.',
    category: 'Residential',
    status: 'Completed',
    location: 'Financial District, Hyderabad',
    year: '2024',
    area: '6,800 sq.ft',
    duration: '13 Months',
    budgetRange: '₹3.6 Cr - ₹4.1 Cr',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Zen gravel garden framed by blackened cedar Shou Sugi Ban screens.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'Designed for multi-generational living, Botanica pairs quiet reflective courtyards with open entertainment zones crafted in pale lime plaster and smoked oak.',
    architecturalConcept: 'Interlocking garden courtyards that give every bedroom a personal, enclosed landscape view.',
    spatialFeatures: [
      'Four distinct micro-gardens linked through covered timber pergolas',
      'Bespoke Japanese soaking tub carved from solid volcanic rock',
      'Hidden acoustic multi-media studio'
    ],
    materials: [
      { name: 'Lime Plaster', description: 'Natural breathable hydraulic lime finish in oyster white.' },
      { name: 'Shou Sugi Ban Timber', description: 'Charred Japanese cedar offering natural weather resistance.' }
    ],
    specifications: [
      { label: 'Ventilation', value: 'Heat Recovery Ventilation (HRV) System' }
    ],
    featured: false
  },
  {
    id: 'slate-oak-penthouse',
    slug: 'slate-and-oak-penthouse',
    title: 'Slate & Oak Sky Residence',
    tagline: 'High-altitude duplex combining dark stone slabs and precision fluted millwork.',
    category: 'Interior',
    status: 'Ongoing',
    location: 'Madhapur, Hyderabad',
    year: '2025',
    area: '5,400 sq.ft',
    duration: '9 Months',
    budgetRange: '₹2.9 Cr - ₹3.4 Cr',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
        caption: 'Dark slate fireplace wall with integrated concealed audio and ambient lighting.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'Complete turnkey architectural interior transformation of a 30th-floor shell duplex into a masterclass in mood, texture, and bespoke joinery.',
    architecturalConcept: 'Chiaroscuro lighting, tactile natural surfaces, and seamless hidden doors creating effortless spatial continuity.',
    spatialFeatures: [
      'Custom suspended brass bar cabinet with integrated temperature glass',
      'Master dressing room in smoked mirror and velvet-lined walnut drawers',
      'Panoramic sunset sky deck with outdoor fire hearth'
    ],
    materials: [
      { name: 'Nero Marquina Marble', description: 'Honed black marble with fine white veining.' },
      { name: 'European Smoked Oak', description: 'Wide-plank brushed engineered hardwood.' }
    ],
    specifications: [
      { label: 'Acoustics', value: 'Sub-floor acoustic underlayment with 24dB sound damping' }
    ],
    featured: true
  },
  {
    id: 'ram-commercial-towers',
    slug: 'ram-commercial-towers',
    title: 'RAM Commercial Towers & Corporate Plaza',
    tagline: 'A landmark high-rise corporate tech campus featuring structural glazing, landscaped plaza, and smart automation.',
    category: 'Commercial',
    status: 'Ongoing',
    location: 'HITEC City, Hyderabad',
    year: '2025',
    area: '240,000 sq.ft',
    duration: '22 Months',
    budgetRange: '₹42 Cr - ₹48 Cr',
    coverImage: '/images/ram-towers-landmark.jpg',
    heroImage: '/images/ram-towers-landmark.jpg',
    gallery: [
      {
        url: '/images/ram-towers-landmark.jpg',
        caption: 'Signature architectural towers overlooking landscaped water features and pedestrian plazas.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
        caption: 'Triple-glazed thermal facade providing passive solar shading to multi-tenant corporate floors.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'A flagship triple-tower commercial campus and business plaza executed for leading multinational technology enterprises, combining post-tensioned spans, central atrium, and expansive civic greens.',
    architecturalConcept: 'High-performance facade engineering, deep biophilic plazas, and integrated smart building management systems.',
    spatialFeatures: [
      'Multi-tier central glass arrival atrium with integrated public plaza',
      'Advanced BMS-controlled high-speed elevator banks',
      'Rooftop sky garden terraces and solar generation arrays',
      'Multi-level subterranean parking with EV charging infrastructure'
    ],
    materials: [
      { name: 'Structural Low-E Curtain Wall', description: 'Double-silver coated acoustic thermal glazing system.' },
      { name: 'Reinforced Concrete Core', description: 'M60 grade high-strength monolithic casting.' },
      { name: 'Flamed Granite Paving', description: 'Slip-resistant natural granite for pedestrian plaza concourse.' }
    ],
    specifications: [
      { label: 'Green Rating', value: 'LEED Platinum Certified Standard' },
      { label: 'Structural Type', value: 'RCC Core Wall with Post-Tensioned Slabs' },
      { label: 'Security & Automation', value: 'Integrated IP Access & Smart BMS System' }
    ],
    featured: true
  },
  {
    id: 'heritage-manor-restoration',
    slug: 'the-heritage-manor',
    title: 'The Heritage Manor Restoration',
    tagline: 'Sensitively restoring a 1930s colonial estate with modern structural reinforcement.',
    category: 'Renovation',
    status: 'Completed',
    location: 'Secunderabad, Telangana',
    year: '2023',
    area: '8,100 sq.ft',
    duration: '15 Months',
    budgetRange: '₹3.9 Cr - ₹4.4 Cr',
    coverImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
        caption: 'Restored colonial veranda with lime plaster moldings and antique brass hardware.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'An extensive historic restoration and contemporary modernization of a 90-year-old estate, preserving heritage arches while embedding complete modern insulation and smart HVAC.',
    architecturalConcept: 'Honoring heritage masonry while discreetly integrating high-efficiency structural carbon wraps and invisible thermal solutions.',
    spatialFeatures: [
      'Underpinning and carbon fiber stabilization of load-bearing rubble walls',
      'Restored high-ceiling teak wood trusses and handmade clay tile roof',
      'Modern open-concept rear kitchen extension facing the orchard'
    ],
    materials: [
      { name: 'Hydraulic Lime Mortar', description: 'Custom formulated breathable mix matched to 1930s chemistry.' },
      { name: 'Salvaged Antique Teak', description: 'Hand-restored 100-year-old seasoned wood timbers.' }
    ],
    specifications: [
      { label: 'Structural Reinforcement', value: 'Sika Carbon Fiber Wrap & Micro-piling' }
    ],
    featured: false
  },
  {
    id: 'horizon-sky-villa',
    slug: 'horizon-sky-villa',
    title: 'The Horizon Skyline Estate',
    tagline: 'A hilltop architectural monument featuring multi-tier cantilevered terraces and panoramic skyline views.',
    category: 'Residential',
    status: 'Completed',
    location: 'Kokapet Golden Mile, Hyderabad',
    year: '2025',
    area: '14,800 sq.ft',
    duration: '22 Months',
    budgetRange: '₹8.5 Cr - ₹9.8 Cr',
    coverImage: '/images/ram-skyline-estate.jpg',
    heroImage: '/images/ram-skyline-estate.jpg',
    gallery: [
      {
        url: '/images/ram-skyline-estate.jpg',
        caption: 'Aerial panoramic perspective of the cantilevered multi-level estate, infinity pool, and city skyline.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'Hillside cantilever deck featuring custom glass floor section overlooking valley.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'A flagship luxury estate constructed on a panoramic hilltop gradient with reinforced retention, cantilevered glass pavilions, central infinity pool, and expansive landscaped terraces overlooking the metropolis.',
    architecturalConcept: 'Stepped terraces conforming directly to topography to create layered privacy, natural ventilation corridors, and grand entertaining stages.',
    spatialFeatures: [
      'Central horizon-edge infinity pool with sunken lounge and outdoor hearth',
      'Multi-tiered cantilevered living pavilions with panoramic floor-to-ceiling glass envelopes',
      'Private pneumatic glass elevator connecting all residential wings',
      'Subterranean climate-controlled collector garage and private wellness spa'
    ],
    materials: [
      { name: 'Natural Sandstone & Travertine', description: 'Hand-cut monolithic stone masonry for retaining walls and cladding.' },
      { name: 'Thermal-Break Minimalist Glazing', description: 'Floor-to-ceiling slimline acoustic insulated glass systems.' },
      { name: 'Weathered Teakwood Soffits', description: 'Natural seasoned hardwood ceilings with integrated architectural strip illumination.' }
    ],
    specifications: [
      { label: 'Foundation', value: 'Deep Bored Rock Socketed RCC Piles with Post-Tensioned Cantilevers' },
      { label: 'Smart Infrastructure', value: 'Full KNX / Crestron Automation with Biometric Security' },
      { label: 'Sustainability', value: '15kW Rooftop Solar Array with Central Rainwater Sump Recharge' }
    ],
    featured: true
  }
];
