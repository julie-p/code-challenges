const N = parseInt(readline());

for (var i = 0; i < N; i++) {
    readline();
};

while (true) {
    console.log(readline().split(' ')[3] < -39 ? '0 4' : '0 0');

    // OU
    if (readline().split(' ')[3] < -39) {
        console.log('O 4');
    } else {
        console.log('0 0');
    }
};
