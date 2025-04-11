export default function About() {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            About This Website
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            This website uses the{" "}
            <span className="font-semibold text-indigo-600">
              REST Countries API
            </span>{" "}
            to show information of countries.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Explore to learn about countries names, capitals, regions, areas,
            currencies, populations, languages, flags, and much more. 
            Whether you’re curious for particular country or looking for
            insights about global regions, the app makes it easy for 
            exploring countries.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our goal is to build a fully responsive and modern web application
            using the latest technologies, including React Router v7.5 for and 
            Tailwind CSS for a responsive user interface.
          </p>
        </div>
      </div>
    );
  }
  