let numberImage = 1;
const countImage = 4;
const pathImage = "/images/";
const countDiv = 200;
const speed = 10;

function generateImage()
{
    let heightDiv = 600/countDiv;
    let image = pathImage + "photo_" + numberImage + ".jpg";
    let width;
    for (let i=0; i<countDiv; i++)
    {
        let item = $("<div></div>");
        item.addClass("elementImage");
        item.css("height",heightDiv+"px");
        item.css("background-image", 'url('+image+')');
        item.css("background-position-y", - i * heightDiv+"px");
        $ ( "#mainImage" ).append(item);
    }
}


function changeImage()
{
    let image = pathImage + "photo_" + numberImage + ".jpg";
    let i = 1;
    $( "#mainImage div" ).each(function() {
        $( this ).fadeOut( speed*i, function() {
            $(this).css("background-image", 'url(' + image + ')');
            $(this).fadeIn( speed*i);
        });
        i++;
    });

}

/**
 * Смена изображения влево
 */

function leftChangeImage()
{
    if (numberImage > 1) {
        numberImage--;
    }
    else
        numberImage = countImage;
    changeImage();

}

/**
 * Смена изображения вправо
 */

function rightChangeImage()
{
    if (numberImage < countImage) {
        numberImage++;
    }
    else
        numberImage = 1;
    changeImage()

}

$( document ).ready( function() {
    generateImage()
});

