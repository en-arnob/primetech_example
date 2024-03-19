import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, setSelectedProduct } from "../store/actions";
import { TiShoppingCart } from "react-icons/ti";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const App = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cartItemCount);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // console.log(product);
    toast.success(`${product.title} added to the cart.`);
  };

  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const startIndex = skip + 1;
  const endIndex = Math.min(skip + limit);

  const pageChange = (pageNum) => {
    const newPage = pageNum < 0 ? 0 : pageNum;
    setSkip(newPage * limit);
    setActivePage(newPage);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    pageChange(activePage - 1);
  };

  const handleNextPage = () => {
    pageChange(activePage + 1);
  };
  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    // console.log(product);
  };
  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
      .then((response) => {
        // console.log(response.data.products);
        setData(response.data.products);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  return (
    <div className="">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 px-8 z-10">
        <div className="">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <input
                type="text"
                placeholder="Search"
                className="peer h-8 w-full border-2  p-2 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link to={`/cart`}>
                <button
                  className=" rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-900 focus:outline-none focus:ring flex gap-1"
                  type="button"
                >
                  <span className="text-xl">
                    <TiShoppingCart />
                  </span>{" "}
                  {cartItemCount}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Shop
            </h2>
          </header>

          <div className="mt-3 sm:flex sm:items-center sm:justify-between">
            <div className="block sm:hidden">
              <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium"> Filters & Sorting </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="text-blue-700 font-semibold">
                  {" "}
                  {startIndex} - {endIndex}{" "}
                </span>
              </p>
            </div>

            <div className="hidden sm:block">
              <label htmlFor="SortBy" className="sr-only">
                Default Sorting
              </label>

              <select
                id="SortBy"
                className="h-10 rounded border-gray-300 text-sm"
              >
                <option>Default Sorting</option>
                <option value="Title, DESC">Price</option>
                <option value="Title, ASC">Rating</option>
                <option value="Price, DESC">Category</option>
                <option value="Price, ASC">Brand</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center p-6">Loading...</div>
          ) : (
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data?.map((d) => (
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    handleProductClick(d);
                  }}
                  key={d?.id}
                  className="text-center border-2"
                >
                  <Link
                    to={`/product/${d.id}`}
                    className="group block overflow-hidden"
                  >
                    <img
                      src={d?.thumbnail}
                      alt=""
                      className="w-64 h-64  transition duration-500 group-hover:scale-105 "
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {d?.title}
                      </h3>

                      <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-red-500">
                          {d?.price} $
                        </span>
                      </p>
                    </div>
                  </Link>
                  <span className="tracking-wider ">
                    <button
                      className="flex  px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-200 focus:outline-none focus:ring mt-2"
                      onClick={() => handleAddToCart(d)}
                    >
                      <span className="text-xl">
                        <TiShoppingCart />
                      </span>
                      Add to Cart
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
          <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
            <li
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 cursor-pointer"
              onClick={handlePreviousPage}
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                pageChange(0);
              }}
              className={`block size-8 rounded border ${
                activePage === 0 ? `bg-black text-white` : `border-gray-100`
              } leading-8 cursor-pointer text-center`}
            >
              1
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                pageChange(1);
              }}
              className={`block size-8 rounded border ${
                activePage === 1 ? `bg-black text-white` : `border-gray-100`
              } text-center leading-8 cursor-pointer`}
            >
              2
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                pageChange(2);
              }}
              className={`block size-8 rounded border ${
                activePage === 2 ? `bg-black text-white` : `border-gray-100`
              } text-center leading-8 cursor-pointer`}
            >
              3
            </li>

            <li
              onClick={(e) => {
                e.preventDefault();
                pageChange(3);
              }}
              className={`block size-8 rounded border ${
                activePage === 3 ? `bg-black text-white` : `border-gray-100`
              } text-center leading-8 cursor-pointer`}
            >
              4
            </li>

            <li
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 cursor-pointer"
              onClick={handleNextPage}
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default App;
