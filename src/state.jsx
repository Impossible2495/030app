const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "ivan22@ya.ru",
  about: "Рассказ о себе",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70",
};

const users = {
  0: { name: "Лена", lastname: "Морозова" },
  1: { name: "Ульяна", lastname: "Василькова" },
  2: { name: "Василий", lastname: "Мудрый" },
  3: { name: "Юля", lastname: "Прекрасная" },
  4: { name: "Виктория", lastname: "Задорнова" },
};




export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}