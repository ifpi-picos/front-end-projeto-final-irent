function cep(evento) {
   valor = evento.value
   valor = valor.replace(/\D/g, "")
   valor = valor.replace(/^(\d{2})(\d)/, "$1.$2")
   valor = valor.replace(/\.(\d{3})(\d)/, "$1-$2")

   evento.value = valor;
}