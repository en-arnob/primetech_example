import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ProductView = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // console.log(product);
    toast.success(`${product.title} added to the cart.`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-20 p-2">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header className="text-center">
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                {selectedProduct?.title}
              </h2>

              <p className="mx-auto mt-4 max-w-md text-gray-500">
                {selectedProduct?.description}
              </p>
              <p className="mx-auto mt-4 max-w-md text-red-500 text-2xl">
                $ {selectedProduct?.price}
              </p>
            </header>

            <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <li>
                <span className="group relative block">
                  <img
                    src={selectedProduct?.images[0]}
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />
                </span>
              </li>

              <li>
                <span className="group relative block">
                  <img
                    src={selectedProduct?.images[1]}
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />
                </span>
              </li>

              <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <span className="group relative block">
                  <img
                    src={selectedProduct?.images[2]}
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />
                </span>
              </li>
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                Add to Cart
              </button>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductView;
