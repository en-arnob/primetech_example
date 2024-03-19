import { useSelector } from "react-redux";

import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  const cartItemCount = useSelector((state) => state.cartItemCount);

  return (
    <div>
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
              <button
                className=" rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-900 focus:outline-none focus:ring flex gap-1"
                type="button"
              >
                <span className="text-xl">
                  <TiShoppingCart />
                </span>{" "}
                {cartItemCount}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
