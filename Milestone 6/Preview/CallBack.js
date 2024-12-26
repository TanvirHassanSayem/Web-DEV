function greeting(greeting_handler,name){
   greeting_handler(name);

}

function greeting_handler(name){
    console.log("Hellow "+ name);
}

greeting(greeting_handler ,"Sayem");


function good_morning(name){
    console.log(`Good morning ${name} what's up? `)
}



function x(name){
    console.log(`Hellow X_MAN ${name}`);
}



greeting(good_morning ,"Sayem");
greeting(good_morning ,"Sayem");
greeting(x ,"Sayem");