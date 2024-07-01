import MenuGroup from "../components/MenuGroup";
import '../Home.css';

export const Home = () => {
  return (
    // <div className="home-container">
    //   <div>
    //     <MenuGroup/>
    //   </div>
    // </div>
    <div className="home-container">
      <aside className="sidebar">
        <MenuGroup />
      </aside>
      <main className="main-content">
        <div className="button-container">
        </div>
      </main>
      <footer className="footer">
        Footer Content
      </footer>
    </div>
  );
};
