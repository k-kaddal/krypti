import { useEffect, useState } from "react";

const GifAPI = "QzUP8NhQpBBXYTFQLI4gnoHNJCADmzJK";

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  console.log(GifAPI);

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${GifAPI}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await response.json();

      console.log(data);

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchGifs();
    }
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
// api.giphy.com/v1/gifs/search?api_key=QzUP8NhQpBBXYTFQLI4gnoHNJCADmzJK&q=happybirthday&limit=1