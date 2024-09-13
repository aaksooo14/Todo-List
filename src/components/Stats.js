export default function Stats({ items }) {

    if (!items.length)
        return (
            <p className="footer">
                <em>Start adding some item to your packing list</em>
            </p>)
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100)

    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "ypu got everything! You are ready to go ✈" :
                    `💼 you have ${numItems} item on your list , and you are already packed ${numPacked} (${percentage})`}
            </em>
        </footer>
    )
}
