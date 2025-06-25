export class View{
    constructor(){
        this.counterContainer = document.querySelector("#counter-container")
    }
    updateView(counter){
        this.counterContainer.innerHTML = counter
    }
    notifyUser(){
        alert("Очень много кликов!!!")
    }

}

export default View
