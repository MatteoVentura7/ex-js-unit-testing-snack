const {
  getInitials,
  createSlug,
  average,
  isPalindroma,
  findPostById,
} = require("./snack");

// Challenge

//Organizza i test in describe() raggruppandoli per argomento.

describe("Manipolazione di stringa", () => {
  //Snack 1

  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

  test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("giovanni bianchi")).toBe("G.B.");
    expect(getInitials("Anna  Maria")).toBe("A.M.");
  });

  // Snack 5

  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
  // 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

  test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(isPalindroma("radar")).toBeTruthy();
    expect(isPalindroma("boolean")).toBeFalsy();
  });
});

describe("Operazioni su array", () => {
  // Snack 3

  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione average calcola la media aritmetica di un array di numeri."

  test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([10, 20, 30])).toBe(20);
    expect(average([5, 15, 25, 35])).toBe(20);
  });

  // Snack 7

  // Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
  // Creare un test che verifichi le seguenti descrizioni:
  // 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
  // Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

  const posts = [
    {
      id: 1,
      title: "Introduzione a JavaScript",
      slug: "Introduzione-a-JavaScript",
    },
    { id: 2, title: "React Hooks", slug: "react-hooks" },
  ];

  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({
      id: 2,
      title: "React Hooks",
      slug: "react-hooks",
    });
    expect(findPostById(posts, 3)).toBe(null);
    expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id');
    expect(() => findPostById([34, 67], 2)).toThrow("Oggetto post non valido");
  });
});

describe("Generazione di slug", () => {
  // Snack 2

  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione createSlug restituisce una stringa in lowercase."

  test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("Titolo di Prova")).toBe("titolo-di-prova");
  });

  // Snack 4

  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione createSlug sostituisce gli spazi con -."
  // 📌 Esempi:
  // createSlug("Questo è un test") → "questo-e-un-test"

  test("La funzione createSlug sostituisce gli spazi con -", () => {
    expect(createSlug("Questo e un test")).toBe("questo-e-un-test");
  });

  // Snack 6

  // Creare un test che verifichi la seguente descrizione:
  // 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

  test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow("Titolo non valido");
    expect(() => createSlug(null)).toThrow("Titolo non valido");
  });
});
