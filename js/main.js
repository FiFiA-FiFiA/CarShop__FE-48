"use strict";

class Car {
  constructor(manufacturer, model, category, year, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.category = category;
    this.year = year;
    this.price = `${price} $`;
  }
}

var CAR__DATA = [
  new Car("Mercedes", "C 63 AMG", "Sedan", 2020, 36500),
  new Car("BMW", "330", "Sedan", 2018, 26000),
  new Car("Mercedes", "G-Class", "Jeep", 2017, 43000),
  new Car("BMW", "320", "Sedan", 2021, 32000),
  new Car("Mercedes", "G-Class AMG", "Jeep", 2021, 52000),
  new Car("Audi", "A7", "Sedan", 2017, 28000),
  new Car("Mercedes", "G-Class", "Jeep", 2019, 35000),
  new Car("BMW", "330", "Sedan", 2016, 24000),
  new Car("Mercedes", "C 63 AMG", "Sedan", 2021, 41000),
  new Car("BMW", "550", "Sedan", 2017, 28000),
  new Car("Mercedes", "A-Class", "Hatchback", 2019, 34000),
  new Car("BMW", "320", "Sedan", 2013, 26000),
  new Car("Mercedes", "E-Class", "Suv", 2017, 41000),
  new Car("BMW", "550", "Sedan", 2012, 21000),
  new Car("Audi", "A7", "Sedan", 2019, 35000),
  new Car("Audi", "A4", "Sedan", 2021, 43000),
  new Car("BMW", "330", "Sedan", 2019, 23000),
  new Car("Mercedes", "E-Class", "Suv", 2021, 45000),
  new Car("Mercedes", "A-Class AMG", "Hatchback", 2019, 34000),
  new Car("Audi", "A4", "Sedan", 2018, 30000),
  new Car("Mercedes", "C 63", "Sedan", 2019, 28000),
];

const Data = new Date();

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
let clear__btn = document.querySelector("[clear__btn]");
let search__btn = document.querySelector("[search__btn]");
let filter__selected__wrapper = document.querySelector("[filter__selected__wrapper]");

const manufacturer__selected = document.querySelector("[manufacturer__selected]");
const model__selected = document.querySelector("[model__selected]");
const category__selected = document.querySelector("[category__selected]");
const yearFrom__selected = document.querySelector("[yearFrom__selected]");
const yearTo__selected = document.querySelector("[yearTo__selected]");
const priceFrom = document.querySelector("[priceFrom]");
const priceTo = document.querySelector("[priceTo]");

const error__text__wrapper = document.querySelector("[error__text__wrapper]");
let error__text = document.querySelector("[error__text]");
let err__text = "";

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
search__btn.addEventListener('click', Get__Search__Info);


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

// ===========================================================

function Create__Option__Manufacturer() {
  manufacturer__selected.innerHTML = "";
  let manufacturer__options = document.createElement("option");
  manufacturer__options.setAttribute("value", "");
  manufacturer__options.innerText = "Select Manufacturer";
  manufacturer__selected.appendChild(manufacturer__options);

  let temp = [];

  for (const car of CAR__DATA) {
    temp.push(car.manufacturer);
  }

  temp = [...new Set(temp)];

  for (const value of temp) {
    let manufacturer__options = document.createElement("option")
    manufacturer__options.classList.add("option");
    manufacturer__options.setAttribute("value", value);
    manufacturer__options.innerText = value;

    manufacturer__selected.appendChild(manufacturer__options);
  }

  manufacturer__selected.addEventListener('change', Create__Option__Model);
  manufacturer__selected.addEventListener('change', Get__Option__Value);
  manufacturer__selected.addEventListener('change', Create__Option__Category());
  Create__Option__Model();
}

// ===========================================================

function Create__Option__Model() {
  let Manufacturer__Value = manufacturer__selected.value;

  if (Manufacturer__Value != "") {
    model__selected.innerHTML = "";
    model__selected.classList.remove("disabled");

    let model__options = document.createElement("option");
    model__options.setAttribute("value", "");
    model__options.innerText = "Select Model";

    model__selected.prepend(model__options)

    let temp = [];
    let temp__Arr = CAR__DATA.filter(i => i.manufacturer == Manufacturer__Value);

    for (const car of temp__Arr) {
      temp.push(car.model);
    }

    temp = [...new Set(temp)];

    for (const value of temp) {
      let model__options = document.createElement("option")
      model__options.classList.add("option");
      model__options.setAttribute("value", value);
      model__options.innerText = value;

      model__selected.appendChild(model__options);
    }
    model__selected.addEventListener('change', Create__Option__Category);
  } else {
    model__selected.innerHTML = "";
    model__selected.classList.add("disabled");

    let model__options = document.createElement("option");
    model__options.setAttribute("value", "");
    model__options.innerText = "Select Model";

    model__selected.appendChild(model__options);
  }
  Create__Option__Category();
}

// ===========================================================

function Create__Option__Category() {
  if (manufacturer__selected.value != "") {
    category__selected.innerHTML = "";
    category__selected.classList.remove("disabled");

    let category__options = document.createElement("option");
    category__options.setAttribute("value", "");
    category__options.innerText = "Select Category";

    category__selected.prepend(category__options);

    let temp = [];
    let temp__Arr = CAR__DATA.filter(i => i.manufacturer == manufacturer__selected.value);

    for (const car of temp__Arr) {
      temp.push(car.category);
    }

    temp = [...new Set(temp)];

    for (const value of temp) {
      let category__options = document.createElement("option")
      category__options.classList.add("option");
      category__options.setAttribute("value", value);
      category__options.innerText = value;

      category__selected.appendChild(category__options);
    }
  } else {
    category__selected.innerHTML = "";
    category__selected.classList.add("disabled");

    let category__options = document.createElement("option");
    category__options.setAttribute("value", "");
    category__options.innerText = "Select Category";

    category__selected.prepend(category__options);
  }
}

// ===========================================================

function Create__Option__Year() {
  for (let i = Data.getFullYear(); i > 1990 - 1; i--) {
    let yearFrom__options = document.createElement("option");
    yearFrom__options.textContent = i;

    let yearTo__options = document.createElement("option")
    yearTo__options.textContent = i;

    yearFrom__selected.appendChild(yearFrom__options);
    yearTo__selected.appendChild(yearTo__options);
  }
  Get__Option__Value();
}

Create__Option__Year();

// =============================================================

function Get__Option__Value() {
  let Manufacturer__Value = manufacturer__selected.value

  if (Manufacturer__Value != "") {
    search__btn.classList.add("active");
  } else {
    search__btn.classList.remove("active");
  }
}

// ===========================================================

let NEW__CAR__DATA = CAR__DATA;

function Get__Search__Info() {
  const search__query = document.querySelectorAll("[search__query]");
  NEW__CAR__DATA = CAR__DATA

  let Manufacturer__Value = manufacturer__selected.value;
  let model__Value = model__selected.value;
  let category__Value = category__selected.value;
  let yearFrom__Value = yearFrom__selected.value;
  let yearTo__Value = yearTo__selected.value;
  let priceFrom__Value = priceFrom.value;
  let priceTo__Value = priceTo.value;


  if (Manufacturer__Value == "") {
    NEW__CAR__DATA = CAR__DATA
  } else {
    NEW__CAR__DATA = NEW__CAR__DATA.filter(i => i.manufacturer == Manufacturer__Value)
  }
  if (model__Value != "") {
    NEW__CAR__DATA = NEW__CAR__DATA.filter(i => i.model == model__Value)
  }
  if (category__Value != "") {
    NEW__CAR__DATA = NEW__CAR__DATA.filter(i => i.category == category__Value)
  }
  if (yearFrom__Value != "" && yearTo__Value != "") {
    NEW__CAR__DATA = NEW__CAR__DATA.filter(i => i.year >= yearFrom__Value && i.year <= yearTo__Value)
  }
  if (priceFrom__Value != "" && priceTo__Value != "") {
    NEW__CAR__DATA = NEW__CAR__DATA.filter(i => i.price >= priceFrom__Value && i.price <= priceTo__Value)
  }

  if (NEW__CAR__DATA != "") {

    for (let query of search__query) {
      let SearchQuery = query.getAttribute('search__query');

      for (const carData of NEW__CAR__DATA) {
        if (SearchQuery.indexOf(carData.manufacturer) != -1) {
          query.classList.add('show');
          if (model__Value != "") {
            if (SearchQuery.includes(carData.manufacturer && carData.model)) {
              query.classList.add('show');
            } else {
              query.classList.remove('show');
            }
            console.log(category__Value);
            if (category__Value != "") {
              if (SearchQuery.includes(carData.manufacturer && carData.category)) {
                query.classList.add('show');
              } else {
                query.classList.remove('show');
              }
            }
          }
        } else {
          query.classList.remove('show');
        }
      }
    }
  } else {
    Error__Text__Wrapper("Oops! Car is not defind!", "#E31E25", "#db6266");
  }

  // if (Manufacturer__Value != "") {
  //   let manufacturer = NEW__CAR__DATA.filter(i => i.manufacturer == i.manufacturer)
  //   manufacturer = [...new Set(manufacturer.map(i => i.manufacturer))];
  //   SearchQueryArr.push(manufacturer);
  // }

  // if (model__Value != "") {
  //   let model = NEW__CAR__DATA.filter(i => i.model == i.model)
  //   model = [...new Set(model.map(i => i.model))];
  //   SearchQueryArr.push(model);
  // }

  // if (category__Value != "") {
  //   let category = NEW__CAR__DATA.filter(i => i.category == i.category)
  //   category = [...new Set(category.map(i => i.category))];
  //   SearchQueryArr.push(category);
  // }

  // if (yearFrom__Value != "" && yearTo__Value != "") {
  //   NEW__CAR__DATA = NEW__CAR__DATA.filter(i => i.year >= yearFrom__Value && i.year <= yearTo__Value);
  //   NEW__CAR__DATA = [...new Set(NEW__CAR__DATA.map(i => i.year))];
  //   console.log(NEW__CAR__DATA);
  // }

  // if (priceFrom__Value != "" && priceTo__Value != "") {
  //   NEW__CAR__DATA = NEW__CAR__DATA.filter(i => i.price >= priceFrom__Value && i.price <= priceTo__Value);
  //   console.log(NEW__CAR__DATA);
  // }

  // let newSearchQueryArr = SearchQueryArr.flatMap(i => i).join('');

  // for (let query of search__query) {
  //   let SearchQuery = query.getAttribute('search__query');

  //   if (SearchQuery.includes(newSearchQueryArr)) {
  //      
  //     query.classList.add('show');
  //     query.style.display = "flex";
  //   } else {
  //     query.classList.remove('show');
  //      
  //     query.style.display = "none";
  //   }
  // }

  openClose__filter__container();
}

// ===========================================================

function Add__New__Car() {
  let manufacturer__value = input__add__car__manufacturer.value;
  let model__value = input__add__car__model.value;
  let category__value = input__add__car__category.value;
  let year__value = input__add__car__Year__from.value;
  let price__value = input__add__car__Price__From.value;

  let check__value__not__empty = manufacturer__value != "" && model__value != "" && category__value != "" && year__value != "" && price__value != "";
  let check__yearPrice = year__value >= 1970 && year__value <= Data.getFullYear() && price__value >= 10;

  if (check__value__not__empty) {
    if (check__yearPrice) {
      CAR__DATA.unshift(new Car(manufacturer__value, model__value, category__value, year__value, price__value));

      input__add__car__manufacturer.value = "";
      input__add__car__model.value = "";
      input__add__car__category.value = "";
      input__add__car__Year__from.value = "";
      input__add__car__Price__From.value = "";

      cars__wrapper.innerHTML = "";
      manufacturer__selected.innerHTML = "";

      let manufacturer__options = document.createElement("option")
      manufacturer__options.setAttribute("value", "");
      manufacturer__options.innerText = "Select Manufacturer";

      manufacturer__selected.appendChild(manufacturer__options);

      document.body.scrollIntoView("top")
      openClose__add__car__container();
      Get__ALL__Cars__Data();

      Error__Text__Wrapper("Add To Successfully", "#2d2", "#2a2");
    } else {
      Error__Text__Wrapper("Please check the year input or price input", "#E31E25", "#db6266");
    }
  } else {
    Error__Text__Wrapper("input cannot be empty", "#E31E25", "#db6266");
  }

}

// =====================================

function Delete__All__Cars() {
  cars__wrapper.innerHTML = "";
  CAR__DATA = [];


  Error__Text__Wrapper("Delete All Cars Data!", "#E31E25", "#db6266");
  openClose__Warning__container()
  Get__ALL__Cars__Data();

  if (cars__wrapper.innerHTML != "") {
    delete__btn.classList.add('active');
  } else {
    delete__btn.classList.remove('active');
  }
}

function Error__Text__Wrapper(err__text, bg__clr, border__clr) {
  error__text__wrapper.classList.add('active');
  error__text.innerText = `${err__text}`;
  error__text.style.backgroundColor = bg__clr;
  error__text.style.borderColor = border__clr;
  error__text.style.outlineColor = border__clr;
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    error__text__wrapper.classList.remove('active');
    error__text.innerText = ``;
    document.body.style.overflow = "auto";
  }, 2000)
}

// ==================================================

function Get__ALL__Cars__Data() {

  for (const index in CAR__DATA) {

    let manufacturer = CAR__DATA[index].manufacturer;
    let model = CAR__DATA[index].model;
    let category = CAR__DATA[index].category;
    let year = CAR__DATA[index].year;
    let price = CAR__DATA[index].price;

    let car__item = document.createElement('div');
    car__item.classList.add('car__item', 'show');
    car__item.setAttribute("search__query", `${manufacturer} ${model} ${category} ${year} ${price}`);
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

    cars__wrapper.appendChild(car__item);
  }

  if (cars__wrapper.innerHTML != "") {
    delete__btn.classList.add("active");
  } else {
    delete__btn.classList.remove("active");
  }

  Create__Option__Manufacturer();
}

Get__ALL__Cars__Data();

// =======================================================