import { HiX } from "react-icons/hi";

function Modal({ open, onClose, title, description }) {
    return (
        <div onClick={onClose} className={`backdrop ${open ? "open" : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={`backdropModal ${open ? "open" : ""}`}>
                <HiX onClick={onClose} className="closeBtn"/>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Modal;