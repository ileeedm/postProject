
$(document).ready(function() {
var modal = document.getElementById("myModal");
var inputModal = document.getElementById("modalInput");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var closeBtn = document.getElementById("closeSecondBtn");
// Get the <span> element that closes the modal
var span = document.getElementById("btnClose");
var saved = document.getElementById("submits");
// When the user clicks on the button, open the modal
var backgColor = document.getElementById("submits");
i=0
var b = true


btn.onclick = function() { 
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("#modalInput").val("");
  
}
closeBtn.onclick = function() {
  modal.style.display = "none";
  $("#modalInput").val("");
}

function addDynamicButton(targetId) {
  var dynamicButtonContainer = document.getElementById("dynamicContainer" + targetId)
  const dynamicButton = document.createElement('button');
  dynamicButton.textContent = 'Save';
  dynamicButton.setAttribute('id', 'saveBtn' + targetId);
  dynamicButton.classList.add("btn" , "btn-primary");
  dynamicButtonContainer.appendChild(dynamicButton);
 
}

var a = true
 
  $("#submits").click(function(event) {
  i++
  
  
  var inputValue = $("#modalInput").val(); // Get input value
   
   if(inputValue ===""){
    console.log("")
   }
     
     else {
      var modalTwoContent = `

  <div class="modal" tabindex="-1" id="modalTwo${i}" style="display: contents;">>

    <div class="modal-content" id ="modalId">
      <div class="modal-header">
        
      </div>
      <div class="modal-body">
        <p id = "paragraph${i}" style= "word-wrap: break-word;"> 
        
        </p>
       </div>
      <div class="modal-footer" id ="dynamicContainer${i}">
      <button type="button" class="btn btn-primary" id="editBtn${i}" >Edit</button>
       <button type="button" class="btn btn-secondary rounded-pill px-3" id="deleteBtn${i}">Delete</button>
      </div>
    </div>
  
</div>
`; 


   
    
   
    $(".main-content").append(modalTwoContent);
    $("#paragraph" + i).text(inputValue)                              // Append new element to modal container
    $("#modalInput").val("");
    modal.style.display = "none";
    
  }
  
  var deleteBtn = document.getElementById("deleteBtn"+ i);
  var editBtn = document.getElementById("editBtn"+ i);

 
  
  $(deleteBtn).on("click", function() {
    var targetId = $(this).attr("id").replace("deleteBtn", "");
    console.log(targetId);
    $("#modalTwo" + targetId).remove(); // Remove the corresponding modal element
   i--; // Decrement the counter since an element is removed
   
    
  });
  




 $(editBtn).on("click", function() {
  var targetId = $(this).attr("id").replace("editBtn", "");
  console.log(targetId)
  var element = document.getElementById("saveBtn" + targetId);
  
  if(!element ){
    
 
  addDynamicButton(targetId)
  
 
  console.log("Edit button clicked for modalTwo" + targetId);
  
  // Replace <p> with <textarea>
  $("#modalTwo" + targetId + " p").each(function() {
      var textContent = $(this).text().trim(); // Get current text content
      var textareaHtml = `<textarea class="form-control" style="background-color: #262e37; border: none; color: #0c6efd; outline: none;" rows="12" id="text${targetId}">`+ textContent +`</textarea>`;
     $(this).replaceWith(textareaHtml);
  });  
}
else{
  console.log('Already Clicked')
}
var saveBtn = document.getElementById("saveBtn" + targetId);

$(saveBtn).on("click", function() {

var targetId = $(this).attr("id").replace("saveBtn", "");
console.log(targetId)

var textValue = $('#text' + targetId).val();

var pElement = $('<p>', {
  'text': textValue
});

$('#text' + targetId).replaceWith(pElement);

$(saveBtn).remove();


// Remove the save button after saving


 
})


});



}




);
  

  });
   


