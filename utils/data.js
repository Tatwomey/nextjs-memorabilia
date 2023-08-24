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
      banner: "/images/baner1.jpg",
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
      banner: "/images/baner2.jpg",
    },
    {
      name: "Korn - Freak On a Leash (REMIX)",
      slug: "korn-FOAL-Dante",
      category: "Promo CD",
      image: "/images/kornfreakdante-1.JPG",
      price: 20.00,
      brand: "Korn",
      rating: 4.5,
      numReviews: 10,
      countInStock: 1,
      description: "Rare 1 track remix cd for Freak On A Leash (Dante Ross Remix). Item released with no front or back insert"
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
      name: "Korn - Live At the Palace",
      slug: "korn-live-at-palace",
      category: "live cd",
      image: "/images/kornliveatpalace-1.JPG",
      img2: "/images/kornpalace1995back.png",
      img3: "/images/blackonsilver.jpeg",
      img3: "/images/blackonsilver.jpeg",
      price: 25,
      brand: "KORN",
      rating: 4.5,
      numReviews: 10,
      countInStock: 1,
      description: "A popular promo cd",
    },
    {
      name: "Korn - Wicked & Twisted",
      slug: "korn-wick-twist",
      category: "live cd",
      image: "/images/korn_wicked_twisted.png",
      img2: "/images/kornpalace1995back.png",
      img3: "/images/blackonsilver.jpeg",
      img3: "/images/blackonsilver.jpeg",
      price: 25,
      brand: "KORN",
      rating: 4.5,
      numReviews: 10,
      countInStock: 1,
      description: "A popular promo cd",
    },
    {
      name: "DEFTONES OHMS Cassette Bundle!",
      slug: "OHMSbundle",
      category: "Limited Edition cassette bundle",
      image: "/images/deftones_ohms_casette_bundle.jpg",
    
      price: 150,
      brand: "Deftones",
      rating: 4.5,
      numReviews: 10,
      countInStock: 1,
      description:
        "Limited Edition Green, silver & pink Cassette variants (300 copies made per color) ",
    },
    {
      name: "Family Values Tour 1998 cassette tape",
      slug: "FamilyValues98cassette",
      category: "music cassette",
      image: "/images/FV98 cassette.png",
      price: 35,
      brand: "Family Values Tour 1998",
      rating: 4.5,
      numReviews: 10,
      countInStock: 1,
      description: "Family Values 1998 full length cassette (SEALED!)",
        
    },
    {
      name: "KORNSTAR",
      slug: "KORNSTAR",
      category: "music",
      image: "/images/KORNSTAR.jpeg",
      img2: "/images/KORNSTARBACK.png",
     
      price: 30,
      brand: "KORN",
      rating: 4.5,
      numReviews: 10,
      countInStock: 1,
      description:
        "LIVE CDr, UNOFFICIAL RELEASE",
    },
    {
      name: "Requiem 'silver'version cassette ",
      slug: "korn-requiem-cassette-silver",
      category: "music",
      image: "/images/kornrequiemcas_1024x.webp",
      img2: "/images/requeim_silver-2.jpg",
      img3: "/images/requeim_silver-1.jpg",
      img4: "/images/requeim_silver-3.jpg",
      price: 75,
      brand: "Deftones",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Limited Edition Metallic Shell Cassette (Edition of 300 units worldwide)",
    },
  ],
};

export default data;
