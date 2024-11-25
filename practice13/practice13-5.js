// practice13-5.js
onmessage = function (e) {
    let grade = "F";
    let score = parseInt(e.data);
    switch (Math.floor(score / 10)) {
        case 10:
        case 9:
            grade = "A";
            break;
        case 8:
            grade = "B";
            break;
        case 7:
            grade = "C";
            break;
        case 6:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    postMessage(grade);
};
