function AsCounter(chain) {

    const lowerCaseChain = chain.toLowerCase();
    const parts = lowerCaseChain.split('a');
    const AsAmount = parts.length - 1;
    return AsAmount;
    
  }
  
  const text = "Hasta las alabanzas más amadas callan al lanzar las palabras al mar";
  const AsTotal = AsCounter(text);
  console.log(`El número de letras "A" en la cadena es: ${AsTotal}`);
  