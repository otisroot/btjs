var btn = document.querySelector('button')
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
btn.addEventListener('click', function() {
    changerBackground()
    checkNumberA()
    checkNumberB()
    checkNumberC()
    giaiPTBH(x, y, z)
})

function checkNumberA() {
    let aValue = a.value
    if (!aValue == "") {
        a.style.border = "1px solid #ccc"
        document.getElementsByTagName('small')[0].innerText = ""
        if (isNaN(aValue)) {
            document.getElementsByTagName('small')[0].innerText = "bạn phải nhập số "
        } else {
            document.getElementsByTagName('small')[0].innerText = ""
            x = parseInt(aValue)
        }
    } else {
        document.getElementsByTagName('small')[0].innerText = "mời nhập số a"
        a.style.border = "1px solid red"
        document.getElementsByClassName('result')[0].innerText = ""
    }
}

function checkNumberB() {
    let bValue = b.value
    if (!bValue == "") {
        b.style.border = "1px solid #ccc"
        document.getElementsByTagName('small')[1].innerText = ""
        if (isNaN(bValue)) {
            document.getElementsByTagName('small')[1].innerText = "bạn phải nhập số "
        } else {
            document.getElementsByTagName('small')[1].innerText = ""
            y = parseInt(bValue)
        }
    } else {
        document.getElementsByTagName('small')[1].innerText = "mời nhập số b"
        b.style.border = "1px solid red"
        document.getElementsByClassName('result')[0].innerText = ""
    }
}

function checkNumberC() {
    let cValue = c.value
    if (!cValue == "") {
        c.style.border = "1px solid #ccc"
        document.getElementsByTagName('small')[2].innerText = ""
        if (isNaN(cValue)) {
            document.getElementsByTagName('small')[2].innerText = "bạn phải nhập số "
        } else {
            document.getElementsByTagName('small')[2].innerText = ""
            z = parseInt(cValue)
        }
    } else {
        document.getElementsByTagName('small')[2].innerText = "mời nhập số c"
        c.style.border = "1px solid red"
        document.getElementsByClassName('result')[0].innerText = ""
    }
}

let giaiPTBH = function(a, b, c) {
    let delta = (b * b) - (4 * a * c);
    if (delta < 0) {
        document.getElementsByClassName('result')[0].innerText = "phương trình vô nghiệm"
    } else if (delta == 0) {
        let x = (-b) / (2 * a);
        document.getElementsByClassName('result')[0].innerText = "PT co nghiem kep = " + x;
    } else {
        let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
        let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
        document.getElementsByClassName('result')[0].innerText = "PT co 2 nghiem phan biet x1 = " + x1 + " va x2 = " + x2;
    }
}
const changerBackground = () => {
    setTimeout(function() {
        document.querySelector('body').style.backgroundColor = "yellow"
    }, 200)
    setTimeout(function() {
        document.querySelector('body').style.backgroundColor = "#ccc"
    }, 400)
}