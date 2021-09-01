export function ManipulandoEventos() {
    function handleClick() {
        alert("Você clicou no botão.")
    }

    function handleMouseOver() {
        console.log("Sai de cima!")
    }

    function handleMouseLeave() {
        console.log("Ae sim man")
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Formulário Enviado");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
            <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>Clique em mim!</button>  
        </form>
    );
}