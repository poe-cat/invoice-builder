import {AiOutlineGlobal, AiOutlineMail} from "react-icons/ai"

export default function Footer({email, website, bankName, bankAccount}) {
    return (
        <>
        <footer className="footer border-t-2 border-gray-300 pt-5">
            <ul className="flex flex-wrap items-center justify-center">
                <li><AiOutlineMail className="text-blue-300 font-bold text-xl"/></li>
                <li className="text-sm">
                    {email}
                </li>
                {/* <li><span></span> {bankName}</li>
                <li><span></span> {bankAccount}</li> */}
                <li><AiOutlineGlobal className="text-blue-300 font-bold text-xl"/></li>
                <li className="text-sm">
                    <a href={website} target="_blank" rel="noopenner noreferrer">
                        {website}
                    </a>
                </li>
            </ul>
        </footer>

        </>
    )
}