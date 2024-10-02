import Key from "./Key/Key";

function Piano() {
    return (
        <>
            <div id="piano" className="flex cursor-pointer">
                <Key note="До"/>
                <Key note="До дієз"/>
                <Key note="Ре"/>
                <Key note="Ре дієз"/>
                <Key note="Мі"/>
                <Key note="Фа"/>
                <Key note="Фа дієз"/>
                <Key note="Соль"/>
                <Key note="Соль дієз"/>
                <Key note="Ля"/>
                <Key note="Ля дієз"/>
                <Key note="Сі"/>
            </div>
        </>
    );
}

export default Piano;