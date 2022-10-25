var styleIndex = 0;
function changeStyle(){
    var styleSheet = [
        `<link id="style2" rel="stylesheet" href="/RGQ2.css"/>`,
        `<link id="style" rel="stylesheet" href="/RQG.css"/>`,
    ]
    var getStyle = document.getElementById('styleSheet');
    getStyle.innerHTML = styleSheet[styleIndex];
    styleIndex++;
    if (styleIndex == styleSheet.length)
        styleIndex = 0;        

    /*console.log(styleSheet);
    console.log("style index is now " + styleIndex)*/
}

var authorIndex = 0;
var quoteIndex = 0;

function generate() {
   var quotes = {
        '—Socrates':'“My advice to you is get married: If you find a good wife you’ll be happy; if not, you’ll become a philosopher.”',
        '—Will Ferrell':'“Before you marry a person, you should first make them use a computer with slow Internet service to see who they really are.”',
        '—Phyllis Diller':'“Never go to bed mad. Stay up and fight.”',
        '—Rod Stewart':'“Instead of getting married again, I’m going to find a woman I don’t like and give her a house.”',
        '—Dave Barry':'“A perfect parent is a person with excellent child-rearing theories and no actual children.”',
        '—Rodney Dangerfield':'“When I was a kid my parents moved a lot, but I always found them.”',
        '—Reese Witherspoon':'“If you are not yelling at your kids, you are not spending enough time with them.”',
        '—Erma Bombeck':'“When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway.”',
        '—Kate Davis':'“Kids are expensive, I didn’t even realize how broke I was until last year someone stole my identity and it ruined her life.”',
        '—Jerry Seinfeld':'“There is no such thing as fun for the whole family.”'
    }
    var authors = Object.keys(quotes);
        /*console.log(authors);
        console.log(authors.length);
        console.log(authors[0]);
        console.log(authors[1]);*/
    var onlyQuotes = Object.values(quotes);
        /*console.log(onlyQuotes);
        console.log(onlyQuotes.length);
        console.log(onlyQuotes[0]);
        console.log(onlyQuotes[1]);*/
    
    var quoteEl = document.getElementById('quoteP');
    var authorEl = document.getElementById('author');
    quoteEl.innerHTML = onlyQuotes[quoteIndex];
    authorEl.innerHTML = authors[authorIndex];
    authorIndex++;
    quoteIndex++;
    /*console.log(authorIndex);
    console.log(quoteIndex);*/

    if (authorIndex == authors.length)
        authorIndex = 0;
    if (quoteIndex == onlyQuotes.length)
        quoteIndex = 0;

};
