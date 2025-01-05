'use client';

import Image from "next/image";
import { useRef } from "react";

const SearchBar = () => {
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const scrollToSearchBarView = () => {
    if(searchBarRef.current){
        searchBarRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div ref={searchBarRef} className="
        flex
        relative
        w-[50%]
        max-w-132
        rounded-xl
    ">
        <form action={"#"} className="
            flex
            relative
            w-[100%]
            h-[100%]
        ">
            <input
                className="
                    w-[100%]
                    mt-5
                    h-12
                    p-5
                    border-slate-300
                    border-l-2
                    border-t-2
                    border-b-2
                    text-lg
                    text-slate-500
                    font-serif
                    focus:outline-none
                    rounded-l-xl
                    bg-white
                "
                type="search"
                placeholder="Search Applications..."
                onFocus={scrollToSearchBarView}
            />
            <div className="
                flex
                mt-5
                p-2.5
                right-0
                h-12
                justify-center
                bg-white
                sticky
                border-2
                border-slate-300
                rounded-r-xl
                hover:cursor-pointer
            ">
                <button type="submit">
                    <Image loading="lazy" src="/SearchIcon.webp" alt="Search Icon" width={28} height={18} className="
                        p-1
                    "/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default SearchBar;