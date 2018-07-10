import $ from 'jquery'
export function moveBack(c){
    let margin = parseInt($('.'+ c +' .grid').css('margin-left'));

    if(margin < 0){
    margin += 280;
    $('.'+ c +' .grid').animate({marginLeft: [margin, "swing"]}, 100);
    if(margin > 0){
        $('.'+ c +' .grid').css('margin-left', '0');
    }
    } else {
     $('.'+ c +' .grid').css('margin-left', '0');
    }
}

export function moveForward(c){
    const gridLength = $('.'+ c +' .grid .grid-item').length -3;
    const width = gridLength * (280 + 4);
    const divWidth = -width;
    let margin = parseInt($('.'+ c +' .grid').css('margin-left'));

    if(margin <= 0 && margin >= divWidth){
        margin -= 280;
        $('.'+ c +' .grid').animate({marginLeft: [margin, "swing"]}, 100);
    }
}

export function plan(c){
    if(c === 'basic'){
        $('.plan-item .items p').css('color', '#a6a6a6');
        $('.box').css('background', '#EF6B72');
        $('.box1').css('background', '#e50914');
        $('.plan-item .items p.basic').css('color', '#e50914');

    } else if(c === 'standard'){
        $('.plan-item .items p').css('color', '#a6a6a6');
        $('.box').css('background', '#EF6B72');
        $('.box2').css('background', '#e50914');
        $('.plan-item .items p.standard').css('color', '#e50914');
    } else if(c === 'premium'){
        $('.plan-item .items p').css('color', '#a6a6a6');
        $('.box').css('background', '#EF6B72');
        $('.box3').css('background', '#e50914');
        $('.plan-item .items p.premium').css('color', '#e50914');
    }
}