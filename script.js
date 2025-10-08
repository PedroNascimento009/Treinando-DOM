const promessa = Promise.resolve(5 + 5);

console.log('Alguma coisa');

promessa.then((value) => {
        console.log(`A soma é ${value}`);
})

console.log('Outra coisa');