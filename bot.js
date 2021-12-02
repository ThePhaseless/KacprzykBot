
//* KacprzykBot
/// Stworzony na potrzeby edukacyjne
/// Bot nie ma na celu obrażania Pana Cezarego
/// Jest używany tylko na serwerze Testowym i prywatnej społeczności w celach humorystycznych i edukacyjnych


console.log("Trwa inicjalizacja...");
const Discord = require("discord.js");
const client = new Discord.Client();

//Triggerwordy (q - question)
const imie = ["czarku", "czarek", "cezary"];
const matma = [
  "matematyka", "matematyk",
  "matematykom", "matematykę",
  "matematyką", "matematykami",
  "matematyce", "matematykach",
  "matematyko", "matematyki"
];
const wysocki = ["wysocki", "michał", "rzycie"];
const qopinia = ["lubisz", "jak sądzisz", "czy"];
const qcotam = ["jak tam", "co tam", "jak sie czujesz"];
const qileto = ["ile to", "policz"];
const qnwm = ["nwm", "nie umiem", "nie wiem", "nie pamiętam"];

//Odpowiedzi (a - answear)
const confused = ["Hm?",
  "O co Ci chodzi?",
  "Czegoś chyba nie zrozumiałem",
  "Co się stało?"
];
const aopinia = [
  "Oczywiście",
  "Chyba",
  "Totalnie",
  "a czy to ważne?",
  "Tak",
  "Nie",
  "To nie twoja sprawa",
  "Skąd mam to wiedzieć",
  "Powinieneś mieć to w 2. klasie podstawówki",
  "Mhm..."
];
const aileto = [
  "Nie potrzebujesz tego żeby zrobić to zadanie. Jest sprytniejszy sposób.",
  "Policz sobie",
  "Nie jestem kalkulatorem tylko matematykiem",
  "Dlaczego sam nie policzysz?",
  "Te liczby sprawiają ci problem?",
  "Skąd mam wiedzieć"
];
const acotam = [
  "Nie jest dobrze...",
  "To jest jakiś dramat...",
  "Ahh te czasy...",
  "Może lepiej zacznijmy lekcje..."
];
const anwm = ["Siadaj, Niedostateczny",
  "Czyli rozumiem, że było coś ważniejszego tak?",
  "A to przepraszam z jakiej przyczyny?"
];


//Losowanie wypowiedzi z tablicy
function los(slowa) {
  return slowa[Math.floor(Math.random() * slowa.length)];
}

//Zadałowanie clienta
client.on("ready", () => {
  console.log("o działa");
  client.user.setActivity("okolice za oknem", { type: "WATCHING" });
});



//Obserwacja Chatu
client.on("message", msg => {
  //Sprawdzenie autora wiadomości
  if (msg.author != "810790057459187733") {
    if (qnwm.some(v => msg.content.toLowerCase().includes(v)))
      msg.channel.send(los(anwm));

    //Miłość do matematyki
    if (matma.some(v => msg.content.toLowerCase().includes(v)))
      msg.react("🥰");

    if (msg.content.toLowerCase().match(/jg/i))
      msg.reply("JG 100% +1 byczq");

    //Zachowanie godności
    if (msg.content.toLowerCase().match(/czaruś/i) || msg.content.toLowerCase().match(/cezarsiu/i))
      msg.reply("Nie nazywaj mnie tak. Nigdy.");

    //Wiadomości dot.Bota
    else if (imie.some(v => msg.content.toLowerCase().includes(v))) {
      //Co tam?
      if (qcotam.some(v => msg.content.toLowerCase().includes(v)))
        msg.channel.send(los(acotam));

      //Co sądzisz o?
      else if (qopinia.some(v => msg.content.toLowerCase().includes(v)))
        if (wysocki.some(v => msg.content.toLowerCase().includes(v)))
          msg.channel.send("Zapytaj o coś ciekawszego...");
        else msg.channel.send(los(aopinia));

      //Ile to?
      else if (qileto.some(v => msg.content.toLowerCase().includes(v)))
        msg.channel.send(los(aileto));



      //Reszta
      else
        msg.channel.send(los(confused));
    }

    //Wysocki
    else if (wysocki.some(v => msg.content.toLowerCase().includes(v)) || msg.mentions.has("404341103572025361"))
      msg.channel.send("O to ten co się nie uczy matematyki");

    //Kaza za zpingowanie Bota
    else if (msg.mentions.has("810790057459187733"))
      msg.channel.send(
        "Czas, który spędziłeś na oznaczenie mnie, mogłeś poświęcić na naukę matematyki. Może już Cię ten profil nie interesuje?! Budowa układu wydalniczego żaby jest baaardzo ciekawa..."
      );
    //   } 
    //   }
    // }
  }
});

console.log("Logowanie się jako bot...");
client.login(process.env.TOKEN);