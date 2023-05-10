
let modeli = document.getElementById('modeli');

let model = 1;

modeli.addEventListener('change', function () {
    const selectedValue = modeli.value;
    model = selectedValue;
});

function konverto() {
    let numri = document.getElementById("numri").value;

    let result = konvertoNeBCD(numri, model);

    document.getElementById("rezultati").classList.remove("hidden");
    document.getElementById("rezultati").innerHTML = result;
}

function dekodo() {
    let numri = document.getElementById("numri2").value;

    let result = konvertoPrejBCD(numri, model);

    document.getElementById("rezultati1").classList.remove("hidden");
    document.getElementById("rezultati1").innerHTML = result;
}



function konvertoNeBCD(numri, modeli) {
    let b = numri;
    let rezultati = "";

    let array = [8, 4, 2, 1];
    let array2 = [5, 4, 2, 1];
    let array3 = [5, 2, 1, 1];
    let array4 = [2, 4, 2, 1];
    let array5 = [4, 3, 2, 1];

    switch (modeli) {
        case "1":
            rezultati += konvertoV(array, b);
            break;
        case "2":
            rezultati += konvertoV(array2, b);
            break;
        case "3":
            rezultati += konvertoV(array3, b);
            break;
        case "4":
            rezultati += konvertoV(array4, b);
            break;
        case "5":
            rezultati += konvertoXS3(array, b);
            break;
        case "6":
            rezultati += grayCode(b);
            break;
        case "7":
            rezultati += konvertoV(array5, b);
            break;
        default:
            rezultati += konvertoV(array, b);
            break;
    }
    return rezultati;
}

function konvertoPrejBCD(numri, modeli) {
    let b = numri;
    let rezultati = "";

    let array = [8, 4, 2, 1];
    let array2 = [5, 4, 2, 1];
    let array3 = [5, 2, 1, 1];
    let array4 = [2, 4, 2, 1];
    let array5 = [4, 3, 2, 1];

    switch (modeli) {
        case "1":
            rezultati += konvertoZ(array, b);
            break;
        case "2":
            rezultati += konvertoZ(array2, b);
            break;
        case "3":
            rezultati += konvertoZ(array3, b);
            break;
        case "4":
            rezultati += konvertoZ(array4, b);
            break;
        case "5":
            rezultati += konvertoPrejXS3(array, b);
            break;
        case "6":
            rezultati += prejGrayCode(b);
            break;
        case "7":
            rezultati += konvertoZ(array5, b);
            break;
        default:
            rezultati += konvertoZ(array, b);
            break;
    }
    return rezultati;
}


function konvertoV(array, targeti) {

    let b = String(targeti);
    let rezultati = "";

    for (let i = 0; i < b.length; i++) {
        if (i == 0) {
            rezultati += konvertoSpecific(array, parseInt(b[i]));

        } else {
            rezultati += " " + konvertoSpecific(array, parseInt(b[i]));
        }
    }


    return rezultati;
}

function konvertoXS3(array, target) {
    let b = String(target);
    let numbers = [];

    for (let i = 0; i < b.length; i++) {
        numbers.push(konvertoSpecific(array, parseInt(b[i]) + 3));
    }

    let result = numbers.join(" ");

    return result;
}

function konvertoPrejXS3(array, target) {
    let b = String(target).split(" ");

    for (let i in b) {
        b[i] = konvertoDecimalSpecifik(array, b[i]);
    }

    for (let i in b) {
        b[i] = Number(b[i]) - 3;
    }


    let result = b.join("");

    return result;
}



function konvertoSpecific(array, target) {
    let zgjidhja = "";
    let shuma = 0;
    for (let i = 0; i < array.length; i++) {
        if (shuma + array[i] <= target) {
            zgjidhja += "1";
            shuma += array[i];
        } else {
            zgjidhja += "0";
        }
    }
    if (shuma !== target) {
        alert("Ndodhi nje gabim!");
        throw new Error("Ndodhi nje gabim!");
    }
    return zgjidhja;
}

function konvertoDecimalSpecifik(array, numri) {
    let targeti = 0;
    let shuma = 0;
    for (let i = 0; i < numri.length; i++) {
        if (numri[i] === "1") {
            targeti += array[i];
            shuma += array[i];
        }
    }
    if (shuma !== targeti) {
        alert("Ndodhi nje gabim!");
        throw new Error("Ndodhi nje gabim!");

    }
    return targeti;
}



function konvertoZ(array, targeti) {

    let b = String(targeti).split(" ");
    let rezultati = "";

    for (let i = 0; i < b.length; i++) {
        rezultati += konvertoDecimalSpecifik(array, b[i]);
    }


    console.log(rezultati);
    return rezultati;

}


function grayCode(n, length) {
    let gray = (n ^ (n >> 1)).toString(2);
    while (gray.length < length) {
        gray = '0' + gray;
    }
    return gray;
}


function prejGrayCode(n) {
    // E kthejm ne numer binar
    n = parseInt(n, 2);

    let mask = n;
    while (mask !== 0) {
        mask >>= 1;
        n ^= mask;
    }

    return n;
}


const images = ['image.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.png', 'image8.jpg', 'image9.jpg', 'image10.jpg',];
shuffleArray(images);
let currentIndex = 0;
const intervalTime = 15000;
setInterval(() => {
    const background = document.querySelector('.background-image');
    background.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}, intervalTime);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
var kinet = new Kinet({
    acceleration: 0.07,
    friction: 0.20,
    names: ["x", "y"],
});
var circle = document.getElementById('circle');
kinet.on('tick', function (instances) {
    circle.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});
document.addEventListener('mousemove', function (event) {
    kinet.animate('x', event.clientX - window.innerWidth / 2);
    kinet.animate('y', event.clientY - window.innerHeight / 2);
});
kinet.on('start', function () {
    //
});
kinet.on('end', function () {
    //
});