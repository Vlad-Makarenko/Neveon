import { makeAutoObservable } from "mobx";

export class Category {
  constructor() {
    this._categories = [
      { id: 1, name: "Поролон для матраців" },
      { id: 2, name: "Меблевий поролон" },
      { id: 3, name: "Пакувальний поролон" },
      { id: 4, name: "Малярні шубки та валики" },
      { id: 5, name: "Утеплювач" },
      { id: 6, name: "Поролон для автомобіля" },
      { id: 7, name: "Мати для спортивних залів" },
      { id: 8, name: "Губки поролонові" },
    ];
    this._items = [
      {
        id: 1,
        category: "Меблевий поролон",
        name: "Диван світлий",
        price: "3 250₴",
        description:
          "Як прийнято вважати, базові сценарії поведінки користувачів об'єктивно розглянуті відповідними інстанціями.",
      },
      {
        id: 2,
        category: "Поролон для матраців",
        name: "Диван білий",
        price: "2 999₴",
        description:
          "Загалом, звісно, обраний нами інноваційний шлях відіграє визначальне значення виведення поточних активів.",
      },
      {
        id: 3,
        category: "Меблевий поролон",
        name: "Крісло",
        price: "999₴",
        description:
          "Несподівано, елементи політичного процесу й досі залишаються долею лібералів, які прагнуть бути оприлюднені.",
      },
      {
        id: 4,
        category: "Меблевий поролон",
        name: "Кухонний диван",
        price: "2 199₴",
        description:
          "Будучи лише частиною загальної картини, нанотехнології можуть бути змішані з не унікальними даними.",
      },
      {
        id: 5,
        category: "Меблевий поролон",
        name: "Диван темний",
        price: "2 699₴",
        description:
          "Безпосередні учасники технічного прогресу набирають популярність серед певних верств населення, а отже, мають бути піддані.",
      },
      {
        id: 6,
        category: "Поролон для матраців",
        name: "Ліжко",
        price: "4 999₴",
        description:
          "З урахуванням ситуації, постійне інформаційно-пропагандистське забезпечення нашої діяльності вимагає аналізу.",
      },
    ];
    this._selectedCategory = {};
    this._selectedItems = this._items;
    this._recomendedItems = this._items;
    this._selectedItem = {};
    this._modalShow = false;
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._category = categories;
  }

  setItems(items) {
    this._items = items;
  }

  setSelectedItem(item) {
    this._selectedItem = item;
  }

  setSelectedCategory(selectedCategory, changeItems = true) {
    this._selectedCategory = selectedCategory;
    this._selectedItems = changeItems
      ? this._items.filter((item) => item.category === selectedCategory.name)
      : this._items;
  }

  setRecomendedItems(recomendedItems) {
    this._recomendedItems = recomendedItems;
  }

  setModalShow(show) {
    this._modalShow = show;
  }

  get categories() {
    return this._categories;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }

  get items() {
    return this._items;
  }

  get selectedItems() {
    return this._selectedItems;
  }

  get selectedItem() {
    return this._selectedItem;
  }

  get recomendedItems() {
    return this._recomendedItems;
  }
  get modalShow() {
    return this._modalShow;
  }
}
