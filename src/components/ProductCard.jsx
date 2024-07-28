import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 flex flex-col items-center w-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/collection/${product.category}/${product.id}`} passHref>
        <div className="flex flex-col items-center text-center cursor-pointer">
          <Image
            src={product.imageUrl}
            width={300}
            height={300}
            alt={product.name}
            className="rounded-lg"
          />
          <h3 className="text-lg mt-4 font-semibold">{product.name}</h3>
          <p className="text-red-500 text-xl font-bold">{product.price}</p>
        </div>
      </Link>
      <Link href={`/collection/${product.category}/${product.id}`} passHref>
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
