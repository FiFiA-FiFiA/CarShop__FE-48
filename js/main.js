"use strict";

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
const add__car__btn = document.querySelector('[add__to__car__btn]'),
  bars__icon = document.querySelector('[bars__icon]'),
  filter__container = document.querySelector('[filter__container]'),
  add__car__container = document.querySelector('[add__car__container]'),
  add__car__close__btn = document.querySelector('[add__car__close__btn]'),
  filter__close__btn = document.querySelector('[filter__close__btn]'),
  add__car__overlay = document.querySelector('[add__car__overlay]'),
  filter__overlay = document.querySelector('[filter__overlay]'),
  cars__wrapper = document.querySelector('[cars__wrapper]'),
  delete__btn = document.querySelector('[delete__btn]'),
  warning__container = document.querySelector('[warning__container]'),
  warning__container__overlay = document.querySelector('[warning__container__overlay]'),
  warning__text = document.querySelector('[warning__text]'),
  cancle__btn = document.querySelector('[cancle__btn]'),
  delete__all__btn = document.querySelector('[delete__all__btn]');


// Add To Car
const input__add__car__manufacturer = document.querySelector("[input__add__car__manufacturer]"),
  input__add__car__model = document.querySelector("[input__add__car__model]"),
  input__add__car__category = document.querySelector("[input__add__car__category]"),
  input__add__car__Year__from = document.querySelector("[input__add__car__Year__from]"),
  input__add__car__Price__From = document.querySelector("[input__add__car__Price__From]"),
  add__btn = document.querySelector("[add__btn]");

//filter
let select__wrapper = document.querySelectorAll("[select__wrapper]"),
  manufacturer__options__container = document.querySelector("[manufacturer__options__container]"),
  model__options__container = document.querySelector("[model__options__container]"),
  category__options__container = document.querySelector("[category__options__container]"),
  select__manufacturer__inner = document.querySelector("[select__manufacturer__inner]"),
  select__model__inner = document.querySelector("[select__model__inner]"),
  select__category__inner = document.querySelector("[select__category__inner]"),
  input__Year__From = document.querySelector("[input__Year__from]"),
  input__Year__To = document.querySelector("[input__Year__To]"),
  input__Price__From = document.querySelector("[input__Price__From]"),
  input__Price__To = document.querySelector("[input__Price__To]"),
  clear__btn = document.querySelector("[clear__btn]"),
  search__btn = document.querySelector("[search__btn]"),
  filter__selected__wrapper = document.querySelector("[filter__selected__wrapper]");

let select__wrapper__Arr = new Array(select__wrapper);


const error__text__wrapper = document.querySelector("[error__text__wrapper]"),
  error__text = document.querySelector("[error__text]");
let err__text = "";

let Manufacturer__Filter__Value = "";
let Model__Filter__Value = "";
let Category__Filter__Value = "";
let Filter__Selected__Value__Arr = [];
let New__Filter__Selected__Value__Arr = [];

let input__Year__Value__From = input__Year__From.value;
let input__Year__Value__To = input__Year__To.value;
let input__Price__Value__From = input__Price__From.value;
let input__Price__Value__To = input__Price__To.value;

add__car__btn.addEventListener('click', openClose__add__car__container);
add__car__overlay.addEventListener('click', openClose__add__car__container);
add__car__close__btn.addEventListener('click', openClose__add__car__container);

bars__icon.addEventListener('click', openClose__filter__container);
filter__overlay.addEventListener('click', openClose__filter__container);
filter__close__btn.addEventListener('click', openClose__filter__container);

add__btn.addEventListener('click', Add__To__Car);
delete__btn.addEventListener('click', openClose__Warning__container);
delete__all__btn.addEventListener('click', Delete__All__Cars);
warning__container__overlay.addEventListener('click', openClose__Warning__container);
cancle__btn.addEventListener('click', openClose__Warning__container);
clear__btn.addEventListener('click', Clear__All__Filter);
search__btn.addEventListener('click', Search__All__Result);

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

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
})

function Check__Filter__wrapper() {
  if (filter__selected__wrapper.innerHTML != "") {
    clear__btn.classList.add('active');
    search__btn.classList.add('active');
  } else {
    clear__btn.classList.remove('active');
    search__btn.classList.remove('active');

    select__manufacturer__inner.innerText = "Select Manufacturer";
    select__model__inner.innerText = "Select Model";
    select__category__inner.innerText = "Select Category";
  }
}

function openClose__filter__Dropdown() {

  filter__selected__wrapper.innerHTML = "";

  function Remove__Active() {
    select__wrapper.forEach(sel => {
      sel.classList.remove('active');
      sel.style.zIndex = "0";
    })
  }

  if (select__wrapper.length <= 1) {
    select__wrapper.classList.add('active');

    if (this.classList.contains('active')) {
      this.classList.remove('active');
      this.style.zIndex = "0";
    } else {
      Remove__Active();
      this.classList.add('active');
      this.style.zIndex = "3";
    }

  } else {
    select__wrapper.forEach(select => {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.style.zIndex = "0";
      } else {
        Remove__Active();
        this.classList.add('active');
        this.style.zIndex = "3";
      }
    })

  }

  document.querySelectorAll('[manufacturer__options__container] .option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('[manufacturer__options__container] .option').forEach(o => o.classList.remove('active'))

      opt.classList.add('active');

      if (opt.classList.contains('active')) {
        Manufacturer__Filter__Value = opt.querySelector("label").textContent;
      }
      select__manufacturer__inner.innerText = Manufacturer__Filter__Value;
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

  input__Year__Value__From = input__Year__From.value;
  input__Year__Value__To = input__Year__To.value;
  input__Price__Value__From = input__Price__From.value;
  input__Price__Value__To = input__Price__To.value;


  console.log(input__Year__Value__From, input__Year__Value__To);

  Filter__Selected__Value__Arr.push(Manufacturer__Filter__Value, Model__Filter__Value, Category__Filter__Value);
  let filter__metod = Filter__Selected__Value__Arr.filter(item => item != "")

  Crate__Selected__List(filter__metod);

}

function Crate__Selected__List(filter__metod) {

  filter__metod.some(item => {
    if (filter__metod.indexOf(item) == filter__metod.lastIndexOf(item)) {
      New__Filter__Selected__Value__Arr.push(item);
    }
  })

  for (const iterator of New__Filter__Selected__Value__Arr) {
    let selected__item = document.createElement("div");
    selected__item.classList.add("selected__item");

    selected__item.innerHTML = `
    <span>${iterator}</span>
    <i class="fa fa-times"></i>`;

    filter__selected__wrapper.appendChild(selected__item)
  }

  Check__Filter__wrapper();

  function Delete__Each__Filter__Item(index) {
    selected__item__btn[index].remove();
    New__Filter__Selected__Value__Arr.splice(index, 1);
    Filter__Selected__Value__Arr.splice(index, 1);

    Check__Filter__wrapper();
  }

  let selected__item__btn = document.querySelectorAll(".selected__item");

  selected__item__btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      Delete__Each__Filter__Item(index);
    })
  })
}

function Clear__All__Filter() {
  Manufacturer__Filter__Value = "";
  Model__Filter__Value = "";
  Category__Filter__Value = "";
  Filter__Selected__Value__Arr = [];
  New__Filter__Selected__Value__Arr = [];

  filter__selected__wrapper.innerHTML = "";

  Check__Filter__wrapper();
  Search__All__Result()
  Get__ALL__Cars__Data();
}

function Search__All__Result() {

  let car__item__elems = document.querySelectorAll("[car__item]");
  let Arr = new Array(car__item__elems);

  for (let index = 0; index < Arr[0].length; index++) {

    let query__manufacturer = car__item__elems[index].getAttribute("query__manufacturer"),
      query__model = car__item__elems[index].getAttribute("query__model"),
      query__category = car__item__elems[index].getAttribute("query__category"),
      query__year = car__item__elems[index].getAttribute("query__year"),
      query__price = car__item__elems[index].getAttribute("query__price");

    if (New__Filter__Selected__Value__Arr.includes(query__manufacturer) ||
      New__Filter__Selected__Value__Arr.includes(query__model) ||
      New__Filter__Selected__Value__Arr.includes(query__category)) {
      car__item__elems[index].style.display = "flex";
    } else {
      car__item__elems[index].style.display = "none";
    }

    if (input__Year__Value__From != "" && input__Year__Value__To != "" && input__Year__Value__From < input__Year__Value__To && input__Year__Value__From >= 1970 && input__Year__Value__To <= 2022) {
      if (query__year >= input__Year__Value__From && query__year <= input__Year__Value__To) {
        console.log(car__item__elems[index])
      } else {
        car__item__elems[index].style.display = "none";
      }
    }

  }

  openClose__filter__container()
}

function Delete__All__Cars() {
  cars__wrapper.innerHTML = "";
  CAR__DATA = [];

  Get__ALL__Cars__Data();
  Error__Text__Wrapper("Delete All Cars Data!");
  openClose__Warning__container()

  if (cars__wrapper.innerHTML != "") {
    delete__btn.classList.add('active');
  } else {
    delete__btn.classList.remove('active');
  }
}

function Get__ALL__Cars__Data() {
  cars__wrapper.innerHTML = "";
  manufacturer__options__container.innerHTML = "";
  model__options__container.innerHTML = "";
  category__options__container.innerHTML = "";

  for (const index in CAR__DATA) {

    let manufacturer = CAR__DATA[index].manufacturer;
    let model = CAR__DATA[index].model;
    let category = CAR__DATA[index].category;
    let year = CAR__DATA[index].year;
    let price = CAR__DATA[index].price;

    let car__item = document.createElement('div');
    car__item.classList.add('car__item');
    car__item.setAttribute("query__manufacturer", `${manufacturer}`);
    car__item.setAttribute("query__model", `${model}`);
    car__item.setAttribute("query__category", `${category}`);
    car__item.setAttribute("query__year", `${year}`);
    car__item.setAttribute("query__price", `${price}`);
    car__item.setAttribute("car__item", ``);
    car__item.innerHTML = `
      <div class="content__wrapper">
        <b class="full__name">${manufacturer} ${model}</b>
      </div>
      <div class="content__wrapper">
        <b class="key">Manufacturer:</b>
        <span class="value">${manufacturer}</span>
      </div>
      <div class="content__wrapper">
        <b class="key">Model:</b>
        <span class="value">${model}</span>
      </div>
      <div class="content__wrapper">
        <b class="key">Category:</b>
        <span class="value">${category}</span>
      </div>
      <div class="content__wrapper">
        <b class="key">Year:</b>
        <span class="value">${year}</span>
      </div>
      <div class="content__wrapper">
        <b class="key">Price:</b>
        <span class="value">${price}</span>
      </div>`;

    let manufacturer__options = document.createElement("div")
    manufacturer__options.classList.add("option");

    let model__options = document.createElement("div")
    model__options.classList.add("option");

    let category__options = document.createElement("div")
    category__options.classList.add("option");

    manufacturer__options.innerHTML = `
        <input type="radio" class="radio" id="${manufacturer}" name="option__model" hidden/>
        <label for="${manufacturer}">${manufacturer}</label>
      `;

    model__options.innerHTML = `
        <input type="radio" class="radio" id="${model}" name="option__model" hidden/>
        <label for="${model}">${model}</label>
      `;

    category__options.innerHTML = `
        <input type="radio" class="radio" id="${category}" name="option__model" hidden/>
        <label for="${category}">${category}</label>
      `;

    manufacturer__options__container.appendChild(manufacturer__options)
    model__options__container.appendChild(model__options)
    category__options__container.appendChild(category__options)
    cars__wrapper.appendChild(car__item);

    if (cars__wrapper.innerHTML != "") {
      delete__btn.classList.add('active');
    } else {
      delete__btn.classList.remove('active');
    }
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

function Add__To__Car() {
  let car__manufacturer__value = input__add__car__manufacturer.value;
  let car__model__value = input__add__car__model.value;
  let car__category__value = input__add__car__category.value;
  let Year__from__value = input__add__car__Year__from.value;
  let Price__From__value = input__add__car__Price__From.value;

  let check__value__not__empty = car__manufacturer__value != "" && car__model__value != "" && car__category__value != "" && Year__from__value != "" && Price__From__value != "";
  let check__yearPrice = Year__from__value >= 1970 && Year__from__value <= 2022 && Price__From__value >= 1;



  if (check__value__not__empty) {
    if (check__yearPrice) {
      let car__item__arr = {
        manufacturer: `${car__manufacturer__value}`,
        model: `${car__model__value}`,
        category: `${car__category__value}`,
        year: Year__from__value,
        price: `${Price__From__value}$`
      };

      CAR__DATA.unshift(car__item__arr);
      Get__ALL__Cars__Data();
      openClose__add__car__container();

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

Get__ALL__Cars__Data();

select__wrapper.forEach(select => {
  select.addEventListener("click", openClose__filter__Dropdown)
})