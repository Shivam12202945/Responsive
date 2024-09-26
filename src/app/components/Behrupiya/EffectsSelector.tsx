"use client";

export default function EffectsSelector({
  selectedEffect,
  onEffectChange,
}: {
  selectedEffect: string;
  onEffectChange: (effect: string) => void;
}) {
  const effects = ["Cinematic", "Digital Art", "Fantasy Art", "Neonpunk"];

  return (
    <div className="my-4">
      <label className="block text-gray-700 font-medium mb-2">Select Effect:</label>
      <select
        value={selectedEffect}
        onChange={(e) => onEffectChange(e.target.value)}
        className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 transition"
      >
        {effects.map((effect) => (
          <option key={effect} value={effect}>
            {effect}
          </option>
        ))}
      </select>
    </div>
  );
}
