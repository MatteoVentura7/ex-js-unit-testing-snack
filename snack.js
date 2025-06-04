function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(titolo) {
  return titolo.toLowerCase().replaceAll(" ", "-");
}

function average(numeri) {
  return numeri.reduce((acc, num) => acc + num, 0) / numeri.length;
}

function isPalindroma(parola) {
  const parolaInversa = parola.trim().split("").reverse().join("");
  return parola.trim() === parolaInversa;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindroma,
};
