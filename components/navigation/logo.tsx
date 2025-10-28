import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-2xl font-bold">
      <a href="/">
        <Image src="/logoipsum-264.svg" alt="logo" width={160} height={40} />
      </a>
    </div>
  );
};

export default Logo;
