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
        <div className="md:w-1/2 -mt-7 md:mt-0 flex items-center p-6">
          <div className="bg-[#94f8ff] w-full h-full p-2 rounded-3xl">
            <div className=" bg-slate-100 h-full flex justify-center rounded-2xl">
              <div className="flex w-full flex-col text-5xl items-center gap-6 m-2">
                <h2 className="text-black">{selectedProduct.title}</h2>
                <div className="flex flex-wrap w-full text-3xl">
                  <div className="w-full">Ürünün Özellikleri</div>
                  <div className="w-full text-xl">· {selectedProduct.Dimensions}</div>
                  <div className="w-full text-xl">· {selectedProduct.pColor}</div>
                  <div className="w-full text-xl">· {selectedProduct.Garanti}</div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-1/3">{selectedProduct.qrCode}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
