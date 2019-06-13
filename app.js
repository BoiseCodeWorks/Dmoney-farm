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

function harvest(){
  corn--;
  money += 100;
}