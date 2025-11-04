import { useState, useEffect } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("Loading quote...");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://quotes-api-self.vercel.app/quote");
      const data = await res.json();
      console.log(data); 
      setQuote(data.quote || data.content || "No quote found");
      setAuthor(data.author || "Unknown");
    } catch (err) {
      console.error(err);
      setQuote("Error loading quote!");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" style={{ textAlign: "center", marginTop: "40px" }}>
      <p id="text">"{quote}"</p>
      <p id="author">- {author}</p>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;