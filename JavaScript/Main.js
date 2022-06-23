const star5 = parseInt(document.getElementById("stars-5").value) * 5;
const star4 = parseInt(document.getElementById("stars-4").value) * 4;
const star3 = parseInt(document.getElementById("stars-3").value) * 3;
const star2 = parseInt(document.getElementById("stars-3").value) * 2;
const star1 = parseInt(document.getElementById("stars-1").value);

const average = Math.round(((star5 + star4 + star3 + star2 + star1) / 100) * 10) /10;

for (let i = 0; i < document.getElementsByClassName("average").length; i++)
    document.getElementsByClassName("average")[i].innerText = average.toString();

if (localStorage.getItem("downloads") === null) {
    localStorage.setItem('downloads' , '0');
}

// visits
function startTime()
{
    let count = parseInt(localStorage.getItem('downloads'));
    let s = new Date().getSeconds();
    if (s % 5 === 0)
    {
        if (Math.random() * 10 > 6)
            count++;
    }

    if (count < 1000)
    {
        document.getElementById('download-game').innerHTML = count.toString() + " downloads";
    }
    else if (count > 1000 && count < 1000000)
    {
        document.getElementById('download-game').innerHTML = Math.floor(count / 1000).toString() + ' K downloads';
    }
    else
    {
        document.getElementById('download-game').innerHTML = Math.floor(count / 1000000).toString() + ' MLN downloads';
    }

    if (count === 1000000000) {
        localStorage.setItem('downloads' , '0');
    }

    localStorage.setItem('downloads', count.toString())

    setTimeout(startTime, 1000);
}

