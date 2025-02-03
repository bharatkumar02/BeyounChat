import ClientWebsite from "./page/ClientWebsite";
import PageData from "./components/PageData";
import RegistrationForm from "./page/Form";
import Success from "./page/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="relative">
        <Router>
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/test-chatbot" element={<ClientWebsite />} />
            <Route path="/test-integration" element={<Success />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
