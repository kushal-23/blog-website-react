import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Error404 from "./pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route>
            {" "}
            <Route path="/" element={<HomePage />} />{" "}
          </Route>
          <Route>
            {" "}
            <Route path="/about" element={<About />} />{" "}
          </Route>
          <Route>
            {" "}
            <Route path="/articles" element={<Article />} />{" "}
          </Route>
          <Route>
            {" "}
            <Route path="/articles/:articleId" element={<ArticleList />} />{" "}
          </Route>
          <Route>
            {" "}
            <Route path="/*" element={<Error404 />} />{" "}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
