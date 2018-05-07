import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getData } from "./getData.service";

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
  providers: [getData]
})
export class ListviewComponent implements OnInit {
response=[];
old_image:string='';
new_image: string = '../assets/images/dummy.jpg';
imageElement:any;

  constructor(private eleref: ElementRef, private dataservice: getData) { }

  ngOnInit() {
    this.dataservice.fetchData().subscribe(data=>this.response=data);
    
  }

  editElement(event):void{
    var target = event.target || event.srcElement || event.currentTarget;
    // var idAttr = target.attributes.dataedit;
    // var value = idAttr.nodeValue;
    console.log(target.parentNode.parentNode.querySelector('.img-responsive').src);
    this.imageElement = target.parentNode.parentNode.querySelector('.img-responsive');
    this.old_image = target.parentNode.parentNode.querySelector('.img-responsive').src;
    this.eleref.nativeElement.querySelector('.mypopup').classList.toggle('fadeIn')
    console.log(this.imageElement);
  }
  readURL(input):void {
    if (input.target.files && input.target.files[0]) {
      //console.log(input.target.value);
      var reader = new FileReader();

      reader.onload = (event: any)=> {
        this.new_image =  event.target.result;
        console.log(this.new_image);
      }
      reader.readAsDataURL(input.target.files[0]);
    }
  }
  confirmCahgne(){
    this.imageElement.setAttribute('src',this.new_image);
    this.eleref.nativeElement.querySelector('.mypopup').classList.toggle('fadeIn')
    this.new_image = '../assets/images/dummy.jpg';
  }
  cancel(){
    this.eleref.nativeElement.querySelector('.mypopup').classList.toggle('fadeIn')
  }
}
