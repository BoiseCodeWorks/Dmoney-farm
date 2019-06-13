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
        <h1>Corn</h1>
        <p id="water-placeholder">Water placeholder</p>
        <p id="harvest-placeholder">Harvest placeholder</p>
        <button class="button" onclick="water()"></button>
        <button class="button" onclick="harvest()"></button>
      </div>
    `
  }
}
function harvest(){
  corn--;
  money += 100;
}