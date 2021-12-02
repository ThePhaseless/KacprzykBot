
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

//Odpowiedzi (a - answear)
const confused = ["Hm?", "O co Ci chodzi?", "Czegoś chyba nie zrozumiałem", "Co się stało?"];
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

function los(slowa) {
  return slowa[Math.floor(Math.random() * slowa.length)];
}

client.on("ready", () => {
  console.log("o działa");
  client.user.setActivity("okolice za oknem", { type: "WATCHING" });
});

client.on("message", msg => {
  if (msg.author != "810790057459187733") {
    //Zachowanie godności
    if (msg.content.toLowerCase().match(/czaruś/i) || msg.content.toLowerCase().match(/cezarsiu/i))
      msg.channel.send("Nie nazywaj mnie tak. Nigdy.");

    //Wiadomości dot.Bota
    else if (imie.some(v => msg.content.toLowerCase().includes(v))) {
      //Co tam?
      if (qcotam.some(v => msg.content.toLowerCase().includes(v)))
        msg.channel.send(los(acotam));

      //Co sądzisz o?
      else if (qopinia.some(v => msg.content.toLowerCase().includes(v)))
        msg.channel.send(los(aopinia));

      //Ile to?
      else if (qileto.some(v => msg.content.toLowerCase().includes(v)))
        msg.channel.send(los(aileto));

      //Nie zrozumiałem
      else
        msg.channel.send(los(confused));
    }

    //Wysocki
    else if (wysocki.some(v => msg.content.toLowerCase().includes(v)) || msg.mentions.has("404341103572025361"))
      msg.channel.send("O to ten co się nie uczy matematyki");


    //   if (msg.content.toLowerCase().match(/czaruś/i) || msg.content.toLowerCase().match(/cezarsiu/i)) {
    //     //Zachowanie godności
    //     msg.channel.send("Nie nazywaj mnie tak. Nigdy.");
    //     //Opinia
    //   } else if (
    //     msg.content.toLowerCase().match(/czarku/i) &&
    //     (msg.content.toLowerCase().match(/lubisz/i) ||
    //       msg.content.toLowerCase().match(/wiesz/i) ||
    //       msg.content.toLowerCase().match(/czy/i))
    //   ) {
    //     if (
    //       //Wysocki check
    //       msg.content.toLowerCase().match(/wysocki/i) ||
    //       msg.content.toLowerCase().match(/michał/i) ||
    //       msg.content.toLowerCase().match(/michała/i) ||
    //       msg.content.toLowerCase().match(/wysocki/i) ||
    //       msg.mentions.has("404341103572025361")
    //     )
    //       msg.channel.send("Zapytaj o coś ciekawszego");
    //     else msg.channel.send(los(lubisz));
    //   }
    //   else if (
    //     msg.content.toLowerCase().match(/co o tym sądzisz/i) ||
    //     msg.content.toLowerCase().match(/i co/i)
    //   )
    //     msg.channel.send("Śliczne!");
    //   //Strona główna
    //   else if (
    //     msg.content.toLowerCase().match(/czarku pomoc/i) ||
    //     msg.content.toLowerCase().match(/cezary pomoc/i)
    //   ) {
    //     msg.channel.send("To wszystko co znalazłem:");
    //     msg.channel.send("https://kacprzykbot.herokuapp.com");
    //   }
    //   //Mood Check
    //   else if (
    //     msg.content.toLowerCase().match(/jak sie czujesz/i) ||
    //     msg.content.toLowerCase().match(/jak tam/i) ||
    //     msg.content.toLowerCase().match(/jak się czujesz/i) ||
    //     msg.content.toLowerCase().match(/co tam/i)
    //   )
    //     msg.channel.send(los(ct));
    //   //Emotka dla Matmy
    //   else if (
    //     msg.content.toLowerCase().match(/matematyka/i) ||
    //     msg.content.toLowerCase().match(/matma/i) ||
    //     msg.content.toLowerCase().match(/matematyki/i) ||
    //     msg.content.toLowerCase().match(/matmy/i) ||
    //     msg.content.toLowerCase().match(/matematyke/i) ||
    //     msg.content.toLowerCase().match(/matme/i) ||
    //     msg.content.toLowerCase().match(/matematyką/i) ||
    //     msg.content.toLowerCase().match(/matmą/i)
    //   ) {
    //     msg.react("🥰");
    //   }
    //   //Wycoski check2
    //   else if (
    //     msg.content.toLowerCase().match(/wysocki/i) ||
    //     msg.content.toLowerCase().match(/Michał/i) ||
    //     msg.mentions.has("404341103572025361")
    //   ) {
    //     msg.channel.send("O, to ten co się matematyki nie uczy");
    //   } else if (msg.content.toLowerCase().match(/ile to/i) || msg.content.toLowerCase().match(/policz/i))
    //     msg.channel.send(los(ileto));
    //   //Opinia2mat
    //   else if (msg.mentions.has("810790057459187733"))
    //     msg.channel.send(
    //       "Czas, który spędziłeś na oznaczenie mnie, mogłeś poświęcić na naukę matematyki. Może już Cię ten profil nie interesuje?! Budowa układu wydalniczego żaby jest baaardzo ciekawa..."
    //     );
    //   else if (
    //     msg.content.toLowerCase().match(/nie umiem/i) ||
    //     msg.content.toLowerCase().match(/nwm/i) ||
    //     msg.content.toLowerCase().match(/nie wiem/i) ||
    //     msg.content.toLowerCase().match(/nie pamiętam/i)
    //   )
    //     msg.channel.send("Siadaj, niedostateczny");
    //   //Niedostateczny
    //   else if (
    //     msg.content.toLowerCase().match(/wzory trygonometryczne/i) ||
    //     msg.content.toLowerCase().match(/trygonometria/i) ||
    //     msg.content.toLowerCase().match(/sinus cosinus/i)
    //   ) {
    //     msg.channel.send("https://www.matemaks.pl/wzory-trygonometryczne.html");
    //   } else if (
    //     msg.content.toLowerCase().match(/wzory skróconego mnożenia/i) ||
    //     msg.content.toLowerCase().match(/wzory mnożenia/i) ||
    //     msg.content.toLowerCase().match(/mnożenie/i)
    //   ) {
    //     msg.channel.send(
    //       "https://www.matemaks.pl/wzory-skroconego-mnozenia.html"
    //     );
    //   } else if (
    //     msg.content.toLowerCase().match(/wzory wieta/i) ||
    //     msg.content.toLowerCase().match(/wzory vietea/i) ||
    //     msg.content.toLowerCase().match(/wieta/i)
    //   ) {
    //     msg.channel.send("https://www.matmana6.pl/wzory-vietea");
    //   } else if (msg.content.toLowerCase() == "czarku" || msg.content.toLowerCase() == "cezary") {
    //     msg.channel.send(los(slucham));
    //   } else if (msg.content.toLowerCase().match(/jg/i)) {
    //     msg.channel.send("JG 100% +1 byczq");
    //   }
    // }
  }
});

console.log("Logowanie się jako bot...");
client.login(process.env.TOKEN);