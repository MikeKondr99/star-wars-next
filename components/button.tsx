
export default function Button({children,disabled}:{children:any,disabled?:boolean}) {
    return (
        <button disabled={disabled} className="text-white rounded-md border-2 border-sky-700 hover:bg-sky-600 active:bg-sky-400 px-2 py-1 select-none disabled:bg-sky-400">
            {children}
        </button>
    );
}