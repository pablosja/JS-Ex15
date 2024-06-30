function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function checkPrime() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput);

    if (isNaN(number)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    const result = isPrime(number) ? `${number} is a prime number.` : `${number} is not a prime number.`;
    document.getElementById('result').innerText = result;
}