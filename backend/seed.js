require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');
const GalleryItem = require('./models/GalleryItem');

const services = [
  { order: 1,  name: 'Imported Wallpapers',      description: 'Handpicked designs sourced from European and Asian ateliers.' },
  { order: 2,  name: 'Curtain Fabrics',          description: 'Luxurious drapes in silks, linens and heavy blackout weaves.' },
  { order: 3,  name: 'Upholstery',               description: 'Custom sofa, chair and headboard finishes tailored to your palette.' },
  { order: 4,  name: 'Blinds',                   description: 'Roller, Roman, Venetian and honeycomb — motorised options available.' },
  { order: 5,  name: 'Artefacts',                description: 'Curated decor pieces that add character to every corner.' },
  { order: 6,  name: 'Wooden Flooring',          description: 'Engineered hardwood and laminate finishes with a lifetime feel.' },
  { order: 7,  name: 'PVC & SPC Flooring',       description: 'Waterproof, durable and quiet underfoot — perfect for high-use rooms.' },
  { order: 8,  name: 'Artificial Landscaping',   description: 'Evergreen grass, vertical gardens and balcony compositions.' },
  { order: 9,  name: 'Mattress',                 description: 'Premium sleep systems chosen for your posture and preference.' },
  { order: 10, name: 'Automated Curtain Tracks', description: 'Smart motorised tracks with voice, app and remote control.' },
];

const testimonials = [
  { name: 'Priya Sharma',      location: 'Koregaon Park, Pune', role: 'Homeowner',
    quote: 'They transformed our 3BHK into something out of a magazine. The imported wallpapers alone changed the whole mood of the living room.',
    rating: 5, featured: true },
  { name: 'Rohit Deshmukh',    location: 'Baner, Pune',         role: 'Architect',
    quote: 'I recommend The Wall Story to every client. Their attention to fabric texture and finish quality is genuinely rare in this city.',
    rating: 5, featured: true },
  { name: 'Anjali Kulkarni',   location: 'Kalyani Nagar, Pune', role: 'Interior Designer',
    quote: 'The automated curtain tracks are a game-changer. Installation was quick, clean, and the after-care has been fantastic.',
    rating: 5 },
  { name: 'Amit Patil',        location: 'Aundh, Pune',         role: 'Homeowner',
    quote: 'From wooden flooring to the mattress, one team handled everything. Saved us weeks of coordination stress.',
    rating: 5 },
  { name: 'Sneha Iyer',        location: 'Viman Nagar, Pune',   role: 'Homeowner',
    quote: 'The team walked us through every swatch patiently. Ended up with a bedroom that finally feels like us.',
    rating: 5 },
];

const gallery = [
  { title: 'Living Room · Warm Modern',  location: 'Koregaon Park', category: 'living',   order: 1,
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80' },
  { title: 'Master Bedroom Retreat',     location: 'Baner',         category: 'bedroom',  order: 2,
    imageUrl: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=900&auto=format&fit=crop&q=80' },
  { title: 'Study with Character',       location: 'Kalyani Nagar', category: 'study',    order: 3,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=80' },
  { title: 'Foyer Entrance',             location: 'Aundh',         category: 'foyer',    order: 4,
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&auto=format&fit=crop&q=80' },
  { title: 'Formal Dining Setup',        location: 'Viman Nagar',   category: 'dining',   order: 5,
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=80' },
  { title: 'Modern Kitchen Backdrop',    location: 'Wakad',         category: 'kitchen',  order: 6,
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80' },
];

(async () => {
  await connectDB();
  await Promise.all([
    Service.deleteMany({}),
    Testimonial.deleteMany({}),
    GalleryItem.deleteMany({}),
  ]);
  await Service.insertMany(services);
  await Testimonial.insertMany(testimonials);
  await GalleryItem.insertMany(gallery);
  console.log(`✦ Seeded: ${services.length} services, ${testimonials.length} testimonials, ${gallery.length} gallery items`);
  await mongoose.disconnect();
  process.exit(0);
})();
