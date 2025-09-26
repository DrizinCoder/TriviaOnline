import Button from "./Button";

export default function ResultScreen({ score, total, onRestart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 space-y-6">
      <h2 className="text-3xl font-bold text-slate-100">🎉 Resultado</h2>
      <p className="text-xl">Você acertou {score} de {total} perguntas!</p>
      <Button onClick={onRestart}>Jogar Novamente</Button>
    </div>
  );
}
