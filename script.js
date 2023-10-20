let yard = document.getElementById('yard');
let squarefeet = document.getElementById('squarefeet');

yard.oninput=() => {
    let output = (parseFloat(yard.value)*9);
    squarefeet.value =parseFloat(output.toFixed(3));
};
squarefeet.oninput=() => {
    let output = (parseFloat(squarefeet.value)/9) ;
    yard.value =parseFloat(output.toFixed(3));
};