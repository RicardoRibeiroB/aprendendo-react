import styles from './Project-props.module.css';
import PropTypes from 'prop-types';
export default function Tarefa({tarefa}){
    return(
        <div className={styles.conteudo}>
            <ul>
                <li>{tarefa}</li> 
            </ul>
        </div>
    );
}

// isRequired nao pode estar vazia, tem que estar enviando algum dado
Tarefa.propTypes = {
    tarefa: PropTypes.string.isRequired
}