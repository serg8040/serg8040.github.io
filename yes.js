function yes(x)
{
    var x;
    //var c;
   // fl_yes = 1;
    rspeak(x);
    console.log("yes");
    //text.focus;
    
    for(;;)
    {
        //fl_yes = 1;
        //text.focus();
        //fl_yes = 0;
        console.log("yes");
        //var c = str_in[0]; 
        c = 'y';
        if( c == '' )  
        {
            yes(22);
        }
        if( c == 'y' || c == 'Y' || c == 'д' || c == 'Д' )
        {
            x = 1;
            break;
        }
        if( c == 'n' || c == 'N' || c == 'н' || c == 'Н' )
        {
            x = 0;
            break;
        }
        rspeak(40);
    }
    
    return x;
}