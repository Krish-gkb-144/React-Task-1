import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import useDebounce from "../../Hooks/UseDebounce";

const Card = () => {
  const [shows, setShowsData] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 2000);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/${debouncedSearch ? `search/shows?q=${debouncedSearch}` : "shows"}`);
      const fetchedShows = debouncedSearch ? response.data.map((item) => item.show) : response.data;
      setShowsData(fetchedShows);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (debouncedSearch.trim !== "") fetchData();
  }, [debouncedSearch]);

  return (
    <>
      <form className="max-w-md mx-auto w-100">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" onChange={(e) => setSearch(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search TV Shows..." required />
        </div>
      </form>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">TV Shows</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.slice(0, 20).map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
