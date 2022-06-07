document.getElementById("title").innerHTML = "Result";

const marks = [60, 60, 60, 60, 60, 90];

function gettotalmarks() {
    var total = 0;
    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    var per = total / 6;

    getdivision(per);
    console.log(total)


}
function getdivision(per) {

    if (per >= 80)
        console.log("dist");

    else if (per >= 70)
        console.log("first division");
    else if (per >= 60)
        console.log("second");
    else
        console.log("third division");

}
function getresult() {


    for (let i = 0; i < 6; i++) {
        if (marks[i] < 40) {
            console.log("fail")
        }
        gettotalmarks(marks);



    }


}
getresult()


