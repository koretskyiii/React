import { useState } from "react";
import styles from './Key.module.css';

const notes = ["До", "До дієз", "Ре", "Ре дієз", "Мі", "Фа", "Фа дієз", "Соль", "Соль дієз", "Ля", "Ля дієз", "Сі"];
const playNotes = {"До" : "do", "Ре": "re", "Мі": "mi", "Фа": "fa", "Соль": "sol", "Ля": "la", "Сі": "si", "До дієз": "do-diez", "Ре дієз": "re-diez", "Фа дієз": "fa-diez", "Соль дієз": "sol-diez", "Ля дієз": "la-diez"}


function Key({note}) {
    const [isPressed, setPressed] = useState(false)
    const keyClass = isPressed ? styles.pressed : '';

    function handleClick(note) {
        const audio = new Audio(`/notes/${playNotes[note]}.mp3`)
        audio.play()
        console.log(document.body.querySelector(`#piano div[data-note="${note}"]`));
        setPressed(true);
        setTimeout(() => setPressed(false), 200);
    }

    if (notes.includes(note)) {
        let bW = note.includes("дієз") ? "black" : "white"
        if (bW == "white") {
            return <div data-note={note} onClick={() => handleClick(note)}  className={`bg-white shadow-lg shadow-gray-500 h-96 w-16 border border-stone-800 flex items-center justify-center ${keyClass}`}><span className={`mt-6`}>{note}</span></div>
        }
        else
            return <div data-note={note} onClick={() => handleClick(note)} className={`bg-black shadow-lg shadow-gray-300 relative h-36 w-10 -ml-5 -mr-5 z-10 border border-stone-950 flex items-center justify-center ${keyClass}`}></div>
    }
}

export default Key