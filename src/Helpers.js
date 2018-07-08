import $ from 'jquery'
export function moveBack(c){

 var margin = parseInt($('.'+ c +' .grid').css('margin-left'));

 if(margin < 0){
    margin += 217.5;
    $('.'+ c +' .grid').css('margin-left', margin);
    if(margin > 0){
        $('.'+ c +' .grid').css('margin-left', '0')
    }
 } else {
     $('.'+ c +' .grid').css('margin-left', '0')
 }
}

export function moveForward(c){
    var gridLength = $('.'+ c +' .grid .grid-item').length -3;

    var width = gridLength * (213.5 + 4);
    var margin = parseInt($('.'+ c +' .grid').css('margin-left'));

    var divWidth = -width;


    if(margin <= 0 && margin >= divWidth){
        margin -= 217.5;
        $('.'+ c +' .grid').css('margin-left', margin)
    }

}