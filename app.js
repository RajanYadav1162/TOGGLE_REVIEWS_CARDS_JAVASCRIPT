const reviwerName = document.querySelector('h2');
const img = document.querySelector('img');
const field = document.querySelector('h3');
const desc = document.querySelector('p');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const surBtn = document.querySelector('button');

const data = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Anna Johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const getRandom = () => Math.floor(Math.random() * 4);

const applyDynamicHtml = (random) => {
  reviwerName.textContent = data[random].name;
  img.src = data[random].img;
  field.textContent = data[random].job;
  desc.textContent = data[random].text;
};
const onClickHandler = () => {
  let random = getRandom();
  applyDynamicHtml(random);
};

const getCurrentIndex = () => {
  const currentName = reviwerName.innerText;

  for (person in data) {
    {
      if (data[person].name == currentName) {
        return person;
      }
    }
  }
};

const nextEventHandler = () => {
  let currentObjectIndex = getCurrentIndex();

  if (currentObjectIndex == data.length - 1) {
    currentObjectIndex = -1;
  }

  applyDynamicHtml(Number(currentObjectIndex) + 1);
};

const onPrevHandler = () => {
  let currentObjectIndex = getCurrentIndex();
  if (currentObjectIndex == 0) {
    currentObjectIndex = data.length;
  }

  applyDynamicHtml(Number(currentObjectIndex) - 1);
};

prev.addEventListener('click', onPrevHandler);

next.addEventListener('click', nextEventHandler);

surBtn.addEventListener('click', onClickHandler);
