import { MainCard, AboutCard, PostCard } from "./components/MainCard";
import Navbar from "./components/Navbar";

const LinkedIn = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-8">
            <main className="d-flex flex-column row-gap-20">
              <MainCard />
              <AboutCard />
              <PostCard />
            </main>
          </div>

          <div className="col-12 col-lg-4">
            <aside>

            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedIn;
