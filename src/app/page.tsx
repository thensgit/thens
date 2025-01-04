import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <div>
      <header>
          <Header/>
      </header>
      <section className="
        flex
        w-[100%]
        h-screen
        justify-center
      ">
        <SearchBar/>
      </section>
      <footer>
        Footer
      </footer>
    </div>
  );
}
