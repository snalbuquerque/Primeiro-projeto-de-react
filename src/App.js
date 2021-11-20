import './App.css';
import Title from './components/Title';
import List from './components/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title text="Meus filmes favoritos"/>
        <List/>
      </header>
    </div>
  );
}

export default App;
