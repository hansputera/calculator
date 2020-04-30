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
