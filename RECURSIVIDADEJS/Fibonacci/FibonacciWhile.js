function main() {
    let comprimento = 5;

    let fibonacci = finabocciWhile(comprimento)


    function finabocciWhile(comprimento) {
        let String = " ", finabocci = 0, resultAnterior = 1;
        while (comprimento > 0) {
            String += finabocci + " "
            resultAnterior = finabocci + resultAnterior
            if (comprimento - 2 >= 0) {
                comprimento -= 2;
                String += resultAnterior + " "
            } else {
                break;
            }
            finabocci += resultAnterior
        }
        return String
    }

    console.log(fibonacci)
}main()