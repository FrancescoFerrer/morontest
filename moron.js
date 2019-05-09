var level = 0
var iconSpace = document.querySelector(".icons")
var instrSpace = document.querySelector(".instructions h2")
var icons

function clearIcons(icon) {
    while (iconSpace.firstChild) {
        iconSpace.removeChild(iconSpace.firstChild);
    }
}

function iconBuilder(obj) {
    var newIcon = document.createElement("i")
    newIcon.style.color = obj.color
    newIcon.textContent = obj.content
    newIcon.style.fontSize = `${obj.size}rem`
    newIcon.style.transform = `translate(-50%, -50%) ${obj.transform}`
    newIcon.style.left = `${obj.left}%`
    newIcon.style.top = `${obj.top}%`
    var classArr = obj.class.split(' ')
    classArr.forEach(function (cls) {
        newIcon.classList.add(cls)
    })
    return newIcon
}

function mapIcons(level) {
    scene[level].icons.forEach(function (iconObj) {
        var iconEl = iconBuilder(iconObj)
        iconSpace.appendChild(iconEl)
    })
}

function clearInstr() {
    while (instrSpace.firstChild) {
        instrSpace.removeChild(instrSpace.firstChild);
    }
}

function mapInstr(level) {
    instrSpace.textContent = scene[level].instructions[clickCount]
}

function changeInstr(text) {
    var instr = document.querySelector(".instructions h2")
    instr.textContent = text
}

function iconListener() {
    icons = document.querySelectorAll("i")
    Array.prototype.forEach.call(icons,
        function (icon, i) {
            icon.addEventListener("click", function () {
                runScene(icon, i)  
            }
            )
        })
    function runScene(icon, i) {

        var clicksNeeded = scene[level].answer.length
        if (clickCount < clicksNeeded) {
            if (i === scene[level].answer[clickCount]) {
                clickCount++
                scene[level].main(icon, i)
                if (clickCount === clicksNeeded) {
                    level++
                    start()
                }
            } else {
                fail()
            }
        }
    }
}     
function moveIcon(i,left,top){
    icons[i].style.left = `${left}%`
    icons[i].style.top = `${top}%`
}

function fail(){
    clearIcons()
    clearInstr()
    instrSpace.innerHTML = ` <h2 class="fail" style="
    top: 60%;
    font-size: 20 rem;">Fail!</h2>
    <h2 class="startover">Click the face to restart.</h2>`
    iconSpace.innerHTML = ` <i class="fas fa-tired" style="
    color: #911c17;
    left: 50%;
    top: 40%;
    font-size: 25rem;
    filter: none;"></i> `
    icons = document.querySelectorAll("i")
    Array.prototype.forEach.call(icons,
        function (icon, i) {
            icon.addEventListener("click", function () {
                level = 0
                start()
            })
        })
}

function win(){
    clearIcons()
    clearInstr()
    instrSpace.innerHTML = ` <h2 class="win" style="
    top: 60%;
    font-size: 20 rem;">Congratulations</h2>
    <h2 class="notamoron">You're not a moron!</h2>`
    iconSpace.innerHTML =  `<i class="text-icon" style="
    color: #911c17;
    left: 50%;
    top: 40%;
    font-size: 10rem;
    ">Play Again</i>`
    icons = document.querySelectorAll("i")
    Array.prototype.forEach.call(icons,
        function (icon, i) {
            icon.addEventListener("click", function () {
                level = 0
                start()
            })
        })
}

function start() {
    if (level < scene.length){
    clickCount = 0
    clearIcons()
    mapIcons(level)
    iconListener()
    clearInstr()
    mapInstr(level)
    }
    else{
        win()
    }
}

start()
