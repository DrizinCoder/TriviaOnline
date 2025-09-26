import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Button from "./Button";

export default function QuizScreen({ questions, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selectedAnswer === questions[current].correct_answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      onFinish(score + (selectedAnswer === questions[current].correct_answer ? 1 : 0));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 space-y-6">
      <div className="text-center text-lg mb-4">
        Questão {current + 1} de {questions.length}
      </div>
      <QuestionCard
        question={questions[current].question}
        options={questions[current].options}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
      <Button onClick={handleNext} disabled={!selectedAnswer}>
        {current + 1 === questions.length ? "Finalizar Quiz" : "Próxima Pergunta"}
      </Button>
    </div>
  );
}
