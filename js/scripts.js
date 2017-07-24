//business logic
function Pets () {
  this.animals = [];
}

console.log(this.animals);
function Animals (type, breed, name, age, color, status) {
  this.type = type;
  this.breed = breed;
  this.name = name;
  this.age = age;
  this.color = color;
  this.status = status;

}


Pets.prototype.createList = function(animal) {
  for (var i = 0; i < this.animals.length; i++) {
    console.log(this.animals[i]);
  $("#List1").append("<li><span class = 'petName'>" + this.animals[i].name + "</span></li>");
  }
}

Animals.prototype.createDetails = function() {
  $(".type1").text(this.type);
  $(".breed1").text(this.breed);
  $(".name1").text(this.name);
  $(".age1").text(this.age);
  $(".color1").text(this.color);
  $(".status1").text(this.status);
}

Animals.prototype.availability = function(animal) {
    if (this.status === "available") {
    $("#List2").append("<li><span class = 'petName'>" + this.name + "</span></li>");
    } else {
    $("#List3").append("<li><span class = 'petName'>" + this.name + "</span></li>");
    }
  }

function resetFields() {
  $("#type").val("");
  $("#breed").val("");
  $("#name").val("");
  $("#age").val("");
  $("#color").val("");
  $("#status").val("");
}
// user interface logic
$(document).ready(function() {
  $("form#pets").submit(function(event) {
    event.preventDefault();
    var inputType = $("#type").val();
    var inputBreed = $("#breed").val();
    var inputName = $("#name").val();
    var inputAge = $("#age").val();
    var inputColor= $("#color").val();
    var inputStatus = $("input:radio[name=status]:checked").val();


    var newPet = new Pets();
    var newAnimal = new Animals(inputType, inputBreed, inputName, inputAge, inputColor, inputStatus);
    newPet.animals.push(newAnimal);
    newPet.createList(newAnimal);
    newAnimal.availability(newAnimal);

    $(".petName").last().click(function() {
      newAnimal.createDetails();
      $("#pet-details").show();
    });

    $(".notYet").last().click(function() {
      $("#Avail").show();
      $("#notAvail").hide();
      $("#pet-details").hide();
    });

    $(".home").last().click(function() {
      $("#Avail").hide();
      $("#notAvail").show();
      $("#pet-details").hide();
    });

    //need to make names clickable in all lists; there seems to be a click conflict;
    // $(this).parent().remove();
    // $("#pet-details").remove();

    });

    resetFields();
  });
