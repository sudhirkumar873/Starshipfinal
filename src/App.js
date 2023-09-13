// // import React, { useState, useEffect } from 'react';

// // function StarshipList() {
// //   const [starships, setStarships] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('https://swapi.dev/api/starships');
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const data = await response.json();
// //         setStarships(data.results);
// //       } catch (err) {
// //         setError(err);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }
// //   console.log(starships);
// //   return (
// //     <div>
// //       <h1>Starships</h1>
// //       <div className="grid">
// //         {starships.map((starship) => (
// //           <div className="card" key={starship.name}>
// //             <h2>{starship.name}</h2>
// //             <p>Model: {starship.model}</p>
// //             <p>Manufacturer: {starship.manufacturer}</p>
// //             <p>Cost in Credits: {starship.cost_in_credits}</p>
// //             {/* Add more properties as needed */}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default StarshipList;
// import React, { useState, useEffect } from 'react';

// function StarshipList() {
//   const [starships, setStarships] = useState([]);
//   const [error, setError] = useState(null);
//   const [likedStarships, setLikedStarships] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://swapi.dev/api/starships');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setStarships(data.results);
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleLike = (starshipName) => {
//     if (likedStarships.includes(starshipName)) {
//       // If already liked, remove from likedStarships
//       setLikedStarships(likedStarships.filter((name) => name !== starshipName));
//     } else {
//       // If not liked, add to likedStarships
//       setLikedStarships([...likedStarships, starshipName]);
//     }
//   };

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Starships</h1>
//       <div className="grid">
//         {starships.map((starship) => (
//           <div className="card" key={starship.name}>
//             <h2>{starship.name}</h2>
//             <p>Model: {starship.model}</p>
//             <p>Manufacturer: {starship.manufacturer}</p>
//             <p>Cost in Credits: {starship.cost_in_credits}</p>
//             <button onClick={() => toggleLike(starship.name)}>
//               {likedStarships.includes(starship.name) ? 'Unlike' : 'Like'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StarshipList;
import React, { useState, useEffect } from 'react';
import './App.css';

function StarshipList() {
  const [starships, setStarships] = useState([]);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/starships');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStarships(data.results);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const toggleFavorite = (starshipName) => {
    if (favorites.includes(starshipName)) {
      // If already a favorite, remove from favorites
      setFavorites(favorites.filter((name) => name !== starshipName));
    } else {
      // If not a favorite, add to favorites
      setFavorites([...favorites, starshipName]);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div style={{textAlign:'center'}}><h1>Starships</h1></div>
      <div className="grid">
        {starships.map((starship) => (
          <div className="card" key={starship.name}>
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Cost in Credits: {starship.cost_in_credits}</p>
            <button onClick={() => toggleFavorite(starship.name)}>
              {favorites.includes(starship.name) ? (
                <span role="img" aria-label="Favorite">❤️</span>
              ) : (
                <span role="img" aria-label="Not Favorite">🤍</span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarshipList;
