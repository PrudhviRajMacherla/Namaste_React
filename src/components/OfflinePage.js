import { FaWifi } from "react-icons/fa";

const OfflinePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <FaWifi className="text-gray-400 text-6xl mb-4" />
            <h1 className="text-2xl font-bold text-gray-700 mb-2">You're Offline</h1>
            <p className="text-gray-600">Please check your internet connection and try again.</p>
            <button
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => window.location.reload()}
            >
                Retry
            </button>
        </div>
    );
};

export default OfflinePage;
