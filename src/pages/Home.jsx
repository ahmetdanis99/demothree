import { Link } from "react-router-dom";
import Card from "../layouts/card/card";
import { Products } from "../utils/const";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#94f8ff] w-full aspect-video max-h-[50vh] flex items-center justify-center">
        <div className="w-2/3 h-5/6 flex items-center justify-center flex-col lg:gap-10 md:gap-10 gap-5">
          <div className="lg:text-9xl font-body md:text-9xl text-7xl">MOBİLYA</div>
          <div className="lg:text-6xl font-body md:text-6xl text-2xl">DÜNYAM</div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <section className="w-5/6">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9">
            {Products.map((product, index) => (
                <Link to={`/detail/${product.id}`}>
                  <Card key={index} product={product} />
                </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
