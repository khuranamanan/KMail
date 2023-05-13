import { Route, Routes } from "react-router";
import NavigationBar from "./Components/NavigationBar";
import InboxPage from "./Pages/InboxPage";
import PageNotFound from "./Pages/PageNotFound";
import TrashMailsPage from "./Pages/TrashMailsPage";
import SpamMailsPage from "./Pages/SpamMailsPage";
import EmailPage from "./Pages/EmailPage";
import Logo from "./Components/Logo";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <div className="navbar-branding">
        <Logo />{" "}
      </div>
      <div className="main-app">
        <NavigationBar />
        <div className="main-area">
          <Routes>
            <Route path="/" element={<InboxPage />} />
            <Route path="/trash" element={<TrashMailsPage />} />
            <Route path="/spam" element={<SpamMailsPage />} />
            <Route path="/email/:id" element={<EmailPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
