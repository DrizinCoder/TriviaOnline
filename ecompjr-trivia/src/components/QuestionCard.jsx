export default function QuestionCard({ question, options, selectedAnswer, setSelectedAnswer }) {
  return (
    <div className="w-full bg-slate-800 rounded-3xl p-6 space-y-4 border border-slate-700 shadow-lg">
      <h2 className="text-xl font-semibold text-slate-100">{question}</h2>
      <div className="space-y-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedAnswer(opt)}
            className={`w-full text-left p-3 rounded-xl border border-slate-600 
                        ${selectedAnswer === opt ? 'bg-pink-500 text-white' : 'bg-slate-900 text-slate-100'}
                        hover:bg-pink-500 hover:text-white transition-colors`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
