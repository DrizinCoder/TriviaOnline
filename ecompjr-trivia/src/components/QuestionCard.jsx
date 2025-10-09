export default function QuestionCard({ 
  question, 
  options, 
  selectedAnswer, 
  handleAnswerSelect, 
  isAnswered,     
  correctAnswer       
}) {
  const getButtonClasses = (opt) => {
    let classes = 'bg-slate-900 text-slate-100 hover:bg-slate-700 transition-all';
    
    if (isAnswered) {
        if (opt === correctAnswer) {
            classes = 'bg-green-600 text-white shadow-md font-bold';
        } else if (opt === selectedAnswer) {
            classes = 'bg-red-600 text-white shadow-md font-bold';
        } else {
            classes = 'bg-slate-700 text-slate-400 opacity-50 cursor-default'; 
        }
    } 
    else if (selectedAnswer === opt) {
        classes = 'bg-pink-500 text-white shadow-lg ring-2 ring-pink-500';
    }

    return classes;
  };

  return (
    <div className="w-full space-y-4"> 
      <h2 
        className="text-xl font-semibold text-slate-100"
        dangerouslySetInnerHTML={{ __html: question }} 
      />
      
      <div className="space-y-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswerSelect(opt)} 
            disabled={isAnswered} 
            className={`w-full text-left p-3 rounded-xl
                        ${getButtonClasses(opt)}`}
          >
            <span dangerouslySetInnerHTML={{ __html: opt }} /> 
          </button>
        ))}
      </div>
    </div>
  );
}