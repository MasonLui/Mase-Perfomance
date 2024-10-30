// src/App.jsx
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Article from './Article';
import ArticleEntry from './ArticleEntry';
import { SignIn, SignOut } from './Auth';
import { useAuthentication } from '../services/authService';
import { fetchArticles, createArticle } from '../services/articleService';
import './App.css';
import NewsSection from './NewsSection'; // Keep only the general news import

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  // Fetch articles when a user logs in
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  // Handle adding a new article
  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  return (
    <div className="App">
      {/* Header with logo, title, and user info */}
      <header>
        <img
          src="https://gigamot.com/images/feature_variant/1/M-Logo.png"
          alt="Mase Performance Logo"
          className="logo"
        />
        <h1>Mase Performance</h1>
        <div className="user-info">
          {user ? (
            <>
              <span>Welcome, {user.displayName || user.name || user.email}</span>
              <button className="styled-button" onClick={SignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </header>

      <div className="content-layout">
        {/* Sidebar with New Article button and articles */}
        {user && (
          <aside className="sidebar">
            <button className="styled-button" onClick={() => setWriting(true)}>
              New Article
            </button>
            <Nav articles={articles} setArticle={setArticle} />
            {writing ? (
              <ArticleEntry addArticle={addArticle} />
            ) : (
              <Article article={article} />
            )}
          </aside>
        )}

        {/* Main Content with General News only */}
        <main className="main-content">
          <NewsSection /> {/* Render only the General News section */}
        </main>
      </div>
    </div>
  );
}
