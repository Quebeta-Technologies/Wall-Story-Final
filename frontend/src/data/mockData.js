// Used as fallback when backend is unreachable. Same shape as API responses.

export const mockServices = [
  { _id: 's1',  order: 1,  name: 'Imported Wallpapers',      description: 'Handpicked designs sourced from European and Asian ateliers.' },
  { _id: 's2',  order: 2,  name: 'Curtain Fabrics',          description: 'Luxurious drapes in silks, linens and heavy blackout weaves.' },
  { _id: 's3',  order: 3,  name: 'Upholstery',               description: 'Custom sofa, chair and headboard finishes tailored to your palette.' },
  { _id: 's4',  order: 4,  name: 'Blinds',                   description: 'Roller, Roman, Venetian and honeycomb — motorised options available.' },
  { _id: 's5',  order: 5,  name: 'Artefacts',                description: 'Curated decor pieces that add character to every corner.' },
  { _id: 's6',  order: 6,  name: 'Wooden Flooring',          description: 'Engineered hardwood and laminate finishes with a lifetime feel.' },
  { _id: 's7',  order: 7,  name: 'PVC & SPC Flooring',       description: 'Waterproof, durable and quiet underfoot — perfect for high-use rooms.' },
  { _id: 's8',  order: 8,  name: 'Artificial Landscaping',   description: 'Evergreen grass, vertical gardens and balcony compositions.' },
  { _id: 's9',  order: 9,  name: 'Mattress',                 description: 'Premium sleep systems chosen for your posture and preference.' },
  { _id: 's10', order: 10, name: 'Automated Curtain Tracks', description: 'Smart motorised tracks with voice, app and remote control.' },
];

export const mockTestimonials = [
  { _id: 't1', name: 'Priya Sharma',    location: 'Koregaon Park, Pune', role: 'Homeowner',
    quote: 'They transformed our 3BHK into something out of a magazine. The imported wallpapers alone changed the whole mood of the living room.',
    rating: 5 },
  { _id: 't2', name: 'Rohit Deshmukh',  location: 'Baner, Pune', role: 'Architect',
    quote: 'I recommend The Wall Story to every client. Their attention to fabric texture and finish quality is genuinely rare in this city.',
    rating: 5 },
  { _id: 't3', name: 'Anjali Kulkarni', location: 'Kalyani Nagar, Pune', role: 'Interior Designer',
    quote: 'The automated curtain tracks are a game-changer. Installation was quick, clean, and the after-care has been fantastic.',
    rating: 5 },
  { _id: 't4', name: 'Amit Patil',      location: 'Aundh, Pune', role: 'Homeowner',
    quote: 'From wooden flooring to the mattress, one team handled everything. Saved us weeks of coordination stress.',
    rating: 5 },
  { _id: 't5', name: 'Sneha Iyer',      location: 'Viman Nagar, Pune', role: 'Homeowner',
    quote: 'The team walked us through every swatch patiently. Ended up with a bedroom that finally feels like us.',
    rating: 5 },
];

export const mockGallery = [
  { _id: 'g1', title: 'Living Room · Warm Modern', location: 'Koregaon Park',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=80' },
  { _id: 'g2', title: 'Master Bedroom Retreat',    location: 'Baner',
    imageUrl: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1200&auto=format&fit=crop&q=80' },
  { _id: 'g3', title: 'Study with Character',      location: 'Kalyani Nagar',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80' },
  { _id: 'g4', title: 'Foyer Entrance',            location: 'Aundh',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&auto=format&fit=crop&q=80' },
  { _id: 'g5', title: 'Formal Dining Setup',       location: 'Viman Nagar',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80' },
  { _id: 'g6', title: 'Modern Kitchen Backdrop',   location: 'Wakad',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80' },
];
