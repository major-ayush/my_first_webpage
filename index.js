console.log("Hey!! This is Ayush Gupta");

// Random color-generator function..
function generateRandomColorCode()
{
    let color = "#";
    let possibleChars = "0123456789ABCDEF";
    for(var i = 0; i < 6; i++)
    {
        var randomIndex = Math.floor(Math.random() * 16);
        color += possibleChars[randomIndex];
    }
    return color;
}
console.log(generateRandomColorCode());
function changeBackgroundColor()
{
    document.getElementById("body").style.backgroundColor = generateRandomColorCode();
}
function showName()
{
    changeBackgroundColor();
    document.getElementById("name").innerHTML = "I am Ayush Gupta";
}
function showCollege()
{
    changeBackgroundColor();
    document.getElementById("college").innerHTML = "My alma-mater is Lovely Professional University, Punjab";
}
function showDegree()
{
    changeBackgroundColor();
    document.getElementById("degree").innerHTML = "I am pursuing B.Tech in Computer Science and Engineering";
}
function showCgpa()
{
    changeBackgroundColor();
    document.getElementById("cgpa").innerHTML = "My current CGPA is 9.07";
}
function showCompany()
{
    changeBackgroundColor();
    document.getElementById("company").innerHTML = "I got selected in Jhonson Controls India Pvt Ltd.";
}
function showThankYouNote()
{
    changeBackgroundColor();
    document.getElementById("thanks").innerHTML = "Thank You for visiting my first website.";
}
setTimeout(showName, 1000);
setTimeout(showCollege, 2000);
setTimeout(showDegree, 3000);
setTimeout(showCgpa, 4000);
setTimeout(showCompany, 5000);
setTimeout(showThankYouNote, 6000);