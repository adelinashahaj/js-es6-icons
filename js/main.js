
let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let iconsContainerDom = document.getElementById('icons-container');
let selectorDom = document.getElementById('selettore');

//bonus 1
icons.forEach(element =>{
    element.color = getRandomColor();
})

function iconsDom(icons, iconsContainerDom) {
    iconsContainerDom.innerHTML = "";

    for (let i = 0; i < icons.length; i++){
        let element = icons[i];
        console.log(element);
     for(let key in element){
        console.log(element[key]);
     }
    
    
    iconsContainerDom.innerHTML += `
    <div class="icons-card">
     <i class="fa-solid ${element.prefix}${element.name}"style= "color: ${element.color}"></i>
     <p>${element.name}</p>
    </div>
    `
    }
  

};
iconsDom(icons, iconsContainerDom);  

selectorDom.addEventListener("change",
 function(){
    let option = document.querySelectorAll("option").value;
    if(option == "animal") { 
        
    }
    let selectValue = selectorDom.value;
    let selectFilter = icons.filter(element => element.type == selectValue || selectValue == "all");
    iconsDom(selectFilter, iconsContainerDom);

}
);

//bonus 1
function getRandomColor(){
    let letters = '0123456789ABCDEF';
	let color = '#';
    for(let i = 0; i < 6; i++){
       let randomNumber = generateNumberCasuale(0,letters.length - 1);
       color += letters[randomNumber];
    }
        
    return color;
};
//bonus 1
function generateNumberCasuale(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

