import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import Button from "./Button";

export default function QuizScreen({ questions, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const currentQuestion = questions[current];
  if (!currentQuestion) {
    return <p>Carregando perguntas...</p>;
  }

  useEffect(() => {
    const options = [
        ...currentQuestion.incorrect_answers, 
        currentQuestion.correct_answer
    ].sort(() => Math.random() - 0.5);
    
    setShuffledOptions(options);

  }, [current, currentQuestion]); 
  
  const handleAnswerSelect = (answer) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true); 

    if (answer === currentQuestion.correct_answer) {
      setScore(s => s + 1); 
    }
  };

  const handleNext = () => {
    if (!isAnswered) return; 

    setSelectedAnswer(null);
    setIsAnswered(false);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      onFinish(score); 
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6  text-slate-100 space-y-6">
      
      <div className="text-center text-lg mb-4">
        Questão {current + 1} de {questions.length}
      </div>
      
      <QuestionCard
        question={currentQuestion.question}
        options={shuffledOptions} 
        selectedAnswer={selectedAnswer}
        handleAnswerSelect={handleAnswerSelect}
        isAnswered={isAnswered}
        correctAnswer={currentQuestion.correct_answer}
      />
      
      <Button onClick={handleNext} disabled={!isAnswered}>
        {current + 1 === questions.length ? "Finalizar Quiz" : "Próxima Pergunta"}
      </Button>
    </div>
  );
}