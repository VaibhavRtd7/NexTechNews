import React from 'react';

const Search = ({ onSearch }) => {

  return (
    <form  className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded-l focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default Search;