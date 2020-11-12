class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray() {
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        // let total = 0;
        //
        // for (let i = 0; i < this._negociacoes.length; i++) {
        //     total += this._negociacoes[i].volume;
        // }
        // return total;

        return this._negociacoes
            .reduce(function (total, negociacao) {
                return total + negociacao.volume
            }, 0);
    }
}