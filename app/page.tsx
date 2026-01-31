export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Sailor Success GPT</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Your 24/7 AI mentor for Indian Merchant Navy - DGS notices, IMU updates, STCW and COLREG exam prep
      </p>
      <div className="text-center">
        <p className="text-lg">Try 4 questions FREE. No card required.</p>
        <a
          href="https://graphy.example.com/sailorgpt"
          className="mt-4 inline-block bg-yellow-500 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          OPEN SAILOR GPT NOW
        </a>
      </div>
    </main>
  );
}
