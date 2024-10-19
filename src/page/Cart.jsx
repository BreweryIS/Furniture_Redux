import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateCart } from "../slices/cartSlice";
import Newsletter from "../components/Newsletter";

const Cart = () => {
  const CartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };
  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateCart({ id, quantity: newQuantity }));
  };

  return (
    <div className="w-full flex-col h-full py-5 flex justify-center items-center">
      <h1 className="text-center text-xl font-bold py-3">My Cart</h1>
      <div className="w-11/12 py-5 min-h-[50vh]">
        <table className="w-full h-full">
          <thead className="bg-gray-300">
            <tr className="font-bold">
              <th className="py-3">ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Quantity</th>
              <th className="py-3">Price</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {CartItems.length > 0 ? (
              CartItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 text-center">
                  <td className="py-3">{item.id}</td>
                  <td className="py-3">{item.name}</td>
                  <td className="py-3">
                    <input
                      className="focus:outline-none focus:border-none w-16 p-2 bg-gray-50 text-center rounded-lg"
                      type="number"
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      value={item.quantity}
                    />
                  </td>
                  <td className="py-3">$ {item.price}</td>
                  <td className="py-3">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500"
                    >
                      <FaRegTrashCan />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="hover:bg-gray-100 text-center w-full">
                <td className="py-3" colSpan={5}>
                  The Cart is Empty
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="bg-gray-50 w-full">
            <tr className="w-full">
              <td className="p-3" colSpan={2}>
                Total Quantity : {totalQuantity}
              </td>
              <td className="p-3 text-right text-green-500" colSpan={3}>
                Total Price : $ {totalAmount.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end p-4">
          {CartItems.length > 0 && (
            <button
              onClick={handleEmptyCart}
              className="text-red-500 flex justify-center items-center gap-3"
            >
              <FaRegTrashCan />
              Empty Cart
            </button>
          )}
        </div>
      </div>
      <div className="w-11/12 py-5">
          <Newsletter />
        </div>
    </div>
  );
};

export default Cart;
