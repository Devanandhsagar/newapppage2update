let que1ans1 = true;

function AgeQue1Ans1() {
    let a = document.getElementById("agesque1ans1");
    let input1 = document.getElementById("a1");
    let input2 = document.getElementById("a2");
    let input3 = document.getElementById("n1");
    let input4 = document.getElementById("b1");
    let input5 = document.getElementById("b2");
    let button = document.getElementById("AGEQUE1ANS1");
    if (que1ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque1ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide"
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
        button.textContent = "Show"
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
    let button = document.getElementById("AGEQUE1ANS2");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE1ANS3");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE1ANS4");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE1ANS5");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE1ANS6");
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
        button.textContent = "Hide";
        textarea1.textContent = " 6 ) convert equation =    b2(a1*x - n1) = b1(x-n1) ";
        textarea2.textContent = "Equation = " + input5.value + "(" + input1.value + "*x - " + input3.value + " = " + input4.value + "( x -" + input3.value + ")"
        textarea3.textContent = "x value =  (b2* n1 - b1*n1)/(b2*a1 - b1)";
        textarea4.textContent = "x = " + (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea5.textContent = (((parseInt(input5.value) * (parseInt(input3.value))) - (parseInt(input4.value) * (parseInt(input3.value)))) / ((parseInt(input5.value) * (parseInt(input1.value))) - parseInt(input4.value)))
        textarea6.textContent = "Difference of ages " + Math.abs((parseInt(input2.value) * parseInt(textarea5.textContent)) - (parseInt(input1.value) * (parseInt(textarea5.textContent))))
        que1ans6 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque1ans6");
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE2ANS1");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE2ANS2");
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
        button.textContent = "Hide";
        textarea1.textContent = "1) A age is " + input3.value + "* (" + input1.value + "/ (" + input1.value + "+" + input2.value + "))";
        textarea2.textContent = "A ages = " + (parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))))
        textarea3.textContent = "B ages = " + (parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))))))
        textarea4.textContent = "A age is after n years = " + ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))) - parseInt(input4.value)));
        textarea5.textContent = "B age is after n years = " + ((parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value)))))) - parseInt(input4.value));
        textarea6.textContent = "Ratio b1 and b2 = " + ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value))) - parseInt(input4.value))) + "/" + ((parseInt(input3.value) - ((parseInt(input3.value) * (parseInt(input1.value) / (parseInt(input1.value) + parseInt(input2.value)))))) - parseInt(input4.value))
        que2ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque2ans2");
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE3ANS1");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE3ANS2");
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
        button.textContent = "Hide";
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
        que3ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque3ans2");
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE4ANS1");
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
        button.textContent = "Hide";
        textarea1.textContent = "1) convert equation =" + input4.value + "(" + input1.value + "* x +" + input2.value + " = " + input3.value + "(x + " + input2.value + ")";
        textarea2.textContent = "value of x = (" + input4.value + "*" + input2.value + " - " + input3.value + "*" + input2.value + ") / (" + input4.value + "*" + input1.value + " - " + input3.value + ")";
        textarea3.textContent = "x = " + ((parseInt(input4.value) * parseInt(input2.value)) - (parseInt(input3.value) * parseInt(input2.value)) / ((parseInt(input4.value) * parseInt(input1.value)) - parseInt(input3.value)))
        textarea4.textContent = ((parseInt(input4.value) * parseInt(input2.value)) - (parseInt(input3.value) * parseInt(input2.value)) / ((parseInt(input4.value) * parseInt(input1.value)) - parseInt(input3.value)))
        textarea5.textContent = "present age Mr.Sanyal is = " + (parseInt(input1.value) * parseInt(textarea4.textContent))
        que4ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionagesque4ans1");
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE4ANS2");
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
        button.textContent = "Hide";
        textarea1.textContent = "1) convert equation =" + input4.value + "(" + input1.value + "* x +" + input2.value + " = " + input3.value + "(x + " + input2.value + ")";
        textarea2.textContent = "value of x = (" + input4.value + "*" + input2.value + " - " + input3.value + "*" + input2.value + ") / (" + input4.value + "*" + input1.value + " - " + input3.value + ")";
        textarea3.textContent = "x = " + ((parseInt(input4.value) * parseInt(input2.value)) - (parseInt(input3.value) * parseInt(input2.value)) / ((parseInt(input4.value) * parseInt(input1.value)) - parseInt(input3.value)))
        textarea4.textContent = ((parseInt(input4.value) * parseInt(input2.value)) - (parseInt(input3.value) * parseInt(input2.value)) / ((parseInt(input4.value) * parseInt(input1.value)) - parseInt(input3.value)))
        textarea5.textContent = "present age son is = " + (parseInt(textarea4.textContent))
        que4ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionagesque4ans2");
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE5ANS1");
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
        button.textContent = "Hide";
        textarea1.textContent = "1) total avg = " + input1.value + "* 2 (2 is no of persons)";
        textarea2.textContent = (parseInt(input1.value) * parseInt(2))
        textarea3.textContent = "covert the equation = " + input4.value + "(x + " + input2.value + ") = (" + input3.value + "(" + textarea2.textContent + " - x + " + input2.value + ")";
        textarea4.textContent = "value of x = (" + input4.value + "*" + input2.value + ") - (" + input3.value + "*" + textarea2.textContent + "+" + input3.value + "*" + input2.value + ") / (" + input3.value + "+" + input4.value + ")";
        textarea5.textContent = "value of x = " + (((parseInt(input4.value) * parseInt(input2.value)) - ((parseInt(input3.value) * parseInt(textarea2.textContent)) + parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input3.value) + parseInt(input4.value)))
        textarea6.textContent = "Man present age = " + (((parseInt(input4.value) * parseInt(input2.value)) - ((parseInt(input3.value) * parseInt(textarea2.textContent)) + parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input3.value) + parseInt(input4.value)))
        que5ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque5ans1");
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE5ANS2");
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
        button.textContent = "Hide";
        textarea1.textContent = "1) total avg = " + input1.value + "* 2 (2 is no of persons)";
        textarea2.textContent = (parseInt(input1.value) * parseInt(2))
        textarea3.textContent = "covert the equation = " + input4.value + "(x + " + input2.value + ") = (" + input3.value + "(" + textarea2.textContent + " - x + " + input2.value + ")";
        textarea4.textContent = "value of x = (" + input4.value + "*" + input2.value + ") - (" + input3.value + "*" + textarea2.textContent + "+" + input3.value + "*" + input2.value + ") / (" + input3.value + "+" + input4.value + ")";
        textarea5.textContent = "value of x = " + (((parseInt(input4.value) * parseInt(input2.value)) - ((parseInt(input3.value) * parseInt(textarea2.textContent)) + parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input3.value) + parseInt(input4.value)))
        textarea6.textContent = "Daughter present age = (total avg - x) = " + ((((parseInt(input4.value) * parseInt(input2.value)) - ((parseInt(input3.value) * parseInt(textarea2.textContent)) + parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input3.value) + parseInt(input4.value))) + parseInt(textarea2.textContent))
        que5ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque5ans2");
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE6ANS1");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE6ANS2");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE6ANS3");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE7ANS1");
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
        button.textContent = "Hide";
        textarea1.textContent = "convert into the equation = (" + input4.value + "* x + " + input2.value + " ) - (" + input3.value + "* x + " + input2.value + " = " + input1.value
        textarea2.textContent = "value of x = (" + input1.value + ")/(" + input4.value + " - " + input3.value + ")";
        textarea3.textContent = (parseInt(input1.value) / (parseInt(input4.value) - parseInt(input3.value)))
        textarea4.textContent = "Deepak present age = " + input4.value + " *  x + " + input2.value;
        textarea5.textContent = "Deepak present age = " + ((parseInt(input4.value) * parseInt(textarea3.textContent)) + parseInt(input2.value))
        que7ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionagesque7ans1");
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE7ANS2");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE8ANS1");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
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
    let button = document.getElementById("AGEQUE8ANS2");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
        que8ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque8ans2";
        a.appendChild(again)
    }
}
let que8ans3 = true;

function AgeQue8Ans3() {
    let a = document.getElementById("agesque8ans3");
    let button = document.getElementById("AGEQUE8ANS3");
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
        button.textContent = "Hide";
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
        button.textContent = "Show";
        que8ans3 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque8ans3";
        a.appendChild(again)
    }
}
let que9ans1 = true;

function AgeQue9Ans1() {
    let a = document.getElementById("agesque9ans1");
    let button = document.getElementById("AGEQUE9ANS1");
    let input1 = document.getElementById("AGESQUE9ANSSUBHASH");
    let input2 = document.getElementById("AGESQUE9ANSPRASAD");
    let input3 = document.getElementById("AGESQUE9ANSAMAR");
    let input4 = document.getElementById("AGESQUE9ANSDIFF");
    if (que9ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque9ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "Prasad and Amar diff = (" + input2.value + "* x ) - (" + input3.value + "* x ) = " + input4.value;
        textarea2.textContent = "value of x = " + input4.value + "/(" + input2.value + " - " + input3.value + ")";
        textarea3.textContent = "x  =  " + Math.round(parseInt(input4.value) / (parseInt(input2.value) - parseInt(input3.value)))
        textarea4.textContent = (parseInt(input4.value) / (parseInt(input2.value) - parseInt(input3.value)))
        textarea5.textContent = "Difference Subhash and prasad = (" + input1.value + "* x ) - (" + input2.value + "* x )";
        textarea6.textContent = "Difference Subhash and prasad = " + Math.abs((parseInt(input1.value) * parseInt(textarea4.textContent)) - (parseInt(input2.value) * parseInt(textarea4.textContent)))
        que9ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque9ans1");
        button.textContent = "Show";
        que9ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque9ans1";
        a.appendChild(again)
    }
}
let que9ans2 = true;

function AgeQue9Ans2() {
    let a = document.getElementById("agesque9ans2");
    let button = document.getElementById("AGEQUE9ANS2");
    let input1 = document.getElementById("AGESQUE9ANSSUBHASH");
    let input2 = document.getElementById("AGESQUE9ANSPRASAD");
    let input3 = document.getElementById("AGESQUE9ANSAMAR");
    let input4 = document.getElementById("AGESQUE9ANSDIFF");
    if (que9ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque9ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "Prasad and Amar diff = (" + input2.value + "* x ) - (" + input3.value + "* x ) = " + input4.value;
        textarea2.textContent = "value of x = " + input4.value + "/(" + input2.value + " - " + input3.value + ")";
        textarea3.textContent = "x  =  " + Math.round(parseInt(input4.value) / (parseInt(input2.value) - parseInt(input3.value)))
        textarea4.textContent = (parseInt(input4.value) / (parseInt(input2.value) - parseInt(input3.value)))
        textarea5.textContent = "Difference Subhash and Amar = (" + input1.value + "* x ) - (" + input3.value + "* x )"
        textarea6.textContent = "Difference Subhash and Amar = " + Math.abs((parseInt(input1.value) * parseInt(textarea4.textContent)) - (parseInt(input3.value) * parseInt(textarea4.textContent)))
        que9ans2 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque9ans2");
        button.textContent = "Show";
        que9ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque9ans2";
        a.appendChild(again)
    }
}
let que10ans1 = true;

function AgeQue10Ans1() {
    let a = document.getElementById("agesque10ans1");
    let button = document.getElementById("AGEQUE10ANS1");
    let input1 = document.getElementById("AGESQUE10ANSSONWIFENUM");
    let input2 = document.getElementById("AGESQUE10ANSSONWIFEDENO");
    let input3 = document.getElementById("AGESQUE10ANSWIFERAMNUM");
    let input4 = document.getElementById("AGESQUE10ANSWIFERAMDENO");
    let input5 = document.getElementById("AGESQUE10ANSRAMFATHERNUM");
    let input6 = document.getElementById("AGESQUE10ANSRAMFATHERDENO");
    let input7 = document.getElementById("AGESQUE10ANSFATHER");
    if (que10ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque10ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "Ram age is n times of father age = (" + input5.value + "/" + input6.value + ") * " + input7.value;
        textarea2.textContent = "Ram age = " + ((parseInt(input5.value) / parseInt(input6.value)) * parseInt(input7.value))
        textarea3.textContent = "Ram wife is n times the ram age = (" + input3.value + "/" + input4.value + ") * " + ((parseInt(input5.value) / parseInt(input6.value)) * parseInt(input7.value))
        textarea4.textContent = "Ram wife age = " + ((parseInt(input3.value) / parseInt(input4.value)) * ((parseInt(input5.value) / parseInt(input6.value)) * parseInt(input7.value)))
        textarea5.textContent = "Ram son age n times the ram wife age = (" + input5.value + "/" + input6.value + ") * " + ((parseInt(input3.value) / parseInt(input4.value)) * ((parseInt(input5.value) / parseInt(input6.value)) * parseInt(input7.value)))
        textarea6.textContent = "Ram son age = " + ((parseInt(input1.value) / parseInt(input2.value)) * ((parseInt(input3.value) / parseInt(input4.value)) * ((parseInt(input5.value) / parseInt(input6.value)) * parseInt(input7.value))))
        que10ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque10ans1");
        button.textContent = "Show";
        que10ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque10ans1";
        a.appendChild(again)
    }
}
let que11ans1 = true;

function AgeQue11Ans1() {
    let a = document.getElementById("agesque11ans1");
    let button = document.getElementById("AGEQUE11ANS1");
    let input1 = document.getElementById("AGESQUE11ANS1");
    let input2 = document.getElementById("AGESQUE11ANS2");
    let input3 = document.getElementById("AGESQUE11ANS3");
    let input4 = document.getElementById("AGESQUE11ANSN");
    let input5 = document.getElementById("AGESQUE11ANSSUM");
    if (que11ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque11ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "total sum = (sum+(n years ago * no fo persons) = " + input5.value + "(" + input4.value + " * 3 )"
        textarea2.textContent = "total sum = " + (parseInt(input5.value) + (parseInt(input4.value) * parseInt(3)));
        if ((parseInt(input1.value) >= parseInt(input2.value)) && (parseInt(input1.value) >= parseInt(input3.value))) {
            textarea3.textContent = parseInt(input1.value)
        } else if ((parseInt(input2.value) >= parseInt(input1.value)) && (parseInt(input2.value) >= parseInt(input3.value))) {
            textarea3.textContent = parseInt(input2.value);
        } else {
            textarea3.textContent = parseInt(input3.value);
        }
        textarea4.textContent = (parseInt(input1.value) + (parseInt(input2.value) + parseInt(input3.value)))
        textarea5.textContent = "The eldest person is = " + textarea3.textContent + "/" + textarea4.textContent + " * " + input5.value + "(" + input4.value + " * 3 )";
        textarea6.textContent = "The eldest person is = " + ((parseInt(textarea3.textContent) / parseInt(textarea4.textContent)) * (parseInt(input5.value) + (parseInt(input4.value) * parseInt(3))))
        que11ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque11ans1");
        button.textContent = "Show";
        que11ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque11ans1";
        a.appendChild(again)
    }
}
let que11ans2 = true;

function AgeQue11Ans2() {
    let a = document.getElementById("agesque11ans2");
    let button = document.getElementById("AGEQUE11ANS2");
    let input1 = document.getElementById("AGESQUE11ANS1");
    let input2 = document.getElementById("AGESQUE11ANS2");
    let input3 = document.getElementById("AGESQUE11ANS3");
    let input4 = document.getElementById("AGESQUE11ANSN");
    let input5 = document.getElementById("AGESQUE11ANSSUM");
    if (que11ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque11ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "total sum = (sum+(n years ago * no fo persons) = " + input5.value + "(" + input4.value + " * 3 )"
        textarea2.textContent = "total sum = " + (parseInt(input5.value) + (parseInt(input4.value) * parseInt(3)));
        if ((parseInt(input1.value) <= parseInt(input2.value)) && (parseInt(input1.value) <= parseInt(input3.value))) {
            textarea3.textContent = parseInt(input1.value)
        } else if ((parseInt(input2.value) <= parseInt(input1.value)) && (parseInt(input2.value) <= parseInt(input3.value))) {
            textarea3.textContent = parseInt(input2.value);
        } else {
            textarea3.textContent = parseInt(input3.value);
        }
        textarea4.textContent = (parseInt(input1.value) + (parseInt(input2.value) + parseInt(input3.value)))
        textarea5.textContent = "The Youngest person is = " + textarea3.textContent + "/" + textarea4.textContent + " * " + input5.value + "(" + input4.value + " * 3 )";
        textarea6.textContent = "The Youngest person is = " + ((parseInt(textarea3.textContent) / parseInt(textarea4.textContent)) * (parseInt(input5.value) + (parseInt(input4.value) * parseInt(3))))
        que11ans2 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque11ans2");
        button.textContent = "Show";
        que11ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque11ans2";
        a.appendChild(again)
    }
}
let que12ans1 = true;

function AgeQue12Ans1() {
    let a = document.getElementById("agesque12ans1");
    let button = document.getElementById("AGEQUE12ANS1");
    let input1 = document.getElementById("AGESQUE12ANSSUM");
    let input2 = document.getElementById("AGESQUE12ANSN");
    let input3 = document.getElementById("AGESQUE12ANSJAYANT");
    let input4 = document.getElementById("AGESQUE12ANSPREM");
    let input5 = document.getElementById("AGESQUE12ANSPARAS")
    if (que12ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque12ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = ">> convert equation = " + input3.value + " * x +" + input2.value + input4.value + " * x +" + input5.value + input3.value + " * x +" + input2.value + " = " + input1.value;
        textarea2.textContent = "value of x = " + input1.value + " - (" + input2.value + " + " + input2.value + " + " + input2.value + ")/(" + input3.value + " + " + input4.value + input5.value + ")";
        textarea3.textContent = "x  =  " + ((parseInt(input1.value) - (parseInt(input2.value) * parseInt(3))) / (parseInt(input3.value) + parseInt(input4.value) + parseInt(input5.value)))
        textarea4.textContent = ((parseInt(input1.value) - (parseInt(input2.value) * parseInt(3))) / (parseInt(input3.value) + parseInt(input4.value) + parseInt(input5.value)))
        textarea5.textContent = "present paras  age= " + input5.value + " * " + textarea4.textContent + " + " + input2.value
        textarea6.textContent = "present paras age = " + ((parseInt(input5.value) * parseInt(textarea4.textContent)) + parseInt(input2.value));
        que12ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque12ans1");
        button.textContent = "Show";
        que12ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque12ans1";
        a.appendChild(again)
    }
}
let que12ans2 = true;

function AgeQue12Ans2() {
    let a = document.getElementById("agesque12ans2");
    let button = document.getElementById("AGEQUE12ANS2");
    let input1 = document.getElementById("AGESQUE12ANSSUM");
    let input2 = document.getElementById("AGESQUE12ANSN");
    let input3 = document.getElementById("AGESQUE12ANSJAYANT");
    let input4 = document.getElementById("AGESQUE12ANSPREM");
    let input5 = document.getElementById("AGESQUE12ANSPARAS")
    if (que12ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque12ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = ">> convert equation = " + input3.value + " * x +" + input2.value + input4.value + " * x +" + input5.value + input3.value + " * x +" + input2.value + " = " + input1.value;
        textarea2.textContent = "value of x = " + input1.value + " - (" + input2.value + " + " + input2.value + " + " + input2.value + ")/(" + input3.value + " + " + input4.value + input5.value + ")";
        textarea3.textContent = "x  =  " + ((parseInt(input1.value) - (parseInt(input2.value) * parseInt(3))) / (parseInt(input3.value) + parseInt(input4.value) + parseInt(input5.value)))
        textarea4.textContent = ((parseInt(input1.value) - (parseInt(input2.value) * parseInt(3))) / (parseInt(input3.value) + parseInt(input4.value) + parseInt(input5.value)))
        textarea5.textContent = "present Jayant  age= " + input3.value + " * " + textarea4.textContent + " + " + input2.value;
        textarea6.textContent = "present Jayant age = " + ((parseInt(input3.value) * parseInt(textarea4.textContent)) + parseInt(input2.value));
        que12ans2 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque12ans2");
        button.textContent = "Show";
        que12ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque12ans2";
        a.appendChild(again)
    }
}
let que12ans3 = true;

function AgeQue12Ans3() {
    let a = document.getElementById("agesque12ans3");
    let button = document.getElementById("AGEQUE12ANS3");
    let input1 = document.getElementById("AGESQUE12ANSSUM");
    let input2 = document.getElementById("AGESQUE12ANSN");
    let input3 = document.getElementById("AGESQUE12ANSJAYANT");
    let input4 = document.getElementById("AGESQUE12ANSPREM");
    let input5 = document.getElementById("AGESQUE12ANSPARAS");
    if (que12ans3 === true) {
        let solutionpage = document.getElementById("solutionagesque12ans3");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = ">> convert equation = " + input3.value + " * x +" + input2.value + input4.value + " * x +" + input5.value + input3.value + " * x +" + input2.value + " = " + input1.value;
        textarea2.textContent = "value of x = " + input1.value + " - (" + input2.value + " + " + input2.value + " + " + input2.value + ")/(" + input3.value + " + " + input4.value + " + " + input5.value + ")";
        textarea3.textContent = "x  =  " + ((parseInt(input1.value) - (parseInt(input2.value) * parseInt(3))) / (parseInt(input3.value) + parseInt(input4.value) + parseInt(input5.value)))
        textarea4.textContent = ((parseInt(input1.value) - (parseInt(input2.value) * parseInt(3))) / (parseInt(input3.value) + parseInt(input4.value) + parseInt(input5.value)))
        textarea5.textContent = "present prem  age= " + input4.value + " * " + textarea4.textContent + " + " + input2.value
        textarea6.textContent = "present prem age = " + ((parseInt(input4.value) * parseInt(textarea4.textContent)) + parseInt(input2.value));
        que12ans3 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque12ans3");
        button.textContent = "Show";
        que12ans3 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque12ans3";
        a.appendChild(again)
    }
}
let que13ans1 = true;

function AgeQue13Ans1() {
    let a = document.getElementById("agesque13ans1");
    let button = document.getElementById("AGEQUE13ANS1");
    let input1 = document.getElementById("AGESQUE13ANSSUM");
    let input2 = document.getElementById("AGESQUE13ANSN");
    let input3 = document.getElementById("AGESQUE13ANSPRODUCT");
    let input4 = document.getElementById("AGESQUE13ANSMAN");
    if (que13ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque13ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        let textarea7 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "product is = ( x - " + input2.value + ") (" + input1.value + " -  x  - " + input2.value + ") = " + input3.value;
        textarea2.textContent = "From into hte Quaradic equation = " + (parseInt(input4.value) * parseInt(input4.value)) + "x^2 - " + (parseInt(input4.value) * parseInt(input1.value)) + " X - (" + (parseInt(input2.value) * parseInt(input1.value)) + " - " + (parseInt(input2.value) * parseInt(2)) + " - " + (parseInt(input3.value));
        let a = (parseInt(input4.value) * parseInt(input4.value));
        let b = (parseInt(input4.value) * parseInt(input1.value));
        let c = ((parseInt(input2.value) * parseInt(input1.value)) - (parseInt(input2.value) * parseInt(2)) + (parseInt(input3.value)))
        textarea3.textContent = "fromula =  -b + ((b**2 - 4*a*c)/(2*a))"
        textarea4.textContent = ((-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a));
        textarea5.textContent = ((-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a));
        if (textarea4.textContent <= textarea5.textContent) {
            textarea6.textContent = Math.abs(Math.round(textarea4.textContent));
        } else {
            textarea6.textContent = Math.abs(Math.round(textarea5.textContent));
        }
        textarea7.textContent = " man age = " + (textarea6.textContent);
        que13ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
        solutionpage.appendChild(textarea7);
    } else {
        let solutionpage = document.getElementById("solutionagesque13ans1");
        button.textContent = "Show";
        que13ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque13ans1";
        a.appendChild(again)
    }
}
let que13ans2 = true;

function AgeQue13Ans2() {
    let a = document.getElementById("agesque13ans2");
    let button = document.getElementById("AGEQUE13ANS2");
    let input1 = document.getElementById("AGESQUE13ANSSUM");
    let input2 = document.getElementById("AGESQUE13ANSN");
    let input3 = document.getElementById("AGESQUE13ANSPRODUCT");
    let input4 = document.getElementById("AGESQUE13ANSMAN");
    if (que13ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque13ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        let textarea7 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "product is = ( x - " + input2.value + ") (" + input1.value + " -  x  - " + input2.value + ") = " + input3.value;
        textarea2.textContent = "From into hte Quaradic equation = " + (parseInt(input4.value) * parseInt(input4.value)) + "x^2 - " + (parseInt(input4.value) * parseInt(input1.value)) + " X - (" + (parseInt(input2.value) * parseInt(input1.value)) + " - " + (parseInt(input2.value) * parseInt(2)) + " - " + (parseInt(input3.value));
        let a = (parseInt(input4.value) * parseInt(input4.value));
        let b = (parseInt(input4.value) * parseInt(input1.value));
        let c = ((parseInt(input2.value) * parseInt(input1.value)) - (parseInt(input2.value) * parseInt(2)) + (parseInt(input3.value)))
        textarea3.textContent = "fromula =  -b + ((b**2 - 4*a*c)/(2*a))"
        textarea4.textContent = ((-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a));
        textarea5.textContent = ((-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a));
        if (textarea4.textContent >= textarea5.textContent) {
            textarea6.textContent = Math.abs(Math.round(textarea4.textContent));
        } else {
            textarea6.textContent = Math.abs(Math.round(textarea5.textContent));
        }
        textarea7.textContent = " son age = " + (textarea6.textContent);
        que13ans2 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea7);
    } else {
        let solutionpage = document.getElementById("solutionagesque13ans2");
        button.textContent = "Show";
        que13ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque13ans2";
        a.appendChild(again)
    }
}
let que14ans1 = true;

function AgeQue14Ans1() {
    let a = document.getElementById("agesque14ans1");
    let button = document.getElementById("AGEQUE14ANS1");
    let input1 = document.getElementById("AGESQUE14ANSMAN");
    let input2 = document.getElementById("AGESQUE14ANSSON");
    let input3 = document.getElementById("AGESQUE14ANSPRODUCT");
    let input4 = document.getElementById("AGESQUE14ANSN");
    if (que14ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque14ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        let textarea7 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "product is = ( x * " + input1.value + ") * ( x  * " + input2.value + ") = " + input3.value;
        textarea2.textContent = "Value of x = " + input3.value + "/ (" + input1.value + " * " + input2.value + ")";
        textarea3.textContent = "x = " + (parseInt(input3.value) / (parseInt(input1.value) * parseInt(input2.value)))
        textarea4.textContent = Math.sqrt(parseInt(input3.value) / (parseInt(input1.value) * parseInt(input2.value)))
        textarea5.textContent = "man after " + input4.value + " = " + ((parseInt(input1.value) * textarea4.textContent) + (parseInt(input4.value)))
        textarea6.textContent = "son after " + input4.value + " = " + ((parseInt(input2.value) * textarea4.textContent) + (parseInt(input4.value)))
        textarea7.textContent = "Ratio of man : son  = " + ((parseInt(input1.value) * textarea4.textContent) + (parseInt(input4.value))) + " : " + ((parseInt(input2.value) * textarea4.textContent) + (parseInt(input4.value)));
        que14ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
        solutionpage.appendChild(textarea7);
    } else {
        let solutionpage = document.getElementById("solutionagesque14ans1");
        button.textContent = "Show";
        que14ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque14ans1";
        a.appendChild(again)
    }
}
let que15ans1 = true;

function AgeQue15Ans1() {
    let a = document.getElementById("agesque15ans1");
    let button = document.getElementById("AGEQUE15ANS1");
    let input1 = document.getElementById("AGESQUE15ANSSONAL");
    let input2 = document.getElementById("AGESQUE15ANSNITYA");
    let input3 = document.getElementById("AGESQUE15ANSSONAL1");
    let input4 = document.getElementById("AGESQUE15ANSNITYA1");
    if (que15ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque15ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "Conver onto the equation = " + input3.value + "( " + input2.value + " - x ) = " + input4.value + "( " + input1.value + " -  x )";
        textarea2.textContent = "Value of x = (" + input4.value + " * " + input1.value + " - " + input3.value + " * " + input2.value + ") / (" + input4.value + " - " + input3.value + ")"
        textarea3.textContent = "Value of x = " + (((parseInt(input4.value) * parseInt(input1.value)) - (parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input4.value) - parseInt(input3.value)))
        textarea4.textContent = (((parseInt(input4.value) * parseInt(input1.value)) - (parseInt(input3.value) * parseInt(input2.value))) / (parseInt(input4.value) - parseInt(input3.value)))
        textarea5.textContent = "Ratio of " + input3.value + " : " + input4.value + " is " + textarea4.textContent + " years  ago";
        que15ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionagesque15ans1");
        button.textContent = "Show";
        que15ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque15ans1";
        a.appendChild(again)
    }
}
let que16ans1 = true;

function AgeQue16Ans1() {
    let a = document.getElementById("agesque16ans1");
    let button = document.getElementById("AGEQUE16ANS1");
    let input1 = document.getElementById("AGESQUE16ANSN");
    let input2 = document.getElementById("AGESQUE16ANSMANOLD");
    let input3 = document.getElementById("AGESQUE16ANSHENCE");
    let input4 = document.getElementById("AGESQUE16ANSMAN");
    let input5 = document.getElementById("AGESQUE16ANSSON")
    if (que16ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque16ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = ">> convert Equation = " + input4.value + "(" + input2.value + "* x + " + input1.value + " + " + input3.value + " = " + input5.value + "( x + " + input1.value + " + " + input3.value + ")"
        textarea2.textContent = "value of x = (" + input5.value + " * " + input1.value + ") + " + input5.value + " * " + input3.value + " - (" + input4.value + " * " + input3.value + ") - (" + input4.value + " * " + input1.value + ")/(" + input4.value + " * " + input2.value + " - " + input5.value + ")";
        textarea3.textContent = "x  =  " + (((parseInt(input5.value) * parseInt(input1.value)) + (parseInt(input5.value) * parseInt(input3.value)) - (parseInt(input4.value) * parseInt(input3.value)) - (parseInt(input4.value) * parseInt(input1.value))) / ((parseInt(input4.value) * parseInt(input2.value)) - parseInt(input5.value)))
        textarea4.textContent = (((parseInt(input5.value) * parseInt(input1.value)) + (parseInt(input5.value) * parseInt(input3.value)) - (parseInt(input4.value) * parseInt(input3.value)) - (parseInt(input4.value) * parseInt(input1.value))) / ((parseInt(input4.value) * parseInt(input2.value)) - parseInt(input5.value)))
        textarea5.textContent = "present son  age= " + textarea4.textContent + " + " + input1.value
        textarea6.textContent = "present son age = " + (parseInt(textarea4.textContent) + parseInt(input1.value));
        que16ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque16ans1");
        button.textContent = "Show";
        que16ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque16ans1";
        a.appendChild(again)
    }
}
let que16ans2 = true;

function AgeQue16Ans2() {
    let a = document.getElementById("agesque16ans2");
    let button = document.getElementById("AGEQUE16ANS2");
    let input1 = document.getElementById("AGESQUE16ANSN");
    let input2 = document.getElementById("AGESQUE16ANSMANOLD");
    let input3 = document.getElementById("AGESQUE16ANSHENCE");
    let input4 = document.getElementById("AGESQUE16ANSMAN");
    let input5 = document.getElementById("AGESQUE16ANSSON")
    if (que16ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque16ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = ">> convert Equation = " + input4.value + "(" + input2.value + "* x + " + input1.value + " + " + input3.value + " = " + input5.value + "( x + " + input1.value + " + " + input3.value + ")"
        textarea2.textContent = "value of x = (" + input5.value + " * " + input1.value + ") + " + input5.value + " * " + input3.value + " - (" + input4.value + " * " + input3.value + ") - (" + input4.value + " * " + input1.value + ")/(" + input4.value + " * " + input2.value + " - " + input5.value + ")";
        textarea3.textContent = "x  =  " + (((parseInt(input5.value) * parseInt(input1.value)) + (parseInt(input5.value) * parseInt(input3.value)) - (parseInt(input4.value) * parseInt(input3.value)) - (parseInt(input4.value) * parseInt(input1.value))) / ((parseInt(input4.value) * parseInt(input2.value)) - parseInt(input5.value)))
        textarea4.textContent = (((parseInt(input5.value) * parseInt(input1.value)) + (parseInt(input5.value) * parseInt(input3.value)) - (parseInt(input4.value) * parseInt(input3.value)) - (parseInt(input4.value) * parseInt(input1.value))) / ((parseInt(input4.value) * parseInt(input2.value)) - parseInt(input5.value)))
        textarea5.textContent = "present Man  age= " + input2.value + " * " + textarea4.textContent + " + " + input1.value;
        textarea6.textContent = "present man age = " + ((parseInt(input2.value) * parseInt(textarea4.textContent)) + parseInt(input1.value));
        que16ans2 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque16ans2");
        button.textContent = "Show";
        que16ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque16ans2";
        a.appendChild(again)
    }
}
let que17ans1 = true;

function AgeQue17Ans1() {
    let a = document.getElementById("agesque17ans1");
    let input1 = document.getElementById("AGESQUE17ANSNOWMOTHER");
    let input2 = document.getElementById("AGESQUE17ANSN");
    let input3 = document.getElementById("AGESQUE17ANSAFTERMOTHER");
    let button = document.getElementById("AGEQUE17ANS1");
    if (que17ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque17ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = ">> convert equation =    (a1*x + n1) = b1(x + n1) ";
        textarea2.textContent = "Equation = (" + input1.value + "*x - " + input2.value + " = " + input3.value + "( x -" + input2.value + ")"
        textarea3.textContent = "x value =  (b1* n1 - n1)/(a1 - b1)";
        textarea4.textContent = "x = " + (((parseInt(input3.value) * (parseInt(input2.value))) - (parseInt(input2.value))) / ((parseInt(input1.value)) - parseInt(input3.value)))
        textarea5.textContent = (((parseInt(input3.value) * (parseInt(input2.value))) - (parseInt(input2.value))) / ((parseInt(input1.value)) - parseInt(input3.value)))
        textarea6.textContent = "present age of Duaghter = " + (parseInt(textarea5.textContent))
        que17ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque17ans1");
        button.textContent = "Show"
        que17ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque17ans1";
        a.appendChild(again)
    }
}
let que17ans2 = true;

function AgeQue17Ans2() {
    let a = document.getElementById("agesque17ans2");
    let input1 = document.getElementById("AGESQUE17ANSNOWMOTHER");
    let input2 = document.getElementById("AGESQUE17ANSN");
    let input3 = document.getElementById("AGESQUE17ANSAFTERMOTHER");
    let button = document.getElementById("AGEQUE17ANS2");
    if (que17ans2 === true) {
        let solutionpage = document.getElementById("solutionagesque17ans2");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = ">> convert equation =    (a1*x + n1) = b1(x + n1) ";
        textarea2.textContent = "Equation = (" + input1.value + "*x - " + input2.value + " = " + input3.value + "( x -" + input2.value + ")"
        textarea3.textContent = "x value =  (b1* n1 - n1)/(a1 - b1)";
        textarea4.textContent = "x = " + (((parseInt(input3.value) * (parseInt(input2.value))) - (parseInt(input2.value))) / ((parseInt(input1.value)) - parseInt(input3.value)))
        textarea5.textContent = (((parseInt(input3.value) * (parseInt(input2.value))) - (parseInt(input2.value))) / ((parseInt(input1.value)) - parseInt(input3.value)))
        textarea6.textContent = "present age of mother = " + (parseInt(textarea5.textContent) + " * " + parseInt(input1.value)) + " = " + (parseInt(textarea5.textContent) * parseInt(input1.value))
        que17ans2 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque17ans2");
        button.textContent = "Show"
        que17ans2 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque17ans2";
        a.appendChild(again)
    }
}
let que18ans1 = true;

function AgeQue18Ans1() {
    let a = document.getElementById("agesque18ans1");
    let input1 = document.getElementById("AGESQUE18ANSN");
    let input2 = document.getElementById("AGESQUE18ANSFATHER");
    let input3 = document.getElementById("AGESQUE18ANSHENCE");
    let input4 = document.getElementById("AGESQUE18ANSSON");
    let button = document.getElementById("AGEQUE18ANS1");
    if (que18ans1 === true) {
        let solutionpage = document.getElementById("solutionagesque18ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = ">> convert equation =    (a1*x + n1 + n2) = b1(x + n1 + n2) ";
        textarea2.textContent = "Equation = (" + input2.value + "*x - " + input1.value + " + " + input3.value + " = " + input4.value + "( x -" + input1.value + " + " + input3.value + ")"
        textarea3.textContent = "x value =  (b1* n1 + b1*n2 - n1 -n2)/(a1 - b1)";
        textarea4.textContent = "x = " + (((parseInt(input4.value) * (parseInt(input1.value))) + (parseInt(input4.value) * (parseInt(input3.value))) - (parseInt(input1.value)) - (parseInt(input3.value))) / ((parseInt(input2.value)) - parseInt(input4.value)))
        textarea5.textContent = (((parseInt(input4.value) * (parseInt(input1.value))) + (parseInt(input4.value) * (parseInt(input3.value))) - (parseInt(input1.value)) - (parseInt(input3.value))) / ((parseInt(input2.value)) - parseInt(input4.value)))
        textarea6.textContent = "present age ratio  = " + ((parseInt(textarea5.textContent) * parseInt(input2.value)) + (parseInt(input1.value))) + "/" + (parseInt(textarea5.textContent) + (parseInt(input1.value)))
        que18ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionagesque18ans1");
        button.textContent = "Show"
        que18ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionagesque18ans1";
        a.appendChild(again)
    }
}
let avgque1ans1 = true;

function AvgQue1Ans1() {
    let a = document.getElementById("avgque1ans1");
    let input1 = document.getElementById("AVGESQUE1ANSSTUDENTS");
    let input2 = document.getElementById("AVGESQUE1ANSVALUE");
    let button = document.getElementById("AVGQUE1ANS1");
    if (avgque1ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque1ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let count = parseInt(input1.value);
        let str = input2.value
        let arr = str.split(",")
        let total_avg = 0;
        for (let i = 0; i < count; i++) {
            total_avg += parseInt((arr[i]));
        };
        textarea1.textContent = ">>  Average = (no of elments)/(total no of elments) ";
        textarea2.textContent = "Average = (" + total_avg + ")/(" + count + ")"
        textarea3.textContent = "Average = " + (total_avg / count)
        avgque1ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionavgque1ans1");
        button.textContent = "Show"
        avgque1ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque1ans1";
        a.appendChild(again)
    }
}
let avgque2ans1 = true;

function AvgQue2Ans1() {
    let a = document.getElementById("avgque2ans1");
    let input1 = document.getElementById("AVGESQUE2ANSNUMBERS");
    let input2 = document.getElementById("AVGESQUE2ANSMEAN");
    let button = document.getElementById("AVGQUE2ANS1");
    if (avgque2ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque2ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = ">>  Sum = ( arithmetic mean *  no of numbers )";
        textarea2.textContent = "Sum = (" + input2.value + ")*(" + input1.value + ")"
        textarea3.textContent = "Average = " + (parseFloat(input2.value) * parseFloat(input1.value));
        avgque2ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionavgque2ans1");
        button.textContent = "Show"
        avgque2ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque2ans1";
        a.appendChild(again)
    }
}
let avgque3ans1 = true;

function AvgQue3Ans1() {
    let a = document.getElementById("avgque3ans1");
    let input1 = document.getElementById("AVGESQUE1ANSPEOPLE");
    let input2 = document.getElementById("AVGESQUE1ANSINCOME");
    let button = document.getElementById("AVGQUE3ANS1");
    if (avgque3ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque3ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        button.textContent = "Hide"
        let count = parseInt(input1.value);
        let str = input2.value
        let arr = str.split(",")
        let total_avg = 0;
        for (let i = 0; i < count; i++) {
            total_avg += parseInt((arr[i]));
        };
        let no_people = 0;
        let less_income = "";
        for (let j = 0; j < count; j++) {
            console.log(arr[j])
            if (parseInt(arr[j]) <= parseInt(total_avg / count)) {
                less_income += (arr[j]) + " ";
                no_people += parseInt(1);
            };
        };
        textarea1.textContent = "Average = (no of elments)/(total no of elments) ";
        textarea2.textContent = "Average = (" + total_avg + ")/(" + count + ")"
        textarea3.textContent = "Average = " + (total_avg / count);
        textarea4.textContent = arr;
        textarea5.textContent = "Average less than people is = " + less_income + " = " + no_people;
        avgque3ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
    } else {
        let solutionpage = document.getElementById("solutionavgque3ans1");
        button.textContent = "Show"
        avgque3ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque3ans1";
        a.appendChild(again)
    }
}
let avgque4ans1 = true;

function AvgQue4Ans1() {
    let a = document.getElementById("avgque4ans1");
    let input1 = document.getElementById("AVGESQUE2ANSSHOP1");
    let input2 = document.getElementById("AVGESQUE2ANSSHOP2");
    let button = document.getElementById("AVGQUE4ANS1");
    if (avgque4ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque4ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide"
        let str_1 = (input1.value).split(" ");
        let str_2 = (input2.value).split(" ");
        let no_of_books = parseInt(str_1[0]) + parseInt(str_2[0])
        let total_cost = parseInt(str_1[1]) + parseInt(str_2[1])
        textarea1.textContent = ">>  No of books = " + str_1[0] + "+ " + str_2[0] + " = " + no_of_books;
        textarea2.textContent = "Total cost = " + str_1[1] + " + " + str_2[1] + " = " + total_cost;
        textarea3.textContent = "Average paid per book = (" + total_cost + ")/(" + no_of_books + ")";
        textarea4.textContent = "Average paid per book = " + (parseInt(total_cost) / parseInt(no_of_books))
        avgque4ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionavgque4ans1");
        button.textContent = "Show"
        avgque4ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque4ans1";
        a.appendChild(again)
    }
}
let avgque5ans1 = true;

function AvgQue5Ans1() {
    let a = document.getElementById("avgque5ans1");
    let input1 = document.getElementById("AVGESQUE5ANSBOXES");
    let input2 = document.getElementById("AVGESQUE5ANSFRIST");
    let input3 = document.getElementById("AVGESQUE5ANSSECOND");
    let input4 = document.getElementById("AVGESQUE5ANSTHRID");
    let input5 = document.getElementById("AVGESQUE5ANSFOURTH");
    let input6 = document.getElementById("AVGESQUE5ANSFIFTH");
    let button = document.getElementById("AVGQUE5ANS1");
    if (avgque5ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque5ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        let thrid_box = (parseInt(input2.value) + (parseInt(input2.value) * ((parseFloat(input4.value) / 100))))
        let second_box = (parseInt(thrid_box) + (parseInt(thrid_box) * ((parseFloat(input3.value) / 100))))
        let fifth_box = ((parseInt(input5.value) * (100)) / (100 - parseFloat(input6.value)))
        button.textContent = "Hide"
        textarea1.textContent = " thrid box = " + input4.value + "% more than " + input2.value + " = " + thrid_box;
        textarea2.textContent = " second box = " + input3.value + "% more than " + thrid_box + " = " + second_box;
        textarea3.textContent = " Fifth box = " + input6.value + "% lighter than " + input5.value + " = " + fifth_box;
        textarea4.textContent = " avearage weight four heaviest boxes = (" + second_box + " + " + thrid_box + " + " + input5.value + " + " + fifth_box + ")/(4) = " + ((second_box + thrid_box + fifth_box + parseInt(input5.value)) / (4))
        textarea5.textContent = " average weight four lightest boxes = (" + second_box + " + " + thrid_box + " + " + input5.value + " + " + input2.value + ")/(4) = " + ((second_box + thrid_box + parseInt(input2.value) + parseInt(input5.value)) / (4))
        textarea6.textContent = "Difference average = (" + ((second_box + thrid_box + fifth_box + parseInt(input5.value)) / (4)) + " - " + ((second_box + thrid_box + parseInt(input2.value) + parseInt(input5.value)) / (4)) + ") = " + (((second_box + thrid_box + fifth_box + parseInt(input5.value)) / (4)) - ((second_box + thrid_box + parseInt(input2.value) + parseInt(input5.value)) / (4))) + " kg "
        avgque5ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea5);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionavgque5ans1");
        button.textContent = "Show"
        avgque5ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque5ans1";
        a.appendChild(again)
    }
}
let avgque6ans1 = true;

function AvgQue6Ans1() {
    let a = document.getElementById("avgque6ans1");
    let input1 = document.getElementById("AVGESQUE6ANSEVENODD");
    let input2 = document.getElementById("AVGESQUE6ANSNATURAL");
    let button = document.getElementById("AVGQUE6ANS1");
    if (avgque6ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque6ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let count = 0;
        if (input1.value === "even") {
            count = 2;
        } else {
            count = 1
        }
        textarea1.textContent = "formula = (n * (n+1))/2"
        textarea2.textContent = "mean = " + count + "/" + input2.value + " * " + (((input2.value) + "*" + (parseInt(input2.value) + parseInt(1))) + "/" + 2)
        textarea3.textContent = "mean = " + ((count / parseInt(input2.value)) * (((parseInt(input2.value) * (parseInt(input2.value) + parseInt(1))) / 2)));
        avgque6ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionavgque6ans1");
        button.textContent = "Show"
        avgque6ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque6ans1";
        a.appendChild(again)
    }
}
let avgque7ans1 = true;

function AvgQue7Ans1() {
    let a = document.getElementById("avgque7ans1");
    let input1 = document.getElementById("AVGESQUE7ANSMEAN");
    let input2 = document.getElementById("AVGESQUE7ANSVALUE");
    let button = document.getElementById("AVGQUE7ANS1");
    if (avgque7ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque7ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let str = input2.value
        let arr = str.split(" ");
        let total_avg = 0;
        for (let i = 0; i < arr.length; i++) {
            total_avg += parseInt((arr[i]));
        }
        textarea1.textContent = ">>  Average = (no of elments)/(total no of elments) ";
        textarea2.textContent = "Value of x = (" + total_avg + ")-(" + input1.value + " * " + (arr.length) + "1" + ")"
        textarea3.textContent = "x = " + Math.abs(total_avg - (parseInt(input1.value) * (parseInt(arr.length) + parseInt(1))))
        avgque7ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionavgque7ans1");
        button.textContent = "Show"
        avgque7ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque7ans1";
        a.appendChild(again)
    }
}
let avgque8ans1 = true;

function AvgQue8Ans1() {
    let a = document.getElementById("avgque8ans1");
    let input1 = document.getElementById("AVGESQUE8ANSMARKS");
    let input2 = document.getElementById("AVGESQUE8ANSAVG");
    let button = document.getElementById("AVGQUE8ANS1");
    if (avgque8ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque8ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide";
        textarea1.textContent = "science + " + input1.value + " = Sanskrit + mathematics";
        textarea2.textContent = "total average = (" + input2.value + "* 3 )";
        textarea3.textContent = "science + " + input1.value + " + science = " + (parseInt(input2.value) * 3);
        textarea4.textContent = "science = " + (((parseInt(input2.value) * 3) - (parseInt(input1.value))) / (parseInt(2)))
        avgque8ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionavgque8ans1");
        button.textContent = "Show"
        avgque8ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque8ans1";
        a.appendChild(again)
    }
}
let avgque9ans1 = true;

function AvgQue9Ans1() {
    let a = document.getElementById("avgque9ans1");
    let input1 = document.getElementById("AVGESQUE9ANSPRODUCTS");
    let input2 = document.getElementById("AVGESQUE9ANSLESSTHAN");
    let input3 = document.getElementById("AVGESQUE9ANSREMAINING");
    let button = document.getElementById("AVGQUE9ANS1");
    if (avgque9ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque9ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide";
        let str_1 = (input1.value).split(" ");
        let str_2 = (input2.value).split(" ");
        textarea1.textContent = "Minimum sp " + (parseInt(str_1[0]) - parseInt(1)) + " products = " + str_2[0] + " * " + str_2[1] + " + " + (parseInt(str_1[0]) - parseInt(1) - parseInt(str_2[1])) + " * " + input3.value;
        textarea2.textContent = "Minimum sp " + (parseInt(str_1[0]) - parseInt(1)) + " products = " + ((parseInt(str_2[0]) * parseInt(str_2[1])) + (parseInt(input3.value) * (parseInt(str_1[0]) - parseInt(1) - parseInt(str_2[1]))));
        textarea3.textContent = "Total " + str_1[0] + " produts = " + str_1[1] + " * " + str_1[0] + " = " + (parseInt(str_1[0]) * parseInt(str_1[1]))
        textarea4.textContent = "Greatest possible of most expensive selling product = " + ((parseInt(str_1[0]) * parseInt(str_1[1])) - ((parseInt(str_2[0]) * parseInt(str_2[1])) + (parseInt(input3.value) * (parseInt(str_1[0]) - parseInt(1) - parseInt(str_2[1])))))
        avgque9ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionavgque9ans1");
        button.textContent = "Show"
        avgque9ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque9ans1";
        a.appendChild(again)
    }
}
let avgque10ans1 = true;

function AvgQue10Ans1() {
    let a = document.getElementById("avgque10ans1");
    let input1 = document.getElementById("AVGESQUE10ANSMEAN1");
    let input2 = document.getElementById("AVGESQUE10ANSMEAN2");
    let input3 = document.getElementById("AVGESQUE10ANSMEAN3");
    let button = document.getElementById("AVGQUE10ANS1");
    if (avgque10ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque10ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide";
        let str_1 = (input1.value).split(" ");
        let str_2 = (input2.value).split(" ");
        let str_3 = (input3.value).split(" ");
        textarea1.textContent = "Total mean = (n1 * mean1 + n2 * mean2 + n3 * mean3 )/(no of obersvations)";
        textarea2.textContent = "Total mean = (" + str_1[0] + " * " + str_1[1] + " + " + str_2[0] + " * " + str_2[1] + " + " + str_3[0] + " * " + str_3[1] + ")/(" + str_1[0] + " + " + str_2[0] + " + " + str_3[0] + ")";
        textarea3.textContent = (parseInt((str_1[0]) * parseInt(str_1[1])) + (parseInt(str_2[0]) * parseInt(str_2[1])) + (parseInt(str_3[0]) * parseInt(str_3[1])))
        textarea4.textContent = "mean of " + (parseInt(str_1[0]) + parseInt(str_2[0]) + parseInt(str_3[0])) + " = " + (textarea3.textContent / (parseInt(str_1[0]) + parseInt(str_2[0]) + parseInt(str_3[0])));
        avgque10ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionavgque10ans1");
        button.textContent = "Show"
        avgque10ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque10ans1";
        a.appendChild(again)
    }
}
let avgque11ans1 = true;

function AvgQue11Ans1() {
    let a = document.getElementById("avgque11ans1");
    let input1 = document.getElementById("AVGESQUE11ANSMEAN1");
    let input2 = document.getElementById("AVGESQUE11ANSMEAN2");
    let button = document.getElementById("AVGQUE11ANS1");
    if (avgque11ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque11ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide";
        let str_1 = (input1.value).split(" ");
        let str_2 = (input2.value).split(" ");
        textarea1.textContent = "Average = (n1 * mean1 + n2 * mean2 )/(no of obersvations)";
        textarea2.textContent = "Average = (" + str_1[0] + " * " + str_1[1] + " + " + str_2[0] + " * " + str_2[1] + " + " + ")/(" + str_1[0] + " + " + str_2[0] + ")";
        textarea3.textContent = (parseInt((str_1[0]) * parseFloat(str_1[1])) + (parseInt(str_2[0]) * parseFloat(str_2[1])))
        textarea4.textContent = "Average weight all the boys " + (parseInt(str_1[0]) + parseInt(str_2[0])) + " = " + (textarea3.textContent / (parseInt(str_1[0]) + parseInt(str_2[0])));
        avgque11ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionavgque11ans1");
        button.textContent = "Show"
        avgque11ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque11ans1";
        a.appendChild(again)
    }
}
let avgque12ans1 = true;

function AvgQue12Ans1() {
    let a = document.getElementById("avgque12ans1");
    let input1 = document.getElementById("AVGESQUE12ANSFRIST");
    let input2 = document.getElementById("AVGESQUE12ANSSECOND");
    let input3 = document.getElementById("AVGESQUE12ANSTHRID");
    let input4 = document.getElementById("AVGESQUE12ANSAVGERAGE");
    let button = document.getElementById("AVGQUE12ANS1");
    if (avgque12ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque12ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        let textarea5 = document.createElement("p");
        let textarea6 = document.createElement("p");
        let str_4 = (input4.value).split("/");
        button.textContent = "Hide";
        textarea1.textContent = "convert into the reciprocal = " + input1.value + "x + " + input2.value + "x + " + input3.value + "x )";
        textarea2.textContent = "1 /" + input1.value + "x + " + "1 /" + input2.value + "x + " + "1 /" + input3.value + "x = " + str_4[0] + "/" + str_4[1] + " *  3";
        textarea3.textContent = (parseInt(1) / parseInt(input1.value)) + (parseInt(1) / parseInt(input2.value)) + (parseInt(1) / parseInt(input3.value))
        textarea4.textContent = "value of x = " + (textarea3.textContent / ((parseInt(str_4[0]) / parseInt(str_4[1])) * parseInt(3)));
        textarea5.textContent = (textarea3.textContent / ((parseInt(str_4[0]) / parseInt(str_4[1])) * parseInt(3)));
        textarea6.textContent = "value of numbers frist , second , thrid = " + (parseInt(input1.value) * (textarea5.textContent)) + " , " + (parseInt(input2.value) * (textarea5.textContent)) + " , " + (textarea5.textContent)
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea4);
        solutionpage.appendChild(textarea6);
    } else {
        let solutionpage = document.getElementById("solutionavgque12ans1");
        button.textContent = "Show"
        avgque12ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque12ans1";
        a.appendChild(again)
    }
}
let avgque13ans1 = true;

function AvgQue13Ans1() {
    let a = document.getElementById("avgque13ans1");
    let input1 = document.getElementById("AVGESQUE13ANSAVERAGE");
    let input2 = document.getElementById("AVGESQUE13ANSWRONG");
    let input3 = document.getElementById("AVGESQUE13ANSACUTAL");
    let button = document.getElementById("AVGQUE13ANS1");
    if (avgque13ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque13ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide";
        let str_1 = (input1.value).split(" ");
        textarea1.textContent = "Correct sum = " + str_1[0] + " * " + str_1[1] + " + " + input3.value + " + " + input2.value;
        textarea2.textContent = "Sum" + ((parseInt(str_1[0]) * parseInt(str_1[1])) + (parseInt(input3.value) - (parseInt(input2.value))));
        textarea3.textContent = "Average =  sum/no of girls =  " + ((parseInt(str_1[0]) * parseInt(str_1[1])) + (parseInt(input3.value) - (parseInt(input2.value)))) + " / " + parseInt(str_1[0])
        textarea4.textContent = "Actual average height  = " + (((parseInt(str_1[0]) * parseInt(str_1[1])) + (parseInt(input3.value) - (parseInt(input2.value)))) / parseInt(str_1[0]));
        avgque13ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionavgque13ans1");
        button.textContent = "Show"
        avgque13ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque13ans1";
        a.appendChild(again)
    }
}
let avgque14ans1 = true;

function AvgQue14Ans1() {
    let a = document.getElementById("avgque14ans1");
    let input1 = document.getElementById("AVGESQUE14ANSFIRST");
    let input2 = document.getElementById("AVGESQUE14ANSLAST");
    let input3 = document.getElementById("AVGESQUE14ANSWHOLE");
    let button = document.getElementById("AVGQUE14ANS1");
    if (avgque14ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque14ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide";
        let str_1 = (input1.value).split(" ");
        let str_2 = (input2.value).split(" ");
        textarea1.textContent = " temp of fourth day = " + str_1[0] + " * " + str_1[1] + " + " + str_2[0] + " * " + str_2[1] + " - (7 * " + input3.value + ")";
        textarea2.textContent = "Temp of fourth day = " + ((parseInt(str_1[0]) * parseFloat(str_1[1])) + (parseInt(str_2[0]) * parseFloat(str_2[1]))) + " - " + (parseInt(7) * parseFloat(input3.value));
        textarea3.textContent = "Temp of fourth day =  " + (((parseInt(str_1[0]) * parseFloat(str_1[1])) + (parseInt(str_2[0]) * parseFloat(str_2[1]))) - (parseInt(7) * parseFloat(input3.value))) + " 'C";
        avgque14ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionavgque14ans1");
        button.textContent = "Show"
        avgque14ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque14ans1";
        a.appendChild(again)
    }
}
let avgque15ans1 = true;

function AvgQue15Ans1() {
    let a = document.getElementById("avgque15ans1");
    let input1 = document.getElementById("AVGESQUE15ANSSTUDENTS");
    let input2 = document.getElementById("AVGESQUE15ANSRSIES");
    let button = document.getElementById("AVGQUE15ANS1");
    if (avgque15ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque15ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide";
        let str_1 = (input1.value).split(" ");
        textarea1.textContent = " Weight of the teacher = " + str_1[0] + " * " + str_1[1] + " - " + (parseInt(str_1[0]) + parseInt(1)) + " * " + (parseFloat(str_1[1]) + parseFloat(parseInt(input2.value) / parseInt(1000)));
        textarea2.textContent = "Weight of the teacher = " + ((parseInt(str_1[0]) * parseFloat(str_1[1])) - (parseInt(str_1[0]) + parseInt(1)) * (parseFloat(str_1[1]) + parseFloat((parseInt(input2.value) / parseInt(1000)))));
        textarea3.textContent = "Weight of the teacher =  " + Math.abs((parseInt(str_1[0]) * parseFloat(str_1[1])) - (parseInt(str_1[0]) + parseInt(1)) * (parseFloat(str_1[1]) + parseFloat(parseInt(input2.value) / parseInt(1000)))) + " kg";
        avgque15ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionavgque15ans1");
        button.textContent = "Show"
        avgque15ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque15ans1";
        a.appendChild(again)
    }
}
let avgque16ans1 = true;

function AvgQue16Ans1() {
    let a = document.getElementById("avgque16ans1");
    let input1 = document.getElementById("AVGESQUE16ANSSCORE");
    let input2 = document.getElementById("AVGESQUE16ANSPASSED");
    let input3 = document.getElementById("AVGESQUE16ANSFAILED");
    let button = document.getElementById("AVGQUE16ANS1");
    if (avgque16ans1 === true) {
        let solutionpage = document.getElementById("solutionavgque16ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide";
        let str_1 = (input1.value).split(" ");
        textarea1.textContent = "From alligation method  passed students = " + input3.value + " - " + str_1[1] + " = " + Math.abs(parseInt(input3.value) - parseInt(str_1[1]));
        textarea2.textContent = "From alligation method  Falied students = " + input2.value + " - " + str_1[1] + " = " + (parseInt(input2.value) - parseInt(str_1[1]));
        textarea3.textContent = "No of students Failed in exam = (" + Math.abs(parseInt(input2.value) - parseInt(str_1[1])) + " / " + Math.abs(parseInt(input3.value) - parseInt(str_1[1])) + " + " + (parseInt(input2.value) - parseInt(str_1[1])) + ") * " + str_1[0];
        textarea4.textContent = "No of students Failed in exam = " + (Math.abs(parseInt(input2.value) - parseInt(str_1[1])) / (Math.abs(parseInt(input3.value) - parseInt(str_1[1])) + (parseInt(input2.value) - parseInt(str_1[1])))) * parseInt(str_1[0]);
        avgque16ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionavgque16ans1");
        button.textContent = "Show"
        avgque16ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionavgque14ans1";
        a.appendChild(again)
    }
}
let racesque1ans1 = true;

function RacesQue1Ans1() {
    let a = document.getElementById("racesque1ans1");
    let input1 = document.getElementById("RACESQUE1ANSLENGTH");
    let input2 = document.getElementById("RACESQUE1ANSADIS");
    let input3 = document.getElementById("RACESQUE1ANSBDIS");
    let button = document.getElementById("RACESQUE1ANS1");
    if (racesque1ans1 === true) {
        let solutionpage = document.getElementById("solutionracesque1ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "Difference between a and b time = " + input3.value + " - " + input2.value + " = " + Math.abs(parseInt(input3.value) - parseInt(input2.value));
        textarea2.textContent = "A beats B = (Length/b cover time)*Difference a and b = (" + input1.value + "/" + input3.value + ") * " + Math.abs(parseInt(input3.value) - parseInt(input2.value));
        textarea3.textContent = "A beats b = " + (parseInt(input1.value) / parseInt(input3.value)) * (Math.abs(parseInt(input3.value) - parseInt(input2.value))) + " meters";
        racesque1ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionracesque1ans1");
        button.textContent = "Show"
        racesque1ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionracesque1ans1";
        a.appendChild(again)
    }
}
let racesque2ans1 = true;

function RacesQue2Ans1() {
    let a = document.getElementById("racesque2ans1");
    let input1 = document.getElementById("RACESQUE1ANSAB");
    let input2 = document.getElementById("RACESQUE1ANSBC");
    let button = document.getElementById("RACESQUE2ANS1");
    if (racesque2ans1 === true) {
        let solutionpage = document.getElementById("solutionracesque2ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "A : B  = " + 1000 + " : " + (parseInt(1000) - parseInt(input1.value)) + " and  B : C = " + 1000 + " : " + (parseInt(1000) - parseInt(input2.value))
        textarea2.textContent = "B : C =  (A/B)*(B/C) = (" + 1000 + " / " + (parseInt(1000) - parseInt(input1.value)) + ") * (" + 1000 + " / " + (parseInt(1000) - parseInt(input2.value)) + " = " + 1000 + " : " + (parseInt(1000) / ((parseInt(1000) / (parseInt(1000) - parseInt(input1.value))) * (1000 / (parseInt(1000) - parseInt(input2.value)))));
        textarea3.textContent = "A beats C = " + 1000 + " - " + (parseInt(1000) / ((parseInt(1000) / (parseInt(1000) - parseInt(input1.value))) * (1000 / (parseInt(1000) - parseInt(input2.value))))) + " = " + Math.abs(parseInt(1000) - (parseInt(1000) / ((parseInt(1000) / (parseInt(1000) - parseInt(input1.value))) * (1000 / (parseInt(1000) - parseInt(input2.value))))));
        racesque2ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionracesque2ans1");
        button.textContent = "Show"
        racesque2ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionracesque2ans1";
        a.appendChild(again)
    }
}
let racesque3ans1 = true;

function RacesQue3Ans1() {
    let a = document.getElementById("racesque3ans1");
    let input1 = document.getElementById("RACESQUE3ANSAB");
    let input2 = document.getElementById("RACESQUE3ANSAC");
    let button = document.getElementById("RACESQUE3ANS1");
    if (racesque3ans1 === true) {
        let solutionpage = document.getElementById("solutionracesque3ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "A : B : C = " + 1000 + " : (" + 1000 + " - " + input1.value + ") : (" + 1000 + " - " + input2.value + ")";
        textarea2.textContent = "A : B : C = " + 1000 + " : " + (parseInt(1000) - parseInt(input1.value)) - (parseInt(1000) - parseInt(input2.value));
        textarea3.textContent = "In a " + (parseInt(1000) - parseInt(input1.value)) + "m B can give c = " + (parseInt(1000) - parseInt(input1.value)) + " - " + (parseInt(1000) - parseInt(input2.value)) + " = " + Math.abs((parseInt(1000) - parseInt(input1.value)) - (parseInt(1000) - parseInt(input2.value)));
        textarea4.textContent = " In a 1000m race  B and C start = ((" + Math.abs((parseInt(1000) - parseInt(input1.value)) - (parseInt(1000) - parseInt(input2.value))) + "/" + (parseInt(1000) - parseInt(input1.value)) + ")*" + 1000 + ") = " + (((parseInt(1000) - parseInt(input1.value)) - (parseInt(1000) - parseInt(input2.value))) / (parseInt(1000) - parseInt(input1.value))) * parseInt(1000)+ " m";
        racesque3ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionracesque3ans1");
        button.textContent = "Show"
        racesque3ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionracesque3ans1";
        a.appendChild(again)
    }
}
let racesque4ans1 = true;

function RacesQue4Ans1() {
    let a = document.getElementById("racesque4ans1");
    let input1 = document.getElementById("RACESQUE4ANSLENGTH");
    let input2 = document.getElementById("RACESQUE4ANSAB");
    let input3 = document.getElementById("RACESQUE4ANSBC");
    let button = document.getElementById("RACESQUE4ANS1");
    if (racesque4ans1 === true) {
        let solutionpage = document.getElementById("solutionracesque4ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide"
        let str = input1.value.split(" ");
        textarea1.textContent = "A : B = " + str[0] + " : (" + str[0] + " - " + input2.value + ") = " + str[0] + " : " + (parseInt(str[0]) - parseInt(input2.value));
        textarea2.textContent = "B : C = " + str[1] + " : (" + str[1] + " - " + input3.value + ") = " + str[1] + " : " + (parseInt(str[1]) - parseInt(input3.value));
        let ar_1 = 100;
        let ar_2 = 90;
        textarea3.textContent = "A : B : C = " + str[0] + " : " + (parseInt(str[0]) - parseInt(input2.value)) + " : " + (parseInt(9) * parseInt(ar_2));
        textarea4.textContent = "In a 500 meters race A beats C = " + ((parseInt(str[0]) / parseInt(2)) + " - " + ((parseInt(9) * parseInt(ar_2)) / parseInt(2))) + " = " + (((parseInt(str[0]) / parseInt(2))) - ((parseInt(9) * parseInt(ar_2)) / parseInt(2))) + " m";
        racesque4ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionracesque4ans1");
        button.textContent = "Show"
        racesque4ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionracesque4ans1";
        a.appendChild(again)
    }
}
let racesque5ans1 = true;

function RacesQue5Ans1() {
    let a = document.getElementById("racesque5ans1");
    let input1 = document.getElementById("RACESQUE5ANSAB");
    let input2 = document.getElementById("RACESQUE5ANSBC");
    let input3 = document.getElementById("RACESQUE5ANSAC");
    let input4 = document.getElementById("RACESQUE5ANSN");
    let button = document.getElementById("RACESQUE5ANS1");
    if (racesque5ans1 === true) {
        let solutionpage = document.getElementById("solutionracesque5ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "A beats C  " + input3.value + " = " + (parseInt(input1.value) + " + " + parseInt(input2.value)) + "  = " + (parseInt(input1.value) + parseInt(input2.value)) + " sec"
        textarea2.textContent = input4.value + "m covered by C = (" + (parseInt(input1.value) + parseInt(input2.value)) + "/" + input3.value + ") * " + input4.value + " = " + (((parseInt(input1.value) + parseInt(input2.value)) / parseInt(input3.value)) * (parseInt(input4.value))) + " sec";
        textarea3.textContent = "A covers " + input4.value + "m in =  " + ((((parseInt(input1.value) + parseInt(input2.value)) / parseInt(input3.value)) * (parseInt(input4.value))) - (parseInt(input1.value) + parseInt(input2.value))) + " sec";
        racesque5ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionracesque5ans1");
        button.textContent = "Show"
        racesque5ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionracesque5ans1";
        a.appendChild(again)
    }
}
let racesque6ans1 = true;

function RacesQue6Ans1() {
    let a = document.getElementById("racesque6ans1");
    let input1 = document.getElementById("RACESQUE6ANSLENGTH");
    let input2 = document.getElementById("RACESQUE6ANSSECONDS");
    let input3 = document.getElementById("RACESQUE6ANSSPEED");
    let button = document.getElementById("RACESQUE6ANS1");
    if (racesque6ans1 === true) {
        let solutionpage = document.getElementById("solutionracesque6ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide"
        racesque6ans1 = false;
        textarea1.textContent = "A's speed = " + input3.value + " km/hr = " + input3.value + " *  5/18  = " + (parseInt(input3.value) * ((parseInt(5)) / parseInt(18))) + " m/sec";
        textarea2.textContent = "A Time takes cover " + input1.value + " m = " + input1.value + " * 1/" + (parseInt(input3.value) * ((parseInt(5)) / parseInt(18))) + " = " + (parseInt(input1.value) * (parseFloat(parseInt(1) / (parseInt(input3.value) * ((parseInt(5)) / parseInt(18)))))) + " sec";
        textarea3.textContent = "B Time takes cover " + input1.value + " m = " + (parseInt(input1.value) * (parseFloat(parseInt(1) / (parseInt(input3.value) * ((parseInt(5)) / parseInt(18)))))) + " + " + input2.value + " = " + ((parseInt(input1.value) * (parseFloat(parseInt(1) / (parseInt(input3.value) * ((parseInt(5)) / parseInt(18)))))) + (parseInt(input2.value))) + " sec";
        textarea4.textContent = "B speed = " + input1.value + "/" + ((parseInt(input1.value) * (parseFloat(parseInt(1) / (parseInt(input3.value) * ((parseInt(5)) / parseInt(18)))))) + (parseInt(input2.value))) + "* 18/5 Km/hr = " + ((parseInt(input1.value) / ((parseInt(input1.value) * (parseFloat(parseInt(1) / (parseInt(input3.value) * ((parseInt(5)) / parseInt(18)))))) + (parseInt(input2.value)))) * (parseFloat(parseInt(18) / parseInt(5)))) + " Km/hr";
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionracesque6ans1");
        button.textContent = "Show"
        racesque6ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionracesque6ans1";
        a.appendChild(again)
    }
}
let racesque7ans1 = true;

function RacesQue7Ans1() {
    let a = document.getElementById("racesque7ans1");
    let input1 = document.getElementById("RACESQUE7ANSLENGTH");
    let input2 = document.getElementById("RACESQUE7ANSBA");
    let input3 = document.getElementById("RACESQUE7ANSBC");
    let button = document.getElementById("RACESQUE7ANS1");
    if (racesque7ans1 === true) {
        let solutionpage = document.getElementById("solutionracesque7ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "B : A  = " + input1.value + " : " + input1.value + " - " + input2.value + " = " + input1.value + " : " + (parseInt(input1.value) - parseInt(input2.value));
        textarea2.textContent = "C : B  = " + input1.value + " : " + input1.value + " - " + input3.value + " = " + input1.value + " : " + (parseInt(input1.value) - parseInt(input3.value));
        textarea3.textContent = "C/A = (C/B)*(B/A) = (" + input1.value + "/" + (parseInt(input1.value) - parseInt(input3.value)) + ") * (" + input1.value + "/" + (parseInt(input1.value) - parseInt(input2.value)) + ") = " + parseInt(input1.value) + "/" + (parseInt(input1.value) / ((parseInt(input1.value) / (parseInt(input1.value) - parseInt(input3.value))) * (parseInt(input1.value) / (parseInt(input1.value) - parseInt(input2.value)))));
        textarea4.textContent = "C can give to A start = " + input1.value + " - " + (parseInt(input1.value) / ((parseInt(input1.value) / (parseInt(input1.value) - parseInt(input3.value))) * (parseInt(input1.value) / (parseInt(input1.value) - parseInt(input2.value))))) + " = " + (parseInt(input1.value) - (parseInt(input1.value) / ((parseInt(input1.value) / (parseInt(input1.value) - parseInt(input3.value))) * (parseInt(input1.value) / (parseInt(input1.value) - parseInt(input2.value)))))) + " m";
        racesque7ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionracesque7ans1");
        button.textContent = "Show"
        racesque7ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionracesque7ans1";
        a.appendChild(again)
    }
}
let racesque8ans1 = true;

function RacesQue8Ans1() {
    let a = document.getElementById("racesque8ans1");
    let input1 = document.getElementById("RACESQUE8ANSLENGTH");
    let input2 = document.getElementById("RACESQUE8ANSRATIO");
    let input3 = document.getElementById("RACESQUE8ANSA");
    let button = document.getElementById("RACESQUE8ANS1");
    if (racesque8ans1 === true) {
        let solutionpage = document.getElementById("solutionracesque8ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let r = input2.value.split(" ")
        textarea1.textContent = " A as cover = " + input1.value + " - " + input3.value + " = " + (parseInt(input1.value) - parseInt(input3.value)) + " m";
        textarea2.textContent = "While A covers " + (parseInt(input1.value) - parseInt(input3.value)) + " , B covers = (" + r[1] + "/" + r[0] + ")*(" + input1.value + ") = " + (parseFloat(parseInt(r[1]) / parseInt(r[0])) * (parseInt(input1.value) - parseInt(input3.value)));
        textarea3.textContent = "A wins by = (" + input1.value + " - " + (parseFloat(parseInt(r[1]) / parseInt(r[0])) * parseInt(input1.value)) + ") = " + (parseInt(input1.value) - (parseFloat(parseInt(r[1]) / parseInt(r[0])) * (parseInt(input1.value) - parseInt(input3.value)))) + " m";
        racesque8ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionracesque8ans1");
        button.textContent = "Show"
        racesque8ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionracesque8ans1";
        a.appendChild(again)
    }
}
let stocksque1ans1 = true;

function StocksQue1Ans1() {
    let a = document.getElementById("stocksque1ans1");
    let input1 = document.getElementById("STOCKSQUE1ANSSTOCK");
    let input2 = document.getElementById("STOCKSQUE1ANSDISCOUNT");
    let input3 = document.getElementById("STOCKSQUE1ANSBROKERAGE");
    let button = document.getElementById("STOCKSQUE1ANS1");
    if (stocksque1ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque1ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let r = input3.value.split("/")
        textarea1.textContent = " Cost price  = " + input1.value + " + " + r[0] + "/" + r[1] + " - " + input2.value;
        textarea2.textContent = "Cost price =  " + (parseInt(input1.value) + " + " + (parseFloat(parseInt(r[1]) / parseInt(r[0]))) + " - " + input2.value);
        textarea3.textContent = "Cost price = " + (parseInt(input1.value) + (parseFloat(parseInt(r[1]) / parseInt(r[0]))) - parseInt(input2.value));
        stocksque1ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque1ans1");
        button.textContent = "Show"
        stocksque1ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque1ans1";
        a.appendChild(again)
    }
}
let stocksque2ans1 = true;

function StocksQue2Ans1() {
    let a = document.getElementById("stocksque2ans1");
    let input1 = document.getElementById("STOCKSQUE2ANSSTOCK");
    let input2 = document.getElementById("STOCKSQUE2ANSBROKERAGE");
    let button = document.getElementById("STOCKSQUE2ANS1");
    if (stocksque2ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque2ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let r = input2.value.split(" ")
        textarea1.textContent = "Cash realised = " + input1.value + " - " + r[0] + "/" + r[1];
        textarea2.textContent = "Cash realised " + (parseInt(input1.value) + " - " + (parseFloat(parseInt(r[1]) / parseInt(r[0]))))
        textarea3.textContent = " Cash realised = " + (parseInt(input1.value) - (parseFloat(parseInt(r[1]) / parseInt(r[0]))))
        stocksque2ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque2ans1");
        button.textContent = "Show"
        stocksque2ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque2ans1";
        a.appendChild(again)
    }
}
let stocksque3ans1 = true;

function StocksQue3Ans1() {
    let a = document.getElementById("stocksque3ans1");
    let input1 = document.getElementById("STOCKSQUE3ANSMARKET");
    let input2 = document.getElementById("STOCKSQUE3ANSPURCHASED");
    let input3 = document.getElementById("STOCKSQUE3ANSBROKERAGE");
    let button = document.getElementById("STOCKSQUE3ANS1");
    if (stocksque3ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque3ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "Cost price = " + input1.value + " + " + input3.value + "/100 * " + parseInt(input1.value);
        textarea2.textContent = "cost price = " + (parseInt(input1.value) + ((parseInt(input3.value) / parseInt(100)) * parseInt(input1.value)));
        textarea3.textContent = "No of shares = " + input2.value + "/" + (parseInt(input1.value) + ((parseInt(input3.value) / parseInt(100)) * parseInt(input1.value))) + " = " + (parseInt(input2.value) / (parseInt(input1.value) + ((parseInt(input3.value) / parseInt(100)) * parseInt(input1.value))));
        stocksque3ans1 = false;
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque3ans1");
        button.textContent = "Show"
        stocksque3ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque3ans1";
        a.appendChild(again)
    }
}
let stocksque4ans1 = true;

function StocksQue4Ans1() {
    let a = document.getElementById("stocksque4ans1");
    let input1 = document.getElementById("STOCKSQUE4ANSSTOCK");
    let button = document.getElementById("STOCKSQUE4ANS1");
    if (stocksque4ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque4ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "Money invest " + input2.value + ", income dervied =  " + input1.value;
        textarea2.textContent = "By investing 100 , income dervied = " + input2.value + "/" + input1.value + ") * 100 ) = " + ((parseInt(input2.value) / parseInt(input1.value)) * parseInt(100));
        textarea3.textContent = "interest obtained = " + ((parseInt(input2.value) / parseInt(input1.value)) * parseInt(100));
        stocksque4ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque4ans1");
        button.textContent = "Show"
        stocksque4ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque4ans1";
        a.appendChild(again)
    }
}
let stocksque5ans1 = true;

function StocksQue5Ans1() {
    let a = document.getElementById("stocksque5ans1");
    let input1 = document.getElementById("STOCKSQUE5ANSINVESTED");
    let input2 = document.getElementById("STOCKSQUE5ANSSHARES");
    let input3 = document.getElementById("STOCKSQUE5ANSDIVIDEND");
    let button = document.getElementById("STOCKSQUE5ANS1");
    if (stocksque5ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque5ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let r = input2.value.split(" ");
        textarea1.textContent = " No of shares = " + input1.value + "/" + r[1] + " = " + (parseInt(input1.value) / parseFloat(r[1]));
        textarea2.textContent = "Face value = " + (parseInt(input1.value) / parseFloat(r[1])) + "*" + parseInt(input2.value) + " = " + ((parseInt(input1.value) / parseFloat(r[1])) * parseInt(r[0]));
        textarea3.textContent = "Annual income = " + input3.value + "/100 * " + ((parseInt(input1.value) / parseFloat(r[1])) * parseInt(r[0])) + " = " + (parseFloat(parseInt(input3.value) / parseInt(100)) * ((parseInt(input1.value) / parseFloat(r[1])) * parseInt(r[0])));
        stocksque5ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque5ans1");
        button.textContent = "Show"
        stocksque5ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque5ans1";
        a.appendChild(again)
    }
}
let stocksque6ans1 = true;

function StocksQue6Ans1() {
    let a = document.getElementById("stocksque6ans1");
    let input1 = document.getElementById("STOCKSQUE6ANSSTOCK");
    let input2 = document.getElementById("STOCKSQUE6ANSDISCOUNT");
    let button = document.getElementById("STOCKSQUE6ANS1");
    if (stocksque6ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque6ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = " For an income of " + input2.value + " invesment = 100 ";
        textarea2.textContent = "For an income of  " + input1.value + " invesment = ((" + 100 + "/" + input2.value + ")*" + input1.value + ") = " + (parseFloat(parseInt(100) / parseInt(input2.value)) * (parseInt(input1.value)));
        textarea3.textContent = "Market value of 100 stock = " + (parseFloat(parseInt(100) / parseInt(input2.value)) * (parseInt(input1.value)));
        stocksque6ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque6ans1");
        button.textContent = "Show"
        stocksque6ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque6ans1";
        a.appendChild(again)
    }
}
let stocksque7ans1 = true;

function StocksQue7Ans1() {
    let a = document.getElementById("stocksque7ans1");
    let input1 = document.getElementById("STOCKSQUE7ANSINVESTED");
    let input2 = document.getElementById("STOCKSQUE7ANSMONEY");
    let input3 = document.getElementById("STOCKSQUE7ANSINCOME");
    let button = document.getElementById("STOCKSQUE7ANS1");
    if (stocksque7ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque7ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "By investing " + input1.value + ",income = " + input3.value;
        textarea2.textContent = "By investing " + input2.value + " income = " + input3.value + "/" + input1.value + " *" + input2.value + " = " + (parseFloat(parseInt(input3.value) / parseInt(input1.value)) * (parseInt(input2.value)));
        textarea3.textContent = "Dividend = " + (parseFloat(parseInt(input3.value) / parseInt(input1.value)) * (parseInt(input2.value))) + " %";
        stocksque7ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque7ans1");
        button.textContent = "Show"
        stocksque1ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque7ans1";
        a.appendChild(again)
    }
}
let stocksque8ans1 = true;

function StocksQue8Ans1() {
    let a = document.getElementById("stocksque8ans1");
    let input1 = document.getElementById("STOCKSQUE8ANSSTOCK");
    let input2 = document.getElementById("STOCKSQUE8ANSDISCOUNT");
    let input3 = document.getElementById("STOCKSQUE8ANSBROKERAGE");
    let button = document.getElementById("STOCKSQUE8ANS1");
    if (stocksque8ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque8ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        let textarea4 = document.createElement("p");
        button.textContent = "Hide"
        let r = input1.value.split(" ")
        let r1 = input3.value.split("/")
        textarea1.textContent = "Investment  = (" + r[0] + " * (" + r[1] + " - " + input2.value + ")) = " + (parseInt(r[0]) * (parseInt(r[1]) - parseInt(input2.value)));
        textarea2.textContent = "Face value = " + (parseInt(r[1]) + " * " + parseInt(r[0])) + " =  " + (parseInt(r[1]) * parseInt(r[0]));
        textarea3.textContent = "Dividend = " + input3.value + " * (" + (parseFloat((parseInt(r[1]) * parseInt(r[0])) / parseInt(100))) + ") = " + (parseFloat(parseInt(r1[0]) / parseInt(r1[1])) * (parseFloat((parseInt(r[1]) * parseInt(r[0])) / parseInt(100))));
        textarea4.textContent = "interest obtained = (" + (parseFloat(parseInt(r1[0]) / parseInt(r1[1])) * (parseFloat((parseInt(r[1]) * parseInt(r[0])) / parseInt(100)))) + "/" + (parseInt(r[0]) * (parseInt(r[1]) - parseInt(input2.value))) + "* 100 = " + (((parseFloat(parseInt(r1[0]) / parseInt(r1[1])) * (parseFloat((parseInt(r[1]) * parseInt(r[0])) / parseInt(100)))) / (parseInt(r[0]) * (parseInt(r[1]) - parseInt(input2.value)))) * parseInt(100)) + " %";
        stocksque8ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
        solutionpage.appendChild(textarea4);
    } else {
        let solutionpage = document.getElementById("solutionstocksque8ans1");
        button.textContent = "Show"
        stocksque8ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque8ans1";
        a.appendChild(again)
    }
}
let stocksque9ans1 = true;

function StocksQue9Ans1() {
    let a = document.getElementById("stocksque9ans1");
    let input1 = document.getElementById("STOCKSQUE9ANSSTOCK1");
    let input2 = document.getElementById("STOCKSQUE9ANSSTOCKS2");
    let button = document.getElementById("STOCKSQUE9ANS1");
    if (stocksque9ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque9ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let r1 = input1.value.split(" ");
        let r2 = input2.value.split(" ");
        textarea1.textContent = "For income of 1 is " + r1[0] + " stock at " + r1[1] + " Investment = (" + r1[1] + "/" + r1[0] + ") = " + (parseFloat(parseInt(r1[1]) / parseInt(r1[0])));
        textarea2.textContent = "For income of 1 is " + r2[0] + " stock at " + r2[1] + " Investment = (" + r2[1] + "/" + r2[0] + ") = " + (parseFloat(parseInt(r2[1]) / parseInt(r2[0])));
        textarea3.textContent = "Ratio of investments = " + (parseFloat(parseInt(r1[1]) / parseInt(r1[0]))) + " : " + (parseFloat(parseInt(r2[1]) / parseInt(r2[0])));
        stocksque9ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque9ans1");
        button.textContent = "Show"
        stocksque9ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque9ans1";
        a.appendChild(again)
    }
}
let stocksque10ans1 = true;

function StocksQue10Ans1() {
    let a = document.getElementById("stocksque10ans1");
    let input1 = document.getElementById("STOCKSQUE10ANSASTOCK");
    let input2 = document.getElementById("STOCKSQUE10ANSMONEY");
    let input3 = document.getElementById("STOCKSQUE10ANSBSTOCK");
    let button = document.getElementById("STOCKSQUE10ANS1");
    if (stocksque10ans1 === true) {
        let solutionpage = document.getElementById("solutionstocksque10ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let r = input2.value.split(" ")
        textarea1.textContent = "For an income of " + input1.value + " % at investment = " + input2.value;
        textarea2.textContent = "For an income of " + input3.value + " % at investment = ((" + input2.value + "/" + input1.value + ") * " + input3.value + ")";
        textarea3.textContent = "For an income of " + input3.value + " % at investment = " + (parseFloat(parseInt(input2.value) / parseInt(input1.value)) * (parseInt(input3.value)));
        stocksque10ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionstocksque10ans1");
        button.textContent = "Show"
        stocksque10ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionstocksque10ans1";
        a.appendChild(again)
    }
}
let percentageque1ans1 = true;

function PercentageQue1Ans1() {
    let a = document.getElementById("percentageque1ans1");
    let input1 = document.getElementById("PERCENTAGEQUE1ANSVALUE");
    let button = document.getElementById("PERCENTAGEQUE1ANS1");
    if (percentageque1ans1 === true) {
        let solutionpage = document.getElementById("solutionpercentageque1ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        button.textContent = "Hide"
        let r = input1.value.split("/")
        textarea1.textContent = "percentage = (" + r[0] + "/" + r[1] + ") * 100 ";
        textarea2.textContent = "percentage = " + (parseFloat(parseInt(r[0]) / parseInt(r[1])) * parseInt(100)) + " %"
        percentageque1ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
    } else {
        let solutionpage = document.getElementById("solutionpercentageque1ans1");
        button.textContent = "Show"
        percentageque1ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionpercentageque1ans1";
        a.appendChild(again)
    }
}
let percentageque2ans1 = true;

function PercentageQue2Ans1() {
    let a = document.getElementById("percentageque2ans1");
    let input1 = document.getElementById("PERCENTAGEQUE2ANSVALUE");
    let button = document.getElementById("PERCENTAGEQUE2ANS1");
    if (percentageque2ans1 === true) {
        let solutionpage = document.getElementById("solutionpercentageque2ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        button.textContent = "Hide"
        let r = input1.value.split(" ")
        textarea1.textContent = r[0] + " %  from the amount = (" + r[0] + "/ 100) * " + r[1];
        textarea2.textContent = r[0] + " % from  amount = " + (parseFloat(parseInt(r[0]) / parseInt(100)) * parseInt(r[1]));
        percentageque2ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
    } else {
        let solutionpage = document.getElementById("solutionpercentageque2ans1");
        button.textContent = "Show"
        percentageque2ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionpercentageque2ans1";
        a.appendChild(again)
    }
}
let percentageque3ans1 = true;

function PercentageQue3Ans1() {
    let a = document.getElementById("percentageque3ans1");
    let input1 = document.getElementById("PERCENTAGEQUE3ANSVALUE1");
    let input2 = document.getElementById("PERCENTAGEQUE3ANSVALUE2");
    let button = document.getElementById("PERCENTAGEQUE3ANS1");
    if (percentageque3ans1 === true) {
        let solutionpage = document.getElementById("solutionpercentageque3ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "Requried percentage = ((" + input1.value + "/" + input2.value + ") * 100) %"
        textarea2.textContent = "Requried percentage = " + Math.round(parseFloat(parseInt(input1.value) / parseInt(input2.value)) * parseInt(100)) + " %";
        percentageque3ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
    } else {
        let solutionpage = document.getElementById("solutionpercentageque3ans1");
        button.textContent = "Show"
        percentageque3ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionpercentageque3ans1";
        a.appendChild(again)
    }
}
let percentageque4ans1 = true;

function PercentageQue4Ans1() {
    let a = document.getElementById("percentageque4ans1");
    let input1 = document.getElementById("PERCENTAGEQUE4ANSTAX");
    let input2 = document.getElementById("PERCENTAGEQUE4ANSWORTH");
    let button = document.getElementById("PERCENTAGEQUE4ANS1");
    if (percentageque4ans1 === true) {
        let solutionpage = document.getElementById("solutionpercentageque4ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        button.textContent = "Hide"
        textarea1.textContent = "Rate of sales tax = ((" + input1.value + "/" + input2.value + ") * 100) %"
        textarea2.textContent = "Rate of sales tax = " + Math.round(parseFloat(parseInt(input1.value) / parseInt(input2.value)) * parseInt(100)) + " %";
        percentageque4ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
    } else {
        let solutionpage = document.getElementById("solutionpercentageque4ans1");
        button.textContent = "Show"
        percentageque3ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionpercentageque4ans1";
        a.appendChild(again)
    }
}
let percentageque5ans1 = true;

function PercentageQue5Ans1() {
    let a = document.getElementById("percentageque5ans1");
    let input1 = document.getElementById("PERCENTAGEQUE5ANSVALUE1");
    let input2 = document.getElementById("PERCENTAGEQUE5ANSVALUE2");
    let input3 = document.getElementById("PERCENTAGEQUE5ANSVALUE3");
    let button = document.getElementById("PERCENTAGEQUE5ANS1");
    if (percentageque5ans1 === true) {
        let solutionpage = document.getElementById("solutionpercentageque5ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let r1 = input1.value.split(" ")
        let r2 = input2.value.split(" ")
        textarea1.textContent = input3.value + " %  of = ((" + r1[0] + "/ 100) * " + r1[1] + ") + (" + r2[0] + "/ 100) * " + r2[1] + ") = " + input3.value + "/100";
        textarea2.textContent = input3.value + " % of = " + (parseFloat(parseInt(r1[0]) / parseInt(100)) * parseInt(r1[1])) + " + " + (parseFloat(parseInt(r2[0]) / parseInt(100)) * parseInt(r2[1])) + " = " + parseFloat(parseInt(input3.value) / parseInt(100));
        textarea3.textContent = input3.value + " % of x = " + (((parseFloat(parseInt(r1[0]) / parseInt(100)) * parseInt(r1[1])) + (parseFloat(parseInt(r2[0]) / parseInt(100)) * parseInt(r2[1]))) / (parseFloat(parseInt(input3.value) / parseInt(100))));
        percentageque5ans1 = false
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionpercentageque5ans1");
        button.textContent = "Show"
        percentageque5ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionpercentageque5ans1";
        a.appendChild(again)
    }
}
let percentageque6ans1 = true;

function PercentageQue6Ans1() {
    let a = document.getElementById("percentageque6ans1");
    let input1 = document.getElementById("PERCENTAGEQUE6ANSVALUE1");
    let input2 = document.getElementById("PERCENTAGEQUE6ANSVALUE2");
    let button = document.getElementById("PERCENTAGEQUE6ANS1");
    if (percentageque6ans1 === true) {
        let solutionpage = document.getElementById("solutionpercentageque6ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        button.textContent = "Hide"
        percentageque6ans1 = false;
        textarea1.textContent = "Let the amount value  = " + input1.value + " % of x = " + input2.value + " = " + input1.value + "/ 100 * x = " + input2.value;
        textarea2.textContent = "Amount of x = (" + input2.value + " * 100)/" + input1.value + " = " + parseFloat((parseInt(100) * parseInt(input2.value)) / parseInt(input1.value))
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
    } else {
        let solutionpage = document.getElementById("solutionpercentageque6ans1");
        button.textContent = "Show"
        percentageque6ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionpercentageque6ans1";
        a.appendChild(again)
    }
}
let percentageque7ans1 = true;

function PercentageQue7Ans1() {
    let a = document.getElementById("percentageque7ans1");
    let input1 = document.getElementById("PERCENTAGEQUE7ANSVALUE1");
    let input2 = document.getElementById("PERCENTAGEQUE7ANSVALUE2");
    let button = document.getElementById("PERCENTAGEQUE7ANS1");
    if (percentageque7ans1 === true) {
        let solutionpage = document.getElementById("solutionpercentageque7ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        percentageque7ans1 = false;
        textarea1.textContent = "Let t Nupur’s annual salary = " + input1.value + " % of x = " + input2.value + " = " + input1.value + "/ 100 * x = " + input2.value;
        textarea2.textContent = "Nupur’s annual salary = (" + input2.value + " * 100)/" + input1.value + " = " + (parseFloat((parseInt(100) * parseInt(input2.value)) / parseInt(input1.value)));
        textarea3.textContent = "Nupur.s monthly income = " + (parseFloat((parseInt(100) * parseInt(input2.value)) / parseInt(input1.value))) + "/ 12 = " + ((parseFloat((parseInt(100) * parseInt(input2.value)) / parseInt(input1.value))) / parseInt(12));
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionpercentageque7ans1");
        button.textContent = "Show"
        percentageque7ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionpercentageque7ans1";
        a.appendChild(again)
    }
}
let percentageque8ans1 = true;

function PercentageQue8Ans1() {
    let a = document.getElementById("percentageque8ans1");
    let input1 = document.getElementById("PERCENTAGEQUE8ANSVALUE1");
    let input2 = document.getElementById("PERCENTAGEQUE8ANSVALUE2");
    let button = document.getElementById("PERCENTAGEQUE8ANS1");
    if (percentageque8ans1 === true) {
        let solutionpage = document.getElementById("solutionpercentageque8ans1");
        let textarea1 = document.createElement("p");
        let textarea2 = document.createElement("p");
        let textarea3 = document.createElement("p");
        button.textContent = "Hide"
        let girls = parseInt(100) - parseInt(input1.value);
        percentageque8ans1 = false;
        textarea1.textContent = "Girls % = 100 - " + input1.value + " = " + girls + " %";
        textarea2.textContent = "girls % in total students(x) = " + girls + " % of x = " + input2.value + " = " + girls + "/ 100 * x = " + input2.value;
        textarea3.textContent = "No of students= (" + input2.value + " * 100)/" + girls + " = " + parseFloat((parseInt(100) * parseInt(input2.value)) / parseInt(girls))
        solutionpage.appendChild(textarea1);
        solutionpage.appendChild(textarea2);
        solutionpage.appendChild(textarea3);
    } else {
        let solutionpage = document.getElementById("solutionpercentageque8ans1");
        button.textContent = "Show"
        percentageque8ans1 = true
        a.removeChild(solutionpage)
        let again = document.createElement("div");
        again.id = "solutionpercentageque8ans1";
        a.appendChild(again)
    }
}
