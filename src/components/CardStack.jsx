import Card from "./Card";

const CardStack = () => {
    return (
        <div className="card-stack">
            <Card backgroundColor={"lightblue"} index={0} />
            <Card backgroundColor={"blue"} index={1} />
            <Card backgroundColor={"darkblue"} index={2} />
        </div>
    );
}

export default CardStack;