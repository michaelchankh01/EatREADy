function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }




function NEWoutputUpdate(size) {


    let contentClasses1 = [".settingsName", ".settingsContent"];
    contentClasses1.forEach(i =>{

        let content = document.querySelectorAll(i);
        content.forEach(j =>{
        
        switch(size) {
            case "1":
                j.style.fontSize =  "1.5vh";  
                break;
            case "2":
                j.style.fontSize =  "1.9vh";    
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

    let contentClasses2 = [".newsResults" , ".searchTime"];
    contentClasses2.forEach(i =>{

        let content = document.querySelectorAll(i);
        content.forEach(j =>{
        
        switch(size) {
            case "1":
                j.style.fontSize =  "1.2vh";  
                break;
            case "2":
                j.style.fontSize =  "1.5vh";    
                break;
            case "3":
                j.style.fontSize =  "1.9vh";
                break;
            case "4":
                j.style.fontSize =  "2.5vh";    
                break;
            case "5":
                j.style.fontSize =  "3vh";    
                break;
            };
        });
    });

    let titleClasses1 = [".topWords"];
    titleClasses1.forEach(i =>{

        let title = document.querySelectorAll(i);
        title.forEach(j =>{

            switch(size) {
            case "1":
                j.style.fontSize =  "2.5vh";
                break;
            case "2":
                j.style.fontSize =  "3vh";
                break;
            case "3":
                j.style.fontSize =  "3.5vh";
                break;
            case "4":
                j.style.fontSize =  "4vh";
                break;
            case "5":
                j.style.fontSize =  "4.5vh";
                break;
            };
        });
    });

    let titleClasses2 = [".newsName", ".searchName",".searchStatus"];
    titleClasses2.forEach(i =>{

        let title = document.querySelectorAll(i);
        title.forEach(j =>{

            switch(size) {
            case "1":
                j.style.fontSize =  "1.5vh";
                break;
            case "2":
                j.style.fontSize =  "1.9vh";
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
};

function outputUpdate(size) {
    document.querySelector('#size').value = size;
    document.cookie="wordSize="+size;
    NEWoutputUpdate(getCookie("wordSize"))
}


NEWoutputUpdate(getCookie("wordSize"))

const wordsToHide = document.querySelectorAll(".wordsToHide");
const hideWords = document.querySelector("#hideWords");
const imagesToHide = document.querySelectorAll(".imagesToHide");
const hideImages = document.querySelector("#hideImages");

if(getCookie("hideWords")){
    wordsToHide.forEach(i => {
        i.style="display: none"
        })
        if(hideWords!== null){
            hideWords.checked=true;
        }
}
else{
    wordsToHide.forEach(i => {
        i.style="display: "
    })
}

if(hideWords!== null){
    hideWords.addEventListener('change', hideWord);
}
function hideWord(){
    if(hideWords.checked){
        document.cookie="hideWords=true";
    }
    else{
        document.cookie="hideWords=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
}

if(getCookie("hideImages")){
    imagesToHide.forEach(i => {
        i.style="display: none"
        })
        if(hideImages!== null){
            hideImages.checked=true;
        }
}
else{
    imagesToHide.forEach(i => {
        i.style="display: "
    })
}

if(hideImages!== null){
    hideImages.addEventListener('change', hideImage);
}
function hideImage(){
    if(hideImages.checked){
        document.cookie="hideImages=true";
    }
    else{
        document.cookie="hideImages=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
}



const dark = document.querySelector("#dark");
const contrast = document.querySelector("#contrast");

if(getCookie("contrast")){
    document.body.classList.toggle("highContrast");
    if(contrast!== null){
        contrast.checked=true;
    }
};

if(getCookie("darkmode")){
    console.log("TEST");
    document.body.classList.toggle("darkTheme");
    if(dark!== null){
        dark.checked=true;
    }
};

if(dark!== null){
    dark.addEventListener('change', darkMode);
}
if(contrast!== null){
    contrast.addEventListener('change', highContrast);
}

function darkMode(){
    if (contrast.checked){
        contrast.checked=false;
        document.body.classList.toggle("highContrast");
        document.cookie="contrast=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
    
    document.body.classList.toggle("darkTheme");
    document.cookie="darkmode=true";

    if (!dark.checked){
        document.cookie="darkmode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
}
function highContrast(){
    if (dark.checked){
        dark.checked=false;
        document.body.classList.toggle("darkTheme");
        document.cookie="dark=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
    
    document.body.classList.toggle("highContrast");
    document.cookie="contrast=true";

    if (!contrast.checked){
        document.cookie="contrast=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
}


