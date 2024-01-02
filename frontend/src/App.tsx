import Entry from './views/Entry/Entry';
import Usage from './views/Usage/Usage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Entry />} />
        <Route path="/try-now" element={<Usage />} />
      </Routes>
    </Router>
  );
}

export default App;