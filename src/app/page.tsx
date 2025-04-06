"use client";
import { useState } from "react";
import {
  FaUser,
  FaFlask,
  FaCapsules,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form data here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="w-full py-6 bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <FaFlask className="text-blue-600 text-3xl" />
            <h1 className="text-3xl font-bold text-blue-900">Tacrometer</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-blue-700 text-white py-4 px-8">
            <h2 className="text-xl font-semibold">
              Tacrolimus Exposure Estimation Tool
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Enter patient data and measurements to calculate drug exposure
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Patient Information Section */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <FaUser className="text-blue-700 text-xl" />
                <h2 className="text-xl font-semibold text-blue-900">
                  Patient Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="sex"
                    className="block text-sm font-medium text-blue-800"
                  >
                    Sex
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-blue-800"
                  >
                    Age (years)
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="0"
                    max="120"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="hematocrit"
                    className="block text-sm font-medium text-blue-800"
                  >
                    Hematocrit (%)
                  </label>
                  <input
                    type="number"
                    id="hematocrit"
                    name="hematocrit"
                    min="0"
                    max="100"
                    step="0.1"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="height"
                    className="block text-sm font-medium text-blue-800"
                  >
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    min="0"
                    max="300"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-full">
                    <label
                      htmlFor="weight"
                      className="block text-sm font-medium text-blue-800"
                    >
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      min="0"
                      max="500"
                      step="0.1"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                      focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dose Information Section */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <FaCapsules className="text-blue-700 text-xl" />
                <h2 className="text-xl font-semibold text-blue-900">
                  Dose Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="dose"
                    className="block text-sm font-medium text-blue-800"
                  >
                    Dose (mg)
                  </label>
                  <input
                    type="number"
                    id="dose"
                    name="dose"
                    step="0.1"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                    focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800">
                    Frequency
                  </label>
                  <div className="mt-1 flex items-center space-x-6">
                    <label className="flex items-center p-3 bg-white rounded border border-gray-300 hover:bg-blue-50 cursor-pointer">
                      <input
                        type="radio"
                        name="frequency"
                        value="once"
                        className="h-4 w-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-sm text-gray-800">
                        Once daily
                      </span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded border border-gray-300 hover:bg-blue-50 cursor-pointer">
                      <input
                        type="radio"
                        name="frequency"
                        value="twice"
                        className="h-4 w-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                        onChange={handleChange}
                      />
                      <span className="ml-2 text-sm text-gray-800">
                        Twice daily
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Dose Timing and Concentration Section */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="text-blue-700 text-xl" />
                <h2 className="text-xl font-semibold text-blue-900">
                  Dose Timing and Concentration
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-600" />
                  <div className="w-full">
                    <label
                      htmlFor="last-dose-time"
                      className="block text-sm font-medium text-blue-800"
                    >
                      Last Dose Taken At
                    </label>
                    <input
                      type="time"
                      id="last-dose-time"
                      name="last-dose-time"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                      focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Measured Concentrations
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-inner">
                    <div>
                      <label
                        htmlFor="concentration-t0"
                        className="block text-sm font-medium text-blue-800"
                      >
                        C<sub>0</sub> (0 hours) (ng/mL)
                      </label>
                      <input
                        type="number"
                        id="concentration-t0"
                        name="concentration-t0"
                        min="0"
                        max="100"
                        step="0.1"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                        focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="concentration-t1"
                        className="block text-sm font-medium text-blue-800"
                      >
                        C<sub>1</sub> (1 hour) (ng/mL)
                      </label>
                      <input
                        type="number"
                        id="concentration-t1"
                        name="concentration-t1"
                        min="0"
                        max="100"
                        step="0.1"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                        focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="concentration-t3"
                        className="block text-sm font-medium text-blue-800"
                      >
                        C<sub>3</sub> (3 hours) (ng/mL)
                      </label>
                      <input
                        type="number"
                        id="concentration-t3"
                        name="concentration-t3"
                        min="0"
                        max="100"
                        step="0.1"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white text-black shadow-sm 
                        focus:border-blue-600 focus:ring-2 focus:ring-blue-500/30 px-3 py-2"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md shadow-md transition-colors duration-300 flex items-center gap-2"
              >
                <FaChartLine className="text-white" />
                Calculate Exposure
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-blue-800 text-white mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">Developed by Markus Hovd</p>
          <p className="text-sm text-blue-200 mt-2 max-w-xl mx-auto">
            Disclaimer: This application is for informational purposes only and
            should not replace professional medical advice. Always consult with
            a healthcare provider.
          </p>
        </div>
      </footer>
    </div>
  );
}
