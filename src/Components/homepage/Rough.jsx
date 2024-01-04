import React from "react";

const Example = () => {
  const features = [
    { name: 'Adding notes', description: 'Easily add new notes to stay organized' },
    { name: 'Editing notes', description: 'Edit saved notes for better management' },
    { name: 'Storing notes', description: 'Securely store your notes for quick access' },
    { name: 'Mobile Responsive', description: 'Access your notes seamlessly on any device' },
    { name: 'Delete all feature', description: 'Clear all notes with a single click for a fresh start' },
  ];

  const featuresw = [
    { name: 'Search Bar', description: 'Effortlessly find notes with a convenient search bar' },
    { name: 'Categorization', description: 'Organize notes by category for efficient navigation' },
    { name: 'Date and Time', description: 'Add timestamps to notes for better reference' },
  ];

  return (
    <div className="mx-auto max-w-2xl py-16">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
        <p className="text-gray-600">
          Explore the key features implemented in this assignment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div key={feature.name} className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Features</h2>
        <p className="text-gray-600">
          Discover some additional features that could enhance the user experience.
        </p>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {featuresw.map((feature) => (
          <div key={feature.name} className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-35s sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>

  );
};

export default Example;
