import React from "https://esm.sh/react@19";
import ReactDOM from "https://esm.sh/react-dom@19/client";

// Information stored in the artistData object
let artistData = {
  artist: ["The Weeknd", "Lizzo", "Bad Bunny"],
  image: [
    "https://akns-images.eonline.com/eol_images/Entire_Site/2021330/rs_1200x1200-210430163406-1200-the-weeknd.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    "https://media.allure.com/photos/630514200b069bdf8c93f72f/3:2/w_2571,h_1714,c_limit/lizzo%20side%20ponytail%20.png",
    "https://s1.ticketm.net/dam/a/010/aa178e43-b5e8-44aa-bc2b-8c5975412010_1419701_TABLET_LANDSCAPE_LARGE_16_9.jpg"
  ],
  famousSongs: [
    "Save Your Tears, I Can't Feel My Face, Blinding Lights",
    "About Damn Time, Truth Hurts, 2 Be Loved",
    "Me porto bonito, Neverita, Moscow Mule"
  ]
};

// 1. ArtistCards component to display individual artist information
function ArtistCards(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>Popular Songs: {props.songs}</p>
    </div>
  );
}

function App() {
  // 2. Render 3 instances of the ArtistCard component
  return (
    <div>
      <h1 className="title">MusicPedia</h1>
      <h2 className="subheading">Find out info about your favorite artists 🎶🔍</h2>
      
      <div className="cards-container">
        <ArtistCards 
          name={artistData.artist[0]} 
          image={artistData.image[0]} 
          songs={artistData.famousSongs[0]} 
        />
        <ArtistCards 
          name={artistData.artist[1]} 
          image={artistData.image[1]} 
          songs={artistData.famousSongs[1]} 
        />
        <ArtistCards 
          name={artistData.artist[2]} 
          image={artistData.image[2]} 
          songs={artistData.famousSongs[2]} 
        />
      </div>
    </div>
  );
}

// Rendering the App component
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

// Add this CSS to style the cards with rounded edges and other styles
const styles = `
  .title {
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
  }

  .subheading {
    text-align: center;
    font-family: Arial, sans-serif;
    color: #555;
  }

  .cards-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }

  .card {
    width: 250px;
    border-radius: 15px; /* Rounded edges */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
    overflow: hidden; /* To prevent the image from overflowing the rounded edges */
    background-color: #fff;
    text-align: center;
    padding: 15px;
    margin: 10px;
    transition: transform 0.3s ease-in-out; /* Smooth scaling on hover */
  }

  .card:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
  }

  .card img {
    width: 100%;
    height: auto;
    border-radius: 10px; /* Round the image corners */
  }

  .card h2 {
    font-size: 1.5em;
    margin-top: 10px;
  }

  .card p {
    font-size: 1em;
    color: #777;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
