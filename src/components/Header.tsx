import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="
        flex
        w-[100%]
        h-16
        bg-slate-100
        shadow-md
        items-center
    ">
        <Link href={"/"}>
            <Image src="/TheNSLogo.png" alt={"TheNS Logo"} width={200} height={200}/>
        </Link>
    </div>
  )
}

export default Header;