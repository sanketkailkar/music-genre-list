import React, { useState } from "react";
import "./styles.css";

//database
const songsDatabase = {
  Trending: [
    { name: "Naatu Naatu", movie: "RRR" },
    { name: "Tum Tum ", movie: "Enemy" },
    { name: "Rait Zara Si ", movie: "Atrangi Re" },
    { name: "OOPS ", movie: "King" },
    { name: "Kesariya ", movie: "Brahmastra" }
  ],
  Pop: [
    { name: "Naatu Naatu", movie: "RRR" },
    { name: "Raataan Lambiyan ", movie: "Shershaah" },
    { name: "Maan Meri Jaan ", movie: "King" }
  ],
  Rock: [
    { name: "Saadda Haq", movie: "Rockstar" },
    { name: "Emotional Attyachaar", movie: "Dev D" },
    { name: "Rock On!!", movie: "Rock On" },
    { name: "Naatu Naatu", movie: "Sanket" }
  ],
  Love: [
    { name: "Ranjha", movie: "Shershaah" },
    { name: "O Bedardeya", movie: "Tu Jhoothi Main Makkaar" },
    { name: "Kaise Hua", movie: "Kabir Singh" }
  ]
};

var songsList = Object.keys(songsDatabase); //Converting dictionary to array

export default function App() {
  const [genre, setGenre] = useState("Trending"); //useState to view in browser

  function songTypeClickHandler(songType) {
    setGenre(songType);
  }

  return (
    <div className="App">
      <h1>🎵 Music 🎵</h1>
      <p>Checkout Indian songs. Select a genre to see songs list.</p>
      
      {/* Genre List Display*/}
      <div>
        {songsList.map(function (songType) {
          return (
            <button
              key={songType}
              onClick={() => songTypeClickHandler(songType)}
              style={{
                margin: "0.5rem 1rem",
                padding: "0.5rem",
                fontSize: "1rem",
                border: "1px solid #000",
                borderRadius: "5px"
              }}
            >
              {songType}
            </button>
          );
        })}
      </div>
      
      <hr style={{ width: "90vw" }} />

      {/* Songs list Display  */}
      <div style={{ textAlign: "left" }}>
        <ul>
          {songsDatabase[genre].map(function (songs) {
            return (
              <li
                className="songs"
                style={{
                  listStyle: "none"
                }}
              >
                <div style={{ fontSize: "larger" }}>{songs.name}</div>
                <div style={{ fontSize: "medium" }}>{songs.movie}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
