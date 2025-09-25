export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-3 px-4 rounded-2xl font-bold text-lg hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg"
    >
      {children}
    </button>
  );
}
