"use client";

import { useState } from "react";
import Header from "../Behrupiya/Header";
import Footer from "../Behrupiya/Footer";

export default function HomePage() {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const [negativePrompt, setNegativePrompt] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!userPrompt) {
      alert("Please enter a positive prompt.");
      return;
    }

    // Clear the previously generated image
    setGeneratedImage(null);
    setIsGenerating(true);

    try {
      const response = await fetch("/api/create-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          positive_prompt: userPrompt,
          negative_prompt: negativePrompt,
          seed: 18446744073709552000,
          steps: 10,
          width: 256,
          height: 256,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const result = await response.json();
      setGeneratedImage(result.image_url);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Generate an Image from a Prompt
        </h1>
        <div className="w-full max-w-lg">
          <div className="mb-4">
            <label
              htmlFor="positivePrompt"
              className="block text-gray-700 font-medium mb-2"
            >
              Describe your image
            </label>
            <input
              type="text"
              id="positivePrompt"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="Describe your image..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="negativePrompt"
              className="block text-gray-700 font-medium mb-2"
            >
              Anything you don't want
            </label>
            <input
              type="text"
              id="negativePrompt"
              value={negativePrompt}
              onChange={(e) => setNegativePrompt(e.target.value)}
              placeholder="What to avoid..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          <button
            onClick={handleGenerate}
            disabled={!userPrompt || isGenerating}
            className={`w-full px-6 py-3 rounded-lg transition-colors ${
              !userPrompt || isGenerating
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isGenerating ? "Generating..." : "Generate Image"}
          </button>
        </div>

        {isGenerating && (
          <div className="flex flex-col items-center justify-center mt-8 text-center">
            <div className="loader mb-4"></div>
            <p className="text-lg md:text-xl font-semibold text-gray-800">
              Your image is generating...
            </p>
          </div>
        )}

        {generatedImage && (
          <div className="mt-8 flex items-center justify-center w-full">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={generatedImage}
                alt="Generated"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />

      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3; /* Light gray */
          border-top: 4px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
