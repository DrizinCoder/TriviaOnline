import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx" 

export default function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
      
      <Select 
        value={value} 
        onValueChange={onChange} 
      >
        <SelectTrigger 
            className="w-full rounded-xl border border-slate-600 bg-slate-900 p-2 text-slate-100 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ring-offset-0 h-10"
        >
          <SelectValue placeholder="Choose..." />
        </SelectTrigger>
        
        <SelectContent 
            className="bg-slate-800 border-slate-700 text-slate-100 z-50"
        >
          {options.map((opt) => (
            <SelectItem 
                key={opt.value} 
                value={opt.value} 
                className="hover:bg-pink-500 focus:bg-pink-500 focus:text-white"
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}