import React from "react"

export default function Table({list, total}) {
    return (
        <>
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
                    <td>{amount}</td>
                </tr>
            </tbody>
            </React.Fragment>
        ))}
    </table>

    <div>
        <h2 className="flex items-end justify-end
        text-gray-800 text-xl font-bold">
        Razem: {total.toLocaleString()} zł
        </h2>
    </div>

    </>
    )
}