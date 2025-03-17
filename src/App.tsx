import {
  Routes,
  Route,
} from "react-router"
import Homepage from "./pages/homepage/homepage";
import Dashboard from "./pages/dashboard/dashboard";

function App() {

  return (
    
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
  )
}

export default App
