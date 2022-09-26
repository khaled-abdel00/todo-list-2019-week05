document.querySelector ('#addItem').addEventListener("click", add);
document. querySelector('#textbar').addEventListener("keydown", add);
document.querySelector('#clearAll').addEventListener("click", clearall);
document. querySelector('#addItem').addEventListener("click", aItem);
document. querySelector('#list').addEventListener("click", markComplete)

document.querySelector('#clearSelect').addEventListener("click", removeSelected)

function add(e){
    console.log(e.code);
    if (e.code === 'Enter'){
        const fList = document.querySelector('#textbar');
        if (fList.value != ''){
            const listItem = document.createElement('li');
            listItem.innerText = fList.value;
            document.querySelector('#list').appendChild(listItem);
            fList.value = '';
        }
    }
}

function clearall(){
    document.querySelector('#list').innerHTML = ' ';
}

function aItem(e){
    const fList = document.querySelector('#textbar');
    if (fList.value != ''){
        const listItem = document.createElement('li');
        listItem.innerText = fList.value;
        document.querySelector('#list').appendChild(listItem);
        fList.value = '';
    }

    console.log('click');
    console.log(e);
}

function markComplete(event){
    let aim = event.target
    if (aim.matches('li')){
        aim.classList.toggle('crossed');
        document.querySelectorAll('.crossed').forEach(element => {
            console.log
        });
    }
}

function removeSelected(event){
    document.querySelectorAll('.crossed').forEach((element) => {
        element.remove();
    });
}