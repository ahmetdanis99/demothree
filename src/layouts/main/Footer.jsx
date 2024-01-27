export default function Footer() {
  return (
    <div className="w-screen px-5 h-20 bg-[#94f8ff] flex items-center justify-center button-0">
      <div
        className="text-2xl font-black hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        3D DEMO
      </div>
    </div>
  );
}
