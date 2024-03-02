import React, { useEffect, useState } from 'react';

function ListaDeItens() {
    // Estado para armazenar a lista de itens
    const [itens, setItens] = useState([]);
    // Estado para armazenar o item atual digitado pelo usuário
    const [novoItem, setNovoItem] = useState('');
    const [filtro, setFiltro] = useState('');


    const ordenarItens = () => {
        let ordenada = [...itens];

        const teste = ordenada.sort();
        setItens(teste);
    }

    const filtrarItens = () => {
        console.log('oi');
        return itens.filter(x => x.includes(filtro));
    }
    
    // Função para lidar com a adição de um novo item
    const adicionarItem = () => {
        if (novoItem.trim() !== '') {
            // Usando a forma de função para garantir que estamos trabalhando com o estado mais recente
            setItens(prevItens => [...prevItens, novoItem]);
            // Limpa o campo do novo item após a adição
            setNovoItem('');
        }
    };



    return (
        <div>
            <h2>Lista de Itens</h2>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                />
                <button onClick={adicionarItem}>Adicionar Item</button>
            </div>
            <div>
                <button onClick={ordenarItens}>Ordenar Alfabeticamente</button>
            </div>
            <div>
                <input type='text'
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder='Filtrar por palavra'
                />
                <button onClick={filtrarItens}>Filtrar</button>
            </div>
        </div>
    );
}
export default ListaDeItens;