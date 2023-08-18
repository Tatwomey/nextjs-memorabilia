/** @format */
import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Andrew",
      email: "andrew@gmail.com",
      password: bcrypt.hashSync("andrew123"),
      isAdmin: true,
    },
    {
      name: "Trevor",
      email: "trevor@gmail.com",
      password: bcrypt.hashSync("trevor123"),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "Jonathan Davis - Live at Jones Beach",
      slug: "jd-1",
      category: "Music",
      image: "/images/photo1.jpg",
      width: 1000,
      price: 200,
      brand: "Korn",
      countInStock: 20,
      description:
        ' "16x20" on Hahnemühle Photo Rag Metallic Paper. Numbered and signed edition of 20.',
      isFeatured: true,
      banner: "/images/banner1.jpg",
    },

    {
      name: "Gotham City",
      slug: "classic-pants",
      category: "Urban Landscape",
      image: "/images/photo6.png",
      price: 75,
      brand: "Urban Landscape",
      countInStock: 20,
      description:
        'A popular print "16x20" on Hahnemühle Photo Rag Metallic Paper. Numbered and signed edition of 20.',
    },
    {
      name: "Brian ESP",
      slug: "head-ftl20",
      category: "Music",
      image: "/images/photo2.jpg",
      price: 250,
      brand:
        "Brian Head Welch. taken during Korn's 20th anniversary of their platinum selling album 'Follow The leader' ",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description:
        '"16x20" on Hahnemühle Photo Rag Metallic Paper. Numbered and signed edition of 20.',
      isFeatured: true,
      banner: "/images/banner2.jpg",
    },
    {
      name: "Ray Luzier double exposure",
      slug: "ray-glitch",
      category: "Music",
      image: "/images/photo3.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        ' "16x20" on Hahnemühle Photo Rag Metallic Paper. Signed and numbered edition of 20.',
    },
    {
      name: "Munk-Gltch",
      slug: "munk-glitch",
      category: "Music",
      image: "/images/munk-gitch.png",
      price: 250,
      brand: "James Munky Shaffer",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Signed and numbered - Edition of 20 printed on Photo Rag",
    },

    {
      name: "Blind",
      slug: "korn-blind-promo-cd",
      category: "promo-cd",
      image: "/images/blind1.jpeg",
      img2: "/images/blind2.jpeg",
      img3: "/images/blind3.jpeg",
      img4: "/images/blind4.jpeg",
      price: 75,
      brand: "Casely",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular promo cd",
    },
  ],
};

export default data;
