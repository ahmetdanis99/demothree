import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo/Logo";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="mb-8 w-screen px-5 h-16 bg-blue-300 flex items-center justify-between">
      <div className="flex items-center text-2xl font-black hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo/>
        3D DEMO
      </div>
    </div>
  );
}
