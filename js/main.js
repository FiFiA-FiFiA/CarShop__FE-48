// "use strict";

let CAR__DATA = [{
    manufacturer: "MERCEDES-BENZ",
    model: "C 63 AMG",
    category: "sedan",
    year: "2015",
    price: "60,000$"
  },
  {
    manufacturer: "MERCEDES-BENZ",
    model: "C 63 AMG",
    category: "sedan",
    year: "2016",
    price: "70,000$"
  },
  {
    manufacturer: "MERCEDES-BENZ",
    model: "C 63 AMG",
    category: "sedan",
    year: "2019",
    price: "100,000$"
  },
  {
    manufacturer: "MERCEDES-BENZ",
    model: "C 63",
    category: "sedan",
    year: "2016",
    price: "50,000$"
  },
  {
    manufacturer: "MERCEDES-BENZ",
    model: "C 63",
    category: "sedan",
    year: "2018",
    price: "90,000$"
  },
  {
    manufacturer: "MERCEDES",
    model: "G-Class AMG",
    category: "Jeep",
    year: "2021",
    price: "28,800$"
  },
  {
    manufacturer: "MERCEDES",
    model: "A-Class",
    category: "Sedan",
    year: "2021",
    price: "60,500$"
  },
  {
    manufacturer: "MERCEDES",
    model: "C-Class AMG",
    category: "Sedan",
    year: "2021",
    price: "80,000$"
  },
  {
    manufacturer: "MERCEDES",
    model: "C-Class",
    category: "Sedan",
    year: "2020",
    price: "60,000$"
  },
  {
    manufacturer: "Audi",
    model: "a4",
    category: "sedan",
    year: "2017",
    price: "50,000$"
  },
  {
    manufacturer: "Audi",
    model: "a4",
    category: "sedan",
    year: "2017",
    price: "60,000$"
  },
  {
    manufacturer: "Audi",
    model: "a4",
    category: "sedan",
    year: "2018",
    price: "60,000$"
  },
  {
    manufacturer: "Audi",
    model: "a7",
    category: "sedan",
    year: "2019",
    price: "70,000$"
  },
  {
    manufacturer: "Audi",
    model: "a7",
    category: "sedan",
    year: "2020",
    price: "80,000$"
  },
  {
    manufacturer: "BMW",
    model: "M5",
    category: "Sedan",
    year: "2017",
    price: "60,000$"
  },
  {
    manufacturer: "BMW",
    model: "M5",
    category: "Sedan",
    year: "2019",
    price: "80,800$"
  },
  {
    manufacturer: "BMW",
    model: "X7",
    category: "Jeep",
    year: "2018",
    price: "70,800$"
  },
  {
    manufacturer: "BMW",
    model: "X8",
    category: "Jeep",
    year: "2019",
    price: "80,000$"
  },
  {
    manufacturer: "BMW",
    model: "i8",
    category: "Sedan",
    year: "2021",
    price: "75,000$"
  },
  {
    manufacturer: "BMW",
    model: "i9",
    category: "Sedan",
    year: "2022",
    price: "95,000$"
  },
]

// modal
const add__car__btn = document.querySelector('[add__to__car__btn]');
const bars__icon = document.querySelector('[bars__icon]');
const filter__container = document.querySelector('[filter__container]');
const add__car__container = document.querySelector('[add__car__container]');
const add__car__close__btn = document.querySelector('[add__car__close__btn]');
const filter__close__btn = document.querySelector('[filter__close__btn]');
const add__car__overlay = document.querySelector('[add__car__overlay]');
const filter__overlay = document.querySelector('[filter__overlay]');
const cars__wrapper = document.querySelector('[cars__wrapper]');
const delete__btn = document.querySelector('[delete__btn]');
const warning__container = document.querySelector('[warning__container]');
const warning__container__overlay = document.querySelector('[warning__container__overlay]');
const warning__text = document.querySelector('[warning__text]');
const cancle__btn = document.querySelector('[cancle__btn]');
const delete__all__btn = document.querySelector('[delete__all__btn]');

// Add To Car
const input__add__car__manufacturer = document.querySelector("[input__add__car__manufacturer]");
const input__add__car__model = document.querySelector("[input__add__car__model]");
const input__add__car__category = document.querySelector("[input__add__car__category]");
const input__add__car__Year__from = document.querySelector("[input__add__car__Year__from]");
const input__add__car__Price__From = document.querySelector("[input__add__car__Price__From]");
const add__btn = document.querySelector("[add__btn]");

//filter
let select__wrapper = document.querySelectorAll("[select__wrapper]");
let manufacturer__options__container = document.querySelector("[manufacturer__options__container]");
let model__options__container = document.querySelector("[model__options__container]");
let category__options__container = document.querySelector("[category__options__container]");
let select__manufacturer__inner = document.querySelector("[select__manufacturer__inner]");
let select__model__inner = document.querySelector("[select__model__inner]");
let select__category__inner = document.querySelector("[select__category__inner]");
let yearFrom__options__container = document.querySelector("[yearFrom__options__container]");
let yearTo__options__container = document.querySelector("[yearTo__options__container]");
let select__yearFrom__inner = document.querySelector("[select__yearFrom__inner]");
let select__yearTo__inner = document.querySelector("[select__yearTo__inner]");
let input__Price__From = document.querySelector("[input__Price__From]");
let input__Price__To = document.querySelector("[input__Price__To]");
let clear__btn = document.querySelector("[clear__btn]");
let search__btn = document.querySelector("[search__btn]");
let filter__selected__wrapper = document.querySelector("[filter__selected__wrapper]");

const error__text__wrapper = document.querySelector("[error__text__wrapper]");
let error__text = document.querySelector("[error__text]");
let err__text = "";

let Manufacturer__Filter__Value = "";
let Model__Filter__Value = "";
let Category__Filter__Value = "";
let Manufacturer__Filter__Arr = [];
let Manufacturer__Arr = [];
let Model__Filter__Arr = [];
let Model__Arr = [];
let Category__Filter__Arr = [];
let YearFromTo__Arr = [];

let input__PriceFrom__Value = input__Price__From.value;
let input__PriceTo__Value = input__Price__To.value;

const Data = new Date();

add__car__btn.addEventListener('click', openClose__add__car__container);
add__car__overlay.addEventListener('click', openClose__add__car__container);
add__car__close__btn.addEventListener('click', openClose__add__car__container);
add__btn.addEventListener('click', Add__New__Car);

bars__icon.addEventListener('click', openClose__filter__container);
filter__overlay.addEventListener('click', openClose__filter__container);
filter__close__btn.addEventListener('click', openClose__filter__container);
delete__btn.addEventListener('click', openClose__Warning__container);
delete__all__btn.addEventListener('click', Delete__All__Cars);
warning__container__overlay.addEventListener('click', openClose__Warning__container);
cancle__btn.addEventListener('click', openClose__Warning__container);
clear__btn.addEventListener('click', Clear__All__Filter);
// search__btn.addEventListener('click', Search__All__Result);

select__wrapper.forEach(select => {
  select.addEventListener("click", openClose__filter__Dropdown)
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
})

function openClose__Warning__container() {
  warning__container.classList.toggle('active');
  if (warning__container.classList.contains('active')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function openClose__add__car__container() {
  add__car__container.classList.toggle('active');
  if (add__car__container.classList.contains('active')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function openClose__filter__container() {
  filter__container.classList.toggle('active');
  if (filter__container.classList.contains('active')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// ==================================================

function Get__ALL__Cars__Data() {
  Set__option__value();
}

Get__ALL__Cars__Data();

function openClose__filter__Dropdown() {

  select__wrapper.forEach(sel => {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      this.style.zIndex = "0";
    } else {
      select__wrapper.forEach(sel => {
        sel.classList.remove('active');
        sel.style.zIndex = "0"
      });
      this.classList.add('active');
      this.style.zIndex = "3";
    }
  })


}

// ===========================================================

function Set__option__value() {
  for (const car of CAR__DATA) {
    Manufacturer__Filter__Arr.push(car.manufacturer);
  }
  for (const car of CAR__DATA) {
    Model__Filter__Arr.push(car.model);
  }
  for (const car of CAR__DATA) {
    Category__Filter__Arr.push(car.category);
  }
  for (let i = 1970; i < Data.getFullYear() + 1; i++) {
    YearFromTo__Arr.push(i)
  }

  Manufacturer__Filter__Arr = [...new Set(Manufacturer__Filter__Arr)]
  Model__Filter__Arr = [...new Set(Model__Filter__Arr)]
  Category__Filter__Arr = [...new Set(Category__Filter__Arr)];

  Create__Option__Manufacture();
}

// ===========================================================

function Create__Option__Manufacture() {

  for (let opt of Manufacturer__Filter__Arr) {
    let manufacturer__options = document.createElement("div")
    manufacturer__options.classList.add("option");
    manufacturer__options.setAttribute('onclick', 'Create__Option__Model();');

    manufacturer__options.innerHTML = `
        <input type="radio" class="radio" id="${opt}" name="option__model" hidden/>
        <label for="${opt}">${opt}</label>
      `;

    manufacturer__options__container.appendChild(manufacturer__options);
    Get__Option__Value();
  }
}

// ===========================================================


function Create__Option__Model() {

  model__options__container.innerHTML = '';
  select__model__inner.innerText = 'Select Model';
  // Model__Filter__Value = "";

  let x = CAR__DATA.filter(i => i.manufacturer == Manufacturer__Filter__Value);
  x = [...new Set(x.map(i => i.model))];

  if (Manufacturer__Filter__Value != "") {
    document.querySelector(".select__wrapper.medel").classList.remove('disabled');
  } else {
    document.querySelector(".select__wrapper.medel").classList.add('disabled');
  }

  for (let opt of x) {
    let model__options = document.createElement("div")
    model__options.classList.add("option");
    model__options.setAttribute('onclick', 'Create__Option__Model();');

    model__options.innerHTML = `
    <input type="radio" class="radio" id="${opt}" name="option__model" hidden/>
    <label for="${opt}">${opt}</label>
  `;

    model__options__container.appendChild(model__options);
  }
  Get__Option__Value()
}

// ===========================================================

function Create__Option__Category() {

  category__options__container.innerHTML = '';
  select__model__inner.innerText = 'Select Category';

  for (let opt of Category__Filter__Arr) {
    let category__options = document.createElement("div")
    category__options.classList.add("option");

    category__options.innerHTML = `
    <input type="radio" class="radio" id="${opt}" name="option__model" hidden/>
    <label for="${opt}">${opt}</label>
  `;

    category__options__container.appendChild(category__options)
  }
  Get__Option__Value()
}

Create__Option__Category()

// ===========================================================

function Create__Option__Year() {
  for (let i = Data.getFullYear(); i > 1990 - 1; i--) {
    let yearFrom__options = document.createElement("div")
    yearFrom__options.classList.add("option");
    let yearTo__options = document.createElement("div")
    yearTo__options.classList.add("option");

    yearFrom__options.innerHTML = `
        <input type="radio" class="radio" id="${i}" name="option__model" hidden/>
        <label for="${i}">${i}</label>
      `;
    yearTo__options.innerHTML = `
        <input type="radio" class="radio" id="${i}" name="option__model" hidden/>
        <label for="${i}">${i}</label>
      `;

    yearFrom__options__container.appendChild(yearFrom__options);
    yearTo__options__container.appendChild(yearTo__options);
    Get__Option__Value();
  }
}

Create__Option__Year();

// =============================================================

function Get__Option__Value() {
  document.querySelectorAll('[manufacturer__options__container] .option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('[manufacturer__options__container] .option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      Manufacturer__Filter__Value = opt.querySelector("label").textContent;
      select__manufacturer__inner.innerText = opt.querySelector("label").textContent;
    })
  })

  document.querySelectorAll('[model__options__container] .option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('[model__options__container] .option').forEach(o => o.classList.remove('active'))

      opt.classList.add('active');

      Model__Filter__Value = opt.querySelector("label").textContent;
      select__model__inner.innerText = Model__Filter__Value;
    })
  })

  document.querySelectorAll('[category__options__container] .option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('[category__options__container] .option').forEach(o => o.classList.remove('active'))

      opt.classList.add('active');

      Category__Filter__Value = opt.querySelector("label").textContent;
      select__category__inner.innerText = Category__Filter__Value;
    })
  })
}

// ===========================================================

function Add__New__Car() {
  let manufacturer__value = input__add__car__manufacturer.value;
  let model__value = input__add__car__model.value;
  let category__value = input__add__car__category.value.toLowerCase();
  let year__value = input__add__car__Year__from.value;
  let price__value = input__add__car__Price__From.value;

  let check__value__not__empty = manufacturer__value != "" && model__value != "" && category__value != "" && year__value != "" && price__value != "";
  let check__yearPrice = year__value >= 1970 && year__value <= Data.getFullYear() && price__value >= 10;

  if (check__value__not__empty) {
    if (check__yearPrice) {
      let car__item__arr = {
        manufacturer: `${manufacturer__value}`,
        model: `${model__value}`,
        category: `${category__value}`,
        year: year__value,
        price: `${price__value}$`
      };

      CAR__DATA.unshift(car__item__arr);

      input__add__car__manufacturer.value = "";
      input__add__car__model.value = "";
      input__add__car__category.value = "";
      input__add__car__Year__from.value = "";
      input__add__car__Price__From.value = "";

    } else {
      Error__Text__Wrapper("Please check the year input or price input");
    }
  } else {
    Error__Text__Wrapper("input cannot be empty");
  }

}

function Clear__All__Filter() {
  Manufacturer__Filter__Value = "";
  Model__Filter__Value = "";
  Category__Filter__Value = "";
  Filter__Selected__Value__Arr = [];
  New__Filter__Selected__Value__Arr = [];

  filter__selected__wrapper.innerHTML = "";
}

function Delete__All__Cars() {
  cars__wrapper.innerHTML = "";
  CAR__DATA = [];

  Error__Text__Wrapper("Delete All Cars Data!");
  openClose__Warning__container()

  if (cars__wrapper.innerHTML != "") {
    delete__btn.classList.add('active');
  } else {
    delete__btn.classList.remove('active');
  }
}

function Error__Text__Wrapper(err__text) {
  error__text__wrapper.classList.add('active');
  error__text.innerText = `${err__text}`;
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    error__text__wrapper.classList.remove('active');
    error__text.innerText = ``;
    document.body.style.overflow = "auto";
  }, 2000)
}