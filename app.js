let money = 0;

let plants = [
  {
    name: 'Corn',
    image: '',
    water: 0,
    value: 100
  },
  {
    name: 'Celery',
    image: '',
    water: 0,
    value: -5
  }
];
function drawPlants(){
  let plantsRow = document.querySelector("#plants-placeholder")
  let template = ""
  for (let index = 0; index < plants.length; index++) {
    let plant = plants[index];
    template += `
    <div class="col-6">
        <h1>${plant.name}</h1>
        <p>water: ${plant.water}</p>
        <p>value: ${plant.value}</p>
        <button class="btn btn-primary" onclick="water(${index})">Water</button>
        <button class="btn btn-success" onclick="harvest()">Harvest</button>
      </div>
    `
  }
  plantsRow.innerHTML = template

}
function water(i) {
  let plant = plants[i]
  plant.water++
  drawPlants()
}
function harvest(i) {
  let plant = plants[i]
  plant.water++
  drawPlants()
}



drawPlants()