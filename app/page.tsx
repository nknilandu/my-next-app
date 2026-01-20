import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-32 bg-white dark:bg-gray-900 text-center">
        <h1 className="text-5xl font-bold mb-4 text-black dark:text-white">
          Welcome to My Next.js App
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
          A sample project with landing page, items list, and authentication.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-white">
          Features
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Feature 1</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Feature 2</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Feature 3</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
          How It Works
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          This section explains how your application works in a few simple steps.
        </p>
      </section>

      {/* Popular Items Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-white">
          Popular Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Item 1</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Item 2</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Item 3</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-white">
          Testimonials
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          "This app is amazing!" – Happy User
        </p>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-white">
          Pricing
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Basic Plan</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Pro Plan</div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Enterprise</div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-32 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
          Get Started Today
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Sign up and start using our awesome app.
        </p>
        <a
          href="/login"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login / Sign Up
        </a>
      </section>
    </div>
  );
}
