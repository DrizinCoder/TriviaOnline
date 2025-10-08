import QuizSetup from "../components/QuizSetup";
import QuizScreen from "../components/QuizScreen";
import ResultScreen from "../components/ResultScreen";
import {useState} from "react";

export default function Home() {
  const [screen, setScreen] = useState('setup');
  const [quizData, setQuizData] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleQuizStart = (questions) => {
    if(questions.length > 0){
      setQuizData(questions);
      setTotalQuestions(questions.length);
      setScreen('quiz');
    }
  }

  const handleQuizFinish = (score) => {
    setFinalScore(score);
    setScreen('results');
  };

  const handleRestart = () => {
    setFinalScore(0);
    setQuizData([]);
    setScreen('setup');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-6 text-slate-100">
      Trivia Online

      {screen === 'setup' && (
        <QuizSetup onQuizStart={handleQuizStart} /> 
      )}

      {screen === 'quiz' && (
        <QuizScreen 
          questions={quizData} 
          onFinish={handleQuizFinish} 
        />
      )}

      {screen === 'results' && (
        <ResultScreen 
          score={finalScore} 
          total={totalQuestions} 
          onRestart={handleRestart} 
        />
      )}
    </div>
  );
}
