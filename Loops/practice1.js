//Print all the Even Number from 1 to 100

//1
for (let i = 0; i <= 100; i = i + 2) {
    console.log('i = ', i);
}

//2
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('i = ', i);
    }
}