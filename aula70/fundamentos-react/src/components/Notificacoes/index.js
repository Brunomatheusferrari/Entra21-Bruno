export function Notificacao(props) {
    const notificacoes = props.menssagens || [];
    return (
        <>
            {
                notificacoes.length > 0 &&
                <p>Você tem { props.menssagens.length } notificaçõe(s)</p>
            }
        </>
    );
} 