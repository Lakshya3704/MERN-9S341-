let Title = document.getElementById("title");
let Dis = document.getElementById("discription");
let list = document.getElementById("container");
let error = document.querySelector(".error");
function submit(){
    let title = Title.value;
    let dis = Dis.value;

    if(title==="" || dis ===""){
        error.innerText="Error : Enter the field please!";
    }else{
        const card = document.createElement("div");
        card.className = "card";
    
        const cardTitle = document.createElement("h3");
        cardTitle.className = "cardTitle";
        cardTitle.innerText = title;
    
        const cardDis = document.createElement("p");
        cardDis.className = "cardDis";
        cardDis.innerText = dis;
        
        const bttn = document.createElement("div");
        bttn.className="bttn";

        const comBtn = document.createElement("button");
        comBtn.className = "comBtn";
        comBtn.innerText = "Complete";
    
        comBtn.addEventListener("click", function(){
            cardTitle.style.textDecoration = "line-through";
            cardDis.style.textDecoration = "line-through";
        });
    
        const delBtn = document.createElement("button");
        delBtn.className = "delBtn";
        delBtn.innerText = "Delet";
    
        delBtn.addEventListener("click", function(){
            card.remove();
        });
        bttn.appendChild(comBtn);
        bttn.appendChild(delBtn);
        card.appendChild(cardTitle);
        card.appendChild(cardDis);
        card.appendChild(bttn);
    
        list.appendChild(card);
        title = "";
        dis = "";
    }

}