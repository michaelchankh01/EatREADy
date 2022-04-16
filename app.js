function outputUpdate(size) {
    document.querySelector('#size').value = size;

    let display = document.querySelector(".displaySize");
        
    switch(display) {
        case "1":
            display.style.fontSize =  "2.5vh";
            break;
        case "2":
            display.style.fontSize =  "3vh";
            break;
        case "3":
            display.style.fontSize =  "3.5vh";
            break;
        case "4":
            display.style.fontSize =  "4vh";
            break;
        case "5":
            display.style.fontSize =  "4.5vh";
            break;
    }

    let contentClasses = [".settingsName", ".settingsContent"];
    contentClasses.forEach(i =>{

        let content = document.querySelectorAll(i);
        content.forEach(j =>{
        
        switch(size) {
            case "1":
                j.style.fontSize =  "1.5vh";  
                break;
            case "2":
                j.style.fontSize =  "2vh";    
                break;
            case "3":
                j.style.fontSize =  "2.5vh";
                break;
            case "4":
                j.style.fontSize =  "3vh";    
                break;
            case "5":
                j.style.fontSize =  "3.5vh";    
                break;
            };
        });
    });

    let titleClasses = ".topWords";
    let title = document.querySelector(titleClasses);

    switch(size) {
    case "1":
        title.style.fontSize =  "2.5vh";
        break;
    case "2":
        title.style.fontSize =  "3vh";
        break;
    case "3":
        title.style.fontSize =  "3.5vh";
        break;
    case "4":
        title.style.fontSize =  "4vh";
        break;
    case "5":
        title.style.fontSize =  "4.5vh";
        break;
    }
};

const dark = document.querySelector("#dark");
const contrast = document.querySelector("#contrast");

dark.addEventListener('click', darkMode);
contrast.addEventListener('click', highContrast);

function darkMode(){
    if (contrast.checked){
        return
    }
    else{
    document.body.classList.toggle("darkTheme")
    }
}

function highContrast(){
    document.body.classList.toggle("highContrast");
}