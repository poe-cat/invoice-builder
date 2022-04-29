export default function Notes({notes, isPaid, paymentForm, paymentDate}) {

    return (
        <>

        <div>
            <h2 className="text-base mb-2">Zapłacono: {isPaid} zł</h2>
            <h2 className="text-sm">Sposób płatności: {paymentForm}</h2>
            <h2 className="text-sm">Data płatności: {paymentDate}</h2>
        </div>


        <section className="mt-10 mb-5">
         <p className="lg:w-1/2 text-justify">{notes}</p>
        </section>

        </>
    )
}