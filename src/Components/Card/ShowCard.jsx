import React from "react";

const ShowCard = ({ show }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Show Image */}
      <img src={show.image?.medium} alt={show.name} className="w-full h-64 object-cover" />

      {/* Content Section */}
      <div className="p-5">
        {/* Show Title */}
        <h2 className="text-xl font-bold text-gray-900">{show.name}</h2>

        {/* Genres */}
        <p className="text-sm text-gray-600">{show.genres.join(", ")}</p>

        {/* Rating & Status */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-700 text-sm">⭐ {show.rating?.average || "N/A"}</span>
          <span className={`px-2 py-1 text-xs font-semibold rounded-lg ${show.status === "Ended" ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}>{show.status}</span>
        </div>

        {/* Premiere & End Date */}
        <p className="text-xs text-gray-500 mt-2">
          {show.premiered} - {show.ended || "Ongoing"}
        </p>

        {/* Summary (Truncated) */}
        <p className="text-sm text-gray-700 mt-2 line-clamp-3" dangerouslySetInnerHTML={{ __html: show.summary }}></p>

        {/* Network */}
        <p className="text-xs text-gray-500 mt-2">
          📡 {show.network?.name} ({show.network?.country?.name})
        </p>

        {/* View More Button */}
        <a href={show.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          View Show
        </a>
      </div>
    </div>
  );
};

export default ShowCard;
