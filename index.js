let countHome = 0
let countGuest = 0
let countElHome = document.getElementById("count-el-home")
let countElGuest = document.getElementById("count-el-guest")


function addOneHome() {
    countHome = countHome + 1
    countElHome.innerText = countHome
}

function addOneGuest() {
    countGuest = countGuest + 1
    countElGuest.innerText = countGuest
}


function addTwoHome() {
    countHome = countHome + 2
    countElHome.innerText = countHome
}


function addTwoGuest() {
    countGuest = countGuest + 2
    countElGuest.innerText = countGuest
}


function addThreeHome() {
    countHome = countHome + 3
    countElHome.innerText = countHome
}


function addThreeGuest() {
    countGuest = countGuest + 3
    countElGuest.innerText = countGuest
}
