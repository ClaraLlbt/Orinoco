const cameras = [
  {
    "lenses": [
      "35mm 1.4",
      "50mm 1.6"
    ],
    "id": "0",
    "name": "Zurss 50S",
    "price": 49900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "cam1.png"
  },
  {
    "lenses": [
      "50mm 1.8",
      "60mm 2.8",
      "24-60mm 2.8/4.5"
    ],
    "id": "1",
    "name": "Hirsch 400DTS",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 309900,
    "imageUrl": "cam2.png"
  },
  {
    "lenses": [
      "25mm 4.5"
    ],
    "id": "2",
    "name": "Franck JS 105",
    "price": 209900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "cam3.png"
  },
  {
    "lenses": [
      "50mm 1.7",
      "35mm 1.4"
    ],
    "id": "3",
    "name": "Kuros TTS",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 159900,
    "imageUrl": "cam4.png"
  },
  {
    "lenses": [
      "50mm 1.4",
      "35mm 1.8",
      "28-200mm 2.8/4.5"
    ],
    "id": "4",
    "name": "Katatone",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 59900,
    "imageUrl": "cam5.png"
  }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(cameras))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(cameras)).find(camera =>
      camera.id == id)
    )
  );
}