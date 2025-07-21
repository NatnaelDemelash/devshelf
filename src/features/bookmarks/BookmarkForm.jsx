import React from 'react';

export default function BookmarkForm() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-lg mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        🚀 Add New Bookmark
      </h2>
      <form className="flex flex-col gap-5">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="title"
            className="block py-2.5 px-0 w-full max-w-md text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Bookmark Title
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="url"
            id="url"
            className="block py-2.5 px-0 w-full max-w-md text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="url"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            URL (e.g., https://example.com)
          </label>
        </div>

        <div className="mb-5">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Choose Category
          </label>
          <select
            id="category"
            className="block w-full max-w-xs py-2.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition duration-150 ease-in-out"
          >
            <option value="Frontend">💻 Frontend Development</option>
            <option value="Backend">⚙️ Backend Development</option>
            <option value="Design">🎨 UI/UX Design</option>
            <option value="DevOps">☁️ DevOps & Cloud</option>
            <option value="Other">📚 Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Quick Note (optional)
          </label>
          <textarea
            id="note"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-900 focus:border-gray-900 transition duration-150 ease-in-out"
            placeholder="Add a brief description or reminder..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg text-white font-semibold bg-[#222] hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300 ease-in-out cursor-pointer"
        >
          Add Bookmark
        </button>
      </form>
    </div>
  );
}
