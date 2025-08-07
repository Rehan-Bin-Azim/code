import React, { useState } from "react";
import Footer from '../Components/Footer.jsx';

const challengesData = [
  {
    id: 1,
    title: "FizzBuzz Challenge",
    description:
      'Write a function that prints the numbers from 1 to 100. But for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".',
    difficulty: "Easy",
    topic: "Loops",
  },
  {
    id: 2,
    title: "Palindrome Checker",
    description:
      "Check if a given string is a palindrome (reads the same forward and backward).",
    difficulty: "Easy",
    topic: "Strings",
  },
  {
    id: 3,
    title: "Two Sum Problem",
    description:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "Medium",
    topic: "Arrays",
  },
  {
    id: 4,
    title: "Anagram Detector",
    description: "Check if two strings are anagrams of each other.",
    difficulty: "Medium",
    topic: "Strings",
  },
  {
    id: 5,
    title: "Binary Search",
    description: "Implement binary search on a sorted array.",
    difficulty: "Medium",
    topic: "Search",
  },
  {
    id: 6,
    title: "Merge Sort",
    description: "Implement the merge sort algorithm.",
    difficulty: "Hard",
    topic: "Sorting",
  },
  {
    id: 7,
    title: "Find Missing Number",
    description:
      "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.",
    difficulty: "Easy",
    topic: "Math",
  },
  {
    id: 8,
    title: "Reverse a Linked List",
    description: "Reverse a singly linked list.",
    difficulty: "Medium",
    topic: "Linked List",
  },
  {
    id: 9,
    title: "Valid Parentheses",
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    difficulty: "Easy",
    topic: "Stacks",
  },
  {
    id: 10,
    title: "Maximum Subarray",
    description:
      "Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    difficulty: "Medium",
    topic: "Dynamic Programming",
  },
  {
    id: 11,
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. How many distinct ways can you climb to the top?",
    difficulty: "Easy",
    topic: "Dynamic Programming",
  },
  {
    id: 12,
    title: "Rotate Array",
    description:
      "Rotate an array to the right by k steps, where k is non-negative.",
    difficulty: "Medium",
    topic: "Arrays",
  },
];

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [comment, setComment] = useState("");

  const handleOpenModal = (challenge) => {
    setSelectedChallenge(challenge);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
    setComment("");
    setSelectedChallenge(null);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select a file.");

    console.log("Challenge:", selectedChallenge.title);
    console.log("File:", selectedFile.name);
    console.log("Comment:", comment);

    alert(`Submitted "${selectedFile.name}" for "${selectedChallenge.title}"`);
    handleCloseModal();
  };

  const filteredChallenges = challengesData.filter((challenge) => {
    return (
      challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (difficultyFilter ? challenge.difficulty === difficultyFilter : true) &&
      (topicFilter ? challenge.topic === topicFilter : true)
    );
  });

  return (
    <>
      <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-neutral-900 dark:to-black text-gray-900 dark:text-gray-200">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">
            Coding Challenges
          </h1>

          <div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
            <input
              type="text"
              placeholder="Search challenges..."
              className="px-4 py-2 rounded border light:bg-white dark:bg-neutral-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="px-4 py-2 rounded border dark:bg-neutral-800"
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <option value="">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <select
              className="px-4 py-2 rounded border dark:bg-neutral-800"
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value)}
            >
              <option value="">All Topics</option>
              <option value="Strings">Strings</option>
              <option value="Arrays">Arrays</option>
              <option value="Search">Search</option>
              <option value="Sorting">Sorting</option>
              <option value="Math">Math</option>
              <option value="Linked List">Linked List</option>
              <option value="Stacks">Stacks</option>
              <option value="Dynamic Programming">Dynamic Programming</option>
              <option value="Loops">Loops</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {challenge.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {challenge.description}
                </p>
                <p className="text-sm mb-1">
                  <strong>Difficulty:</strong> {challenge.difficulty}
                </p>
                <p className="text-sm mb-4">
                  <strong>Topic:</strong> {challenge.topic}
                </p>
                <button
                  className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition"
                  onClick={() => handleOpenModal(challenge)}
                >
                  Submit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md w-[90%] max-w-md relative">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white">
              Submit Challenge: {selectedChallenge?.title}
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Choose File
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border w-full px-3 py-2 rounded dark:bg-neutral-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Comment (Optional)
                </label>
                <textarea
                  className="border w-full px-3 py-2 rounded dark:bg-neutral-800 dark:text-white"
                  rows="3"
                  placeholder="Describe your approach..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        )}
        <Footer />
    </>
  );
};

export default Challenges;
