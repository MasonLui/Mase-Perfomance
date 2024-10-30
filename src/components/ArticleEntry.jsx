import React, { useState } from 'react';
import './ArticleEntry.css'; // import your CSS file if separate

const ArticleEntry = ({ addArticle }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addArticle({ title, body });
      setTitle('');
      setBody('');
    }
  };

  return (
    <div className="article-entry-container">
      <h2>Create a New Article</h2>
      <input
        type="text"
        placeholder="Enter article title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your article here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSubmit}>Publish Article</button>
    </div>
  );
};

export default ArticleEntry;
