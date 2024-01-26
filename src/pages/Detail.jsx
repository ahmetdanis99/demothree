import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Carddetail from "../layouts/card/detailCard";
import { Products } from "../utils/const";

export default function Detail() {
  const { id } = useParams();
  useEffect(() => {}, [{ id }]);

  const selectedProduct = Products.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Ürün bulunamadi!</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-2/3 md:w-5/6 md:flex flex-warp justify-center ">
        <div className="md:w-1/2 p-6">
          <Carddetail product={selectedProduct} />
        </div>
        <div className="md:w-1/2 -mt-7 md:mt-0 flex flex-col items-center p-6">
          <div className="p-2 bg-gray-200 w-full min-h-full">
            <div className="flex justify-center">
              <h2 className="text-black text-4xl">{selectedProduct.title}</h2>
            </div>
            <div className="flex items-center justify-center h-full">
              <div className="h-1/2 w-1/2">{selectedProduct.qrCode}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
