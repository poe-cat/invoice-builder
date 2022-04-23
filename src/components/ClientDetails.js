export default function ClientDetails({clientName, clientAddress}) {
    return (
        <>
        <section className="mt-5">
         <h2 className="text-xl uppercase">{clientName}</h2>
         <h2>{clientAddress}</h2>
       </section>
        </>
    )
}