import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentProfile from "./components/StudentProfile";

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      <Header />

      <main>
        <h2>Student Practice Tracker</h2>

        <button onClick={() => setShowProfile(!showProfile)}>
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>

        {showProfile && (
          <StudentProfile
            name="Vikas"
            department="CSE"
            year="3rd Year"
            count={count}
            setCount={setCount}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;