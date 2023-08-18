/** @format */
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Layout from "@/components/Layout";
import Product from "@/Models/Product";
import db from "@/utils/db";
import { Store } from "@/utils/Store";

function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  
  const [activeImg, setActiveImage] = useState(product.image);
  
  if (!product) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }

  const thumbnailImages = [
    product.img2,
    product.img3,
    product.img4
  ];

  const handleThumbnailClick = (image) => {
    setActiveImage(image);
  };

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link legacyBehavior href="/">
          back to products
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <div className="flex flex-col items-center">
            <Image
              src={activeImg}
              alt={product.name}
              width={640}
              height={640}
              priority
            />
            <br /> {/* Add line breaks */}
            <br />
            <div className="mt-4 flex justify-between space-x-4">
              {thumbnailImages.map((thumbnail, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleThumbnailClick(thumbnail)}
                >
                  <Image
                    src={thumbnail}
                    alt={`Thumbnail ${index + 2}`}
                    width={120} // Make thumbnails 2x larger
                    height={120}
                    className="w-16 h-16" // Adjusted width and height
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}

export default ProductScreen;
