/** @format */
import bcrypt from "bcryptjs";
import { Printer } from "heroicons-react";

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
      name: "Brian Head Welch Kaged 11x19 glossy print",
      slug: "brianbw",
      category: "print",
      image: "http://defaultproductimage.com",
      price: 40,
      band: "Korn",
      countInStock: 20,
      description: "Super-B glossy paper numbered and signed edition of 20",
    },
    {
      name: "SEPULTURA 33 RPM 12 inch - Beneath The Remains 2LP ORANGE & YELLOW VINYL LMTD SEALED",
      slug: "beneaththeremains",
      category: "Vinyl",
      image: "/images/s-l1600.png",
      price: 40,
      band: "Korn",
      countInStock: 1,
      description: "1500 copies made!",
    },
    // ... [All the other product data you provided remains intact, with the adjustments]
    {
      name: "Requiem 'silver'version cassette ",
      slug: "korn-requiem-cassette-silver",
      category: "cassette tape",
      image: "/images/kornrequiemcas_1024x.webp",
      img2: "/images/requeim_silver-2.jpg",
      img3: "/images/requeim_silver-1.jpg",
      img4: "/images/requeim_silver-3.jpg",
      price: 75,
      band: "Deftones",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Limited Edition Metallic Shell Cassette (Edition of 300 units worldwide)",
    },
  ],
};

export default data;
