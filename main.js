function preload(){
    
}
function draw(){

}
function setup(){
    canvas=createCanvas(280,240);
    background("white");
     
   }
quick_draw_data_set=['cactus','plane','cat','dog','plane','cow','car','football','ice-cream','balloon','fish','tree'];
random_no=Math.floor((Math.random()*quick_draw_data_set.length));
Element_of_array=quick_draw_data_set[random_no];
console.log(Element_of_array);
if(Element_of_array ==undefined){
    Element_of_array=quick_draw_data_set[random_no];
}
else{
    document.getElementById("p3").innerHTML="Sketch To Be Drawn->"+Element_of_array;
};
timer_counter:0;
timer_check:;
drawn_sketch:;
answer_holder:;
score:;
