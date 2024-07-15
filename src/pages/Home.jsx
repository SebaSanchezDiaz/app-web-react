import UFTable from "../components/UFTable";
import "../Home.css";


export const Home = () => {
  return (
    <div className="Home">
      <header>
        <h1>Valores y Fechas UF 2024</h1>
      </header>
      <main>
        <UFTable />
      </main>
    </div>
  );
};
