var index = 0;

function change() {
     var color = ["red","yellow","green", ];

     document.getElementsByTagName("body")[0].style.background = color[index++];

     if(index>color.length -1)
     index = 0; 
}