const movie = {
    title: "Inception",
    director: {
      name: "Christopher Nolan",
      country: "USA"
    },
    cast: [
      { name: "Leonardo DiCaprio", role: "Dom Cobb" },
      { name: "Joseph Gordon-Levitt", role: "Arthur" }
    ]
  };
  
  // Convert the movie object to a JSON string
  const jsonMovie = JSON.stringify(movie);
  console.log("Movie JSON:", jsonMovie);
  
  // Parse the JSON string back to a JavaScript object
  const parsedMovie = JSON.parse(jsonMovie);
  
  // Access properties of the parsed JSON object
  console.log("Movie Title:", parsedMovie.title);  // Outputs: Inception
  console.log("Director Name:", parsedMovie.director.name);  // Outputs: Christopher Nolan
  console.log("First cast member name:", parsedMovie.cast[0].name);  // Outputs: Leonardo DiCaprio
  console.log("Second cast member role:", parsedMovie.cast[1].role);  // Outputs: Arthur
  