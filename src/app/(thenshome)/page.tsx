import AppDisplayPanel from "@/components/AppDisplayPanel";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <div className="
      flex
      flex-col
      w-[100%]
      h-[100%]
      relative
      bg-white
    ">
      <section>
        <header>
            <Header/>
        </header>
      </section>
      <section className="
        flex
        flex-col
        w-[100%]
        h-screen
        items-center
      ">
        <SearchBar/>
        <AppDisplayPanel/>
      </section>
      <section className="
        flex
        flex-col
        sticky
        w-[100%]
        h-72
        bg-slate-300
        justify-center
        items-center
      ">
        <footer>
          Footer
        </footer>
      </section>
    </div>
  );
}
