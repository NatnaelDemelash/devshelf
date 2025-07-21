import React from 'react';
import BookmarkForm from './features/bookmarks/BookmarkForm';
import { bookmarkMockData } from './features/bookmarks/bookmarkMockData';

function App() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Main Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        🔗 Bookmark Manager
      </h1>

      {/* Bookmark Form Section */}
      <div className="mb-12">
        {' '}
        {/* Added margin-bottom for spacing */}
        <BookmarkForm />
      </div>

      {/* Separator (optional, but good for visual breaks) */}
      <hr className="border-t-2 border-gray-200 mb-12" />

      {/* All Bookmarks Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          📖 Your Bookmarks
        </h2>
        <div className="">
          {' '}
          {/* This div is now just a container for the grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkMockData.map((bookmark) => (
              <li key={bookmark.id}>
                {' '}
                {/* Removed flex-col and gap from li */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
                  {' '}
                  {/* Applied card style */}
                  {/* Bookmark Header: Title and Category */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight pr-4">
                      {bookmark.title}
                    </h3>
                    <span className="text-xs font-semibold text-gray-800 bg-amber-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {bookmark.category}
                    </span>
                  </div>
                  {/* Bookmark Details: URL and Note */}
                  <div className="flex flex-col gap-2 text-gray-700 flex-grow">
                    {' '}
                    {/* flex-grow to push footer down */}
                    <a
                      href={bookmark.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline truncate" // Added truncate for long URLs
                      title={bookmark.url} // Title attribute for full URL on hover
                    >
                      {bookmark.url}
                    </a>
                    {bookmark.note && ( // Conditionally render note if it exists
                      <p className="text-sm text-gray-600 italic">
                        "{bookmark.note}"
                      </p>
                    )}
                  </div>
                  {/* Actions (optional: add buttons here later) */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end gap-2">
                    {/* Placeholder for edit/delete buttons */}
                    {/* <button className="text-sm text-gray-600 hover:text-gray-900">Edit</button>
                    <button className="text-sm text-red-600 hover:text-red-800">Delete</button> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
