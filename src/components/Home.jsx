import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const plantProducts = useSelector((state) => state.product);
  return (
    <>
      <section className="my-20  ">
        <div className="w-full  py-48  mt-16 bg-front isolate">
          <div className="container mx-auto flex-col  items-center justify-center text-white space-y-5">
            <div className="flex flex-col">
              <Link
                to="productList"
                className="text-white bg-lightGreenColor px-5 py-2 font-md hover:bg-darkGreenColor self-center"
              >
                Getting Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="container mx-auto flex flex-col space-y-28 ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-normal">Top Sales</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {plantProducts.map((plant) => (
              <>
                <div className=" flex flex-col card">
                  <div className="flex flex-col items-end">
                    <p className="text-end bg-redColor text-white px-4 py-2 text-xl font-bold">
                      Sale %
                    </p>
                  </div>

                  <div className=" flex flex-row items-center space-x-10 justify-center py-10">
                    <img
                      src={plant.plants[0].image}
                      className="card-img-top w-50 h-80"
                      alt="..."
                    />
                    <div className="flex flex-col">
                      <h5 className="font-medium text-xl">
                        {plant.plants[0].name}
                      </h5>
                      <p className="font-medium text-lg">
                        ${plant.plants[0].cost}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              to="productList"
              className="text-white bg-lightGreenColor px-5 py-2 font-md hover:bg-darkGreenColor"
            >
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
