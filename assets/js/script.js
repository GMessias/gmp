const leftList = document.querySelector('.left-list');
const ul = document.createElement('ul');
const url = 'my.json';
const rightSide = document.querySelector('.right-side');

leftList.append(ul);

window.addEventListener('DOMContentLoaded',()=>{
    loadData();
})

function loadData(){
    fetch(url).then(rep=>rep.json())
    .then((data)=>{
        addtoPage(data);
        addtoInformation(data, "01");
    })
}

function addtoPage(arr){
    arr.forEach((el)=>{
        const li = document.createElement('li');
        li.textContent = el.id + ' - ' + el.title;
        li.setAttribute('tabindex', -1);
        li.classList.add('customize-li');
        if (el.id === '01'){
            li.setAttribute('autofocus', 'autofocus');
        };
        ul.append(li);
        ul.classList.add('scrollbar-li');
        ul.classList.add('focus-li');

        li.addEventListener('click',(e)=>{
            const cond = el.id;
            if(rightSide.hasChildNodes()){
                rightSide.innerHTML = "";
            };
            addtoInformation(arr, cond);
        })
    })
}

function addtoInformation(arrInfo, condition){
    arrInfo.forEach((le)=>{
        if(le.id === condition){
            const idRight = document.createElement('h3');
            const titleRight = document.createElement('h1');
            const infoRight = document.createElement('p');
            const div_IdTitle = document.createElement('div');
            const div_Info = document.createElement('div');

            div_IdTitle.classList.add('idTitle');
            div_Info.classList.add('info');

            idRight.textContent = "id." + le.id;
            titleRight.textContent = le.title;
            infoRight.textContent = le.description;

            rightSide.appendChild(div_IdTitle);
            if(le.link !== "none"){
                const div_linkExt = document.createElement('div');
                const ahref = document.createElement('a');
                const linkExt = document.createElement('i');
                ahref.setAttribute('href', le.link);
                linkExt.classList.add('bx');
                linkExt.classList.add('bx-target-lock');
                linkExt.classList.add('link-ext');
                div_linkExt.classList.add('div-link-ext');
                rightSide.appendChild(div_linkExt);
                div_linkExt.appendChild(ahref);
                ahref.appendChild(linkExt);
            }
            rightSide.appendChild(div_Info);
            div_IdTitle.appendChild(idRight);
            div_IdTitle.appendChild(titleRight);
            div_Info.appendChild(infoRight); 
        };
    })
}