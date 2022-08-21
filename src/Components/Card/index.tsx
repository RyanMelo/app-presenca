interface CardType {
    name: string;
    time: string;
}

export function Card(props: CardType) {

    return (
        <div className="w-1/2 flex flex-row justify-between items-center bg-cyan-600 px-10 py-3 rounded-md text-white mb-5">
            <p>{props.name}</p>
            <p>{props.time}h</p>
        </div>
    )
}