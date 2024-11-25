export default Ordenar = (lista, setList) => {
  // Cria uma cópia da lista original usando o operador spread (...). Isso é feito para evitar a mutação da lista original.
    let newList = [...lista];
  // Ordena a nova lista com base nos nomes dos itens.
    newList.sort((a, b) => (a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0));
  // Atualiza o estado da lista com a nova lista ordenada. 
  // Quando o estado é atualizado, o componente que utiliza essa lista é re-renderizado para refletir as mudanças.
    setList(newList);
  };
