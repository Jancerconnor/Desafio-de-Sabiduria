const preguntasIngles = [
  // Saludos y frases básicas
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Hola' en inglés?", opciones: ["Hello", "Hi", "Hey", "Hola"], respuesta: "Hello" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Adiós' en inglés?", opciones: ["Goodbye", "Bye", "See you", "Adiós"], respuesta: "Goodbye" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Por favor' en inglés?", opciones: ["Please", "Thanks", "Excuse me", "Por favor"], respuesta: "Please" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Gracias' en inglés?", opciones: ["Thank you", "Thanks", "Cheers", "Gracias"], respuesta: "Thank you" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Lo siento' en inglés?", opciones: ["Sorry", "Excuse me", "Forgive me", "Lo siento"], respuesta: "Sorry" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Sí' en inglés?", opciones: ["Yes", "No", "Maybe", "Sí"], respuesta: "Yes" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'No' en inglés?", opciones: ["No", "Yes", "Not", "Nunca"], respuesta: "No" },

  // Pronombres personales
  { categoria: "Inglés", pregunta: "¿Cuál es el pronombre para 'Yo' en inglés?", opciones: ["I", "Me", "My", "Mine"], respuesta: "I" },
  { categoria: "Inglés", pregunta: "¿Cuál es el pronombre para 'Tú' en inglés?", opciones: ["You", "Your", "Yours", "He"], respuesta: "You" },
  { categoria: "Inglés", pregunta: "¿Cuál es el pronombre para 'Él' en inglés?", opciones: ["He", "Him", "His", "She"], respuesta: "He" },
  { categoria: "Inglés", pregunta: "¿Cuál es el pronombre para 'Ella' en inglés?", opciones: ["She", "Her", "Hers", "He"], respuesta: "She" },
  { categoria: "Inglés", pregunta: "¿Cuál es el pronombre para 'Nosotros' en inglés?", opciones: ["We", "Us", "Our", "They"], respuesta: "We" },
  { categoria: "Inglés", pregunta: "¿Cuál es el pronombre para 'Ellos' en inglés?", opciones: ["They", "Them", "Their", "He"], respuesta: "They" },

  // Verbos básicos
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Comer' en inglés?", opciones: ["Eat", "Drink", "See", "Read"], respuesta: "Eat" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Beber' en inglés?", opciones: ["Drink", "Eat", "Sleep", "Walk"], respuesta: "Drink" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Dormir' en inglés?", opciones: ["Sleep", "Wake", "Eat", "Run"], respuesta: "Sleep" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Leer' en inglés?", opciones: ["Read", "Write", "Speak", "Listen"], respuesta: "Read" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Escribir' en inglés?", opciones: ["Write", "Read", "Speak", "Listen"], respuesta: "Write" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Hablar' en inglés?", opciones: ["Speak", "Talk", "Say", "Tell"], respuesta: "Speak" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Escuchar' en inglés?", opciones: ["Listen", "Hear", "Speak", "Talk"], respuesta: "Listen" },

  // Objetos y lugares
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Casa' en inglés?", opciones: ["House", "Home", "Building", "Casa"], respuesta: "House" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Escuela' en inglés?", opciones: ["School", "College", "University", "Escuela"], respuesta: "School" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Perro' en inglés?", opciones: ["Dog", "Cat", "Bird", "Fish"], respuesta: "Dog" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Gato' en inglés?", opciones: ["Cat", "Dog", "Mouse", "Rabbit"], respuesta: "Cat" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Agua' en inglés?", opciones: ["Water", "Juice", "Milk", "Coffee"], respuesta: "Water" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Comida' en inglés?", opciones: ["Food", "Drink", "Snack", "Meal"], respuesta: "Food" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Coche' en inglés?", opciones: ["Car", "Bus", "Bike", "Truck"], respuesta: "Car" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Libro' en inglés?", opciones: ["Book", "Notebook", "Paper", "Magazine"], respuesta: "Book" },

  // Colores
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Rojo' en inglés?", opciones: ["Red", "Blue", "Green", "Yellow"], respuesta: "Red" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Azul' en inglés?", opciones: ["Blue", "Red", "Green", "Black"], respuesta: "Blue" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Verde' en inglés?", opciones: ["Green", "Blue", "Red", "Yellow"], respuesta: "Green" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Negro' en inglés?", opciones: ["Black", "White", "Gray", "Blue"], respuesta: "Black" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Blanco' en inglés?", opciones: ["White", "Black", "Gray", "Yellow"], respuesta: "White" },

  // Números
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Uno' en inglés?", opciones: ["One", "Two", "Three", "Four"], respuesta: "One" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Dos' en inglés?", opciones: ["Two", "One", "Three", "Four"], respuesta: "Two" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Tres' en inglés?", opciones: ["Three", "Two", "One", "Four"], respuesta: "Three" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Cuatro' en inglés?", opciones: ["Four", "Three", "Two", "One"], respuesta: "Four" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Cinco' en inglés?", opciones: ["Five", "Four", "Three", "Six"], respuesta: "Five" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Seis' en inglés?", opciones: ["Six", "Five", "Seven", "Eight"], respuesta: "Six" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Siete' en inglés?", opciones: ["Seven", "Six", "Eight", "Nine"], respuesta: "Seven" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Ocho' en inglés?", opciones: ["Eight", "Seven", "Nine", "Ten"], respuesta: "Eight" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Nueve' en inglés?", opciones: ["Nine", "Eight", "Ten", "Eleven"], respuesta: "Nine" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Diez' en inglés?", opciones: ["Ten", "Nine", "Eleven", "Twelve"], respuesta: "Ten" },

  // Días de la semana
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Lunes' en inglés?", opciones: ["Monday", "Tuesday", "Wednesday", "Thursday"], respuesta: "Monday" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Martes' en inglés?", opciones: ["Tuesday", "Monday", "Wednesday", "Thursday"], respuesta: "Tuesday" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Miércoles' en inglés?", opciones: ["Wednesday", "Tuesday", "Thursday", "Friday"], respuesta: "Wednesday" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Jueves' en inglés?", opciones: ["Thursday", "Wednesday", "Friday", "Saturday"], respuesta: "Thursday" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Viernes' en inglés?", opciones: ["Friday", "Thursday", "Saturday", "Sunday"], respuesta: "Friday" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Sábado' en inglés?", opciones: ["Saturday", "Friday", "Sunday", "Monday"], respuesta: "Saturday" },
  { categoria: "Inglés", pregunta: "¿Cómo se dice 'Domingo' en inglés?", opciones: ["Sunday", "Saturday", "Friday", "Monday"], respuesta: "Sunday" },

  // Verbos en oraciones
  { categoria: "Inglés", pregunta: "Completa: I ___ a book.", opciones: ["read", "writes", "eats", "sleep"], respuesta: "read" },
  { categoria: "Inglés", pregunta: "Completa: She ___ water.", opciones: ["drinks", "drink", "drank", "drunk"], respuesta: "drinks" },
  { categoria: "Inglés", pregunta: "Completa: They ___ soccer.", opciones: ["play", "plays", "played", "playing"], respuesta: "play" },
  { categoria: "Inglés", pregunta: "Completa: We ___ English.", opciones: ["study", "studies", "studied", "studying"], respuesta: "study" },
  { categoria: "Inglés", pregunta: "Completa: He ___ every day.", opciones: ["runs", "run", "ran", "running"], respuesta: "runs" },

  // Frases simples
  { categoria: "Inglés", pregunta: "How are you?", opciones: ["I'm fine", "Hello", "Goodbye", "Thanks"], respuesta: "I'm fine" },
  { categoria: "Inglés", pregunta: "What's your name?", opciones: ["My name is...", "I am fine", "Hello", "Yes"], respuesta: "My name is..." },
  { categoria: "Inglés", pregunta: "Where is the school?", opciones: ["It is here", "There", "Yes", "No"], respuesta: "It is here" },
  { categoria: "Inglés", pregunta: "I like ___", opciones: ["apples", "books", "dogs", "all"], respuesta: "all" },
  { categoria: "Inglés", pregunta: "Do you speak English?", opciones: ["Yes, I do", "No, I don't", "Maybe", "Yes"], respuesta: "Yes, I do" },

  // Acciones cotidianas
  { categoria: "Inglés", pregunta: "I ___ breakfast in the morning.", opciones: ["eat", "drink", "sleep", "run"], respuesta: "eat" },
  { categoria: "Inglés", pregunta: "She ___ to school.", opciones: ["goes", "go", "going", "went"], respuesta: "goes" },
  { categoria: "Inglés", pregunta: "They ___ in the park.", opciones: ["play", "plays", "played", "playing"], respuesta: "play" },
  { categoria: "Inglés", pregunta: "We ___ TV at night.", opciones: ["watch", "watches", "watched", "watching"], respuesta: "watch" },
  { categoria: "Inglés", pregunta: "He ___ his homework.", opciones: ["does", "do", "did", "doing"], respuesta: "does" },
  
  // Aquí continuarías agregando hasta 100 preguntas similares combinando:
  // números, colores, pronombres, verbos, frases simples y objetos
];
