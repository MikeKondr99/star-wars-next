export default function Prop({children}:{children:any}) {
    return (
        <div className="flex flex-row items-baseline gap-2">
            {children}
        </div>
    );

}