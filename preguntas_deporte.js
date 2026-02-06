const preguntasDeporte = [
  // ⚾ MLB
  { categoria: "Deporte", pregunta: "¿Quién fue el Jugador Más Valioso (MVP) de la Serie Mundial 2016?", opciones: ["Ben Zobrist", "Kris Bryant", "Anthony Rizzo", "Aroldis Chapman"], respuesta: "Ben Zobrist" },
  { categoria: "Deporte", pregunta: "¿Qué equipo ganó la Serie Mundial en 2017?", opciones: ["Houston Astros", "Los Angeles Dodgers", "Chicago Cubs", "Boston Red Sox"], respuesta: "Houston Astros" },
  { categoria: "Deporte", pregunta: "¿Quién fue el campeón del Home Run Derby 2019?", opciones: ["Pete Alonso", "Vladimir Guerrero Jr.", "Aaron Judge", "Bryce Harper"], respuesta: "Pete Alonso" },
  { categoria: "Deporte", pregunta: "¿Cuál fue el primer equipo en ganar la Serie Mundial después de 100 años de sequía en 2016?", opciones: ["Chicago Cubs", "Cleveland Indians", "Boston Red Sox", "San Francisco Giants"], respuesta: "Chicago Cubs" },
  { categoria: "Deporte", pregunta: "¿Quién fue líder de cuadrangulares de la MLB en la temporada 2021?", opciones: ["Shohei Ohtani", "Vladimir Guerrero Jr.", "Salvador Pérez", "Aaron Judge"], respuesta: "Salvador Pérez" },
  { categoria: "Deporte", pregunta: "¿Qué jugador dominicano ganó el Home Run Derby en 2022?", opciones: ["Juan Soto", "Julio Rodríguez", "Vladimir Guerrero Jr.", "Fernando Tatis Jr."], respuesta: "Juan Soto" },
  { categoria: "Deporte", pregunta: "¿Quién fue el MVP de la Liga Americana en 2017?", opciones: ["José Altuve", "Aaron Judge", "Mike Trout", "Mookie Betts"], respuesta: "José Altuve" },
  { categoria: "Deporte", pregunta: "¿Qué equipo ganó la Serie Mundial 2020 disputada en formato burbuja?", opciones: ["Los Angeles Dodgers", "Tampa Bay Rays", "Houston Astros", "Atlanta Braves"], respuesta: "Los Angeles Dodgers" },
  { categoria: "Deporte", pregunta: "¿Quién fue el MVP de la Liga Nacional en 2015?", opciones: ["Bryce Harper", "Buster Posey", "Nolan Arenado", "Kris Bryant"], respuesta: "Bryce Harper" },
  { categoria: "Deporte", pregunta: "¿Qué equipo ganó la Serie Mundial en 2021?", opciones: ["Atlanta Braves", "Houston Astros", "Los Angeles Dodgers", "Boston Red Sox"], respuesta: "Atlanta Braves" },

  // 🏀 NBA
  { categoria: "Deporte", pregunta: "¿Qué jugador fue MVP de la NBA en 2015 y 2016?", opciones: ["Stephen Curry", "LeBron James", "Kevin Durant", "Giannis Antetokounmpo"], respuesta: "Stephen Curry" },
  { categoria: "Deporte", pregunta: "¿Quién ganó las Finales de la NBA en 2014?", opciones: ["San Antonio Spurs", "Miami Heat", "Cleveland Cavaliers", "Golden State Warriors"], respuesta: "San Antonio Spurs" },
  { categoria: "Deporte", pregunta: "¿Qué equipo fue campeón de la NBA en 2019?", opciones: ["Toronto Raptors", "Golden State Warriors", "Cleveland Cavaliers", "Milwaukee Bucks"], respuesta: "Toronto Raptors" },
  { categoria: "Deporte", pregunta: "¿Quién fue el MVP de las Finales de la NBA en 2020?", opciones: ["LeBron James", "Anthony Davis", "Jimmy Butler", "Kawhi Leonard"], respuesta: "LeBron James" },
  { categoria: "Deporte", pregunta: "¿Qué jugador ganó el concurso de triples de la NBA en 2021?", opciones: ["Stephen Curry", "Damian Lillard", "Joe Harris", "Buddy Hield"], respuesta: "Stephen Curry" },
  { categoria: "Deporte", pregunta: "¿Qué equipo ganó el campeonato de la NBA en 2021?", opciones: ["Milwaukee Bucks", "Phoenix Suns", "Los Angeles Lakers", "Miami Heat"], respuesta: "Milwaukee Bucks" },
  { categoria: "Deporte", pregunta: "¿Quién fue el MVP de la NBA en la temporada 2018-19?", opciones: ["Giannis Antetokounmpo", "James Harden", "Stephen Curry", "Kawhi Leonard"], respuesta: "Giannis Antetokounmpo" },
  { categoria: "Deporte", pregunta: "¿Qué equipo ganó el campeonato de la NBA en 2015?", opciones: ["Golden State Warriors", "Cleveland Cavaliers", "San Antonio Spurs", "Miami Heat"], respuesta: "Golden State Warriors" },
  { categoria: "Deporte", pregunta: "¿Qué jugador ganó el MVP de la temporada NBA 2021-22?", opciones: ["Nikola Jokić", "Joel Embiid", "Giannis Antetokounmpo", "Kevin Durant"], respuesta: "Nikola Jokić" },
  { categoria: "Deporte", pregunta: "¿Qué equipo fue campeón de la NBA en 2011?", opciones: ["Dallas Mavericks", "Miami Heat", "Los Angeles Lakers", "Chicago Bulls"], respuesta: "Dallas Mavericks" },

  // ⚽ Fútbol
  { categoria: "Deporte", pregunta: "¿Qué país ganó la Copa Mundial de la FIFA en 2014?", opciones: ["Alemania", "Argentina", "Brasil", "España"], respuesta: "Alemania" },
  { categoria: "Deporte", pregunta: "¿Quién ganó la Champions League en 2012?", opciones: ["Chelsea", "Barcelona", "Bayern Múnich", "Real Madrid"], respuesta: "Chelsea" },
  { categoria: "Deporte", pregunta: "¿Quién fue el máximo goleador de la Copa Mundial 2018?", opciones: ["Harry Kane", "Kylian Mbappé", "Cristiano Ronaldo", "Romelu Lukaku"], respuesta: "Harry Kane" },
  { categoria: "Deporte", pregunta: "¿Qué equipo ganó la Champions League en 2020?", opciones: ["Bayern Múnich", "PSG", "Real Madrid", "Chelsea"], respuesta: "Bayern Múnich" },
  { categoria: "Deporte", pregunta: "¿Quién ganó el Balón de Oro en 2021?", opciones: ["Lionel Messi", "Robert Lewandowski", "Cristiano Ronaldo", "Karim Benzema"], respuesta: "Lionel Messi" },
  { categoria: "Deporte", pregunta: "¿Qué país ganó la Copa América en 2021?", opciones: ["Argentina", "Brasil", "Chile", "Uruguay"], respuesta: "Argentina" },
  { categoria: "Deporte", pregunta: "¿Qué jugador fue el máximo goleador de la Champions League 2014-15?", opciones: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Luis Suárez"], respuesta: "Cristiano Ronaldo" },
  { categoria: "Deporte", pregunta: "¿Qué equipo ganó la Champions League en 2018?", opciones: ["Real Madrid", "Liverpool", "Barcelona", "Juventus"], respuesta: "Real Madrid" },
  { categoria: "Deporte", pregunta: "¿Quién fue el máximo goleador de la Eurocopa 2020?", opciones: ["Cristiano Ronaldo", "Harry Kane", "Patrik Schick", "Kylian Mbappé"], respuesta: "Cristiano Ronaldo" },
  { categoria: "Deporte", pregunta: "¿Qué país fue campeón del Mundial de Clubes de la FIFA en 2019?", opciones: ["Liverpool", "Flamengo", "Real Madrid", "Chelsea"], respuesta: "Liverpool" },

  // 🤼 WWE
  { categoria: "Deporte", pregunta: "¿Quién ganó el Royal Rumble en 2010?", opciones: ["Edge", "John Cena", "Randy Orton", "Triple H"], respuesta: "Edge" },
  { categoria: "Deporte", pregunta: "¿Qué luchador rompió la racha invicta de The Undertaker en WrestleMania 30?", opciones: ["Brock Lesnar", "Roman Reigns", "Kane", "Shawn Michaels"], respuesta: "Brock Lesnar" },
  { categoria: "Deporte", pregunta: "¿Quién fue campeón universal de WWE en 2020 durante más de 400 días?", opciones: ["Roman Reigns", "Brock Lesnar", "Seth Rollins", "Drew McIntyre"], respuesta: "Roman Reigns" },
  { categoria: "Deporte", pregunta: "¿Qué luchadora ganó el evento principal de WrestleMania 35 en 2019?", opciones: ["Becky Lynch", "Charlotte Flair", "Ronda Rousey", "Sasha Banks"], respuesta: "Becky Lynch" },
  { categoria: "Deporte", pregunta: "¿Quién ganó el Royal Rumble en 2022?", opciones: ["Brock Lesnar", "Drew McIntyre", "Edge", "Randy Orton"], respuesta: "Brock Lesnar" },
  { categoria: "Deporte", pregunta: "¿Qué luchador se convirtió en el campeón más joven de la WWE en 2010?", opciones: ["Randy Orton", "The Miz", "Sheamus", "CM Punk"], respuesta: "Sheamus" },
  { categoria: "Deporte", pregunta: "¿Quién derrotó a John Cena en SummerSlam 2014 de manera dominante?", opciones: ["Brock Lesnar", "Roman Reigns", "Daniel Bryan", "Kane"], respuesta: "Brock Lesnar" },
  { categoria: "Deporte", pregunta: "¿Quién ganó Money in the Bank en 2017?", opciones: ["Baron Corbin", "Seth Rollins", "Dean Ambrose", "AJ Styles"], respuesta: "Baron Corbin" },
  { categoria: "Deporte", pregunta: "¿Qué luchadora ganó el primer Royal Rumble femenino en 2018?", opciones: ["Asuka", "Charlotte Flair", "Becky Lynch", "Bayley"], respuesta: "Asuka" },
  { categoria: "Deporte", pregunta: "¿Quién fue el campeón de WWE en WrestleMania 31?", opciones: ["Seth Rollins", "Brock Lesnar", "Roman Reigns", "John Cena"], respuesta: "Seth Rollins" },

  // 🥊 UFC
  { categoria: "Deporte", pregunta: "¿Quién ganó el campeonato de peso pluma en UFC 194 en 2015?", opciones: ["Conor McGregor", "José Aldo", "Max Holloway", "Frankie Edgar"], respuesta: "Conor McGregor" },
  { categoria: "Deporte", pregunta: "¿Quién fue campeón de peso pesado de la UFC en 2016?", opciones: ["Stipe Miocic", "Daniel Cormier", "Cain Velasquez", "Fabricio Werdum"], respuesta: "Stipe Miocic" },
  { categoria: "Deporte", pregunta: "¿Quién derrotó a Conor McGregor en UFC 229 en 2018?", opciones: ["Khabib Nurmagomedov", "Nate Diaz", "Tony Ferguson", "Dustin Poirier"], respuesta: "Khabib Nurmagomedov" },
  { categoria: "Deporte", pregunta: "¿Quién fue la primera campeona de peso gallo femenino en UFC?", opciones: ["Ronda Rousey", "Holly Holm", "Amanda Nunes", "Miesha Tate"], respuesta: "Ronda Rousey" },
  { categoria: "Deporte", pregunta: "¿Quién ganó el campeonato de peso pesado en UFC 270 (2022)?", opciones: ["Francis Ngannou", "Ciryl Gane", "Jon Jones", "Stipe Miocic"], respuesta: "Francis Ngannou" },
  { categoria: "Deporte", pregunta: "¿Qué luchador se mantuvo invicto con 29-0 antes de retirarse en 2020?", opciones: ["Khabib Nurmagomedov", "Jon Jones", "Georges St-Pierre", "Anderson Silva"], respuesta: "Khabib Nurmagomedov" },
  { categoria: "Deporte", pregunta: "¿Quién fue campeón de dos divisiones simultáneamente en UFC?", opciones: ["Conor McGregor", "Daniel Cormier", "Amanda Nunes", "Henry Cejudo"], respuesta: "Conor McGregor" },
  { categoria: "Deporte", pregunta: "¿Quién derrotó a Ronda Rousey en 2016 en su regreso?", opciones: ["Amanda Nunes", "Miesha Tate", "Holly Holm", "Valentina Shevchenko"], respuesta: "Amanda Nunes" },
  { categoria: "Deporte", pregunta: "¿Quién fue campeón interino de peso ligero en 2019?", opciones: ["Dustin Poirier", "Justin Gaethje", "Tony Ferguson", "Charles Oliveira"], respuesta: "Dustin Poirier" },
  { categoria: "Deporte", pregunta: "¿Quién ganó el título de peso ligero en UFC 262 (2021)?", opciones: ["Charles Oliveira", "Michael Chandler", "Islam Makhachev", "Tony Ferguson"], respuesta: "Charles Oliveira" }
];
