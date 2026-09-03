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
    coverImage: '/images/ongoing-villa-construction.jpg',
    heroImage: '/images/ongoing-villa-construction.jpg',
    gallery: [
      {
        url: '/images/ongoing-villa-construction.jpg',
        caption: 'Active structural casting with reinforced cantilever slabs, formwork, and on-site engineers.',
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
    id: 'nexus-galleria-mall',
    slug: 'the-nexus-galleria',
    title: 'The Nexus Galleria & Sky Dome Mall',
    tagline: 'Iconic diagrid glass dome canopy, multi-tier retail terraces, elevated transit integration, and public amphitheater.',
    category: 'Commercial',
    status: 'Completed',
    location: 'HITEC City, Hyderabad',
    year: '2024',
    area: '420,000 sq.ft',
    duration: '28 Months',
    budgetRange: '₹95 Cr - ₹110 Cr',
    coverImage: '/images/shopping mall.jfif',
    heroImage: '/images/shopping mall.jfif',
    gallery: [
      {
        url: '/images/shopping mall.jfif',
        caption: 'The completed Nexus Galleria grand retail atrium, illuminated water plaza, and transit monorail.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'A flagship completed luxury lifestyle mall and entertainment destination featuring a sweeping geodesic glass skylight dome, terraced dining promenades, elevated transit viaducts, and a grand public civic amphitheater.',
    architecturalConcept: 'Organic diagrid glass canopy providing climate-protected daylighting, surrounded by lush vertical landscaped gardens and seamless multi-modal transit access.',
    spatialFeatures: [
      'Monumental geodesic glass dome spanning 75 meters column-free',
      'Integrated light-rail monorail transit concourse and passenger terminal',
      'Multi-tier cascading terrace dining overlooking civic water plaza',
      'Central sunken amphitheater and fire hearth for public cultural gatherings',
      'Quad-level subterranean smart parking facility with 1,800 bays'
    ],
    materials: [
      { name: 'Geodesic Steel Diagrid', description: 'Triangulated structural steel framework with automated ventilation louvers.' },
      { name: 'Low-E Fritted Glass', description: 'Double-laminated solar control acoustic panels with ceramic frit pattern.' },
      { name: 'Flamed Indian Granite', description: 'Heavy-duty non-slip civic plaza paving in silver and charcoal granite.' }
    ],
    specifications: [
      { label: 'Dome Structure', value: '75m Clear-Span Spatial Steel Diagrid' },
      { label: 'Green Certification', value: 'LEED Platinum Commercial Core & Shell' },
      { label: 'HVAC', value: 'Water-Cooled Centrifugal Chillers with Heat Recovery' }
    ],
    featured: true
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
    coverImage: '/images/hero-villa.jpg',
    heroImage: '/images/hero-villa.jpg',
    gallery: [
      {
        url: '/images/hero-villa.jpg',
        caption: 'Pristine completed residential villa featuring swimming pool with modern cascade waterfall.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Frameless glass corner in the formal pavilion with views across the lake horizon.',
        aspectRatio: 'tall'
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
    coverImage: '/images/hero-site-2.jpg',
    heroImage: '/images/hero-site-2.jpg',
    gallery: [
      {
        url: '/images/hero-site-2.jpg',
        caption: 'Ongoing structural engineering framework with heavy equipment and dual tower cranes on site.',
        aspectRatio: 'wide'
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
    id: 'quantum-corporate-tower',
    slug: 'quantum-corporate-tower',
    title: 'Quantum Corporate Tower & Civic Plaza',
    tagline: 'Sculptural twisting glass facade, post-tensioned cantilevered spans, and integrated public landscape plaza.',
    category: 'Commercial',
    status: 'Completed',
    location: 'Financial District, Hyderabad',
    year: '2024',
    area: '280,000 sq.ft',
    duration: '24 Months',
    budgetRange: '₹54 Cr - ₹62 Cr',
    coverImage: '/images/complted proj-1.jfif',
    heroImage: '/images/complted proj-1.jfif',
    gallery: [
      {
        url: '/images/complted proj-1.jfif',
        caption: 'Pristine completed glass facade and landscaped arrival plaza at Quantum Tower.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'A signature completed commercial skyscraper featuring an engineering-led twisting structural glass curtain wall, civic arrival plaza, and grade-A corporate suites.',
    architecturalConcept: 'Sculptural twisting geometry designed to minimize wind shear forces while optimizing natural illumination across all floor plates.',
    spatialFeatures: [
      'Multi-tier central glass atrium and public pedestrian greens',
      'High-speed destination-dispatch smart elevator banks',
      'Integrated water reflection pond and urban landscape terraces',
      'Triple-level underground parking with advanced EV infrastructure'
    ],
    materials: [
      { name: 'Unitized Structural Glazing', description: 'Double-glazed Low-E solar reflective curtain wall system.' },
      { name: 'Post-Tensioned Concrete', description: 'High-strength M60 concrete with bonded PT tendons.' }
    ],
    specifications: [
      { label: 'Structural Type', value: 'RCC Core Wall with Post-Tensioned Flat Slabs' },
      { label: 'Green Certification', value: 'IGBC Platinum Rated Sustainable High-Rise' }
    ],
    featured: true
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
    coverImage: '/images/ongoing-penthouse-interior.jpg',
    heroImage: '/images/ongoing-penthouse-interior.jpg',
    gallery: [
      {
        url: '/images/ongoing-penthouse-interior.jpg',
        caption: 'Active interior fitout and master joinery installation overlooking the metropolitan skyline.',
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
    coverImage: '/images/hero-site.jpg',
    heroImage: '/images/hero-site.jpg',
    gallery: [
      {
        url: '/images/hero-site.jpg',
        caption: 'Signature ongoing commercial towers with active tower cranes and post-tensioned RCC casting at golden hour.',
        aspectRatio: 'wide'
      },
      {
        url: '/images/hero-site-3.jpg',
        caption: 'Resident structural engineering directors conducting blueprint quality checks on active site.',
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
    id: 'cyber-towers-nexus-hub',
    slug: 'cyber-towers-nexus-hub',
    title: 'Cyber Towers Nexus Hub',
    tagline: 'Illuminated sculptural helical tower, sky gardens, elevated transit links, and civic amphitheater.',
    category: 'Commercial',
    status: 'Completed',
    location: 'HITEC City, Hyderabad',
    year: '2024',
    area: '340,000 sq.ft',
    duration: '26 Months',
    budgetRange: '₹68 Cr - ₹78 Cr',
    coverImage: '/images/proj-2.jfif',
    heroImage: '/images/proj-2.jfif',
    gallery: [
      {
        url: '/images/proj-2.jfif',
        caption: 'Night-time illumination of the completed Cyber Towers Nexus Hub, elevated transit monorail, and central civic amphitheater.',
        aspectRatio: 'wide'
      }
    ],
    overview: 'An iconic completed civic and commercial nexus featuring a helical twisting glass superstructure, spiral sky gardens, seamless light rail integration, and public amphitheater.',
    architecturalConcept: 'Biophilic helical geometry merging vertical gardens with advanced kinetic lighting and smart mass-transit connectivity.',
    spatialFeatures: [
      'Multi-level public civic amphitheater with reflecting pools and urban hearth',
      'Spiral sky gardens wrapping 360 degrees around the illuminated tower',
      'Integrated elevated transit terminal connection with direct concourse access',
      'Ultra-high efficiency structural diagrid steel and RCC core'
    ],
    materials: [
      { name: 'Parametric Diagrid Steel', description: 'Curved structural steel frame with continuous LED ribbon integration.' },
      { name: 'Low-E Smart Glass', description: 'Dynamic tinting solar responsive glazing for high thermal performance.' }
    ],
    specifications: [
      { label: 'Structural Type', value: 'Central Slipformed RCC Core with Diagrid Exoskeleton' },
      { label: 'Rating', value: 'IGBC Platinum & Smart City Infrastructure Certified' }
    ],
    featured: true
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
