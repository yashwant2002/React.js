import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Moviedetail = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams()
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=766c96f18bcd82c38c7f611bbaaba77b`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
        console.log(data?.title);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  const truncateString = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  };

  if (loading) {
    return <p className="text-white text-center text-2xl">Loading...</p>;
  }

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px] text-white relative">
      {/* Background Image */}
      <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
        {backdrop_path && (
          <img
            className="w-full h-full object-cover object-top"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
          />
        )}
      </div>

      {/* Movie Details */}
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <div className="my-4">
          <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
            Play
          </button>
          <button className="border text-white border-gray-300 py-2 px-5 ml-4">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm">Released: {release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {truncateString(overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Moviedetail;
