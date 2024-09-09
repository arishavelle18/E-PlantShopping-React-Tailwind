import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "./CartSlice";
import { Link } from "react-router-dom";
const CartItem = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce(
    (total, cartItem) => total + cartItem.cost * cartItem.quantity,
    0
  );
  console.log(cart);
  const removeItemHandler = (plant) => {
    if (plant) {
      dispatch(removeItem(plant));
    }
    console.log(plant);
  };
  const addSubHandler = (plant) => {
    if (plant) {
      if (plant.quantity > 0)
        dispatch(
          updateQuantity({ name: plant.name, quantity: plant.quantity })
        );
      else plant.quantity = 1;
    }
    console.log(plant);
  };

  return (
    <>
      <section className="my-20">
        <div className="container mx-auto flex flex-col space-y-28 ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-normal">Total ${totalAmount}</h1>
          </div>
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
              {cart.map((plantItem, index) => (
                <>
                  <div
                    key={index}
                    className="card flex flex-row items-center space-x-10 justify-center py-10 px-2"
                  >
                    <img
                      src={plantItem.image}
                      className="card-img-top w-50 h-80"
                      alt="..."
                    />
                    <div className="flex flex-col space-y-3">
                      <h5 className="font-medium text-xl">{plantItem.name}</h5>
                      <p className="font-medium text-lg"> ${plantItem.cost}</p>
                      <div className="grid grid-cols-4 items-center justify-between px-1">
                        <button
                          className="px-2 py-1 bg-brownColor text-white"
                          onClick={() =>
                            addSubHandler({
                              name: plantItem.name,
                              quantity: plantItem.quantity + 1,
                            })
                          }
                        >
                          +
                        </button>
                        <button className="col-span-2">
                          {plantItem.quantity}
                        </button>
                        <button
                          className="px-2 py-1 bg-brownColor text-white"
                          onClick={() =>
                            addSubHandler({
                              name: plantItem.name,
                              quantity: plantItem.quantity - 1,
                            })
                          }
                        >
                          -
                        </button>
                      </div>

                      <button>
                        Total:${plantItem.cost * plantItem.quantity}
                      </button>
                      <p className="font-normal text-md">
                        {plantItem.description}
                      </p>
                      <button
                        className="text-white bg-lightGreenColor px-2 py-2 font-md hover:bg-darkGreenColor"
                        onClick={() => removeItemHandler(plantItem.name)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center">
                <h1 className="text-center font-bold text-lg"> Empty Cart</h1>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center space-y-10 mt-20">
          <Link
            to="/productList"
            className="px-4 py-2 bg-brownColor text-white rounded-full"
          >
            Continue Shopping
          </Link>

          <button
            onClick={() => window.alert("Coming Soon!!!")}
            className="px-4 py-2 bg-brownColor text-white rounded-full"
          >
            Checkout
          </button>
        </div>
      </section>
    </>
  );
};
export default CartItem;
