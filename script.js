 function howmanypokemonsalert()
   {
     var username =document.querySelector("#username").value;
     var usernumberofpokemons=
document.querySelector("#usernumberofpokemons").value;
     if(usernumberofpokemons > 5)
    {
      alert("Hi, " + username + ", Kudos on collecting " + usernumberofpokemons + " Pokemons");
    }
     else
     {
       alert("Boo! Better luck next time!");
     }
   }

/* Play Sound With Button */
function media() 
{
    var audio = new Audio("assets/pokemonsound.m4r");
  audio.play();
}







function ShowMewtwo()
  
        {
        var imgshow=document.querySelector("#mewtwo");
        var btntext =document.querySelector("#mewtwobtn");
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible";
        btntext.innerHTML = `Hide Mewtwo`;
       }
      else
      {  
       imgshow.style.visibility = "hidden";
       btntext.innerHTML = `Show Mewtwo`;
       }   
      } 
      function ShowKyogre()
        {
        var imgshow=document.querySelector("#kyogre");
        var btntext =document.querySelector("#kyogrebtn");
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible";
        btntext.innerHTML = `Hide Kyogre`;
       }
      else
      {  
       imgshow.style.visibility = "hidden";
       btntext.innerHTML = `Show Kyogre`;
       }   
      } 
      function ShowZygarde()
        {
        var imgshow=document.querySelector("#zygarde");
        var btntext =document.querySelector("#zygardebtn");
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible";
        btntext.innerHTML = `Hide Zygarde`;
       }
      else
      {  
       imgshow.style.visibility = "hidden";
       btntext.innerHTML = `Show Zygarde`;
       }   
      } 


function showc()
  {
    var imgshow = document.querySelectorAll(".cpokemon");
    var btntext = document.querySelector("#cpokemonbtn");
    for(var i=0; i<imgshow.length; i++)
      {
        if (imgshow[i].style.visibility == "hidden") {
          imgshow[i].style.visibility = "visible";
          btntext.innerHTML = "Hide Pokemons";
        } else {
          imgshow[i].style.visibility = "hidden";
          btntext.innerHTML = `Show Pokemons starting with "C"`;
        }
      }
  }

// flashcard page variables
var defshow = document.querySelector("#flashcard-definition");
var termshow = document.querySelector("#flashcard-term");

// flashcard content
let flashcards = {
   Regidrago: "A Dragon type Pok??mon introduced in Generation 8. It is known as the Dragon Orb Pok??mon",
    Zarude: "A Dark/Grass type Pok??mon introduced in Generation 8. It is known as the Rogue Monkey Pok??mon",
  Urshifu: "A Fighting/Dark type Pok??mon introduced in Generation 8. It is known as the Wushu Pok??mon",
  Eternatus: "A Poison/Dragon type Pok??mon introduced in Generation 8. It is known as the Gigantic Pok??mon",
  Zamazenta: "is a Fighting type Pok??mon introduced in Generation 8. It is known as the Warrior Pok??mon",
  Zacian: "is a Fairy type Pok??mon introduced in Generation 8. It is known as the Warrior Pok??mon",
  Zeraora: "A Electric type Pok??mon introduced in Generation 7. It is known as the Thunderclap Pok??mon.",
  Marshadow: "A Fighting/Ghost type Pok??mon introduced in Generation 7. It is known as the Gloomdweller Pok??mon",
  Necrozma: "A Psychic type Pok??mon introduced in Generation 7. It is known as the Prism Pok??mon",
  "Tapu Koko": "A Electric/Fairy type Pok??mon introduced in Generation 7. It is known as the Land Spirit Pok??mon",
  Silvally: "A Normal type Pok??mon introduced in Generation 7. It is known as the Synthetic Pok??mon.",
  Yveltal: "A Dark/Flying type Pok??mon introduced in Generation 6. It is known as the Destruction Pok??mon.",
  Zekrom: "A Dragon/Electric type Pok??mon introduced in Generation 5. It is known as the Deep Black Pok??mon",
  Moltres: "A Fire/Flying type Pok??mon introduced in Generation 1. It is known as the Flame Pok??mon",
  Melmetal: "A Steel type Pok??mon introduced in Generation 7. It is known as the Hex Nut Pok??mon. Melmetal has an exclusive move, Double Iron Bash",
  Overqwil: "A Dark/Poison type Pok??mon introduced in Generation 8. It is known as the Pin Cluster Pok??mon",
  Mewtwo: "A Psychic type Pok??mon introduced in Generation 1. It is known as the Genetic Pok??mon",
  Palkia: "A Water/Dragon type Pok??mon introduced in Generation 4. It is known as the Spatial Pok??mon",
  Buzzwole: "A Bug/Fighting type Pok??mon introduced in Generation 7. It is known as the Swollen Pok??mon",
  Obstagoon: "A Dark/Normal type Pok??mon introduced in Generation 8. It is known as the Blocking Pok??mon"
}

data = Object.entries(flashcards);

function getRandom()
{
 let randomterm = data[Math.floor(Math.random() * data.length)];
 console.log(randomterm)
 termshow.innerHTML = `<h2>${randomterm[0]}</h2>`;
 defshow.innerHTML = `<p>${randomterm[1]}</p>`;
}

function showDefinition()
      {
        var imgshow = document.querySelector("#flashcards-btn");
        var btntext = document.querySelector("#flash-def-btn");
        
      if (imgshow.style.visibility == "hidden")
      {
        imgshow.style.visibility = "visible"
        btntext.innerHTML = `Hide Definition`
      }
      else
      {      
        imgshow.style.visibility = "hidden"
        btntext.innerHTML = `Show Definition`
      }
    }

function showdef()
  {
    var flashdefbtn = document.querySelector("#flash-def-btn");
    if(defshow.style.visibility == "hidden") {
      defshow.style.visibility = "visible";
      flashdefbtn.innerHTML = "Hide Definition";
  }
    else {
      defshow.style.visibility = "hidden";
      flashdefbtn.innerHTML = "Show Definition";
    }
  }
    

  
