import React, { useEffect, useState } from "react";

const Home = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center">Latest News</h1>
      {error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {news.length > 0 ? (
            news.slice(0, 5).map((article, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="font-semibold text-lg">{article.title}</h2>
                <p className="text-gray-600">{article.description}</p>
                <p className="text-sm text-gray-500">
                  Source: {article.source.name}
                </p>
                <p className="text-sm text-gray-500">
                  Published:{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
                >
                  Read More
                </a>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center">Loading Articles...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
