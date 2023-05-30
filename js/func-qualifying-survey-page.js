const stepper = new mdb.Stepper(document.getElementById('stepper-form-example'));
function float2int (value) {
  return value | 0;
}
function fillthebar(){
  var numberofsteps = $('.qualifying-form .stepper-form').children().length;  
  var stepstoincrease = 100 / numberofsteps;
  if($('.qualifying-form .stepper-form .stepper-step.stepper-completed').hasClass("stepper-active")){
    $('.qualifying-form .stepper-form').find("li.stepper-completed.stepper-active").removeClass("was-validated stepper-completed");
  }
  var completedsteps = $('.qualifying-form .stepper-form').find(".stepper-completed").length;
  if(completedsteps == 0){
    var twoPlacedFloat = 0;
    $('.custom-progress-bar .progress-bar').css('width', 25 + '%');
  }else{
    var twoPlacedFloat = float2int(stepstoincrease) * parseInt(completedsteps);
    $('.custom-progress-bar .progress-bar').css('width', twoPlacedFloat + '%');
  }
  $('.custom-progress-bar .progress-bar').text(twoPlacedFloat + '%');
}

document.getElementById('form-example-next-step').addEventListener('click', () => {
  stepper.nextStep();  
  fillthebar();
  if($('.qualifying-form .stepper-form .stepper-step').hasClass("stepper-completed")){
    $("#form-example-prev-step").show();
  }
  if ($('.qualifying-form .stepper-form').children().last().hasClass("stepper-active")) {
    $("#form-example-next-step").hide();
  } else{
    $("#form-example-next-step").show();
  }
});
document.getElementById('form-example-prev-step').addEventListener('click', () => {
  stepper.previousStep(); 
  fillthebar();
  if(!$('.qualifying-form .stepper-form .stepper-step').hasClass("stepper-completed")){
    $("#form-example-prev-step").hide();
  }
  $("#form-example-next-step").show();
});

