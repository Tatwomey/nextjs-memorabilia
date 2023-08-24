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
      name: "Korn Featuring Skrillex, Kill The Noise – Narcissistic Cannibal",
      slug: "narcissistic Cannibal EU promo CD",
      category: "promo CD",
      image: "/images/Kornnarc.png",
      img2: "/images/Kornnarc1.png",
      img3: "/images/Kornnarc3.png",
      price: 13,
      brand: "Korn",
      countInStock: 1,
      description:
        'European 1 track CD single in cardsleeve case',
      isFeatured: true,
      banner: "/images/baner1.jpg",
    },
    {
      name: "Korn Featuring Skrillex, Kill The Noise – Narcissistic Cannibal - 10 track CD",
      slug: "narcissistic Cannibal dansk promo CD",
      category: "promo CD",
      image: "/images/KORNDEN10.JPG",
      price: 13,
      brand: "Korn",
      countInStock: 1,
      description:
        "Uber rare Dansk 10 track remix promo CD in plastic sleeve"
    },

    {
      name: "Requiem LP (coke bottle clear)",
      slug: "kornrequiemcokebottleclear",
      category: "vinyl",
      image: "/images/requiemlpcokebottleclear.jpg",
      price: 40.00,
      brand: "Korn",
      countInStock: 1,
      description:
        "Out of print Wallmart exclusive color way. Mint & Sealed",

    },
    {
      name: "Requiem LP (Revolver Exclusive silver colorway)",
      slug: "Reqsilver",
      category: "vinyl",
      image: "/images/kornreqsilver copy.jpg",
      price: 50.00,
      brand: "Korn",
      countInStock: 1,
      description:
        "Revolver exclusive silver color way. Mint & Sealed - 1000 copies made",
    },
    {
      name: "Family Forum",
      slug: "family-forum-cd",
      category: "live CD ",
      image: "/images/FamilyForum.png",
      img2: "/images/familyforumdisc.png",
      img3: "/images/familyforumback.png",
      price: 25,
      brand: "Korn",
      rating: 4.2,
      numReviews: 10,
      countInStock: 1,
      description:
      "Tracks 1-8 L.A. Shrine Auditorium 12-11-98, Tracks 9-16 Live at The Forum 1998",
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
      img2:"/images/wickedandtwistedback-1.JPG",
      img3: "/images/blackonsilver.jpeg",
      img3: "/images/blackonsilver.jpeg",
      price: 40,
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
