import "./input.css";

export default function InputForm({ label, placeholder, type, name, register }) {
    return (
        <div className="inputForm">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} {...register(name)} />
        </div>
    );
}
