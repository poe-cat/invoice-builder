import { useState, useRef } from "react"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import Table from "./components/Table"
import TableForm from "./components/TableForm"
import Dates from "./components/Dates"
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import ClientDetails from "./components/ClientDetails"
import ReactToPrint from "react-to-print"

function App() {

  const [showInvoice, setShowInvoice] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [nip, setNIP] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [bankName, setBankName] = useState(""); 
  const [bankAccount, setBankAccount] = useState(""); 
  const [website, setWebsite] = useState(""); 
  const [clientName, setClientName] = useState(""); 
  const [clientAddress, setClientAddress] = useState("");
  const [clientNIP, setClientNIP] = useState(""); 
  const [clientPostCode, setClientPostCode] = useState(""); 
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoicePlace, setInvoicePlace] = useState(""); 
  const [invoiceDate, setInvoiceDate] = useState(""); 
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [jednostkaM, setJednostkaM] = useState("usł.");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentForm, setPaymentForm] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [isPaid, setIsPaid] = useState("");

  const componentRef = useRef();

  const handlePrint = () => {
    window.print()
  }

  const handleChange = (e) => {setPaymentForm(e.target.value)}

  
  return (
    <>
     <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl 
     xl:max-w-4xl bg-white rounded shadow">
       
    {showInvoice ? (
    <>
    <ReactToPrint 
      trigger={() => (
      <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 
      rounded shadow border-2 border-blue-500
      hover:bg-transparent hover:text-blue-500
      transition-all duration-300">
      Print / Download
      </button>
      )}
      content={() => componentRef.current}
    />
    
      <div ref={componentRef} className="p-10">

      <Header 
        handlePrint={handlePrint} 
        invoiceNumber={invoiceNumber} 
      />

      <Dates 
        invoiceNumber={invoiceNumber}
        invoicePlace={invoicePlace} 
        invoiceDate={invoiceDate} 
        dueDate={dueDate} 
      />
      
        <MainDetails
        name={name} 
        address={address}
        postCode={postCode}
        nip={nip}
      />
  
      
      <ClientDetails 
        clientName={clientName} 
        clientAddress={clientAddress}
        clientPostCode={clientPostCode}
        clientNIP={clientNIP}
      />
      
      <Table 
        description={description}
        jednostkaM={jednostkaM}
        quantity={quantity} 
        price={price} 
        amount={amount}
        list={list}
        setList={setList}
        total={total}
        setTotal={setTotal}
      />
      
      <Notes 
        notes={notes}
        isPaid={isPaid}
        paymentForm={paymentForm}
        paymentDate={paymentDate}
      />
      
      <Footer 
      name={name} 
      address={address} 
      website={website} 
      email={email}
      bankAccount={bankAccount}
      bankName={bankName}
      />

      </div> 


      <button onClick={() => setShowInvoice(false)} 
      className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 
        rounded shadow border-2 border-blue-500
        hover:bg-transparent hover:text-blue-500
        transition-all duration-300">Edit information
      </button>
      </>
      ) : (
        <>
      <div className="flex flex-col justify-center">

      <article className="md:grid grid-cols-3 gap-10">

        <div className="flex flex-col">
          <label htmlFor="name">Imię i nazwisko (sprzedawca)</label>
          <input 
            type="text" 
            name="text" 
            id="name" 
            placeholder="Imię i nazwisko"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address">Adres (sprzedawca)</label>
          <input 
            type="text" 
            name="address" 
            id="address" 
            placeholder="Adres"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="postCode">Kod pocztowy i miasto</label>
          <input 
            type="text" 
            name="postCode" 
            id="postCode" 
            placeholder="Kod pocztowy"
            autoComplete="off"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
        </div>

      </article>

      <article className="md:grid grid-cols-3 gap-10">

        <div>
          <label htmlFor="email">Email (sprzedawca)</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="nip">NIP (sprzedawca)</label>
          <input 
            type="text" 
            name="nip" 
            id="nip" 
            placeholder="NIP"
            autoComplete="off"
            value={nip}
            onChange={(e) => setNIP(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="website">Strona internetowa</label>
          <input 
            type="url" 
            name="website" 
            id="website" 
            placeholder="Strona internetowa"
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

    </article>

      <article className="md:grid grid-cols-2 gap-10">
        
        <div className="flex flex-col">
          <label htmlFor="bankName">Nazwa banku</label>
          <input 
            type="text" 
            name="bankName" 
            id="bankName" 
            placeholder="Nazwa banku"
            autoComplete="off"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="bankAccount">Numer rachunku bankowego</label>
          <input 
            type="text" 
            name="bankAccount" 
            id="bankAccount" 
            placeholder="Numer rachunku bankowego"
            autoComplete="off"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
        </div>
      </article>

      <article className="md:grid grid-cols-4 gap-10 md:mt-16">
        <div className="flex flex-col">
          <label htmlFor="clientName">Imię i nazwisko klienta</label>
          <input 
            type="text" 
            name="clientName" 
            id="clientName" 
            placeholder="Imię i nazwisko klienta"
            autoComplete="off"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
      
        <div className="flex flex-col">
          <label htmlFor="clientAddress">Adres klienta</label>
          <input 
            type="text" 
            name="clientAddress" 
            id="clientAddress" 
            placeholder="Adres klienta"
            autoComplete="off"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="clientPostCode">Kod pocztowy i miasto</label>
          <input 
            type="text" 
            name="clientPostCode" 
            id="clientPostCode" 
            placeholder="Kod pocztowy"
            autoComplete="off"
            value={clientPostCode}
            onChange={(e) => setClientPostCode(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="clientNIP">NIP (klient)</label>
          <input 
            type="text" 
            name="clientNIP" 
            id="clientNIP" 
            placeholder="NIP klienta"
            autoComplete="off"
            value={clientNIP}
            onChange={(e) => setClientNIP(e.target.value)}
          />
        </div>
      </article>

      <article className="md:grid grid-cols-4 gap-10">
        <div className="flex flex-col">
          <label htmlFor="invoiceNumber">Numer faktury</label>
          <input 
            type="text" 
            name="invoiceNumber" 
            id="invoiceNumber" 
            placeholder="Numer faktury"
            autoComplete="off"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="invoicePlace">Miejsce wystawienia</label>
          <input 
            type="text" 
            name="invoicePlace" 
            id="invoicePlace" 
            placeholder="Miejsce wystawienia"
            autoComplete="off"
            value={invoicePlace}
            onChange={(e) => setInvoicePlace(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="invoiceDate">Data wystawienia</label>
          <input 
            type="date" 
            name="invoiceDate" 
            id="invoiceDate" 
            placeholder="dd-mm-yyyy"
            autoComplete="off"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dueDate">Data sprzedaży</label>
          <input 
            type="date" 
            name="dueDate" 
            id="dueDate" 
            placeholder="dd-mm-yyyy"
            autoComplete="off"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </article>


      {/*This is a table form*/}
      <article>
        <TableForm 
          description={description} 
          setDescription={setDescription}
          jednostkaM={jednostkaM}
          setJednostkaM={setJednostkaM}
          quantity={quantity} 
          setQuantity={setQuantity}
          price={price} 
          setPrice={setPrice}
          amount={amount} 
          setAmount={setAmount}
          list={list}
          setList={setList}
          total={total}
          setTotal={setTotal}
        />
      </article>


      <label htmlFor="notes">Dodatkowe informacje</label>
      <textarea name="notes" id="notes" cols="30" rows="10" 
      placeholder="Dodatkowe informacje dla klienta"
      value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

      <article className="md:grid grid-cols-3 gap-10">
        <> 
          <div className="mt-2 mb-5">
            <label className="p-2" htmlFor="paymentForm">Forma płatności: </label>
              <select value={paymentForm} onChange={handleChange}>
                <option value="gotówka">gotówka</option>
                <option value="przelew">przelew</option>
                <option value=""></option>
              </select>
          </div>

          <div className="flex flex-col">
          <label htmlFor="paymentDate">Data płatności</label>
          <input 
            type="date" 
            name="paymentDate" 
            id="paymentDate" 
            placeholder="dd-mm-yyyy"
            autoComplete="off"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="isPaid">Zapłacone (wartość w PLN)</label>
          <input 
            type="number" 
            name="isPaid" 
            id="isPaid" 
            placeholder="Zapłacone"
            autoComplete="off"
            value={isPaid}
            onChange={(e) => setIsPaid(e.target.value)}
          />
        </div>
        </>
      </article>


      <button onClick={() => setShowInvoice(true)} 
      className="bg-blue-500 text-white font-bold py-2 px-8 
      rounded shadow border-2 border-blue-500
      hover:bg-transparent hover:text-blue-500
      transition-all duration-300">
        Zatwierdź
      </button>
        
      </div>

        </>
      )}
     </main>
    </>
  )
}

export default App;
