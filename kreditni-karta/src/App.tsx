import './App.css';
import Payment from './components/payment/Payment';
import { Card } from './components/card/Card';

function App() {
  return (
    <>
      <h1 className="project">Project - Credit Card</h1>
      <div className="container">
        <Card />
        <Payment />
      </div>
    </>
  );
}

export default App;
