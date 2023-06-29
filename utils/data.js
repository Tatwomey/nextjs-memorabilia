/** @format */
import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Andrew',
      email: 'andrew@gmail.com',
      password: bcrypt.hashSync('andrew123'),
      isAdmin: true,
    },
    {
      name: 'Trevor',
      email: 'trevor@gmail.com',
      password: bcrypt.hashSync('trevor123'),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: 'Jonathan Davis - Live at Jones Beach',
      slug: 'jd-1',
      category: 'Music',
      image: '/images/photo1.jpg',
      price: 200,
      band: 'Korn',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        ' "16x20" on Hahnemühle Photo Rag Metallic Paper. Numbered and signed edition of 20.',
    },
    {
      name: 'Brian ESP',
      slug: 'head-ftl20',
      category: 'Music',
      image: '/images/photo2.jpg',
      price: 250,
      band:
        "Brian Head Welch. taken during Korn's 20th anniversary of their platinum selling album 'Follow The leader' ",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description:
        '"16x20" on Hahnemühle Photo Rag Metallic Paper. Numbered and signed edition of 20.',
    },
    {
      name: 'Ray Luzier double exposure',
      slug: 'ray-glitch',
      category: 'Music',
      image: '/images/photo3.jpg',
      price: 90,
      band: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        ' "16x20" on Hahnemühle Photo Rag Metallic Paper. Signed and numbered edition of 20.',
    },
    {
      name: 'Munk-Gltch',
      slug: 'munk-glitch',
      category: 'Music',
      image: '/images/photo4.jpg',
      price: 250,
      band: 'James Munky Shaffer',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Signed and numbered - Edition of 20 printed on Photo Rag',
    },
    {
      name: 'Munk-Glitch Original',
      slug: 'munky-glitch',
      category: 'Print',
      image: '/images/munk-glitch.png',
      price: 95,
      band: 'James Munky Shaffer (KORN)',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'A popular print "16x20" on Hahnemühle Photo Rag Metallic Paper.',
    },
    {
      name: 'Gotham City',
      slug: 'classic-pants',
      category: 'Urban Landscape',
      image: '/images/photo6.png',
      price: 75,
      band: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'A popular print "16x20" on Hahnemühle Photo Rag Metallic Paper. Numbered and signed edition of 20.',
    },
  ],
};

export default data;
