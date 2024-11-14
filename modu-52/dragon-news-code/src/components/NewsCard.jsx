import React from 'react';
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from 'react-icons/fa';

const NewsCard = (props = {}) => {
    const {news} = props || {}
  return (
    <div className="card bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4">
        {/* Header with Author Info and Icons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={news.author.img}
              alt="Author"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-semibold">{news.author.name || 'Unknown Author'}</p>
              <p className="text-xs text-gray-500">
                {news.author.published_date
                  ? new Date(news.author.published_date).toLocaleDateString()
                  : 'Date not available'}
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-gray-700" />
            <FaShareAlt className="text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mb-3">{news.title}</h2>

        {/* Image */}
        <figure className="mb-3">
          <img
            src={news.image_url}
            alt="News"
            className="w-full h-48 object-cover rounded-md"
          />
        </figure>

        {/* Details */}
        <p className="text-sm text-gray-600 mb-4">
          {news.details.length > 150 ? (
            <>
              {news.details.substring(0, 150)}...
              <span className="text-red-500 cursor-pointer"> Read More</span>
            </>
          ) : (
            news.details
          )}
        </p>

        {/* Footer with Rating and Views */}
        <div className="flex items-center justify-between border-t pt-2">
          <div className="flex items-center text-yellow-500">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.floor(news.rating.number) ? 'fill-current' : 'text-gray-300'}
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-gray-700">
              {news.rating.number}
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span className="text-sm">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard
