let money = 0;

let plants = [
  {
    name: 'Corn',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/12/58/growing-corn-plant-isolated-on-white-vector-13521258.jpg"',
    water: 0,
    value: 100
  },
  {
    name: 'Celery',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuov1iUWqnxe9OdgZzvAM3wWFSFMbBcOU8pUfRbGu75cmcL1Ji',
    water: 0,
    value: -5
  }
];
function drawPlants(){
  let plantsRow = document.querySelector("#plants-placeholder")
  let moneyElem = document.querySelector("#money-placeholder")
  let template = ""
  for (let index = 0; index < plants.length; index++) {
    let plant = plants[index];
    template += `
    <div class="col-6">
        <h1>${plant.name}</h1>
        <img src="${plant.image}" alt="">
        <p>water: ${plant.water}</p>
        <p>value: ${plant.value}</p>
        <button class="btn btn-primary" onclick="water(${index})">Water</button>
        <button class="btn btn-success" onclick="harvest(${index})">Harvest</button>
      </div>
    `
  }
  plantsRow.innerHTML = template
moneyElem.textContent = money.toString()
}
function water(i) {
  let plant = plants[i]
  plant.water++
  drawPlants()
}
function harvest(i) {
  let plant = plants[i]
 money += plant.value * plant.water
 plant.water = 0
  drawPlants()
}



drawPlants()