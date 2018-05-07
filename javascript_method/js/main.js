
var xhttp = new XMLHttpRequest();
var resposne;
var img_src ,imageElement;
function getData(){
xhttp.open('GET','http://demo4126999.mockable.io/images',true)
xhttp.send();	
	xhttp.onreadystatechange=function(){
		if(this.readyState==4 && this.status == 200){

			response= JSON.parse(this.response);
			console.log(response);
			generateElements();
		}
	}
};

//creating html component
function createElements(obj)
{
	var cardHtml='<div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">';
	cardHtml+='<div class="card">';	
	cardHtml+='<div class="imagecontainer">';
	cardHtml+='<img src="%d%" class="img-responsive">';
	cardHtml+='</div>';
	cardHtml+='<div class="overlay">';
	cardHtml+='<img src="images/edit.png" class="edit-icon" onclick=findparent(this)>';
	cardHtml+='</div>';
	cardHtml+='</div>';
	cardHtml+='</div>';
	var newhtml=cardHtml.replace('%d%',obj.image_url);
	document.querySelector('.card-container').insertAdjacentHTML("beforeend",newhtml);
}

//generating html component using response
function generateElements(){
		
	for (var i =0 ;i<response.length;  i++) {
		createElements(response[i]);		
	}
	var clearfix='<div class="clearfix"></div>';
	document.querySelector('.card-container').insertAdjacentHTML("beforeend",clearfix);
}
// preview selected iamge

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById('alternateImage').setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

//fetching image componet which came from API
function findparent(element){
	imageElement=element.parentNode.parentNode.querySelector('.img-responsive');
	img_src=imageElement.src;
	openmodal(img_src,imageElement);
}


//display popup for selecting new inage

function openmodal(img_src,imageElement){

	document.getElementById('selectAlternativeImage').querySelector('.old_img').setAttribute('src',img_src);
	$('#selectAlternativeImage').modal();
}

//submiting selected image
function submitChange(){
	imageElement.setAttribute('src', document.getElementById('alternateImage').getAttribute('src',));
	document.getElementById('selectAlternativeImage').querySelector('#alternateImage').setAttribute('src','images/dummy.jpg');
	$('#selectAlternativeImage').modal('toggle');
}
