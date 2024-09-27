function WelcomePage() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-6xl font-extrabold tracking-wide mb-4">Delicious Recipes</h1>
        <p className="text-2xl font-light mb-6">Discover, Create, and Enjoy</p>
        <a href="/recipes" className="px-8 py-3 bg-teal-500 text-lg font-semibold rounded-full hover:bg-teal-600 transition duration-300">
          Explore Recipes
        </a>
      </div>
    </div>
  );
}

export default WelcomePage;