var head = document.createElement("head");
head.innerHTML = `<meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>The Funion</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`;

document.head.appendChild(head);

var bodyHeader = document.createElement("body");
bodyHeader.innerHTML = `<a href="index.html"><center><h1 id="title">The Funion</h1></center></a>
  <ul class="nav justify-content-center">
  <li class="nav-item" >
    <a class="nav-link" id="first" aria-current="page" href="c.html">Current Events</a>
  </li>
  <li class="nav-item" id="second">
    <a class="nav-link" href="o.html">Opinion Articles</a>
  </li>
  <li class="nav-item" id="third">
    <a class="nav-link" href="characterQuiz.html">Quizzes</a>
  </li>
  <li class="nav-item" id="fourth">
    <a class="nav-link" href="l.html
">Lifestyle</a>
  </li>
<li class="nav-item" id="fifth">
    <a class="nav-link" href="s.html">Sports</a>
  </li>
<li class="nav-item" id="sixth">
    <a class="nav-link" href="auto.html">Meet the Staff</a>
  </li>
</ul>`;

document.body.prepend(bodyHeader);
var title = document.getElementById("title");
title.classList.remove("bounce");
title.offsetWidth;
title.classList.add("bounce");

var first = document.getElementById("first");
first.style.animation = "slide-in-left 1.7s";

var second = document.getElementById("second");
second.style.animation = "slide-in-left 1.2s";

var third = document.getElementById("third");
third.style.animation = "slide-in-left 0.7s"

var fourth = document.getElementById("fourth");
fourth.style.animation = "slide-in-right 0.7s";

var fifth = document.getElementById("fifth");
fifth.style.animation = "slide-in-right 1.2s";

var sixth = document.getElementById("sixth");
sixth.style.animation = "slide-in-right 1.7s";

var bottomText = document.createElement("div");
bottomText.innerHTML = `<div id="bottomBar">
<div id="textHolder">
<p id="bottomBarText"> <b> About The Funion: </b> <br> Here at The Funion, we like to think on the bright side of life; our articles are thoroughly mediocre, and we don't mind a bit. In the words of a good man: <br> "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called present." The Funion is <b>our</b> present. </p>
</div>
</div>`;
document.body.append(bottomText);