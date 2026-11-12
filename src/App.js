import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	 <h1>Hello World!</h1>
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmpibWc5bHdnaDM4aWFneW9tYWM3aW5xOWE1OGRmZWRpbDJ3cXM2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtDaSUB8GDiRW/giphy.gif"
          alt="Waving hand GIF"
          style={{ width: '150px', borderRadius: '12px' }}
        />
        <p>Welcome to my React app deployed via GitHub.</p>
      </header>
    </div>
  );
}

export default App;
