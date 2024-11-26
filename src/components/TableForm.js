import React, {useState, useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"

export default function TableForm({description, setDescription,
                                    jednostkaM, setJednostkaM,
                                    quantity, setQuantity, 
                                    price, setPrice, 
                                    amount, setAmount,
                                    list, setList,
                                    total, setTotal}) {
                                   
                                        
    
    
    
    
    const [isEditing, setIsEditing] = useState(false);
    
    // Submit form function
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!description || !jednostkaM || !quantity || !price) {
            alert("Please fill in all the inputs!");
        } else {
            const newItems = {
                id: uuidv4(),
                description,
                jednostkaM,
                quantity,
                price,
                amount
            }
            setDescription("")
            setJednostkaM("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
            setIsEditing(false)
            }
        }


    // Calculate items amount function
    useEffect(() => {
        const calculateAmount = (amount) => {
            setAmount(quantity * price)
        }
        calculateAmount(amount)
    }, [amount, price, quantity, setAmount]);


    // Calculate total amount of items in table
    useEffect(() => {
        let rows = document.querySelectorAll(".amount");
        let sum = 0;

        for(let i = 0; i < rows.length; i++) {
            if(rows[i].className === "amount") {
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
                setTotal(sum);
            }
        }
    })



    // Edit function
    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id);
        setList(list.filter((row) => row.id !== id));
        setIsEditing(true);
        setDescription(editingRow.description);
        setJednostkaM(editingRow.jednostkaM);
        setQuantity(editingRow.quantity);
        setPrice(editingRow.price);
    }


    // Delete function
    const deleteRow = (id) => setList(list.filter((row) => row.id !== id));


    const handleChange = (e) => {setJednostkaM(e.target.value)}

    return (
    <>
    <form onSubmit={handleSubmit}>

    <div className="flex flex-col md:mt-16">
        <label htmlFor="description">Nazwa towaru lub usługi</label>
        <input 
            type="text" 
            name="description" 
            id="description"
            placeholder="Nazwa towaru lub usługi" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
        />
    </div>

    <div className="md:grid grid-cols-4 gap-10">   
    <div>
        <label className="p-2" htmlFor="jednostkaM">Jm.</label>
            <select value={jednostkaM} onChange={handleChange}>
                <option value="usł.">usł.</option>
                <option value="szt.">szt.</option>
            </select>
    </div>

    <div className="flex flex-col">
        <label htmlFor="quantity">Ilość</label>
        <input 
            type="text" 
            name="quantity" 
            id="quantity"
            placeholder="Ilość" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
        />
    </div>

    <div className="flex flex-col">
        <label htmlFor="price">Cena</label>
        <input 
            type="text" 
            name="price" 
            id="price"
            placeholder="Cena" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
        />
    </div>

    <div className="flex flex-col">
        <label htmlFor="amount">Wartość</label>
        <p>{amount}</p>
    </div>
    </div>

    <button type="submit" className="mb-5 bg-blue-500 
        text-white font-bold py-2 px-8 
        rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500
        transition-all duration-300">
        {isEditing ? "Editing an item" : "Add new item"}
    </button>

    </form>

    {/* Table items */}

    <table width="100%" className="mb-10">
        <thead>
            <tr className="bg-gray-100 p-1">
                <td className="font-bold">Nazwa towaru lub usługi</td>
                <td className="font-bold">Jm.</td>
                <td className="font-bold">Ilość</td>
                <td className="font-bold">Cena</td>
                <td className="font-bold">Wartość</td>
            </tr>
        </thead>
        {list.map(({id, description, jednostkaM, quantity, price, amount}) => (
        <React.Fragment key={id}>
            <tbody>
                <tr>
                    <td>{description}</td>
                    <td>{jednostkaM}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td className="amount">{amount}</td>
                    <td>
                        <button onClick={() => deleteRow(id)}>
                        <AiOutlineDelete className="text-red-500 font-bold 
                        text-xl"/>
                        </button>
                    </td>
                    <td>
                        <button onClick={() => editRow(id)}>
                        <AiOutlineEdit className="text-green-500 font-bold 
                        text-xl"/>
                        </button>
                    </td>
                </tr>
            </tbody>
            </React.Fragment>
        ))}
    </table>

    <div>
        <h2 className="flex items-end justify-end
        text-gray-800 text-xl font-bold">
        Razem: {total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} zł
        </h2>
    </div>
    </>
    )
}
