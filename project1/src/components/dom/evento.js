import Button from './button'

export default function Evento(){
    function meuEvento(){
        console.log('primeiro evento');
    }
    return(
        <div>
            <p>Clique para dispara um evento</p>
            <Button event={meuEvento} text="primeiro evento" />
        </div>
    );

}