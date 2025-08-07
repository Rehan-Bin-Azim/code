import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import heroBg from "../assets/hero-bg.jpg";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="text-gray-800 dark:text-white">
     {/* Hero Section */}
<section className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
      <Typewriter
        words={['Sharpen Your Code. Shape Your Future.']}
        loop={0} // 0 means infinite loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
      Learn to code with interactive tutorials, fun challenges, and track your progress – all in one place.
    </p>
    <a
      href="/signup"
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
    >
      Get Started for Free
    </a>
  </div>
</section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Tutorials",
                desc: "Learn HTML, CSS, JavaScript, and Python through step-by-step tutorials.",
              },
              {
                title: "Code Challenges",
                desc: "Practice problems by difficulty level to master problem-solving skills.",
              },
              {
                title: "Progress Tracking",
                desc: "Save your learning progress and earn achievement badges.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-blue-50 dark:bg-neutral-800 rounded shadow"
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Coding */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Learn Coding?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">🚀 Career Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Coding skills are in demand in nearly every industry.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">💡 Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improve logical thinking and analytical skills.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                🌍 Global Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Work remotely, freelance, or join top tech companies worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">💰 Better Pay</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tech roles often offer higher than average salaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">Choose Your Plan</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="border rounded-lg p-8 bg-blue-50 dark:bg-neutral-800 shadow">
              <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For beginners and casual learners
              </p>
              <ul className="text-sm text-left mb-6 space-y-2">
                <li>✔️ Access to tutorials</li>
                <li>✔️ Weekly challenges</li>
                <li>❌ No progress tracking</li>
                <li>❌ No certificate</li>
              </ul>
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                Start Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-blue-600 rounded-lg p-8 bg-white dark:bg-neutral-700 shadow">
              <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For serious coders & career seekers
              </p>
              <ul className="text-sm text-left mb-6 space-y-2">
                <li>✔️ All free features</li>
                <li>✔️ Progress tracking</li>
                <li>✔️ Certificates of completion</li>
                <li>✔️ Exclusive pro-only challenges</li>
              </ul>
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 dark:bg-[#1C110A] text-center">
        <h2 className="text-3xl font-semibold mb-12">What Learners Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              name: "Mahmud Hasan",
              quote: "CodeCraft helped me finally understand JavaScript!",
              image: "https://i.pravatar.cc/150?img=3",
            },
            {
              name: "Nadia Rahman",
              quote: "The challenges are addictive and fun. I improved fast.",
              image: "https://i.pravatar.cc/150?img=6",
            },
            {
              name: "Tariq Bin Khalid",
              quote: "Highly recommend for beginners and pros alike.",
              image: "https://i.pravatar.cc/150?img=8",
            },
          ].map((t, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#E4D6A7] text-[#1C110A] rounded-lg p-6 shadow-lg flex flex-col items-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="italic text-sm mb-3">"{t.quote}"</p>
              <h3 className="font-bold">{t.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-10 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-neutral-900 dark:to-black text-gray-900 dark:text-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start your coding journey?
        </h2>
        <p className="mb-6">
          Join CodeCraft today and start learning for free.
        </p>
        <a
          href="/signup"
          className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100"
        >
          Sign Up Now
        </a>
      </section>

       <Footer />
        
    </div>
  );
};

export default Home;
