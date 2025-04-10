import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center px-6 py-16 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex flex-col gap-6 md:max-w-[50%]">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Your <span className="text-indigo-600">Biorhythm</span>,<br />
              Your Best Performance
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              HealthRhythm combines AI and your biometric data to predict optimal times for work, exercise, creativity, and rest.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-base py-3 px-6 transition-colors"
                href="/dashboard"
              >
                Get Started
              </a>
              <a
                className="rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 font-medium text-base py-3 px-6 transition-colors"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <Image
              src="/healthlogo.png"
              alt="HealthRhythm Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          How HealthRhythm Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connects with your wearable devices and apps to gather biometric data and performance metrics.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced ML models analyze your data to identify unique patterns in your energy levels and cognitive performance.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Forecasts</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive daily forecasts showing optimal windows for different activities based on your unique biorhythm.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/30 p-8 rounded-xl w-full">
          <blockquote className="text-center">
            <p className="text-xl italic font-medium text-gray-700 dark:text-gray-300 mb-4">
              "HealthRhythm has transformed how I schedule my day. I'm more productive during work hours and have more energy for exercise and creative pursuits."
            </p>
            <footer className="text-gray-600 dark:text-gray-400">
              — Early Beta User
            </footer>
          </blockquote>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to optimize your daily rhythm?
            </h2>
            <p className="text-indigo-100">
              Join HealthRhythm today and discover your most productive hours.
            </p>
          </div>
          <a
            className="rounded-full bg-white hover:bg-indigo-50 text-indigo-600 font-medium text-base py-3 px-8 transition-colors"
            href="/signup"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  );
}