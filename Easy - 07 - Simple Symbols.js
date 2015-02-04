function SimpleSymbols(str) {

    var alphaTest = /[a-zA-Z]/;

    for (i = 0; i < str.length; i++) {
        if (alphaTest.test(str[i])) {
            if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
                return false;
            }
        }
    }
    
    return true;
}
   
