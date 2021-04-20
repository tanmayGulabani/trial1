class Form {

  constructor() {
    this.name= createInput("").attribute("placeholder", "name");
    this.age= createInput("").attribute("placeholder", "age");
    this.email= createInput("").attribute("placeholder", "email");
    this.button = createButton('Play');
    this.bg1=createButton("bg1")

    this.greeting = createElement('h2');
    this.title = createElement('h2');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.name.hide();
    this.age.hide();
    this.email.hide();
    this.title.hide();
  }

  display(){
    this.title.html("new Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.age.position(displayWidth/2 - 40 , displayHeight/2 - 120);
    this.email.position(displayWidth/2 - 40 , displayHeight/2 - 160);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.bg1.position(displayWidth-50,0)
    
    this.button.mousePressed(()=>{
      var playerIndex = "players/player" + 1;
    database.ref(playerIndex).set({
      name:this.name.value(),
      age:this.age.value(),
      email:this.email.value(),
      score:0
    });
      this.name.hide();
      this.age.hide();
      this.email.hide();
      this.button.hide();
      
      this.greeting.html("Hello " + this.name.value())
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
   this.bg1.mousePressed(()=>{
     bg="sprites/bg2.jpg";
    loadImage})
    

  }
}
