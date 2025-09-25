export default function InputField({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-600 bg-slate-900 p-2 text-slate-100 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
      />
    </div>
  );
}
