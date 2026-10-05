export function NombreCode(a) {
    let texto = a.toLowerCase();
    let textoCode = 0;  // Inicializar en 0

    for (const char of texto) {
        // Validar que sea una letra
        if (char >= 'a' && char <= 'z') {
            let charCode = char.charCodeAt() - 96; // devuelve el cod ASCII en indices de 1 a 27
            textoCode += charCode;
        }
    }
    return textoCode;
}

export function varAleatorio(min,max){
    const enteroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return enteroAleatorio;
};

export function ContadorModular(contador,animo){
    let item = contador % animo;
    if(item === 0) {
        item = animo;
    }

    return item;

}