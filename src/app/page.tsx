// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome",
  description: "A simple modern landing page built with Next.js and TypeScript.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 leading-tight">
          Build Faster. Launch Smarter.
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          A clean and modern starter landing page built with Next.js App Router
          and TypeScript. Fully SEO-optimized and ready for production.
        </p>

        <Link
          href="get-started"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">⚡ Blazing Fast</h3>
            <p className="text-gray-600">
              Optimized by Next.js for speed, accessibility, and great UX.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🎨 Beautiful UI</h3>
            <p className="text-gray-600">
              Clean, minimal, and easy to customize for your idea or product.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔒 SEO Ready</h3>
            <p className="text-gray-600">
              Metadata, social previews, and semantic structure included.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
        <p className="text-gray-600 mb-8">
          Kickstart your next project with a clean and scalable foundation.
        </p>

        <Link
          href="#"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          Start Building
        </Link>
      </section>
    </main>
  );
}
