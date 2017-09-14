let converter = (str) => {
    str = str
        .toLowerCase()
        .split(" ")

    for (let i = 0; i <= str.length; i++) {

        if (str[i] === "won") {
            str.splice(i, 1, "two");

        } else if (str[i] === "too" || str[i] === "to") {
            str.splice(i, 1, "three");

        } else if (str[i] === "for") {
            str.splice(i, 1, "five");

        } else if (str[i] === "ate") {
            str.splice(i, 1, "nine");

        }
        
    }
    return (str.join(" "));
};

module.exports = converter;
