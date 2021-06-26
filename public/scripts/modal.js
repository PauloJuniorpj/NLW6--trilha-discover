export default function Modal(){
    
    
    const modalWrapper =document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click",close)
    
    function open(){
        //Funcionalidade de atribuir a classe active pra modal
        modalWrapper.classList.add("active")
    }
        
    function close(){
        //Funcionalidade de remorver a classe active da modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}