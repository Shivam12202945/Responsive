"use client";

import axios from "axios";
import { useState } from "react";

export default function GenerateButton({
  selectedEffect,
  selectedImage,
  selectedLayout,
  uploadedFile,
  onImageGenerated,
}: {
  selectedEffect: string;
  selectedImage: string | null;
  selectedLayout: string;
  uploadedFile: File | null;
  onImageGenerated: (imageUrl: string) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!uploadedFile || !selectedImage) return;

    setLoading(true);
    try {
      // Simulate API request (Replace with your actual API call)
      const formData = new FormData();
      formData.append("effect", selectedEffect);
      formData.append("layout", selectedLayout);
      formData.append("file", uploadedFile);

      // Replace with your actual API endpoint
      const response = await axios.post("/api/generate-image", formData);
      onImageGenerated(response.data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4 text-center">
      <button
        onClick={handleGenerate}
        className={`w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>
    </div>
  );
}
