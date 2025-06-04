const { getInitials, createSlug, average } = require("./snack");

//Snack 1

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Mario Rossi")).toBe("M.R.");
  expect(getInitials("giovanni bianchi")).toBe("G.B.");
  expect(getInitials("Anna  Maria")).toBe("A.M.");
});

// Snack 2

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase", () => {
  expect(createSlug("Titolo di Prova")).toBe("titolo di prova");
});

// Snack 2

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
  expect(average([10, 20, 30])).toBe(20);
  expect(average([5, 15, 25, 35])).toBe(20);
});
