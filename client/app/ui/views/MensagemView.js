class MensagemView extends View {

    template(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}