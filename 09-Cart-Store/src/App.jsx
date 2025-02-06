import "./App.css";
import Card from "./component/Card";
import men_shirt from "./assets/men_shirt.json";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart.value);
  return (
    <>
      <h1 className="bg-blue-400 text-white flex justify-center items-center font-bold h-[3rem]">
        Cart: {cart.length} 
      </h1>
      <div className="border my-4 max-w-[1320px] mx-auto p-10">
        <h1 className="text-3xl font-bold pb-3">Feature Product</h1>
        <div className="grid grid-cols-4 mx-auto gap-5">
          {men_shirt.slice(0, 12).map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
