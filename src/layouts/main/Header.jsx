import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-screen px-5 h-20 bg-white border-b-2 border flex items-center justify-between">
      <div className="text-2xl font-black hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        3D DEMO
      </div>
    </div>
  );
}
