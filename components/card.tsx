
export default function Card({children}:{children:any}) {
    return (
        <div className="text-white rounded-md border-2 border-sky-700 p-2">
            {children}
        </div>

    );
}