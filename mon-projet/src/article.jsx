import { useState, useEffect } from "react";
import "./BlogLand.css";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"; 
const articles = [
  { id: 1, title: "What is JSX?", category: "REACT", date: "18/02/2022" },
  { id: 2, title: "What is the difference between let and const?", category: "JAVASCRIPT", date: "22/03/2022" },
  { id: 3, title: "How to use lazy loading in HTML?", category: "HTML", date: "18/02/2022" },
  { id: 4, title: "What is JSX?", category: "REACT", date: "18/02/2022" },
  { id: 5, title: "What is the difference between let and const?", category: "JAVASCRIPT", date: "22/03/2022" },
  { id: 6, title: "How to use lazy loading in HTML?", category: "HTML", date: "18/02/2022" },
];

// Objet de couleurs pour chaque catégorie
const categoryColors = {
  REACT: "#09568D", // Bleu pour REACT
  JAVASCRIPT: "#FDD64C", // Jaune pour JAVASCRIPT
  HTML: "#DC3545", // Rouge pour HTML
};

export default function Article() {
  const [search, setSearch] = useState("");
  const [filteredArticles, setArticles] = useState(articles);

  useEffect(() => {
    setArticles(
      articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div>
      <h1 className="title">BlogLand</h1>
      <div className="search-bar">
      
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       
        placeholder="Search..."
      /><FaSearch className="search-icon" />
    </div>
      <p className="results"><span className="result">{filteredArticles.length}</span> results found</p>
      <div>
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="article-card"
            data-category={article.category} 
          >
            <span
              className="category"
              style={{ backgroundColor: categoryColors[article.category] }} 
            >
              {article.category}
            </span>
            <h2 className="article-title" data-category={article.category} >{article.title}</h2>
            <div className="article-date">{article.date} <FaArrowRight className="fil" />
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        Copyright &copy; 2022 BlogLand. All rights reserved.
      </footer>
    </div>
  );
}