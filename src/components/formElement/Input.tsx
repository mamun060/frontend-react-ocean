interface InputProps {
    type?: string;
    placeholder?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string
} 


const Input: React.FC<InputProps> = ({ type = "text", placeholder, value, onChange, className }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} 
      />
    </div>
  )
}

export default Input
