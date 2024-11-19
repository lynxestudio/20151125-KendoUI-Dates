 function setModifiedDate(hours) {
    var dtStartDate = $("#startDate").data("kendoDatePicker");
    var dtStartTime = $("#startTime").data("kendoTimePicker");
    var modifiedDate = new Date(new Date().setHours(new Date().getHours() - hours));
    if (hours == "null") {
   modifiedDate = new Date();
    }else
    if (hours == -1) {
   modifiedDate = new Date(new Date().setDate(new Date().getDate() - 1));
    }
    dtStartDate.value(modifiedDate);
    dtStartTime.value(modifiedDate);
  }
  
  $(document).ready(function (){
   var today = new Date();
   $("#inputClock").html(today);
   //init Kendo UI DatePicker
   $("#startDate").kendoDatePicker({
    value: today,
    format: "yyyy-MM-dd",
    parseFormats: ["yyyy-MM-dd"]
   });
   //init kendo UI TimePicker
   $("#startTime").kendoTimePicker({ value: today });
   $('input[name="options"]').click(function(){
    var value = $('input[name="options"]:checked').val();
    setModifiedDate(value);
     });
    });