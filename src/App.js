import './App.css';
import BadgeVariables from './component/BadgeVariables';

function Layout() {
  return (
    <>
    <div className="container">
    <header>Header</header>
    <main>Main</main>
    <aside>Aside</aside>
    <footer>Footer</footer>
    </div>
    </>
  );
}



function App() {
  return (
    <>
    <BadgeVariables />
    <Layout />
    </>
  );
}

export default App;
