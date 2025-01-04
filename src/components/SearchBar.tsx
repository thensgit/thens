'use client';

import Image from "next/image";
import { useRef } from "react";

const SearchBar = () => {
  const searchBarRef = useRef<HTMLInputElement | null>(null);
  const scrollToSearchBarView = () => {
    if(searchBarRef.current){
        searchBarRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="
        flex
        relative
        mt-5
        w-[50%]
        max-w-132
        rounded-xl
    ">
        <input
            className="
                w-[100%]
                mt-5
                h-12
                p-2
                border-slate-300
                border-l-2
                border-t-2
                border-b-2
                text-xl
                text-slate-500
                font-serif
                focus:outline-none
                rounded-l-xl
            "
            ref={searchBarRef}
            onFocus={scrollToSearchBarView}
        />
        <div className="
            mt-5
            p-2
            right-0
            h-12
            sticky
            border-2
            border-slate-300
            rounded-r-xl
            hover:cursor-pointer
        ">
            <Image src="/SearchIcon.png" alt="Search Icon" width={40} height={100}/>
        </div>
    </div>
  )
}

export default SearchBar;