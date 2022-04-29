export default function Header({handlePrint, invoiceNumber}) {

    return (
        <>
    <header>
        <div>
          <h1 className="font-bold 
          tracking-wide text-3xl mb-3 justify-start">
          Rachunek  {invoiceNumber}
          </h1>
        </div>
      </header>
        </>
    )
}