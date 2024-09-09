import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const plantProducts = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  const addItemHandler = (plant) => {
    if (plant) {
      dispatch(addItem(plant));
    }
  };

  return (
    <>
      <section className="my-20">
        <div className="container mx-auto flex flex-col space-y-28 ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-normal">Plants</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            {plantProducts.map((plant) => (
              <>
                {plant.plants.map((plantItem, index) => (
                  <div key={index} className=" flex flex-col card">
                    <div className="flex flex-col items-end">
                      <p className="text-end bg-redColor text-white px-4 py-2 text-xl font-bold">
                        Sale %
                      </p>
                    </div>
                    <div className=" flex flex-row items-center space-x-10 justify-center py-10 px-2">
                      <img
                        src={plantItem.image}
                        className="card-img-top w-50 h-80"
                        alt="..."
                      />
                      <div className="flex flex-col space-y-3">
                        <h5 className="font-medium text-xl">
                          {plantItem.name}
                        </h5>
                        <p className="font-medium text-lg">${plantItem.cost}</p>
                        <p className="font-normal text-md">
                          {plantItem.description}
                        </p>
                        <button
                          className="text-white bg-lightGreenColor px-2 py-2 font-md hover:bg-darkGreenColor"
                          onClick={() => addItemHandler(plantItem)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
