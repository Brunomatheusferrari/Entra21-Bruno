export function ParOuImpar(props) {
    return (
        <>
        {
        props.numero % 2 === 0 ?
        <p>O Número { props.numero } é Par</p> :
        <p>O Número { props.numero } é Ímpar</p>
        }
        </>
    );
}