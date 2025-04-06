export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-50">
      {/* Header */}
      <header className="row-start-1 w-full text-center py-4 bg-blue-100 shadow-md">
        <h1 className="text-2xl font-bold text-blue-900">Tacrometer</h1>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center w-full">
        <form className="w-full max-w-4xl space-y-8 bg-white p-8 rounded-lg shadow-lg border border-blue-200">
          {/* Patient Information Section */}
          <div className="p-6 border border-blue-100 rounded-lg shadow-sm bg-blue-50">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Patient Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-blue-800"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
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
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
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
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Dose Information Section */}
          <div className="p-6 border border-blue-100 rounded-lg shadow-sm bg-blue-50">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Dose Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
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
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-blue-800">
                  Frequency
                </label>
                <div className="mt-1 flex items-center space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="frequency"
                      value="once"
                      className="h-4 w-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-blue-800">
                      Once daily
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="frequency"
                      value="twice"
                      className="h-4 w-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-blue-800">
                      Twice daily
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Dose Timing and Concentration Section */}
          <div className="p-6 border border-blue-100 rounded-lg shadow-sm bg-blue-50">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Dose Timing and Concentration
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
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
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="concentration-t0"
                  className="block text-sm font-medium text-blue-800"
                >
                  Concentration at 0 Hours (ng/mL)
                </label>
                <input
                  type="number"
                  id="concentration-t0"
                  name="concentration-t0"
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="concentration-t1"
                  className="block text-sm font-medium text-blue-800"
                >
                  Concentration at 1 Hour (ng/mL)
                </label>
                <input
                  type="number"
                  id="concentration-t1"
                  name="concentration-t1"
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="concentration-t3"
                  className="block text-sm font-medium text-blue-800"
                >
                  Concentration at 3 Hours (ng/mL)
                </label>
                <input
                  type="number"
                  id="concentration-t3"
                  name="concentration-t3"
                  className="mt-1 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex flex-col gap-[8px] items-center justify-center text-blue-800 text-sm">
        <p>Developed by Markus Hovd</p>
        <p className="text-xs text-blue-600">
          Disclaimer: This application is for informational purposes only and
          should not replace professional medical advice.
        </p>
      </footer>
    </div>
  );
}
