let que1ans1 = true;

function AgeQue1Ans1() {
    let a = document.getElementById("agesque1ans1");
    //let solutionpage = document.getElementById("solutionagesque1ans1");
    let input1 = document.getElementById("a1");
    let input2 = document.getElementById("a2");
    let input3 = document.getElementById("n1");
    let input4 = document.getElementById("b1");
    let input5 = document.getElementById("b2");

    if (que1ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque1ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = ">> convert equation =    b2(a1*x - n1) = b1(x-n1) ";
        textarea2.textContent = "Equation = " + input5.value + "(" + input1.value + "*x - " + input3.value + " = " + input4.value + "( x -" + input3.value + ")"
        textarea3.textContent = "x value =  (b2* n1 - b1*n1)/(b2*a1 - b1)";
        textarea4.textContent = "x = " + (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea5.textContent = (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea6.textContent = "mother " + input3.value + " years ago " + ((parseInt(input1.value) * parseInt(textarea5.textContent)) + parseInt(input3.value))
        que1ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque1ans1");
        que1ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque1ans1";
        a.appendChild(again)
    }
}
let que1ans2 = true;

function AgeQue1Ans2() {
    let a = document.getElementById("agesque1ans2");
    let input1 = document.getElementById("a1");
    let input2 = document.getElementById("a2");
    let input3 = document.getElementById("n1");
    let input4 = document.getElementById("b1");
    let input5 = document.getElementById("b2");

    if (que1ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque1ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = "2) convert equation =    b2(a1*x - n1) = b1(x-n1) ";
        textarea2.textContent = "Equation = " + input5.value + "(" + input1.value + "*x - " + input3.value + " = " + input4.value + "( x -" + input3.value + ")"
        textarea3.textContent = "x value =  (b2* n1 - b1*n1)/(b2*a1 - b1)";
        textarea4.textContent = "x = " + (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea5.textContent = (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea6.textContent = "Daughter " + input3.value + " years ago " + ((parseInt(input2.value) * parseInt(textarea5.textContent)) + parseInt(input3.value))
        que1ans2 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque1ans2");
        que1ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque1ans2";
        a.appendChild(again)
    }
}
let que1ans3 = true;

function AgeQue1Ans3() {
    let a = document.getElementById("agesque1ans3");
    let input1 = document.getElementById("a1");
    let input2 = document.getElementById("a2");
    let input3 = document.getElementById("n1");
    let input4 = document.getElementById("b1");
    let input5 = document.getElementById("b2");

    if (que1ans3 === true) {
        let solutionpage = document.getElementById("solutionagesque1ans3");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = "3) convert equation =    b2(a1*x - n1) = b1(x-n1) ";
        textarea2.textContent = "Equation = " + input5.value + "(" + input1.value + "*x - " + input3.value + " = " + input4.value + "( x -" + input3.value + ")";
        textarea3.textContent = "x value =  (b2* n1 - b1*n1)/(b2*a1 - b1)"
        textarea4.textContent = "x = " + (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea5.textContent = (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea6.textContent = "monther present age is " + (parseInt(input1.value) * parseInt(textarea5.textContent))
        que1ans3 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque1ans3");
        que1ans3 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque1ans3";
        a.appendChild(again)
    }
}
let que1ans4 = true;

function AgeQue1Ans4() {
    let a = document.getElementById("agesque1ans4");
    let input1 = document.getElementById("a1");
    let input2 = document.getElementById("a2");
    let input3 = document.getElementById("n1");
    let input4 = document.getElementById("b1");
    let input5 = document.getElementById("b2");

    if (que1ans4 === true) {
        let solutionpage = document.getElementById("solutionagesque1ans4");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = "4) convert equation =    b2(a1*x - n1) = b1(x-n1) ";
        textarea2.textContent = "Equation = " + input5.value + "(" + input1.value + "*x - " + input3.value + " = " + input4.value + "( x -" + input3.value + ")"
        textarea3.textContent = "x value =  (b2* n1 - b1*n1)/(b2*a1 - b1)";
        textarea4.textContent = "x = " + (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea5.textContent = (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea6.textContent = "Daughter  present age is " + ((parseInt(input2.value) * parseInt(textarea5.textContent)))
        que1ans4 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque1ans4");
        que1ans4 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque1ans4";
        a.appendChild(again)
    }
}
let que1ans5 = true;

function AgeQue1Ans5() {
    let a = document.getElementById("agesque1ans5");
    let input1 = document.getElementById("a1");
    let input2 = document.getElementById("a2");
    let input3 = document.getElementById("n1");
    let input4 = document.getElementById("b1");
    let input5 = document.getElementById("b2");

    if (que1ans5 === true) {
        let solutionpage = document.getElementById("solutionagesque1ans5");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = " 5) convert equation =    b2(a1*x - n1) = b1(x-n1) ";
        textarea2.textContent = "Equation = " + input5.value + "(" + input1.value + "*x - " + input3.value + " = " + input4.value + "( x -" + input3.value + ")"
        textarea3.textContent = "x value =  (b2* n1 - b1*n1)/(b2*a1 - b1)";
        textarea4.textContent = "x = " + (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea5.textContent = (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))

        textarea6.textContent = "sum of ages " + ((parseInt(input2.value) * parseInt(textarea5.textContent)) + (parseInt(input1.value) * (parseInt(textarea5.textContent))))
        que1ans5 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque1ans5");
        que1ans5 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque1ans5";
        a.appendChild(again)
    }
}
let que1ans6 = true;

function AgeQue1Ans6() {
    let a = document.getElementById("agesque1ans6");
    let input1 = document.getElementById("a1");
    let input2 = document.getElementById("a2");
    let input3 = document.getElementById("n1");
    let input4 = document.getElementById("b1");
    let input5 = document.getElementById("b2");

    if (que1ans6 === true) {
        let solutionpage = document.getElementById("solutionagesque1ans6");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = " 6 ) convert equation =    b2(a1*x - n1) = b1(x-n1) ";
        textarea2.textContent = "Equation = " + input5.value + "(" + input1.value + "*x - " + input3.value + " = " + input4.value + "( x -" + input3.value + ")"
        textarea3.textContent = "x value =  (b2* n1 - b1*n1)/(b2*a1 - b1)";

        textarea4.textContent = "x = " + (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea5.textContent = (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea6.textContent = "Difference of ages " + ((parseInt(input2.value) * parseInt(textarea5.textContent)) - (parseInt(input1.value) * (parseInt(textarea5.textContent))))
        que1ans6 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque1ans6");
        que1ans6 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque1ans6";
        a.appendChild(again)
    }
}
let que2ans1 = true;

function AgeQue2Ans1() {
    let a = document.getElementById("agesque2ans1");
    let input1 = document.getElementById("AGESQUE2ANSA1");
    let input2 = document.getElementById("AGESQUE2ANSA2");
    let input3 = document.getElementById("AGESQUE2ANSASUM");
    let input4 = document.getElementById("AGESQUE2ANSN1");

    if (que2ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque2ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = "1) A age is " + input3.value + "* (" + input1.value + "/ (" + input1.value + "+" + input2.value + "))";
        textarea2.textContent = "A ages = " + (parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))))
        textarea3.textContent = "B ages = " + (parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))))))
        textarea4.textContent = "A age is after n years = " + ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))) + parseInt(input4.value)))
        textarea5.textContent = "B age is after n years = " + ((parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value)))))) + parseInt(input4.value))
        textarea6.textContent = "Ratio b1 and b2 = " + ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))) + parseInt(input4.value))) + "/" + ((parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value)))))) + parseInt(input4.value))
        que2ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque2ans1");
        que2ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque2ans1";
        a.appendChild(again)
    }
}
let que2ans2 = true;

function AgeQue2Ans2() {
    let a = document.getElementById("agesque2ans2");
    let input1 = document.getElementById("AGESQUE2ANSA1");
    let input2 = document.getElementById("AGESQUE2ANSA2");
    let input3 = document.getElementById("AGESQUE2ANSASUM");
    let input4 = document.getElementById("AGESQUE2ANSN1");

    if (que2ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque2ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = "1) A age is " + input3.value + "* (" + input1.value + "/ (" + input1.value + "+" + input2.value + "))";
        textarea2.textContent = "A ages = " + (parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))))
        textarea3.textContent = "B ages = " + (parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))))))
        textarea4.textContent = "A age is after n years = " + ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))) - parseInt(input4.value)))
        textarea5.textContent = "B age is after n years = " + ((parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value)))))) - parseInt(input4.value))
        textarea6.textContent = "Ratio b1 and b2 = " + ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))) + parseInt(input4.value))) + "/" + ((parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value)))))) + parseInt(input4.value))
        que2ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque2ans2");
        que2ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque2ans2";
        a.appendChild(again)
    }
}
let que3ans1 = true;

function AgeQue3Ans1() {
    let a = document.getElementById("agesque3ans1");
    let input1 = document.getElementById("AGESQUE3ANSN");
    let input2 = document.getElementById("AGESQUE3ANSNUMA2");
    let input3 = document.getElementById("AGESQUE3ANSDENOA2");
    let input4 = document.getElementById("AGESQUE3ANSDNUMA1");
    let input5 = document.getElementById("AGESQUE3ANSDDENOA2");
    let input6 = document.getElementById("AGESQUE3ANSN1");

    if (que3ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque3ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        let textarea7 = document.createElement("p");
        textarea1.textContent = "1) x + " + input1.value + " = (" + input2.value + "/" + input3.value + ")*x"
        textarea2.textContent = parseFloat(1 - parseFloat(parseInt(input2.value) / parseInt(input3.value)))
        if (textarea2.textContent <= 0) {
            textarea2.textContent = -(textarea2.textContent)
        } else {
            textarea2.textContent = textarea2.textContent + 1
        }
        textarea3.textContent = "Value of x = " + ((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1))
        textarea4.textContent = ((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1))
        textarea5.textContent = "farah age  = " + (((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1)) + parseInt(input1.value))
        textarea6.textContent = "daughter age is  (" + input4.value + "/" + input5.value + ") * farah age = " + (parseFloat(parseInt(input4.value) / parseInt(input5.value)) * (((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1)) + parseInt(input1.value)))
        textarea7.textContent = "Daughter " + input6.value + " years ago = " + ((parseFloat(parseInt(input4.value) / parseInt(input5.value)) * (((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1)) + parseInt(input1.value))) - parseInt(input6.value))
        que3ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
        solutionpage.appendChild(textarea7);
    } else {
        let solutionpage = document.getElementById("solutionagesque3ans1");
        que3ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque3ans1";
        a.appendChild(again)
    }
}
let que3ans2 = true;

function AgeQue3Ans2() {
    let a = document.getElementById("agesque3ans2");
    let input1 = document.getElementById("AGESQUE3ANSN");
    let input2 = document.getElementById("AGESQUE3ANSNUMA2");
    let input3 = document.getElementById("AGESQUE3ANSDENOA2");
    let input4 = document.getElementById("AGESQUE3ANSDNUMA1");
    let input5 = document.getElementById("AGESQUE3ANSDDENOA2");
    let input6 = document.getElementById("AGESQUE3ANSN1");

    if (que3ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque3ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        //let textarea7 = document.createElement("p");
        textarea1.textContent = "1) x + " + input1.value + " = (" + input2.value + "/" + input3.value + ")*x"
        textarea2.textContent = parseFloat(1 - parseFloat(parseInt(input2.value) / parseInt(input3.value)))
        if (textarea2.textContent <= 0) {
            textarea2.textContent = -(textarea2.textContent)
        } else {
            textarea2.textContent = textarea2.textContent + 1
        }
        textarea3.textContent = "Value of x = " + ((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1))
        textarea4.textContent = ((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1))
        textarea5.textContent = "farah age  = " + (((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1)) + parseInt(input1.value))
        textarea6.textContent = "daughter age is  (" + input4.value + "/" + input5.value + ") * farah age = " + (parseFloat(parseInt(input4.value) / parseInt(input5.value)) * (((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1)) + parseInt(input1.value)))
        //textarea7.textContent = "Daughter " + input6.value + " years ago = " + ((parseFloat(parseInt(input4.value) / parseInt(input5.value)) * (((parseInt(parseInt(input1.value) / parseFloat(textarea2.textContent))) + parseInt(1)) + parseInt(input1.value))) - parseInt(input6.value))
        que3ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
        //solutionpage.appendChild(textarea7);
    } else {
        let solutionpage = document.getElementById("solutionagesque3ans2");
        que3ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque3ans2";
        a.appendChild(again)
    }
}
let que4ans1 = true;

function AgeQue4Ans1() {
    let a = document.getElementById("agesque4ans1");
    let input1 = document.getElementById("AGESQUE4ANSA1");
    let input2 = document.getElementById("AGESQUE4ANSN1");
    let input3 = document.getElementById("AGESQUE4ANSB1");
    let input4 = document.getElementById("AGESQUE4ANSB2");

    if (que4ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque4ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        textarea1.textContent = "1) convert equation =" + input4.value + "(" + input1.value + "* x +" + input2.value + " = " + input3.value + "(x + " + input2.value + ")";
        textarea2.textContent = "value of x = (" + input4.value + "*" + input2.value + " - " + input3.value + "*" + input2.value + ") / (" + input4.value + "*" + input1.value + " - " + input3.value + ")";
        textarea3.textContent = "x = " + ((parseInt(input4.value) * parseInt(input2.value)) - (parseInt(input3.value) * parseInt(input2.value)) / ((parseInt(input4.value) * parseInt(input1.value)) - parseInt(input3.value)))
        textarea4.textContent = ((parseInt(input4.value) * parseInt(input2.value)) - (parseInt(input3.value) * parseInt(input2.value)) / ((parseInt(input4.value) * parseInt(input1.value)) - parseInt(input3.value)))
        textarea5.textContent = "prsent age Mr.Sanyal is = " + (parseInt(input1.value) * parseInt(textarea4.textContent))
        que4ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        //solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionagesque4ans1");
        que4ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque4ans1";
        a.appendChild(again)
    }
}
let que4ans2 = true;

function AgeQue4Ans2() {
    let a = document.getElementById("agesque4ans2");
    let input1 = document.getElementById("AGESQUE4ANSA1");
    let input2 = document.getElementById("AGESQUE4ANSN1");
    let input3 = document.getElementById("AGESQUE4ANSB1");
    let input4 = document.getElementById("AGESQUE4ANSB2");

    if (que4ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque4ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        textarea1.textContent = "1) convert equation =" + input4.value + "(" + input1.value + "* x +" + input2.value + " = " + input3.value + "(x + " + input2.value + ")";
        textarea2.textContent = "value of x = (" + input4.value + "*" + input2.value + " - " + input3.value + "*" + input2.value + ") / (" + input4.value + "*" + input1.value + " - " + input3.value + ")";
        textarea3.textContent = "x = " + ((parseInt(input4.value) * parseInt(input2.value)) - (parseInt(input3.value) * parseInt(input2.value)) / ((parseInt(input4.value) * parseInt(input1.value)) - parseInt(input3.value)))
        textarea4.textContent = ((parseInt(input4.value) * parseInt(input2.value)) - (parseInt(input3.value) * parseInt(input2.value)) / ((parseInt(input4.value) * parseInt(input1.value)) - parseInt(input3.value)))
        textarea5.textContent = "prsent age son is = " + (parseInt(textarea4.textContent))
        que4ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        //solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionagesque4ans2");
        que4ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque4ans2";
        a.appendChild(again)
    }
}
let que5ans1 = true;

function AgeQue5Ans1() {
    let a = document.getElementById("agesque5ans1");
    let input1 = document.getElementById("AGESQUE5ANSAVG");
    let input2 = document.getElementById("AGESQUE5ANSN");
    let input3 = document.getElementById("AGESQUE5ANSB1");
    let input4 = document.getElementById("AGESQUE5ANSB2");

    if (que5ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque5ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = "1) total avg = " + input1.value + "* 2 (2 is no of persons)";
        textarea2.textContent = (parseInt(input1.value) * parseInt(2))
        textarea3.textContent = "covert the equation = " + input4.value + "(x + " + input2.value + ") = (" + input3.value + "(" + textarea2.textContent + " - x + " + input2.value + ")";
        textarea4.textContent = "value of x = (" + input4.value + "*" + input2.value + ") - (" + input3.value + "*" + textarea2.textContent + "+" + input3.value + "*" + input2.value + ") / (" + input3.value + "+" + input4.value + ")";
        textarea5.textContent = "value of x = " + (((parseInt(input4.value) * parseInt(input2.value)) - ((parseInt(input3.value) * parseInt(textarea2.textContent)) + parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input3.value) + parseInt(input4.value)))
        textarea6.textContent = "Man present age = " + (((parseInt(input4.value) * parseInt(input2.value)) - ((parseInt(input3.value) * parseInt(textarea2.textContent)) + parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input3.value) + parseInt(input4.value)))
        que5ans1 = false;
        solutionpage.appendChild(textarea1);
        //solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque5ans1");
        que5ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque5ans1";
        a.appendChild(again)
    }
}
let que5ans2 = true;

function AgeQue5Ans2() {
    let a = document.getElementById("agesque5ans2");
    let input1 = document.getElementById("AGESQUE5ANSAVG");
    let input2 = document.getElementById("AGESQUE5ANSN");
    let input3 = document.getElementById("AGESQUE5ANSB1");
    let input4 = document.getElementById("AGESQUE5ANSB2");

    if (que5ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque5ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = "1) total avg = " + input1.value + "* 2 (2 is no of persons)";
        textarea2.textContent = (parseInt(input1.value) * parseInt(2))
        textarea3.textContent = "covert the equation = " + input4.value + "(x + " + input2.value + ") = (" + input3.value + "(" + textarea2.textContent + " - x + " + input2.value + ")";
        textarea4.textContent = "value of x = (" + input4.value + "*" + input2.value + ") - (" + input3.value + "*" + textarea2.textContent + "+" + input3.value + "*" + input2.value + ") / (" + input3.value + "+" + input4.value + ")";
        textarea5.textContent = "value of x = " + (((parseInt(input4.value) * parseInt(input2.value)) - ((parseInt(input3.value) * parseInt(textarea2.textContent)) + parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input3.value) + parseInt(input4.value)))
        textarea6.textContent = "Daughter present age = (total avg - x) = " + ((((parseInt(input4.value) * parseInt(input2.value)) - ((parseInt(input3.value) * parseInt(textarea2.textContent)) + parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input3.value) + parseInt(input4.value))) + parseInt(textarea2.textContent))
        que5ans2 = false;
        solutionpage.appendChild(textarea1);
        //solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque5ans2");
        que5ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque5ans2";
        a.appendChild(again)
    }
}
let que6ans1 = true;

function AgeQue6Ans1() {
    let a = document.getElementById("agesque6ans1");
    //let solutionpage = document.getElementById("solutionagesque1ans1");
    let input1 = document.getElementById("AGESQUE6ANSRAM1");
    let input2 = document.getElementById("AGESQUE6ANSMOHAN2");
    let input3 = document.getElementById("AGESQUE6ANSRAM2");
    let input4 = document.getElementById("AGESQUE6ANSANIL2");
    let input5 = document.getElementById("AGESQUE6ANSSUM");

    if (que6ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque6ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = ">> ram and mohan ratio  = 1 : " + input2.value + "/" + input1.value;
        textarea2.textContent = "ram and anil ratio = 1 : " + input4.value + "/" + input3.value;
        textarea3.textContent = "covert to equation is = 1 + " + input2.value + "/" + input1.value + " + " + input4.value + "/" + input3.value + " = " + input5.value;
        textarea4.textContent = "value of x = " + ((parseInt(input5.value)) / (parseInt(1) + (parseInt(input2.value) / parseInt(input1.value)) + (parseInt(input2.value) / parseInt(input1.value))))
        textarea5.textContent = Math.round((parseInt(input5.value)) / (parseInt(1) + (parseInt(input2.value) / parseInt(input1.value)) + (parseInt(input2.value) / parseInt(input1.value))))
        textarea6.textContent = "Mohan age is " + input2.value + "/" + input1.value + "* x = " + ((parseInt(input2.value) / parseInt(input1.value)) * parseInt(textarea5.textContent))
        que6ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque6ans1");
        que6ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque6ans1";
        a.appendChild(again)
    }
}
let que6ans2 = true;

function AgeQue6Ans2() {
    let a = document.getElementById("agesque6ans2");
    let input1 = document.getElementById("AGESQUE6ANSRAM1");
    let input2 = document.getElementById("AGESQUE6ANSMOHAN2");
    let input3 = document.getElementById("AGESQUE6ANSRAM2");
    let input4 = document.getElementById("AGESQUE6ANSANIL2");
    let input5 = document.getElementById("AGESQUE6ANSSUM");

    if (que6ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque6ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = ">> ram and mohan ratio  = 1 : " + input2.value + "/" + input1.value;
        textarea2.textContent = "ram and anil ratio = 1 : " + input4.value + "/" + input3.value;
        textarea3.textContent = "covert to equation is = 1 + " + input2.value + "/" + input1.value + " + " + input4.value + "/" + input3.value + " = " + input5.value;
        textarea4.textContent = "value of x = " + ((parseInt(input5.value)) / (parseInt(1) + (parseInt(input2.value) / parseInt(input1.value)) + (parseInt(input2.value) / parseInt(input1.value))))
        textarea5.textContent = Math.round((parseInt(input5.value)) / (parseInt(1) + (parseInt(input2.value) / parseInt(input1.value)) + (parseInt(input2.value) / parseInt(input1.value))))
        textarea6.textContent = "Ram age is  x = " + (parseInt(textarea5.textContent));
        que6ans2 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque6ans2");
        que6ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque6ans2";
        a.appendChild(again)
    }
}
let que6ans3 = true;

function AgeQue6Ans3() {
    let a = document.getElementById("agesque6ans3");
    let input1 = document.getElementById("AGESQUE6ANSRAM1");
    let input2 = document.getElementById("AGESQUE6ANSMOHAN2");
    let input3 = document.getElementById("AGESQUE6ANSRAM2");
    let input4 = document.getElementById("AGESQUE6ANSANIL2");
    let input5 = document.getElementById("AGESQUE6ANSSUM");

    if (que6ans3 === true) {
        let solutionpage = document.getElementById("solutionagesque6ans3");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = ">> ram and mohan ratio  = 1 : " + input2.value + "/" + input1.value;
        textarea2.textContent = "ram and anil ratio = 1 : " + input4.value + "/" + input3.value;
        textarea3.textContent = "covert to equation is = 1 + " + input2.value + "/" + input1.value + " + " + input4.value + "/" + input3.value + " = " + input5.value;
        textarea4.textContent = "value of x = " + ((parseInt(input5.value)) / (parseInt(1) + (parseInt(input2.value) / parseInt(input1.value)) + (parseInt(input2.value) / parseInt(input1.value))))
        textarea5.textContent = ((parseInt(input5.value)) / (parseInt(1) + (parseInt(input2.value) / parseInt(input1.value)) + (parseInt(input2.value) / parseInt(input1.value))))
        textarea6.textContent = "Anil age is " + input4.value + "/" + input3.value + "* x = " + ((parseInt(input4.value) / parseInt(input3.value)) * parseInt(textarea5.textContent))
        que6ans3 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque6ans3");
        que6ans3 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque6ans3";
        a.appendChild(again)
    }
}
let que7ans1 = true;

function AgeQue7Ans1() {
    let a = document.getElementById("agesque7ans1");
    let input1 = document.getElementById("AGESQUE7ANSDIFF");
    let input2 = document.getElementById("AGESQUE7ANSN");
    let input3 = document.getElementById("AGESQUE7ANSB1");
    let input4 = document.getElementById("AGESQUE7ANSB2");

    if (que7ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque7ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        textarea1.textContent = "convert into the equation = (" + input4.value + "* x + " + input2.value + " ) - (" + input3.value + "* x + " + input2.value + " = " + input1.value
        textarea2.textContent = "value of x = (" + input1.value + ")/(" + input4.value + " - " + input3.value + ")";
        textarea3.textContent = (parseInt(input1.value) / (parseInt(input4.value) - parseInt(input3.value)))
        textarea4.textContent = "Deepak present age = " + input4.value + " *  x + " + input2.value;
        textarea5.textContent = "Deepak present age = " + ((parseInt(input4.value) * parseInt(textarea3.textContent)) + parseInt(input2.value))
        que7ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        //solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionagesque7ans1");
        que7ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque7ans1";
        a.appendChild(again)
    }
}
let que7ans2 = true;

function AgeQue7Ans2() {
    let a = document.getElementById("agesque7ans2");
    let input1 = document.getElementById("AGESQUE7ANSDIFF");
    let input2 = document.getElementById("AGESQUE7ANSN");
    let input3 = document.getElementById("AGESQUE7ANSB1");
    let input4 = document.getElementById("AGESQUE7ANSB2");

    if (que7ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque7ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        textarea1.textContent = "convert into the equation = (" + input4.value + "* x + " + input2.value + " ) - (" + input3.value + "* x + " + input2.value + " = " + input1.value
        textarea2.textContent = "value of x = (" + input1.value + ")/(" + input4.value + " - " + input3.value + ")";
        textarea3.textContent = (parseInt(input1.value) / (parseInt(input4.value) - parseInt(input3.value)))
        textarea4.textContent = "Arun present age = " + input3.value + " *  x + " + input2.value
        textarea5.textContent = "Arun present age = " + ((parseInt(input3.value) * parseInt(textarea3.textContent)) + parseInt(input2.value))
        que7ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionagesque7ans2");
        que7ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque7ans2";
        a.appendChild(again)
    }
}
let que8ans1 = true;

function AgeQue8Ans1() {
    let a = document.getElementById("agesque8ans1");
    //let solutionpage = document.getElementById("solutionagesque1ans1");
    let input1 = document.getElementById("AGESQUE8ANSSUM");
    let input2 = document.getElementById("AGESQUE8ANSN");
    let input3 = document.getElementById("AGESQUE8ANSMOTHER");
    let input4 = document.getElementById("AGESQUE8ANSDUAGHTER");
    if (que8ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque8ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = ">> convert equation = " + input1.value + " - x +" + input2.value + " = " + input3.value + "( x + " + input2.value + ")";
        textarea2.textContent = "value of x = " + input1.value + " - (" + input3.value + " * " + input2.value + ")/(" + input3.value + " + " + input4.value + ")"
        textarea3.textContent = "x  =  " + ((parseInt(input1.value) - (parseInt(input3.value) * input2.value)) / (parseInt(input3.value) + parseInt(input4.value)))
        textarea4.textContent = (parseInt(input1.value) - (parseInt(input3.value) * input2.value)) / (parseInt(input3.value) + parseInt(input4.value))
        textarea5.textContent = "present ages mother and daughter = " + input3.value + " * " + textarea4.textContent + " and " + textarea4.textContent
        textarea6.textContent = "present ages mother and daughter = " + (parseInt(input3.value) * parseInt(textarea4.textContent)) + " and " + (parseInt(textarea4.textContent))
        que8ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque8ans1");
        que8ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque8ans1";
        a.appendChild(again)
    }
}
let que8ans2 = true;

function AgeQue8Ans2() {
    let a = document.getElementById("agesque8ans2");
    let input1 = document.getElementById("AGESQUE8ANSSUM");
    let input2 = document.getElementById("AGESQUE8ANSN");
    let input3 = document.getElementById("AGESQUE8ANSMOTHER");
    let input4 = document.getElementById("AGESQUE8ANSDUAGHTER");
    if (que8ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque8ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = ">> convert equation = " + input1.value + " - x +" + input2.value + " = " + input3.value + "( x + " + input2.value + ")";
        textarea2.textContent = "value of x = " + input1.value + " - (" + input3.value + " * " + input2.value + ")/(" + input3.value + " + " + input4.value + ")"
        textarea3.textContent = "x  =  " + ((parseInt(input1.value) - (parseInt(input3.value) * input2.value)) / (parseInt(input3.value) + parseInt(input4.value)))
        textarea4.textContent = (parseInt(input1.value) - (parseInt(input3.value) * input2.value)) / (parseInt(input3.value) + parseInt(input4.value))
        textarea5.textContent = "present age mother  = " + input3.value + " * " + textarea4.textContent;
        textarea6.textContent = "present age mother  = " + (parseInt(input3.value) * parseInt(textarea4.textContent))
        que8ans2 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque8ans2");
        que1ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque8ans2";
        a.appendChild(again)
    }
}
let que8ans3 = true;

function AgeQue8Ans3() {
    let a = document.getElementById("agesque8ans3");
    let input1 = document.getElementById("AGESQUE8ANSSUM");
    let input2 = document.getElementById("AGESQUE8ANSN");
    let input3 = document.getElementById("AGESQUE8ANSMOTHER");
    let input4 = document.getElementById("AGESQUE8ANSDUAGHTER");
    if (que8ans3 === true) {
        let solutionpage = document.getElementById("solutionagesque8ans3");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        textarea1.textContent = ">> convert equation = " + input1.value + " - x +" + input2.value + " = " + input3.value + "( x + " + input2.value + ")";
        textarea2.textContent = "value of x = " + input1.value + " - (" + input3.value + " * " + input2.value + ")/(" + input3.value + " + " + input4.value + ")"
        textarea3.textContent = "x  =  " + ((parseInt(input1.value) - (parseInt(input3.value) * input2.value)) / (parseInt(input3.value) + parseInt(input4.value)))
        textarea4.textContent = (parseInt(input1.value) - (parseInt(input3.value) * input2.value)) / (parseInt(input3.value) + parseInt(input4.value))
        textarea5.textContent = "present age daughter = " + textarea4.textContent
        textarea6.textContent = "present age daughter = " + (parseInt(textarea4.textContent))
        que8ans3 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);

    } else {
        let solutionpage = document.getElementById("solutionagesque8ans3");
        que8ans3 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque8ans3";
        a.appendChild(again)
    }
}
