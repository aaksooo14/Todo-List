import { useState } from "react";
export default function Form({ onHandleAddItems }) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);



    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { description, quantity, packed: false, id: Date.now() }
        onHandleAddItems(newItem);
        setDescription("");
        setQuantity(1);
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you want to do today ❔</h3>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>{num}</option>
                    ))
                }
            </select>
            <input type="text" placeholder="Item..." value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    )
}
