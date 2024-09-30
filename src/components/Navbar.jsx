import React from "react";

const Navbar = () => {
  const navitems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Cart",
      path: "/cart",
    },
    {
      label: "Whishlist",
      path: "whishlist",
    },
  ];
  return (
    <div className="w-full flex justify-center py-4 items-center">
      <div className="w-10/12 flex justify-center px-2 items-center">
        <div className="flex-1">
          <h1 className="logo font-bold text-2xl">Furniture</h1>
        </div>
        <div className="flex-1">
          <ul>
            {navaitems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Navbar;
