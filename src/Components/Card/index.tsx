type CardType = {
    name: string;
}

export function Card(props: CardType) {

    var date = new Date();

    return (
        <div className="w-1/2 flex flex-row justify-between items-center bg-cyan-600 px-10 py-3 rounded-md text-white mb-5">
            <p>{props.name}</p>
            <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}h</p>
        </div>
    )
}