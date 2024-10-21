import "./input.css"

export default function InputForm({label, placeholder, htmlfor, type}) {
    return (
        <div className="inputForm">
            <label htmlFor={htmlfor}>{label}</label>
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}