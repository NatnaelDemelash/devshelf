import BookmarkForm from './features/bookmarks/BookmarkForm';
import { bookmarkMockData } from './features/bookmarks/bookmarkMockData';

function App() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold">Bookmark Manager</h1>
      <div className="mt-4">
        <BookmarkForm />
        <h2 className="text-lg px-1 mb-4">All Bookmarks</h2>
        <div className="">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkMockData.map((bookmark) => (
              <li key={bookmark.id} className="relative flex flex-col gap-2">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold">{bookmark.title}</h3>
                  <p className="text-gray-800 absolute top-2 text-xs right-2 bg-amber-200 px-2 py-1 rounded-full">
                    {bookmark.category}
                  </p>
                  <div className="flex flex-col gap-2 ">
                    <p className="text-sm text-gray-500 mb-2">{bookmark.url}</p>
                    <p className="text-sm text-gray-500">{bookmark.note}</p>
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
