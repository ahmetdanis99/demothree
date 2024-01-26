import { Link } from "react-router-dom";
import Card from "../layouts/card/card";
import { Products } from "../utils/const";
import Logo from "../assets/Logo/Logo";

export default function Home() {
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-9 px-9">
      {Products.map((product, index) => (
        <Link to={`/detail/${product.id}`}>
          <Card key={index} product={product} />
        </Link>
      ))}
    </main>
    
  );
}
