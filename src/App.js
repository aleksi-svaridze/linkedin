import Navbar from "./components/Navbar";
import { MainCard, AboutCard, PostCard } from "./components/MainCard";
import {PeopleViewed, PeopleFollow} from "./components/Aside";

const LinkedIn = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="container pt-83">
        <div className="row gy-4">
          <div className="col-12 col-xl-8">
            <main className="d-flex flex-column row-gap-20">
              <MainCard />
              <AboutCard />
              <PostCard />
            </main>
          </div>

          <div className="col-12 col-xl-4">
            <aside className="d-flex flex-column row-gap-20">
                <PeopleViewed />
                <PeopleFollow />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedIn;
