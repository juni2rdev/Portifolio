copyTheEmail = () => {
    //Selecionar o botão
    const buttonText = document.getElementById('copy').textContent;

    //Cria um elemento temporario 
    const tempInput = document.createElement('input');
    tempInput.value = buttonText;
    document.body.appendChild(tempInput);

    //Seleciona o texto no elemento temporario
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    //copia o texto selecionando para a área de tranferencia
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    //Mostra o feedback
    
    alert('email copiado com sucesso');
};

document.getElementById('copy').addEventListener('click',copyTheEmail);