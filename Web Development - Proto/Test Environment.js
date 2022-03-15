var t = 180;
var noq = 90;



var NQ = document.getElementById("NQ");
var PQ = document.getElementById("PQ");
var q = document.getElementById("question");

var list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
    "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",];
var cq = -1;

NQ.onclick = function nextq() {
    if ((document.getElementById("Al").style.display == "contents") || cq == -1 || document.getElementById("num").style.display == "inline") {
        cq = cq + 1;
        q.src = '(' + list[cq] + ').jpg';
    }
    if (cq == 0)
        asktype();

    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = false;


    if (document.getElementById("m").checked == true) {
        options();
    }
    else if (document.getElementById("n").checked == true) {
        numerical();
    }
    else if (document.getElementById("mat").checked == true) {
        matrix();
    }
};

PQ.onclick = function prevq() {
    if (cq != 0 && cq != -1) { cq = cq - 1; }
    else { cq = 0 }
    q.src = '(' + list[cq] + ').jpg';
    checktype();
};


var SAN = document.getElementById("SAN");
var resp = new Array();

var i = 1;
var ans = "";

SAN.onclick = function response() {
    if (document.getElementById("m").checked == true) {
        options();
    }
    else if (document.getElementById("n").checked == true) {
        numerical();
    }
    else if (document.getElementById("mat").checked == true) {
        matrix();
    }

    if (document.getElementById("a").checked == true) { ans = ans + "A" }
    if (document.getElementById("b").checked == true) { ans = ans + "B" }
    if (document.getElementById("c").checked == true) { ans = ans + "C" }
    if (document.getElementById("d").checked == true) { ans = ans + "D" }
    if (document.getElementById("num").value != "") { ans = ans + document.getElementById("num").value }

    var l1 = ["a", "b", "c", "d"];
    var l2 = ["p", "q", "r", "s", "t"]
    var matx = "";

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 5; j++) {
            matx = l1[i] + l2[j];
            if (document.getElementById(matx).checked == true && document.getElementById("ml").style.display == "none") {
                ans = ans + matx
            }
        }
    }
    if (cq != -1) {
        resp[cq] = ans;
        ans = "";
    }

    if (cq != -1 && resp[cq] != "") {
        cq = cq + 1;
        q.src = '(' + list[cq] + ').jpg';
    }

    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = false;
    document.getElementById("num").value = "";
    uncheckmatrix();

}

var marks = new Array();

let submit = document.getElementById("submit");
var answer = "";
var answer2 = "";
submit.onclick = function submit() {
    for (var i = 0; i < noq; i++) {
        if (resp[i] == undefined || resp[i] == "") { resp[i] = "unattemped"; }
        answer = answer + '<tr>  <td> <button style="margin:10px" class="btn btn-warning btn-lg" id="' + (i + 1) + '" onclick="qs(this.id)"> ' + (i + 1) + ' </button>  </td> <td> ' + resp[i] + ' </td> <td> <input type="number" id="marks[' + i + ']" placeholder="Enter your Marks" style="color: black;"> </td> </tr>';
        document.getElementById("master").innerHTML = "<table> <tr> <td>Question No.</td> <td>Your Answer</td> <td>Marks</td> </tr> " + answer + "</table>";
        answer2 = '<table style="padding: 10px;color: white;"> <tr> <td>Question No.</td> <td>Your Answer</td> <td>Marks</td> </tr> ' + answer + "</table>";
    }


    answer2 = answer2 + ' <table> <tr><td></td><td></td><td><button type="button" class="btn btn-primary btn-lg" onclick="evaluates()">Evaluate</button> </td><td><button type="button" class="btn btn-primary btn-lg" onclick="change()">Next Screen</button> </td> </tr> </table>';
    document.getElementById("master").innerHTML = answer2;

}


var total = 0;
var marks2 = 0;
var marks3 = "";
var marks4 = new Array();

function evaluates() {
    var j = 0;
    for (var i = 0; i < noq; i++) {
        marks3 = "marks[" + i + "]";
        document.getElementById(marks3).defaultValue = 0;
        marks2 = parseInt(document.getElementById(marks3).value);
        total = total + marks2;
        if (i == ((noq / 3) - 1)) {
            var phy = total;
        }
        if (i == ((2 * noq / 3) - 1)) {
            var chem = total - phy;
        }
        if (i == (noq - 1)) {
            var maths = total - phy - chem;
        }
        if (marks2 == 0 || marks2 == -1 || marks2 == -2 || marks2 == 1 || marks2 == 2) {
            marks4[j] = i + 1;
            j++;
        }

    }
    alert("Physics : " + phy);
    alert("Chemistry : " + chem);
    alert("Maths : " + maths);
    alert("Total : " + total);
    for (var i = 0; i < j; i++) {
        localStorage.setItem("wqq" + i + "", marks4[i].toString());
    }

}

function change() {
    window.open(document.location = "./Prototype 2.html");
}





















function options() {
    var rq = "";
    document.getElementById("a").style.display = "inline";
    document.getElementById("b").style.display = "inline";
    document.getElementById("c").style.display = "inline";
    document.getElementById("d").style.display = "inline";



    if (resp[cq] != "" && resp[cq] != undefined) {
        document.getElementById("a").checked = false;
        document.getElementById("b").checked = false;
        document.getElementById("c").checked = false;
        document.getElementById("d").checked = false;

        for (var k = 0; k < resp[cq].length; k++) {
            rq = resp[cq].charAt(k);
            if (rq == "A") {
                document.getElementById("a").checked = true;

            }
            if (rq == "B") {
                document.getElementById("b").checked = true;

            }
            if (rq == "C") {
                document.getElementById("c").checked = true;

            }
            if (rq == "D") {
                document.getElementById("d").checked = true;
            }
        }
    }

    document.getElementById("Al").style.display = "contents";
    document.getElementById("Bl").style.display = "contents";
    document.getElementById("Cl").style.display = "contents";
    document.getElementById("Dl").style.display = "contents";

    document.getElementById("ml").style.display = "none";
    document.getElementById("nl").style.display = "none";
    document.getElementById("matl").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("n").style.display = "none";
    document.getElementById("mat").style.display = "none";

    document.getElementById("n").checked = false;
    document.getElementById("mat").checked = false;
};

function asktype() {
    hidematrix();

    document.getElementById("num").style.display = "none";

    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("c").style.display = "none";
    document.getElementById("d").style.display = "none";

    document.getElementById("Al").style.display = "none";
    document.getElementById("Bl").style.display = "none";
    document.getElementById("Cl").style.display = "none";
    document.getElementById("Dl").style.display = "none";


    document.getElementById("m").style.display = "inline";
    document.getElementById("n").style.display = "inline";
    document.getElementById("mat").style.display = "inline";

    document.getElementById("ml").style.display = "contents";
    document.getElementById("nl").style.display = "contents";
    document.getElementById("matl").style.display = "contents";
}

function numerical() {
    document.getElementById("num").style.display = "inline";
    if (resp[cq] != "" && resp[cq] != undefined) {
        document.getElementById("num").value = resp[cq];
    }


    document.getElementById("ml").style.display = "none";
    document.getElementById("nl").style.display = "none";
    document.getElementById("matl").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("n").style.display = "none";
    document.getElementById("mat").style.display = "none";

    document.getElementById("m").checked = false;

    document.getElementById("mat").checked = false;

}

function matrix() {
    document.getElementById("ml").style.display = "none";
    document.getElementById("nl").style.display = "none";
    document.getElementById("matl").style.display = "none";
    document.getElementById("m").style.display = "none";
    document.getElementById("n").style.display = "none";
    document.getElementById("mat").style.display = "none";

    document.getElementById("m").checked = false;
    document.getElementById("n").checked = false;


    document.getElementById("tp").style.display = "inline";

    showmatrix();


}

function hidematrix() {
    document.getElementById("matadiv").style.display = "none";
    document.getElementById("matbdiv").style.display = "none";
    document.getElementById("matcdiv").style.display = "none";
    document.getElementById("matddiv").style.display = "none";
    document.getElementById("tp").style.display = "none";
};

function showmatrix() {
    document.getElementById("matadiv").style.display = "list-item";
    document.getElementById("matbdiv").style.display = "list-item";
    document.getElementById("matcdiv").style.display = "list-item";
    document.getElementById("matddiv").style.display = "list-item";

};







function uncheckmatrix() {
    document.getElementById("ap").checked = false;
    document.getElementById("aq").checked = false;
    document.getElementById("ar").checked = false;
    document.getElementById("as").checked = false;
    document.getElementById("at").checked = false;
    document.getElementById("bp").checked = false;
    document.getElementById("bq").checked = false;
    document.getElementById("br").checked = false;
    document.getElementById("bs").checked = false;
    document.getElementById("bt").checked = false;
    document.getElementById("cp").checked = false;
    document.getElementById("cq").checked = false;
    document.getElementById("cr").checked = false;
    document.getElementById("cs").checked = false;
    document.getElementById("ct").checked = false;
    document.getElementById("dp").checked = false;
    document.getElementById("dq").checked = false;
    document.getElementById("dr").checked = false;
    document.getElementById("ds").checked = false;
    document.getElementById("dt").checked = false;
}

Physics.onclick = function TakePhy() {
    cq = 0;
    q.src = "(" + list[cq] + ").jpg";
    checktype();

}

Chemistry.onclick = function TakeChem() {
    cq = noq / 3;
    q.src = "(" + list[cq] + ").jpg";
    checktype();
}

Maths.onclick = function TakeChem() {
    cq = 2 * noq / 3;
    q.src = "(" + list[cq] + ").jpg";
    checktype();

}

var mfrq = new Array();
var k = 0;
MFR.onclick = function MFRq() {
    if (resp[cq] == "" || resp[cq] == undefined) {
        mfrq[k] = cq;
        k++;
    }
    cq++;
    q.src = "(" + list[cq] + ").jpg";

}

AQ.onclick = function Allq() {
    document.getElementById("master").style.display = "none";
    document.getElementById("master2").style.display = "inline";
    if (noq == 90)
        document.getElementById("master2").innerHTML = '<br><br><br><br><br><div id="master2" style="display: contents;"><button id="1" class="row1 questions btn btn-primary btn-lg" onclick="direct(this.id)" style="margin-left :230px;">01</button><button id="2" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">02</button><button id="3" class="row1 questions btn btn-primary btn-lg" onclick="direct(this.id)">03</button><button id="4" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">04</button><button id="5" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">05</button><button id="6" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">06</button><button id="7" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">07</button><button id="8" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">08</button><button id="9" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">09</button><button id="10" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">10</button><br><button id="11" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">11</button><button id="12" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">12</button><button id="13" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">13</button><button id="14" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">14</button><button id="15" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">15</button><button id="16" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">16</button><button id="17" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">17</button><button id="18" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">18</button><button id="19" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">19</button><button id="20" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">20</button><br><button id="21" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">21</button><button id="22" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">22</button><button id="23" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">23</button><button id="24" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">24</button><button id="25" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">25</button><button id="26" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">26</button><button id="27" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">27</button><button id="28" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">28</button><button id="29" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">29</button><button id="30" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">30</button><br><button id="31" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">31</button><button id="32" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">32</button><button id="33" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">33</button><button id="34" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">34</button><button id="35" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">35</button><button id="36" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">36</button><button id="37" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">37</button><button id="38" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">38</button><button id="39" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">39</button><button id="40" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">40</button><br><button id="41" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)"style="margin-left :230px;">41</button><button id="42" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">42</button><button id="43" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">43</button><button id="44" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">44</button><button id="45" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">45</button><button id="46" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">46</button><button id="47" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">47</button><button id="48" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">48</button><button id="49" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">49</button><button id="50" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">50</button><br><button id="51" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">51</button><button id="52" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">52</button><button id="53" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">53</button><button id="54" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">54</button><button id="55" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">55</button><button id="56" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">56</button><button id="57" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">57</button><button id="58" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">58</button><button id="59" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">59</button><button id="60" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">60</button><br><button id="61" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">61</button><button id="62" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">62</button><button id="63" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">63</button><button id="64" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">64</button><button id="65" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">65</button><button id="66" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">66</button><button id="57" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">67</button><button id="68" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">68</button><button id="69" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">69</button><button id="60" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">70</button><br><button id="71" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">71</button><button id="72" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">72</button><button id="73" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">73</button><button id="74" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">74</button><button id="75" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">75</button><button id="76" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">76</button><button id="77" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">77</button><button id="78" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">78</button><button id="79" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">79</button><button id="80" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">80</button><br><button id="81" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">81</button><button id="82" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">82</button><button id="83" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">83</button><button id="84" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">84</button><button id="85" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">85</button><button id="86" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">86</button><button id="87" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">87</button><button id="88" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">58</button><button id="89" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">89</button><button id="90" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">90</button><br><button id="back" class="btn btn-info" onclick="direct(1)" style="margin-left :550px; margin-top :50px;margin-bottom :10px" >Back to MainScreen</button></div>';

    else
        document.getElementById("master2").innerHTML = '<br><br><br><br><br><div id="master2" style="display: contents;"><button id="1" class="row1 questions btn btn-primary btn-lg" onclick="direct(this.id)" style="margin-left :230px;">01</button><button id="2" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">02</button><button id="3" class="row1 questions btn btn-primary btn-lg" onclick="direct(this.id)">03</button><button id="4" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">04</button><button id="5" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">05</button><button id="6" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">06</button><button id="7" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">07</button><button id="8" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">08</button><button id="9" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">09</button><button id="10" class="row1 questions btn btn-primary btn-lg"onclick="direct(this.id)">10</button><br><button id="11" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">11</button><button id="12" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">12</button><button id="13" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">13</button><button id="14" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">14</button><button id="15" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">15</button><button id="16" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">16</button><button id="17" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">17</button><button id="18" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">18</button><button id="19" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">19</button><button id="20" class="row2 questions btn btn-primary btn-lg"onclick="direct(this.id)">20</button><br><button id="21" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">21</button><button id="22" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">22</button><button id="23" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">23</button><button id="24" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">24</button><button id="25" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">25</button><button id="26" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">26</button><button id="27" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">27</button><button id="28" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">28</button><button id="29" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">29</button><button id="30" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">30</button><br><button id="31" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">31</button><button id="32" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">32</button><button id="33" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">33</button><button id="34" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">34</button><button id="35" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">35</button><button id="36" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">36</button><button id="37" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">37</button><button id="38" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">38</button><button id="39" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">39</button><button id="40" class="row3 questions btn btn-primary btn-lg"onclick="direct(this.id)">40</button><br><button id="41" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)"style="margin-left :230px;">41</button><button id="42" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">42</button><button id="43" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">43</button><button id="44" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">44</button><button id="45" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">45</button><button id="46" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">46</button><button id="47" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">47</button><button id="48" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">48</button><button id="49" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">49</button><button id="50" class="row4 questions btn btn-primary btn-lg"onclick="direct(this.id)">50</button><br><button id="51" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)" style="margin-left :230px;">51</button><button id="52" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">52</button><button id="53" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">53</button><button id="54" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">54</button><button id="55" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">55</button><button id="56" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">56</button><button id="57" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">57</button><button id="58" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">58</button><button id="59" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">59</button><button id="60" class="row5 questions btn btn-primary btn-lg"onclick="direct(this.id)">60</button><br><button id="back" class="btn btn-info" onclick="direct(1)" style="margin-left :550px; margin-top :50px;margin-bottom :10px" >Back to MainScreen</button></div>'

    colour();
}

function direct(clicked_id) {
    document.getElementById("master").style.display = "inline";
    document.getElementById("master2").style.display = "none";
    q.src = "(" + list[(parseInt(clicked_id)) - 1] + ").jpg";
    cq = parseInt(clicked_id) - 1;

    if (isNaN((parseInt(resp[cq]))) == false) {
        numerical();
        document.getElementById("matadiv").style.display = "none";
        document.getElementById("matbdiv").style.display = "none";
        document.getElementById("matcdiv").style.display = "none";
        document.getElementById("matddiv").style.display = "none";
        document.getElementById("tp").style.display = "none";

        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("d").style.display = "none";

        document.getElementById("Al").style.display = "none";
        document.getElementById("Bl").style.display = "none";
        document.getElementById("Cl").style.display = "none";
        document.getElementById("Dl").style.display = "none";



    }

    else {
        if (resp[cq] == undefined) {
            document.getElementById("a").checked = false;
            document.getElementById("b").checked = false;
            document.getElementById("c").checked = false;
            document.getElementById("d").checked = false;
            document.getElementById("num").style.display = "none";

            options();
            document.getElementById("matadiv").style.display = "none";
            document.getElementById("matbdiv").style.display = "none";
            document.getElementById("matcdiv").style.display = "none";
            document.getElementById("matddiv").style.display = "none";
            document.getElementById("tp").style.display = "none";

        }
        for (var j = 0; j < resp[cq].length; j++) {
            if (resp[cq].charAt(j) == "p" || resp[cq].charAt(j) == "q" || resp[cq].charAt(j) == "r" || resp[cq].charAt(j) == "s" || resp[cq].charAt(j) == "t") {
                matrix();
                document.getElementById("a").style.display = "none";
                document.getElementById("b").style.display = "none";
                document.getElementById("c").style.display = "none";
                document.getElementById("d").style.display = "none";

                document.getElementById("Al").style.display = "none";
                document.getElementById("Bl").style.display = "none";
                document.getElementById("Cl").style.display = "none";
                document.getElementById("Dl").style.display = "none";
                document.getElementById("num").style.display = "none";
            }
            else {
                document.getElementById("num").style.display = "none";

                options();
                document.getElementById("matadiv").style.display = "none";
                document.getElementById("matbdiv").style.display = "none";
                document.getElementById("matcdiv").style.display = "none";
                document.getElementById("matddiv").style.display = "none";
                document.getElementById("tp").style.display = "none";



            }
        }
    }

}

function colour() {
    for (var i = 0; i < noq; i++) {
        var purp = true;
        if (resp[i] != undefined && resp[i] != "") {
            document.getElementById((i + 1).toString()).style.backgroundColor = "green";
            purp = false;
        }

        if (mfrq[i] != undefined && purp == true) {
            document.getElementById((mfrq[i] + 1).toString()).style.backgroundColor = "purple";
        }
    }
}

var strtime = t;
var time = t * 60;
var subs = false;
var pause = false;

setInterval(updatetime, 1000);
function updatetime() {
    var mins = Math.floor(time / 60);
    var sec = time % 60;

    if (cq != -1) {
        document.getElementById("timer").innerHTML = " " + mins + ":" + sec;
        if (pause == false)
            time--;
    }

    if (time == 0) {
        document.getElementById("submit").click();
    }
}


function checktype() {
    if (isNaN((parseInt(resp[cq]))) == false) {
        numerical();
        document.getElementById("matadiv").style.display = "none";
        document.getElementById("matbdiv").style.display = "none";
        document.getElementById("matcdiv").style.display = "none";
        document.getElementById("matddiv").style.display = "none";
        document.getElementById("tp").style.display = "none";

        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("d").style.display = "none";

        document.getElementById("Al").style.display = "none";
        document.getElementById("Bl").style.display = "none";
        document.getElementById("Cl").style.display = "none";
        document.getElementById("Dl").style.display = "none";



    }

    else {
        for (var j = 0; j < resp[cq].length; j++) {
            if (resp[cq].charAt(j) == "p" || resp[cq].charAt(j) == "q" || resp[cq].charAt(j) == "r" || resp[cq].charAt(j) == "s" || resp[cq].charAt(j) == "t") {
                matrix();
                document.getElementById("a").style.display = "none";
                document.getElementById("b").style.display = "none";
                document.getElementById("c").style.display = "none";
                document.getElementById("d").style.display = "none";

                document.getElementById("Al").style.display = "none";
                document.getElementById("Bl").style.display = "none";
                document.getElementById("Cl").style.display = "none";
                document.getElementById("Dl").style.display = "none";
                document.getElementById("num").style.display = "none";
            }
            else {
                document.getElementById("num").style.display = "none";
                options();
                document.getElementById("matadiv").style.display = "none";
                document.getElementById("matbdiv").style.display = "none";
                document.getElementById("matcdiv").style.display = "none";
                document.getElementById("matddiv").style.display = "none";
                document.getElementById("tp").style.display = "none";

            }
        }
    }
}

function qs(clicked_id) {
    var name = "(" + parseInt(clicked_id) + ").jpg";
    document.getElementById("master").style.display = "none";
    document.getElementById("master3").style.display = "inline";
    document.getElementById("master3").innerHTML = '<img id="qss" src = "' + name + '"><button id="qsexit" class="btn btn-warning" onclick="qsexit()">Exit</button>';
}

function qsexit() {
    document.getElementById("master3").style.display = "none";
    document.getElementById("master").style.display = "inline";

}

function Pause() {
    if (pause) {
        document.getElementById("Pause").innerText = "Pause";
        pause = false;
    }

    else {
        document.getElementById("Pause").innerText = "Continue";
        pause = true;
    }
}