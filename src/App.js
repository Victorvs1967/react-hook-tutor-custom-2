import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h4>React Hook Tutor</h4>
      </header>
      <main className="App-main">
        <CounterOne />
        <CounterTwo />
      </main>
      <footer className="App-footer">by Nabendu</footer>
    </div>
  );
};

export default App;
