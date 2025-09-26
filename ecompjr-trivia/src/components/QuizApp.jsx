import { useState } from "react";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";
import QuizSetup from "./QuizSetup";

// Exemplo de perguntas fake
const sampleQuestions = [
  {
    question: "Qual é a capital da França?",
    options: ["Paris", "Londres", "Berlim", "Roma"],
    correct_answer: "Paris"
  },
  {
    question: "Qual linguagem é usada para desenvolvimento web?",
    options: ["Python", "JavaScript", "C++", "Fortran"],
    correct_answer: "JavaScript"
  }
];

export default function QuizApp() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => setQuizStarted(true);

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizFinished(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(false);
  };

  if (!quizStarted) return <QuizSetup onStart={startQuiz} />;
  if (quizFinished) return <ResultScreen score={score} total={sampleQuestions.length} onRestart={restartQuiz} />;
  return <QuizScreen questions={sampleQuestions} onFinish={finishQuiz} />;
}
