import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  return (
    <div className="App bg-slate-700">
      <GlobalContextProvider>
        <Header />
        <Layout></Layout>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
