function inspectText(){
    const bodyText = document.body.innerText;
    var result = bodyText.match( /[^\.!\?\n\r\t]+[\.!\?\n\r\t]+/g );
    //call backend to scan the text
    console.log(result);
 }
 
inspectText();