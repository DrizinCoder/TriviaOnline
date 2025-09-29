import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";

export default function QuizSetup() {
  const [questions, setQuestions] = useState(5);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startQuiz = async () => {
    setLoading(true);
    setError(null);


    let url = `https://opentdb.com/api.php?amount=${questions}`
    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    if (type) url += `&type=${type}`

    try{
      const response = await fetch(url);
      if(!response.ok) throw new Error("Erro ao buscar perguntas");
      const data = await response.json();
      setQuizData(data.results);
      console.log(data.results);
      alert("Quiz carregado!")
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-lg bg-slate-800 shadow-2xl rounded-3xl p-8 space-y-6 border border-slate-700">
      <h2 className="text-2xl font-bold text-center text-slate-100 mb-2">
        Configuração do Quiz
      </h2>
      <p className="text-center text-sm text-slate-400 mb-6">
        Personalize o quiz antes de começar a jogar!
      </p>

      <InputField
        label="Número de Perguntas"
        type="number"
        value={questions}
        onChange={(e) => setQuestions(e.target.value)}
      />

      <SelectField
        label="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={[
          { value: "", label: "Selecione" },
          { value: "9", label: "General Knowledge" },
          { value: "18", label: "Science: Computers" },
          { value: "23", label: "History" },
        ]}
      />

      <SelectField
        label="Dificuldade"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        options={[
          { value: "", label: "Selecione" },
          { value: "easy", label: "Fácil" },
          { value: "medium", label: "Médio" },
          { value: "hard", label: "Difícil" },
        ]}
      />

      <SelectField
        label="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
        options={[
          { value: "", label: "Selecione" },
          { value: "multiple", label: "Múltipla Escolha" },
          { value: "boolean", label: "Verdadeiro/Falso" },
        ]}
      />

      <Button onClick={startQuiz} disabled={loading}>
      {loading ? "Carregando...": "Iniciar Quiz"}</Button>
    </div>
  );
}
