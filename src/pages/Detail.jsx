import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Vcanvas from "../components/Vcanvas";
import { Products } from "../utils/const";

export default function Detail() {
  const { id } = useParams();
  useEffect(() => {}, [{ id }]);

  const selectedProduct = Products.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div className="flex gap-4 justify-center">
      <div className="w-[400px] h-[400px]">
        <Vcanvas>{selectedProduct.modelComponent}</Vcanvas>
      </div>
      <div>
        <h2>{selectedProduct.title}</h2>
      </div>
    </div>
  );
}