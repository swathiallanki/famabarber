import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-bold">Fama Barber Shop and Beauty Salon</h1>
        <p className="text-gray-400">Barber shop in Denton, TX</p>
      </header>

      <section className="p-6 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <p className="text-2xl font-semibold mb-4">
            ⭐ 4.6 <span className="text-gray-400">(116+ reviews)</span>
          </p>
          <p className="mb-2 text-green-400">Open ⋅ Closes 7 pm</p>
          <p className="mb-4 text-gray-300">
            500 N Bell Ave #109, Denton, TX 76209, United States
          </p>
          <a
            href="tel:+19406129127"
            className="block text-lg text-blue-400 hover:underline mb-4"
          >
            +1 940-612-9127
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=500+N+Bell+Ave+%23109,+Denton,+TX+76209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            📍 Get Directions on Google Maps
          </a>
        </div>
      </section>

      <section className="p-6 text-center bg-gray-900 text-red-400">
        <blockquote className="italic">
          “Costly compared to other barbershops with better haircuts.”
        </blockquote>
      </section>

      <footer className="text-center p-4 text-gray-500 text-sm border-t border-gray-800">
        &copy; {new Date().getFullYear()} Fama Barber Shop and Beauty Salon
      </footer>
    </main>
  );
}