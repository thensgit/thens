import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="
        flex
        w-[100%]
        h-16
        p-2
        bg-slate-300
        shadow-md
        items-center
    ">
      <Link href={"/"}>
        <Image src="/TheNSLogo.webp" alt="TheNS Logo" width={180} height={100} priority />
      </Link>
    </div>
  )
}

export default Header;