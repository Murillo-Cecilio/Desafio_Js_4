function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''//resetar a tabuada antes de mostrar uma nova.
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++ //comando para incrementar o valor de c
        }
    }
}