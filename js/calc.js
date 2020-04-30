function hitung() {
const data = document.getelementById('hitung').value;
if (!data.includes('/') || !data.includes('*') || !data.includes('+') || !data.includes('-')) {
alert(`Angka yang ingin di eksekusi tidak ada tanda [+,-,*,/] !`);
return true;
} else {
let result = eval(data);
alert(`Hasil Eksekusi: ${result}`);
data = '';
return true;
};
};

function changeTitle() {
let array = ['Simple Calculator', 'Calculator Tambah²', 'Kalkulator:v'];
let rand = Math.floor(Math.random() * array.length);
document.title = array[rand];
};

setInterval(changeTitle, 10 * 1000);
