export default function ClientDetails({clientName, clientAddress, clientNIP, clientPostCode}) {
    return (
        <>
        <section className="mt-1 mb-10">
        <p className="font-bold mb-1">Nabywca</p>
         <h2 className="text-2xl mb-1">{clientName}</h2>
         <h2>{clientNIP}</h2>
         <h2>{clientAddress}</h2>
         <h2>{clientPostCode}</h2>
       </section>
        </>
    )
}