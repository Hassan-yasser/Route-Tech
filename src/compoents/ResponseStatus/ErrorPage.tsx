const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-500 mb-6">
          We couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
