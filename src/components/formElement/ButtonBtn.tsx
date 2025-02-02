interface SubmitButtonProps {
    text?: String;
    onClick: () => void;
    className?: string
}

const ButtonBtn: React.FC<SubmitButtonProps> = ({ text="Submit", onClick, className}) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={`bg-blue-500 text-white px-6 py-2 rounded-lg focus:outline-none hover:bg-blue-600 active:bg-blue-700 ${className}`}
        >
            {text}
        </button>
    );
}
 
export default ButtonBtn;