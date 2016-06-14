/* вывод сообщения по заданному адресу */

//include "..\common\advexter.h"
//#define empty     '>'

function inimes()
{   
    jQuery.ajax({
        async: false,
        url:  "text.adv",
        dataType: 'text',
        success: function (val) {            
            textA = val;            
        }
    });
    textAdv = textA.split("");
    for(var i = 0; i < textAdv.length; i++ )
    {
        if(textAdv[i].charCodeAt(0) == 10)
        {
            textAdv[i] = " ";
        }
        if (textAdv[i].charCodeAt(0) == 13) {
            //textAdv[i] = " ";
        }
    }
}

var textAdv;
var textA;
function mes(iadr)
{
    var buf = "";
    adr = iadr * 2;
    if (textAdv[adr].charCodeAt(0) == 0)
    {
        adr++;
    }
    while (textAdv[adr].charCodeAt(0) != 0)
    {
        buf += textAdv[adr];
        adr++;
    }
    
    text.value += buf + "\n";
}
