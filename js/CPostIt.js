/**
 * @author AM54
 * @version V2.6
 * @class Classe de PostIt
 * @member {number} id
 */

/**
 * Classe PostIt
 */
class PostIt {
    id;
    couleur;
    x;
    y;
    largeur;
    hauteur;
    lOrigin
    hOrigin
    sourisXorig
    sourisYorig
    editText
    

    /**
     * Constructeur du post-it
     * @param {number} id 
     */
    constructor(id) {
        this.id = id
        this.couleur = "yellow"
        this.x = 100
        this.y = 100
        this.largeur = 180
        this.hauteur = 300
        this.editText = false
        this.texte = ""
        this.fontSize = 12
    }

    /**
     * Function qui affiche un post-it
     */
    affiche() {
        let monElem = document.getElementById("a"+this.id)
        if (monElem === null) {
            //Le post it n'existe pas, on le créé
            monElem = document.createElement("div")
            monElem.id = "a"+this.id
            document.body.appendChild(monElem)
            // déplacement au drag and drop

            monElem.addEventListener('wheel', (e) => {
                console.log(e)
            })


        }
        // monElem.contentEditable = this.editText
        monElem.style.position = "fixed"
        monElem.style.backgroundColor = this.couleur
        monElem.style.top = this.y + "px"
        monElem.style.left = this.x + "px"
        monElem.style.minHeight = "100px"
        monElem.style.minWidth = "100px"
        monElem.style.width = this.largeur + "px"
        monElem.style.height = this.hauteur + "px"
        monElem.style.wordWrap = "break-word"
        monElem.style.fontSize = this.fontSize + "px"
        monElem.style.borderRadius = "15px"
        monElem.innerHTML = this.texte
        //Boite à outil après innerHTML
        let menu = document.createElement('div')
        menu.style.minHeight = "20px"
        menu.style.minWidth = "98px"
        menu.style.height = '20px'
        menu.style.border = '1px solid black'
        menu.style.position = "absolute"
        menu.style.bottom = '0'
        menu.style.right = '0'
        menu.style.width = (this.largeur-2) + "px"
        menu.style.borderBottomLeftRadius = "15px"
        menu.style.borderBottomRightRadius = "15px"
        monElem.appendChild(menu)

        let boutMove = document.createElement('i')
        boutMove.classList.add("fas")
        boutMove.classList.add("fa-arrows-alt")
        boutMove.innerHTML = "&nbsp;&nbsp;"

        boutMove.addEventListener("click", (e)=>{
            move = true
            numCase = this.id
            e.stopPropagation()
        })
        menu.appendChild(boutMove)

        let boutResize = document.createElement('i')
        boutResize.classList.add("fas","fa-expand-alt")
        boutResize.innerHTML = "&nbsp;&nbsp;"

        boutResize.addEventListener("click", (e)=>{
            resize = true
            numCase = this.id
            this.lOrigin = this.largeur
            this.hOrigin = this.hauteur
            this.sourisXorig = sourisX
            this.sourisYorig = sourisY
            e.stopPropagation()
        })
        menu.appendChild(boutResize)

        let boutEdit = document.createElement('i')
        boutEdit.classList.add("fas","fa-edit")
        boutEdit.innerHTML = "&nbsp;&nbsp;"

        boutEdit.addEventListener("click", (e)=>{
            edit = true
            numCase = this.id
            e.stopPropagation()
        })
        menu.appendChild(boutEdit)

        let boutFontPlus = document.createElement('i')
        boutFontPlus.classList.add("fas","fa-plus")
        boutFontPlus.innerHTML = "&nbsp;&nbsp;"

        boutFontPlus.addEventListener("click", (e)=>{
            this.fontPlus()
            this.affiche()
            e.stopPropagation()
        })
        menu.appendChild(boutFontPlus)

        let boutFontMoins = document.createElement('i')
        boutFontMoins.classList.add("fas","fa-minus")
        boutFontMoins.innerHTML = "&nbsp;&nbsp;"

        boutFontMoins.addEventListener("click", (e)=>{
            this.fontMoins()
            this.affiche()
            e.stopPropagation()
        })
        menu.appendChild(boutFontMoins)
    }

    /**
     * Fonction qui affiche un post-it sans le ré-afficher
     * @param {number} x Position du post-it en X
     * @param {number} y Position du post-it en Y
     */
    bouge(x, y) {
        this.x = x
        this.y = y
    }

    /**
     * Redimensionne le post-it sans le ré-afficher
     * @param {number} larg Largeur du post-it
     * @param {number} haut Hauteur du post-it
     */
    redim(larg, haut) {
        this.largeur = larg
        this.hauteur = haut
    }

    /**
     * Change la couleur du post-it sans le ré-afficher
     * @param {string} coul Couleur du post-it
     */
    chgCoul(coul) {
        this.couleur = coul
    }

    /**
     * Modifie le contenu (texte) du post-it sans le ré-afficher
     * @param {string} cont Texte se trouvant dans le post-it
     */
    chContenu(cont) {
        this.texte = cont
    }

    /**
     * Augmente la taille de la police du texte du post-it
     */
    fontPlus(){
        this.fontSize ++
    }

    /**
     * Diminue la taille de la police du texte du post-it
     */
    fontMoins(){
        this.fontSize --
    }

    majCookie(idCookie, couleurCookie, xCookie, yCookie, largeurCookie, hauteurCookie, editTextCookie, texteCookie, fontSizeCookie){
        this.id = idCookie
        this.couleur = couleurCookie
        this.x = xCookie
        this.y = yCookie
        this.largeur = largeurCookie
        this.hauteur = hauteurCookie
        this.editText = editTextCookie
        this.texte = texteCookie
        this.fontSize = fontSizeCookie
    }
}