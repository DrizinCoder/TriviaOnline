import Button from "./Button";

export default function ResultScreen({ score, total, onRestart }) {
  return (
    
      
      <div className="w-full max-w-md p-8 flex flex-col items-center space-y-6 ">
        
        <h2 className="text-3xl font-bold text-slate-100">🎉 Result</h2>
        
        <p className="text-xl text-center">
          You got <span className="text-pink-500 font-bold">{score}</span> out of <span className="font-bold">{total}</span> questions right!
        </p>

        <Button onClick={onRestart}>Play again</Button>
        
      </div>
  );
}