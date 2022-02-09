import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import InsurancePage from './pages/InsurancePage'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <LeftSidebar />
      {/* routes */}
      <main className="flex justify-center items-center"> 
        <InsurancePage />
      </main>
    </div>
  );
}

export default App;
