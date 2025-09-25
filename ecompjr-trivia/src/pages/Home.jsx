import QuizSetup from "../components/QuizSetup";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6 text-slate-100">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-10 drop-shadow-lg tracking-wide">
        Trivia Online
      </h1>
      <QuizSetup />
    </div>
  );
}
