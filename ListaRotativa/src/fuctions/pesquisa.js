import { useEffect } from 'react';

export default pesquisa = (pesquisaTexto, lista, setList) => {
  useEffect(() => {
    if (pesquisaTexto === '') {
      setList(lista);
    } else {
      setList(
        lista.filter(
          (item) =>
            item.nome.toLowerCase().indexOf(pesquisaTexto.toLowerCase()) > -1
        )
      );
    }
  }, [pesquisaTexto, lista, setList]);
};
