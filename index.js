let Columns = 20;
let Rows = 20;
let blackMode = true;
let backGroundColor = 'grey';

const container = document.querySelector(".container");
container.style.display = 'flex'
container.style.flexDirection = 'column';
container.style.width = '600px';
container.style.height = '550px'


let addGrid = (numOfRows,numOfColumns)=> {
for (let i =0 ; i < numOfRows ; i ++)
{
    const newRow = document.createElement('div');
    newRow.style.display = 'flex'
    newRow.style.flex = '1';
    for (let j =0 ; j < numOfColumns; j++)
    {
        const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = backGroundColor;
        newDiv.style.flex = '1'
        newDiv.style.minWidth ='10px'
        newDiv.style.minHeight = '10px'
        newDiv.style.transition = 'background-color 0.2s ease';
        newDiv.classList.add('cell');
        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}
}

addGrid(Rows,Columns);

let addCallBacks = ()=>{
    const cells = document.querySelectorAll('.cell');
    cells.forEach( cell =>{
        cell.addEventListener('mouseover',e =>{

            if (blackMode)
                cell.style.backgroundColor =  'black';
            else
            {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor ="#" + randomColor;
            }
                
        })
    });
}

addCallBacks();


const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', e =>{
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = backGroundColor;
    });
    e.stopPropagation()
});

const gridSize = document.querySelector('.gridSize');
gridSize.addEventListener('click', e=>{
    let size = prompt('Enter Desired Grid Size');
    if (size > 50)
        size = 50
    container.innerHTML = '';
    addGrid(size,size);
    addCallBacks();
    e.stopPropagation()
});

const blackButton = document.querySelector('.blackMode');
const colorButton = document.querySelector('.colorfulMode');
blackButton.style.color = 'white';
blackButton.style.backgroundColor ='black';

blackButton.addEventListener('click', e=>{
    blackMode = true;
    blackButton.style.color = 'white';
    blackButton.style.backgroundColor ='black';
    colorButton.style.color = 'black';
    colorButton.style.backgroundColor = 'white';
    e.stopPropagation()
});

colorButton.addEventListener('click', e=>{
    blackMode = false;
    blackButton.style.color = 'black';
    blackButton.style.backgroundColor = 'white';
    colorButton.style.color = 'white';
    colorButton.style.backgroundColor = 'black';
    e.stopPropagation()
});