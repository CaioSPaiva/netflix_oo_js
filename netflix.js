// Classe base: ConteudoNetflix
class ConteudoNetflix {
constructor(titulo, genero, anoLancamento) {
    this.titulo = titulo;
    this.genero = genero;
    this.anoLancamento = anoLancamento;
}

obterDescricao() {
    return `${this.titulo} é um conteúdo de ${this.genero}, lançado em ${this.anoLancamento}.`;
}
}

// Classe derivada: Filme
class Filme extends ConteudoNetflix {
constructor(titulo, genero, anoLancamento, duracao) {
    super(titulo, genero, anoLancamento);
    this.duracao = duracao;
}

obterDescricao() {
    return `${super.obterDescricao()} É um filme com duração de ${this.duracao} minutos.`;
}
}

// Classe derivada: Serie
class Serie extends ConteudoNetflix {
constructor(titulo, genero, anoLancamento, numeroTemporadas, episodiosPorTemporada) {
    super(titulo, genero, anoLancamento);
    this.numeroTemporadas = numeroTemporadas;
    this.episodiosPorTemporada = episodiosPorTemporada;
}

obterDescricao() {
    return `${super.obterDescricao()} É uma série com ${this.numeroTemporadas} temporadas, cada uma com aproximadamente ${this.episodiosPorTemporada} episódios.`;
}
}

// Criando instâncias
const filme1 = new Filme("O Resgate", "Ação", 2023, 120);
const serie1 = new Serie("Mundo Sombrio", "Terror", 2022, 3, 10);
const filme2 = new Filme("Uma Aventura Congelante", "Animação", 2019, 95);

// Exibindo descrições
console.log(filme1.obterDescricao());
console.log(serie1.obterDescricao());
console.log(filme2.obterDescricao());
