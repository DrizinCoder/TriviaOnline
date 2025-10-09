import Button from "./Button";

export default function ResultScreen({ score, total, onRestart }) {
  return (
    
      
      <div className="w-full max-w-md p-8 flex flex-col items-center space-y-6 ">
        
        <h2 className="text-3xl font-bold text-slate-100">🎉 Resultado</h2>
        
        <p className="text-xl text-center">
          Você acertou <span className="text-pink-500 font-bold">{score}</span> de <span className="font-bold">{total}</span> perguntas!
        </p>

        <Button onClick={onRestart}>Jogar Novamente</Button>
        
      </div>
  );
}