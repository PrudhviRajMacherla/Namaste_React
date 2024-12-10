const Shimmer = () => {
    return (
        <div className="shimmer-container flex flex-wrap justify-center">
            {Array(12).fill("").map((_, index) => (
                <div
                    key={index}
                    className="shimmer-card m-4 p-4 w-[220px] h-[340px] bg-gray-200 rounded-lg flex flex-col animate-pulse"
                >
                    <div className="shimmer-image bg-gray-300 w-full h-[150px] rounded-lg"></div>
                    <div className="shimmer-text bg-gray-300 mt-4 w-3/4 h-4 rounded"></div>
                    <div className="shimmer-text bg-gray-300 mt-2 w-1/2 h-4 rounded"></div>
                    <div className="shimmer-text bg-gray-300 mt-2 w-full h-4 rounded"></div>
                    <div className="shimmer-text bg-gray-300 mt-2 w-1/3 h-4 rounded"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
