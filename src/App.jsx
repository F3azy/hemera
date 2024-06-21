import { About, Contact, Hero, Team, Testimonials, Work, Layout } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/onas" element={<About />} />
          <Route path="/zespol" element={<Team />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/opinie" element={<Testimonials />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
