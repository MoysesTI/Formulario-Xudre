const calcular = document.getElementById('calcule');



    function imc () {
        const altura = document.getElementById('altura').value;
        const peso = document.getElementById('peso').value;
        const resultado = document.getElementById('resultado');
        
        if ( altura !== '' && peso !== '') {
    
            const valorIMC = (peso / ( altura * altura )).toFixed(1);
            
            document.getElementById('resultadoImc').value = valorIMC;

            let classificacao = '';

            if (valorIMC < 18.5){
                classificacao = 'Magreza de Grau 0';
            }else if (valorIMC < 25) {
                classificacao = 'Normal de Grau 0';
            }else if (valorIMC < 30){
                classificacao = 'Sobrepeso de Grau 1.';
            }else if (valorIMC < 40){
                classificacao = 'Obesidade de Grau 2';
            }else if (valorIMC > 40){
                classificacao = ' Obesidade grave de Grau 3';
            }
            resultado.textContent = `seu IMC é ${valorIMC} significa que tem: ${classificacao}`;

        }else{
            resultado.textContent = 'Preencha todos os campos!!!';
        
        }
    }
    calcule.addEventListener('click', imc);
