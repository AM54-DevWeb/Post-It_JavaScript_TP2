/**
 * @author AM54
 * @version V2.6
 */

// VARIABLES GLOBALES
let resize = false
let move = false
let edit = false
let sourisXorig
let sourisYorig
let editText

// TABLEAU POST IT

let tabId = []
let numCase = 0
// tabId[numCase]
// let postItAdd = new PostIt(tabId.length)
// tabId.push(postItAdd)

// EVENTS

document.body.addEventListener('click', ()=>{
    resize = false
    move = false
    edit = false
})

document.body.addEventListener('mousemove', (e)=>{
    sourisX = e.clientX
    sourisY = e.clientY
    if(move==true){
        tabId[numCase].bouge(e.clientX-90, e.clientY-250)
        tabId[numCase].affiche()
        console.log(tabId[numCase])
    }else if(resize == true){
        tabId[numCase].redim(tabId[numCase].lOrigin +(e.clientX-tabId[numCase].sourisXorig), tabId[numCase].hOrigin +(e.clientY-tabId[numCase].sourisYorig)+25)
        tabId[numCase].affiche()
    }
})

document.body.addEventListener('keypress', (e)=>{
    if(edit == true){
        if(e.key=='Enter'){
            tabId[numCase].chContenu(tabId[numCase].texte + "</br>")
            tabId[numCase].affiche()
        }else if(e.key == " "){
            tabId[numCase].chContenu(tabId[numCase].texte + "&nbsp;")
            tabId[numCase].affiche()
        }else{
            tabId[numCase].chContenu(tabId[numCase].texte +e.key)
            tabId[numCase].affiche()
        }
    }
})

document.body.addEventListener('keydown', (e)=>{
    if(e.key == 'Backspace' && tabId[numCase].texte.substr(tabId[numCase].texte.length-6) == "&nbsp;"){
        tabId[numCase].chContenu(tabId[numCase].texte.slice(0, tabId[numCase].texte.length-6))
        tabId[numCase].affiche()
    }else  if(e.key == 'Backspace' && tabId[numCase].texte.substr(tabId[numCase].texte.length-5) == "</br>"){
        tabId[numCase].chContenu(tabId[numCase].texte.slice(0, tabId[numCase].texte.length-5))
        tabId[numCase].affiche()
    }else  if(e.key == 'Backspace'){
        tabId[numCase].chContenu(tabId[numCase].texte.slice(0, tabId[numCase].texte.length-1))
        tabId[numCase].affiche()
    }
})



// AJOUT POST IT

// function nbAleat(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

document.querySelector("#ajoutPostRed").onclick = function affichePost(){
    numCase= tabId.length
    let postItAdd = new PostIt(tabId.length)
    tabId.push(postItAdd)
    // let col = nbAleat(0, 5);
    // if(col == 0){coule = "blue"}
    // if(col == 1){coule = "red"}
    // if(col == 2){coule = "yellow"}
    // if(col == 3){coule = "green"}
    // if(col == 4){coule = "grey"}
    // if(col == 5){coule = "black"}
    // postItAdd.chgCoul(coule)
    postItAdd.chgCoul("red")
    postItAdd.affiche()
}

document.querySelector("#ajoutPostGreen").onclick = function affichePost(){
    numCase= tabId.length
    let postItAdd = new PostIt(tabId.length)
    tabId.push(postItAdd)
    postItAdd.chgCoul("green")
    postItAdd.affiche()
}

document.querySelector("#ajoutPostBlue").onclick = function affichePost(){
    numCase= tabId.length
    let postItAdd = new PostIt(tabId.length)
    tabId.push(postItAdd)
    postItAdd.chgCoul("blue")
    postItAdd.affiche()
}


//FUNCTIONS COOKIES

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/;SameSite=None; Secure"; 
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

//GESTION COOKIES

setInterval(() => {
    createCookie('cookie1', JSON.stringify(tabId),7)
}, 1000);


    readCookie('cookie1')
    // tabId = JSON.parse(readCookie('cookie1'))
    // console.log(tabId)

    let tabCookie = JSON.parse(readCookie('cookie1'))
    // console.log(tabCookie)
    for(let i in tabCookie){
        numCase= tabId.length
        tabId.push(new PostIt(numCase))
        tabId[numCase].majCookie(tabCookie[i].id, tabCookie[i].couleur, tabCookie[i].x, tabCookie[i].y, tabCookie[i].largeur, tabCookie[i].hauteur, tabCookie[i].editText, tabCookie[i].texte, tabCookie[i].fontSize)
        tabId[numCase].affiche()
        console.log(tabId)
    }

    // eraseCookie("cookie1")
