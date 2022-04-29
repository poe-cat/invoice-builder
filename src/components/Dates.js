export default function Dates({invoicePlace, invoiceDate, dueDate}) {
    return (
        <>
       <article className="mt-2 mb-16 flex items-end justify-end">
         <ul>
          <li className="p-1 text-sm">
            <span className=" text-sm font-bold">Miejsce wystawienia: </span> {invoicePlace}
          </li>
           <li className="bg-gray-100 text-sm">
            <span className="font-bold">Data wystawienia: </span> {invoiceDate}
          </li>
           <li className="p-1 text-sm">
            <span className="font-bold">Data sprzedaży: </span> {dueDate}
           </li>
         </ul>
       </article>
        </>
    )
}