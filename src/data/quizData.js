export const quizData = {
  "categories": [
    {
      "id": 1,
      "name": "C",
      "questions": [
        {"question":"Who developed C?","options":["Dennis Ritchie","Bjarne Stroustrup","James Gosling","Guido van Rossum"],"answer":"Dennis Ritchie"},
        {"question":"Which symbol is used for comments?","options":["//","/* */","#","<!-- -->"],"answer":"/* */"},
        {"question":"Which function prints output?","options":["printf()","cout","print()","echo"],"answer":"printf()"},
        {"question":"Which header file is for input/output?","options":["stdio.h","stdlib.h","math.h","string.h"],"answer":"stdio.h"},
        {"question":"Which operator is used for address?","options":["&","*","#","@"],"answer":"&"},
        {"question":"Which keyword defines constant?","options":["const","final","static","let"],"answer":"const"},
        {"question":"Which loop executes at least once?","options":["do-while","for","while","none"],"answer":"do-while"},
        {"question":"Which data type stores character?","options":["char","int","float","double"],"answer":"char"},
        {"question":"Which operator is pointer dereference?","options":["*","&","->","."],"answer":"*"},
        {"question":"Which function allocates memory?","options":["malloc()","alloc()","new()","create()"],"answer":"malloc()"},
        {"question":"Which symbol ends statement?","options":[";","}",":","."],"answer":";"},
        {"question":"Which is entry point?","options":["main()","start()","init()","run()"],"answer":"main()"},
        {"question":"Which is logical AND?","options":["&&","&","||","!"],"answer":"&&"},
        {"question":"Which keyword exits loop?","options":["break","exit","stop","return"],"answer":"break"},
        {"question":"Which is array index start?","options":["0","1","-1","depends"],"answer":"0"}
      ]
    },
    {
      "id": 2,
      "name": "C++",
      "questions": [
        {"question":"Who created C++?","options":["Bjarne Stroustrup","Dennis Ritchie","James Gosling","Guido"],"answer":"Bjarne Stroustrup"},
        {"question":"Which operator is for input?","options":[">>","<<","<>","=>"],"answer":">>"},
        {"question":"Which operator outputs data?","options":["<<",">>","<>","=>"],"answer":"<<"},
        {"question":"Which keyword defines class?","options":["class","struct","object","define"],"answer":"class"},
        {"question":"Which feature supports OOP?","options":["Encapsulation","Loop","Pointer","Array"],"answer":"Encapsulation"},
        {"question":"Which function is constructor?","options":["Same as class name","init()","create()","main()"],"answer":"Same as class name"},
        {"question":"Which is destructor symbol?","options":["~","!","@","#"],"answer":"~"},
        {"question":"Which keyword inherits class?","options":[":","extends","inherits","->"],"answer":":"},
        {"question":"Which STL container stores unique?","options":["set","vector","list","array"],"answer":"set"},
        {"question":"Which loop repeats fixed times?","options":["for","while","do","none"],"answer":"for"},
        {"question":"Which operator accesses pointer?","options":["->",".","*","&"],"answer":"->"},
        {"question":"Which is reference operator?","options":["&","*","->","#"],"answer":"&"},
        {"question":"Which keyword prevents inheritance?","options":["final","const","static","stop"],"answer":"final"},
        {"question":"Which type stores decimal?","options":["float","int","char","bool"],"answer":"float"},
        {"question":"Which function frees memory?","options":["delete","free","remove","clear"],"answer":"delete"}
      ]
    },
    {
      "id": 3,
      "name": "Java",
      "questions": [
        {"question":"Who created Java?","options":["James Gosling","Dennis","Bjarne","Guido"],"answer":"James Gosling"},
        {"question":"Java is?","options":["Platform independent","Platform dependent","None","Both"],"answer":"Platform independent"},
        {"question":"Which keyword creates object?","options":["new","create","make","init"],"answer":"new"},
        {"question":"Which method is entry point?","options":["main()","start()","run()","init()"],"answer":"main()"},
        {"question":"Which keyword inherits class?","options":["extends","implements","inherits","super"],"answer":"extends"},
        {"question":"Which keyword overrides method?","options":["@Override","override","super","this"],"answer":"@Override"},
        {"question":"Which is JVM?","options":["Java Virtual Machine","Java Variable Method","Joint VM","None"],"answer":"Java Virtual Machine"},
        {"question":"Which is primitive type?","options":["int","String","Array","Object"],"answer":"int"},
        {"question":"Which keyword stops loop?","options":["break","stop","exit","return"],"answer":"break"},
        {"question":"Which access is public?","options":["public","private","protected","default"],"answer":"public"},
        {"question":"Which keyword calls parent?","options":["super","this","parent","base"],"answer":"super"},
        {"question":"Which package handles IO?","options":["java.io","java.util","java.lang","java.net"],"answer":"java.io"},
        {"question":"Which is interface keyword?","options":["interface","class","abstract","implements"],"answer":"interface"},
        {"question":"Which keyword is abstract?","options":["abstract","final","static","void"],"answer":"abstract"},
        {"question":"Which keyword ends program?","options":["System.exit()","break","return","stop"],"answer":"System.exit()"}
      ]
    },
    {
      "id": 4,
      "name": "Python",
      "questions": [
        {"question":"Who created Python?","options":["Guido van Rossum","James","Dennis","Bjarne"],"answer":"Guido van Rossum"},
        {"question":"Which keyword defines function?","options":["def","func","define","function"],"answer":"def"},
        {"question":"Which type is immutable?","options":["Tuple","List","Dict","Set"],"answer":"Tuple"},
        {"question":"Which operator exponent?","options":["**","^","%","//"],"answer":"**"},
        {"question":"Which keyword handles exception?","options":["try","catch","error","handle"],"answer":"try"},
        {"question":"Which function prints?","options":["print()","echo()","printf()","display()"],"answer":"print()"},
        {"question":"Which type stores key-value?","options":["dict","list","tuple","set"],"answer":"dict"},
        {"question":"Which loop iterates sequence?","options":["for","while","loop","repeat"],"answer":"for"},
        {"question":"Which library for web?","options":["Django","React","Laravel","Spring"],"answer":"Django"},
        {"question":"Which keyword exits loop?","options":["break","exit","stop","return"],"answer":"break"},
        {"question":"Which type stores text?","options":["str","int","bool","list"],"answer":"str"},
        {"question":"Which symbol comments?","options":["#","//","/* */","<!-- -->"],"answer":"#"},
        {"question":"Which function length?","options":["len()","size()","count()","length()"],"answer":"len()"},
        {"question":"Which keyword imports module?","options":["import","include","require","use"],"answer":"import"},
        {"question":"Which keyword returns value?","options":["return","break","exit","stop"],"answer":"return"}
      ]
    },
    {
      "id": 5,
      "name": "JavaScript",
      "questions": [
        {"question":"Which keyword block scope?","options":["let","var","const","static"],"answer":"let"},
        {"question":"DOM stands for?","options":["Document Object Model","Data Object Model","Doc Model","None"],"answer":"Document Object Model"},
        {"question":"Parse JSON?","options":["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.toObj()"],"answer":"JSON.parse()"},
        {"question":"Strict equality?","options":["===","==","=","!="],"answer":"==="},
        {"question":"NaN means?","options":["Not a Number","Null","None","Zero"],"answer":"Not a Number"},
        {"question":"Delay function?","options":["setTimeout()","wait()","delay()","pause()"],"answer":"setTimeout()"},
        {"question":"Add array end?","options":["push()","pop()","shift()","unshift()"],"answer":"push()"},
        {"question":"Remove last?","options":["pop()","push()","shift()","slice()"],"answer":"pop()"},
        {"question":"Event click?","options":["onclick","onchange","onhover","onload"],"answer":"onclick"},
        {"question":"JS type?","options":["Interpreted","Compiled","Both","None"],"answer":"Interpreted"},
        {"question":"Keyword function?","options":["function","func","define","method"],"answer":"function"},
        {"question":"Closure?","options":["Function with scope","Loop","Object","Array"],"answer":"Function with scope"},
        {"question":"Current object?","options":["this","self","me","obj"],"answer":"this"},
        {"question":"Framework?","options":["React","Django","Laravel","Flask"],"answer":"React"},
        {"question":"Convert object JSON?","options":["JSON.stringify()","JSON.parse()","JSON.toStr()","JSON.obj()"],"answer":"JSON.stringify()"}
      ]
    },
    {
      "id": 6,
      "name": "HTML",
      "questions": [
        {"question":"HTML stands for?","options":["HyperText Markup Language","HighText Machine","Hyper Transfer","None"],"answer":"HyperText Markup Language"},
        {"question":"Tag for link?","options":["<a>","<link>","<href>","<url>"],"answer":"<a>"},
        {"question":"Image tag?","options":["<img>","<image>","<pic>","<src>"],"answer":"<img>"},
        {"question":"Paragraph tag?","options":["<p>","<para>","<text>","<t>"],"answer":"<p>"},
        {"question":"Heading tag?","options":["<h1>","<head>","<title>","<h>"],"answer":"<h1>"},
        {"question":"List tag?","options":["<ul>","<list>","<li>","<ol>"],"answer":"<ul>"},
        {"question":"Form tag?","options":["<form>","<input>","<submit>","<button>"],"answer":"<form>"},
        {"question":"Table tag?","options":["<table>","<tr>","<td>","<th>"],"answer":"<table>"},
        {"question":"Line break?","options":["<br>","<break>","<lb>","<newline>"],"answer":"<br>"},
        {"question":"Bold text?","options":["<b>","<bold>","<strong>","<em>"],"answer":"<b>"},
        {"question":"Italic tag?","options":["<i>","<italic>","<em>","<it>"],"answer":"<i>"},
        {"question":"Meta tag used for?","options":["Metadata","Styling","Script","Layout"],"answer":"Metadata"},
        {"question":"Head section?","options":["<head>","<header>","<top>","<meta>"],"answer":"<head>"},
        {"question":"Body tag?","options":["<body>","<main>","<section>","<div>"],"answer":"<body>"},
        {"question":"Input field?","options":["<input>","<form>","<field>","<textbox>"],"answer":"<input>"}
      ]
    },
    {
      "id": 7,
      "name": "CSS",
      "questions": [
        {"question":"CSS stands for?","options":["Cascading Style Sheets","Color Style","Creative Style","None"],"answer":"Cascading Style Sheets"},
        {"question":"Select class?","options":[".class","#class","class","*class"],"answer":".class"},
        {"question":"Select id?","options":["#id",".id","id","*id"],"answer":"#id"},
        {"question":"Flexbox property?","options":["display:flex","position:flex","flex:true","layout:flex"],"answer":"display:flex"},
        {"question":"Grid property?","options":["display:grid","grid:true","layout:grid","none"],"answer":"display:grid"},
        {"question":"Margin property?","options":["margin","padding","border","space"],"answer":"margin"},
        {"question":"Padding property?","options":["padding","margin","border","space"],"answer":"padding"},
        {"question":"Text color?","options":["color","font","text-color","style"],"answer":"color"},
        {"question":"Background color?","options":["background-color","bg-color","color","bg"],"answer":"background-color"},
        {"question":"Font size?","options":["font-size","text-size","size","font"],"answer":"font-size"},
        {"question":"Position absolute?","options":["position:absolute","absolute","pos:absolute","none"],"answer":"position:absolute"},
        {"question":"Z-index used for?","options":["Stack order","Color","Font","Layout"],"answer":"Stack order"},
        {"question":"Display block?","options":["display:block","block","layout:block","none"],"answer":"display:block"},
        {"question":"Overflow hidden?","options":["overflow:hidden","hidden","overflow:none","none"],"answer":"overflow:hidden"},
        {"question":"Center text?","options":["text-align:center","align:center","center","text:center"],"answer":"text-align:center"}
      ]
    },
    {
      "id": 8,
      "name": "SQL",
      "questions": [
        {"question":"SQL stands for?","options":["Structured Query Language","Simple Query","Standard Query","None"],"answer":"Structured Query Language"},
        {"question":"Select all?","options":["SELECT *","GET *","FETCH *","ALL"],"answer":"SELECT *"},
        {"question":"Insert data?","options":["INSERT","ADD","PUT","CREATE"],"answer":"INSERT"},
        {"question":"Update data?","options":["UPDATE","MODIFY","CHANGE","SET"],"answer":"UPDATE"},
        {"question":"Delete data?","options":["DELETE","REMOVE","DROP","CLEAR"],"answer":"DELETE"},
        {"question":"Primary key?","options":["Unique identifier","Foreign key","Index","None"],"answer":"Unique identifier"},
        {"question":"Join tables?","options":["JOIN","MERGE","LINK","CONNECT"],"answer":"JOIN"},
        {"question":"Filter data?","options":["WHERE","FILTER","SELECT","GROUP"],"answer":"WHERE"},
        {"question":"Sort data?","options":["ORDER BY","SORT","ARRANGE","GROUP"],"answer":"ORDER BY"},
        {"question":"Count rows?","options":["COUNT()","SUM()","TOTAL()","NUMBER()"],"answer":"COUNT()"},
        {"question":"Group data?","options":["GROUP BY","CLUSTER","SORT","ORDER"],"answer":"GROUP BY"},
        {"question":"Limit rows?","options":["LIMIT","TOP","MAX","ROW"],"answer":"LIMIT"},
        {"question":"Database create?","options":["CREATE","MAKE","BUILD","NEW"],"answer":"CREATE"},
        {"question":"Table remove?","options":["DROP","DELETE","REMOVE","CLEAR"],"answer":"DROP"},
        {"question":"Index purpose?","options":["Speed query","Store data","Delete data","None"],"answer":"Speed query"}
      ]
    },
    {
      "id": 9,
      "name": "MongoDB",
      "questions": [
        {"question":"MongoDB is?","options":["NoSQL DB","SQL DB","Language","Framework"],"answer":"NoSQL DB"},
        {"question":"Data format?","options":["JSON","XML","CSV","TXT"],"answer":"JSON"},
        {"question":"Collection equals?","options":["Table","Row","Column","Index"],"answer":"Table"},
        {"question":"Document equals?","options":["Row","Table","Column","Key"],"answer":"Row"},
        {"question":"Insert method?","options":["insertOne()","add()","create()","put()"],"answer":"insertOne()"},
        {"question":"Find data?","options":["find()","search()","get()","select()"],"answer":"find()"},
        {"question":"Update data?","options":["updateOne()","modify()","change()","set()"],"answer":"updateOne()"},
        {"question":"Delete data?","options":["deleteOne()","remove()","drop()","clear()"],"answer":"deleteOne()"},
        {"question":"Primary key?","options":["_id","id","key","uid"],"answer":"_id"},
        {"question":"Aggregation?","options":["Data processing","Insert","Delete","Update"],"answer":"Data processing"},
        {"question":"Index used for?","options":["Performance","Delete","Insert","None"],"answer":"Performance"},
        {"question":"Database command?","options":["use","create","select","db"],"answer":"use"},
        {"question":"Drop collection?","options":["drop()","delete()","remove()","clear()"],"answer":"drop()"},
        {"question":"Sort data?","options":["sort()","order()","arrange()","group()"],"answer":"sort()"},
        {"question":"Limit data?","options":["limit()","max()","top()","range()"],"answer":"limit()"}
      ]
    }
  ]
};
