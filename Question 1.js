let getEvenNumbers = (num) => {
            if (num % 2 === 0) {
                document.writeln(num + "<br />");
            }
        }
        const arr = [1, 2, 3, 4, 5, 6];
        arr.forEach(getEvenNumbers);