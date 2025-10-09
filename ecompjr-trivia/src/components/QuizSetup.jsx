import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";
import axios from "axios";

export default function QuizSetup({ onQuizStart }) {
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
    if (category && category !== "0") url += `&category=${category}`;
    if (difficulty && difficulty !== "0") url += `&difficulty=${difficulty}`;
    if (type && type !== "0") url += `&type=${type}`

    try{
      const response = await axios.get(url);
      
      const data = response.data; 
      
      if (data.response_code !== 0) {
         throw new Error("Não foram encontradas perguntas. Tente outras configurações.");
      }
      
      setQuizData(data.results); 
      console.log(data.results);
      onQuizStart(data.results);
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
        onChange={setQuestions}
      />

      <SelectField
        label="Categoria"
        value={category}
        onChange={setCategory}
        options={[
          { value: "0", label: "Any Category" },
          { value: "9", label: "General Knowledge" },
          { value: "10", label: "Entertainment: Books" },
          { value: "11", label: "Entertainment: Film" },
          { value: "12", label: "Entertainment: Music" },
          { value: "13", label: "Entertainment: Musicals & Theatres" },
          { value: "14", label: "Entertainment: Television" },
          { value: "15", label: "Entertainment: Video Games" },
          { value: "16", label: "Entertainment: Board Games" },
          { value: "17", label: "Science & Nature" },
          { value: "18", label: "Science: Computers" },
          { value: "19", label: "Science: Mathematics" },
          { value: "20", label: "Mythology" },
          { value: "21", label: "Sports" },
          { value: "22", label: "Geography" },
          { value: "23", label: "History" },
          { value: "24", label: "Politics" },
          { value: "25", label: "Art" },
          { value: "26", label: "Celebrities" },
          { value: "27", label: "Animals" },
          { value: "28", label: "Vehicles" },
          { value: "29", label: "Entertainment: Comics" },
          { value: "30", label: "Science: Gadgets" },
          { value: "31", label: "Entertainment: Japanese Anime & Manga" },
          { value: "32", label: "Entertainment: Cartoon & Animations" },
        ]}
      />

      <SelectField
        label="Dificuldade"
        value={difficulty}
        onChange={setDifficulty}
        options={[
          { value: "0", label: "Selecione" },
          { value: "easy", label: "Fácil" },
          { value: "medium", label: "Médio" },
          { value: "hard", label: "Difícil" },
        ]}
      />

      <SelectField
        label="Tipo"
        value={type}
        onChange={setType}
        options={[
          { value: "0", label: "Selecione" },
          { value: "multiple", label: "Múltipla Escolha" },
          { value: "boolean", label: "Verdadeiro/Falso" },
        ]}
      />

      <Button onClick={startQuiz} disabled={loading}>
      {loading ? "Carregando...": "Iniciar Quiz"}</Button>
    </div>
  );
}
