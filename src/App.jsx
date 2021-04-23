import React from "react";
import DestinationCard from "../../tailwindcss-from-zero-to-production/08-optimizing-for-production/src/components/DestinationCard";
import popularDestinations from "../../tailwindcss-from-zero-to-production/08-optimizing-for-production/src/data/popularDestinations";

function App() {
  return (
    <>
      <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img className="h-10" src="/img/logo-brand.svg" alt="workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="/img/beach-work.jpg"
              alt="woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-headline font-bold text-gray-900 tracking-tight leading-tight sm:mt-8 sm:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br />
              <span className="text-brand"> Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="btn btn-primary transform transition-transform hover:-translate-y-0.5"
              >
                Book your escape
              </a>
              <a href="#" className="btn btn-secondary ml-8">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/img/beach-work.jpg"
            alt="woman workcationing on the beach"
          />
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
