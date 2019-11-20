import React, { useState, useEffect } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchForm({ displayedArticles, setDisplayedArticles, articles }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = displayedArticles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    searchTerm.length === 0
      ? setDisplayedArticles(articles)
      : setDisplayedArticles(results);
  }, [searchTerm]);

  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={value => setSearchTerm(value)}
      />
    </div>
  );
}

export default SearchForm;
