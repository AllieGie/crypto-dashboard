import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import Background from "./components/Background";

const App = () => { // this is a funciton expression
  return (
    <div className="app">
      <Background />
      <h1>Apex Crypto Dashboard</h1>
      <div className="app-wrapper">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  )
}

export default App;
