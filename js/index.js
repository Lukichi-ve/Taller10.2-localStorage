document.getElementById("buttonText").addEventListener("click", ()=>{
    const texto = document.getElementById("inputText").value;
    localStorage.setItem("datoGuardado", texto);
})