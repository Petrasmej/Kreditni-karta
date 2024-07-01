import './App.css';
import Payment from './components/payment/Payment';
import { Card } from './components/card/Card';
import { ContextProvider } from './components/settings-context';

function App() {
  return (
    <ContextProvider>
      <div className="box">
        <h1 className="project">Project - Credit Card</h1>
        <div className="container">
          <Card />
          <Payment />
        </div>
      </div>
    </ContextProvider>
  );
}
export default App;
