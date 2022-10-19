let q = 1;
let score = 0;

function nextQ() {
    q++;
    document.getElementById('question-n').innerHTML = "Question " + q + " / 10";
    document.getElementById('question-i').src = "assets/q" + q + ".jpg";

    if (q == 2) {
        reponse("4");
        document.getElementById('question-q').innerHTML = 'To which rock group do we owe "We are the champions" ?';
        document.getElementById('rep1').innerHTML = "Queen";
        document.getElementById('rep2').innerHTML = "ACDC";
        document.getElementById('rep3').innerHTML = "The Rolling Stones";
        document.getElementById('rep4').innerHTML = "Europe";
    } else if (q == 3) {
        reponse("1");
        document.getElementById('question-q').innerHTML = 'In which state of the United States is the city of Malibu located ?';
        document.getElementById('rep1').innerHTML = "Hawaii";
        document.getElementById('rep2').innerHTML = "California";
        document.getElementById('rep3').innerHTML = "Colorado";
        document.getElementById('rep4').innerHTML = "Florida";
    } else if (q == 4) {
        reponse("2");
        document.getElementById('question-q').innerHTML = 'Why is the flamingo pink ?';
        document.getElementById('rep1').innerHTML = "It's a reaction of the sun's rays on its feathers";
        document.getElementById('rep2').innerHTML = "This is the cause of a diet rich in shrimp";
        document.getElementById('rep3').innerHTML = "Because there are only females";
        document.getElementById('rep4').innerHTML = "Because flamingos like to be different";
    } else if (q == 5) {
        reponse("2");
        document.getElementById('question-q').innerHTML = "Which of these animals can't close their eyes ?";
        document.getElementById('rep1').innerHTML = "Mouse";
        document.getElementById('rep2').innerHTML = "Parrot";
        document.getElementById('rep3').innerHTML = "Snake";
        document.getElementById('rep4').innerHTML = "Koala";
    } else if (q == 6) {
        reponse("3");
        document.getElementById('question-q').innerHTML = 'What part of the body continues to grow throughout life ?';
        document.getElementById('rep1').innerHTML = "The feet";
        document.getElementById('rep2').innerHTML = "The buttocks";
        document.getElementById('rep3').innerHTML = "The fingers";
        document.getElementById('rep4').innerHTML = "The ears";
    } else if (q == 7) {
        reponse("4");
        document.getElementById('question-q').innerHTML = 'Where were the 2018 Olympics held ?';
        document.getElementById('rep1').innerHTML = "PyeongChang";
        document.getElementById('rep2').innerHTML = "Moscow";
        document.getElementById('rep3').innerHTML = "Vancouver";
        document.getElementById('rep4').innerHTML = "Torino";
    } else if (q == 8) {
        reponse("1");
        document.getElementById('question-q').innerHTML = 'When does the First World War start ?';
        document.getElementById('rep1').innerHTML = "December 5, 1913";
        document.getElementById('rep2').innerHTML = "March 21, 1914";
        document.getElementById('rep3').innerHTML = "July 28, 1914";
        document.getElementById('rep4').innerHTML = "October 10, 1914";
    } else if (q == 9) {
        reponse("3");
        document.getElementById('question-q').innerHTML = 'What alcohol is used in the preparation of a Mojito ?';
        document.getElementById('rep1').innerHTML = "Rum";
        document.getElementById('rep2').innerHTML = "Vodka";
        document.getElementById('rep3').innerHTML = "Cognac";
        document.getElementById('rep4').innerHTML = "Gin";
    } else if (q == 10) {
        reponse("1");
        document.getElementById('question-q').innerHTML = 'How old was Leonardo DiCaprio while filming Titanic ?';
        document.getElementById('rep1').innerHTML = "17";
        document.getElementById('rep2').innerHTML = "20";
        document.getElementById('rep3').innerHTML = "23";
        document.getElementById('rep4').innerHTML = "26";
        document.getElementById('comfirm').textContent = "See the results";
    } else if (q == 11) {
        reponse("3");
        document.getElementById('questions').style.display = "none";
    }
}

function reponse(answer) {
    let correct = document.querySelector('input[name="select"]:checked').value;
    if (correct == answer) {
        score++;
    }
    console.log(score);
}
