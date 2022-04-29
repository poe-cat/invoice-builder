export default function MainDetails({name, nip, address, postCode}) {
    return (
        <>
         <section className="flex flex-col mb-0 items-end justify-end">
        <p className="bg-gray-100 font-bold">Sprzedawca</p>
         <h2 className="text-lg mb-1">{name}</h2>
         <p>{address}</p>
         <p>{postCode}</p>
         <p>NIP: {nip}</p>
       </section>
        </>
    )
}