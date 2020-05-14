function hitung() {
const data = document.getElementById('hitung').value;
if (!data.includes('/') || !data.includes('*') || !data.includes('+') || !data.includes('-')) {
data = 'Error';
} else {
let result = eval(data);
data = result;
};
};

function changeTitle() {
let array = ['Simple Calculator', 'Calculator Tambah²', 'Kalkulator:v'];
let rand = Math.floor(Math.random() * array.length);
document.title = array[rand];
};

setInterval(changeTitle, 10 * 1000);
