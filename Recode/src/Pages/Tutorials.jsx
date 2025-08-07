import React from "react";

const tutorialData = [
  {
    id: 1,
    title: "JavaScript Basics",
    description:
      "Learn the fundamentals of JavaScript including variables, functions, and loops.",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
  },
  {
    id: 2,
    title: "React for Beginners",
    description: "An introduction to React components, props, and state.",
    videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
  },
  {
    id: 3,
    title: "Tailwind CSS Crash Course",
    description:
      "Style your websites quickly and efficiently with Tailwind CSS.",
    videoUrl: "https://www.youtube.com/embed/lCxcTsOHrjo",
  },
  {
    id: 4,
    title: "Node.js & Express Fundamentals",
    description: "Build backend services using Node.js and Express framework.",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
  },
  {
    id: 5,
    title: "JavaScript Basics",
    description:
      "Learn the fundamentals of JavaScript including variables, functions, and loops.",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
  },
  {
    id: 6,
    title: "React for Beginners",
    description: "An introduction to React components, props, and state.",
    videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
  },
  {
    id: 7,
    title: "Tailwind CSS Crash Course",
    description:
      "Style your websites quickly and efficiently with Tailwind CSS.",
    videoUrl: "https://www.youtube.com/embed/lCxcTsOHrjo",
  },
  {
    id: 8,
    title: "Node.js & Express Fundamentals",
    description: "Build backend services using Node.js and Express framework.",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
  },
];

const Tutorials = () => {
  return (
    <>
      <section className="min-h-screen py-20 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorialData.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={tutorial.videoUrl}
                    title={tutorial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {tutorial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg">Want more tutorials?</p>
            <a
              href="/signup"
              className="mt-2 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Sign Up to Access Full Library
            </a>
          </div>
          <footer className="mt-20 py-6 bg-gray-200 dark:bg-neutral-800 text-center text-gray-700 dark:text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} CodeCraft. All rights reserved.
            </p>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Tutorials;
