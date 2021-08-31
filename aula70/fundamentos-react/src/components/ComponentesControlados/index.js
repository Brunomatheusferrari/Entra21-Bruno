import React from "react";

export class ComponentesControlados extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nome: "",
            email: "",
            cpf: "",
            sexo: "",
            cidade: ""
        }
    }

    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [ name ]: value
        });

        console.log(this.state)
    }

    render() {
        return(
            <form>
                <label><br />
                    Nome:<br />
                    <input 
                    type="text" 
                    name="nome" 
                    onChange={this.handleChange} 
                    value={this.state.nome}/>

                </label>
                <br />
                <label><br />
                    Email:<br />
                    <input 
                    type="email" 
                    name="email" 
                    onChange={this.handleChange} 
                    value={this.state.email}/>

                </label>
                <br />
                <label><br />
                    CPF:<br />
                    <input 
                    type="text" 
                    name="cpf"
                    onChange={this.handleChange} 
                    value={this.state.cpf}
                    />
                    
                </label>
                <br />
                <label><br />
                    Sexo:<br />
                    <br />
                    <input type="radio" name="sexo" value="feminino" onClick={this.handleChange} /> Feminino <br />
                    <br />
                    <input type="radio" name="sexo" value="masculino" onClick={this.handleChange} /> Masculino<br />
                    <br />
                    <input type="radio" name="sexo" value="opala" onClick={this.handleChange} /> Opala<br />
                    <br />
                    <select name="cidade" onChange={this.handleChange}>
                        <option value="blumenau">Blumenau</option>
                        <option value="indaial">Indaial</option>
                        <option value="timbo">Timbó</option>
                        <br />
                        <br />
                        <br />
                    </select>
                    <button>Enviar</button>
                </label>
            </form>
        );
    }

}