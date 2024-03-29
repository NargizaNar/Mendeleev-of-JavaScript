function display(val){

document.getElementById('result').value += val

return val

}

function evaluate(inputStr) {
    switch (true) {
        case inputStr === "char+string" || inputStr === "string+char":
            return "./1Chars/1char2String.md";
        case inputStr === "char+boolean" || inputStr === "boolean+char":
            return "./1Chars/1char3Boolean.md";
        case inputStr === "char+number" || inputStr === "number+char":
            return "./1Chars/1char4Number.md";
        case inputStr === "char+compare" || inputStr === "compare+char":
            return "./1Chars/1charCompare.md";
        case inputStr === "char+extract" || inputStr === "extract+char":
            return "./1Chars/1charExtract.md";
        case inputStr === "char+info" || "info+char" :
            return "./1Chars/1charInfo.md"
        case inputStr === "char+replace" || inputStr === "replace+char":
            return "./1Chars/1charReplace.md";
        case inputStr === "char+special" || inputStr === "special+char" :
            return "./1Chars/1charSpecial.md"
        case inputStr === "string+string":
            return "./2Stings/2string2String.md"
        // case inputStr === "string+boolean"|| inputStr === "boolean+string":
        //     return "./2Stings/2string3Boolean.md", see 3boolean2String.md
        case inputStr === "string+number"|| inputStr === "number+string":
            return "./2Stings/2string4Number.md"
        case inputStr === "string+loop"|| inputStr === "loop+string":
            return "./2Stings/2string5Loop.md"
        case inputStr === "string+extract"|| inputStr === "extract+string":
            return "./2Stings/2stringExtract.md"
        case inputStr === "string+info"|| inputStr === "info+string":
            return "./2Stings/2stringInfo.md"
        case inputStr === "string+replace"|| inputStr === "replace+string":
            return "./2Stings/2stringReplace.md"
        case inputStr === "boolean+string"|| inputStr === "string+boolean":
            return "./3Boolean/3boolean2String.md"
        // case inputStr === "boolean+number"|| inputStr === "number+boolean":
        //     return "./3Boolean/3boolean4Number.md" see 4number3Boolean
        case inputStr === "boolean+compare"|| inputStr === "compare+boolean":
            return "./3Boolean/3booleanCompare.md"
        case inputStr === "boolean+info"|| inputStr === "info+boolean":
            return "./3Boolean/3boolean2String.md"
        case inputStr === "boolean+special"|| inputStr === "special+boolean":
            return "./3Boolean/3booleanSpecial.md"
        case inputStr === "number+boolean"|| inputStr === "boolean+number":
            return "./4Numbers/4num3Boolean.md"
        case inputStr === "number+number":
            return "./4Numbers/4num4Num.md"
        // case inputStr === "number+loop"|| inputStr === "loop+number":
        //     return "./4Numbers/4num5Loop.md", see 5loop4Number.md
        case inputStr === "number+array"|| inputStr === "array+number":
            return "./4Numbers/4num6Array.md"
        case inputStr === "number+compare"|| inputStr === "compare+number":
            return "./4Numbers/4numCompare.md"
        case inputStr === "number+info"|| inputStr === "info+number":
            return "./4Numbers/4numInfo.md"
        case inputStr === "number+replace"|| inputStr === "replace+number":
            return "./4Numbers/4numReplace.md"
        // case inputStr === "loop+string"|| inputStr === "string+loop":
        //     return "./5Loops/5loop2String.md", see 2string5Loop.md
        case inputStr === "loop+boolean"|| inputStr === "boolean+loop":
            return "./5Loops/5loop3Boolean.md"
        case "loop+number" || inputStr === "number+loop":
            return "./5Loops/5loop4Number.md";
        case "loop+array" || inputStr === "array+loop":
            return "./5Loops/5loop6Array.md";
        case "loop+info" || inputStr === "info+loop":
            return "./5Loops/5loopInfo.md";
        // case inputStr === "array+number"|| inputStr === "number+array":
        //     return "./6Arrays/6array4Number.md", see 4number6Array.md
        // case inputStr === "array+loop"|| inputStr === "loop+array":
        //     return "./6Arrays/6array5Loop.md" see 5loop6Array.md   
        case inputStr === "array+add"|| inputStr === "add+array":
            return "./6Arrays/6arrayAdd.md"
        case inputStr === "array+extract"|| inputStr === "extract+array":
            return "./6Arrays/6arrayExtract.md"
        case inputStr === "array+info"|| inputStr === "info+array":
            return "./6Arrays/6arrayInfo.md"
        case inputStr === "array+remove"|| inputStr === "remove+array":
            return "./6Arrays/6arrayRemove.md"
        case inputStr === "array+replace"|| inputStr === "replace+array":
            return "./6Arrays/6arrayReplace.md"
        case inputStr === "array+special"|| inputStr === "special+array":
            return "./6Arrays/6arraySpecial.md"
        case inputStr === "class+string"|| inputStr === "string+class":
            return "./7Classes/7class2String.md"
        case inputStr === "class+boolean"|| inputStr === "boolean+class":
            return "./7Classes/7class3Boolean.md"
        case inputStr === "class+number"|| inputStr === "number+class":
            return "./7Classes/7class4Number.md"
        case inputStr === "class+add"|| inputStr === "add+class":
            return "./7Classes/7classAdd.md"
        case inputStr === "class+info"|| inputStr === "info+class":
            return "./7Classes/7classInfo.md"
        case inputStr === "class+replace"|| inputStr === "replace+class":
            return "./7Classes/7classReplace.md"
        case inputStr === "class+special"|| inputStr === "special+class":
            return "./7Classes/7classSpecial.md"
        case inputStr === "object+char"|| inputStr === "char+object":
            return "./8Objects/8object1Char.md"
        case inputStr === "object+string" || inputStr === "string+object":
            return "./8Objects/8object2String.md"
        case inputStr === "object+booleam" || inputStr === "boolean+object":
            return "./8Objects/8object3Boolean.md"
        case inputStr === "object+number" || inputStr === "number+object":
            return "./8Objects/8object4Number.md"
        case inputStr === "object+loop" || inputStr === "loop+object":
            return "./8Objects/8object5Loop.md"
        case inputStr === "object+array" || inputStr === "array+object":
            return "./8Objects/8object6Array.md"
        case inputStr === "object+string":
            return "./8Objects/8object8Object.md"
        case inputStr === "object+add" || inputStr === "add+object":
            return "./8Objects/8objectAdd.md"
        case inputStr === "object+extract" || inputStr === "extract+object":
            return "./8Objects/8objectExtract.md"
        case inputStr === "object+info" || inputStr === "info+object":
            return "./8Objects/8objectInfo.md"
        case inputStr === "object+remove" || inputStr === "remove+object":
            return "./8Objects/8objectRemove.md"
        case inputStr === "object+replace" || inputStr === "replace+object":
            return "./8Objects/8objectReplace.md"
        case inputStr === "isNaN+number" || inputStr === "number+NaN":
            return "./9NaNtypeof/9isNaN4Number.md"
        case inputStr === "isNaN+info" || inputStr === "info+NaN":
            return "./9NaNtypeof/9isNaNInfo.md"
        case inputStr === "isNaN+string" || inputStr === "string+NaN":
            return "./9NaNtypeof/9isNaN2String.md"
        case inputStr === "typeof+string" || inputStr === "string+typeof":
            return "./9NaNtypeof/9typeof2String.md"
        case inputStr === "typeof+number" || inputStr === "number+typeof":
            return "./9NaNtypeof/9typeof4Number.md"
        case inputStr === "typeof+array" || inputStr === "array+typeof":
            return "./9NaNtypeof/9typeof6Array.md"
        case inputStr === "typeof+info" || inputStr === "info+typeof":
            return "./9NaNtypeof/9typeofInfo.md"
        case inputStr === "function+string" || inputStr === "string+function":
            return "./10Functions/10function2String.md"
        case inputStr === "function+char" || inputStr === "char+function":
            return "./10Functions/10function1Char.md"
        case inputStr === "function+boolean" || inputStr === "boolean+function":
            return "./10Functions/10function3Boolean.md"
        case inputStr === "function+number" || inputStr === "number+function":
            return "./10Functions/10function4Number.md"
        case inputStr === "function+array" || inputStr === "array+function":
            return "./10Functions/10function6Array.md"
        case inputStr === "function+object" || inputStr === "object+function":
            return "./10Functions/10function8Object.md"
        case inputStr === "function+loop" || inputStr === "loop+function":
            return "./10Functions/10function5Loop.md"
        case inputStr === "function+info" || inputStr === "info+function":
            return "./10Functions/10functionInfo.md"
        case inputStr === "function+special" || inputStr === "special+function":
            return "./10Functions/10functionSpecial.md"
        case inputStr === "method+object" || inputStr === "object+method":
            return "./11Methods/11method8Object.md"
        case inputStr === "method+info" || inputStr === "info+method":
            return "./11Methods/11methodInfo.md"
        default:
            return "No info with this combination";
    }    
}

function solve(){

    let result = document.getElementById('result').value
    console.log("result", result)
    
    let imgPath = evaluate(result);
        // information = evaluate("loop+string")
        // information = "../5loop2String.md"
    console.log("imgPath", imgPath)

    // Show as image
    // document.getElementById('screen').innerHTML = "<img src=\""+imgPath+"\" width=\"400px\" height=\"150px\">";
    
    // Download
    document.getElementById('screen').innerHTML = "<a href=\""+imgPath+"\" download> Download Now </a>"
    
    // document.getElementById('screen').innerHTML = "<iframe src=\"./5Loops/5loop2String.md\" width=\"500\" height=\"400\"></iframe>";
}



function clearScreen() {
    document.getElementById('screen').innerHTML = `
    <div class = "innerscreen">

        <input type='text' id='result' class='screeninner' style="text-align: center; width: 14rem; height: 3rem; font-size: 20px"></td>

    </div>
    `
    

document.getElementById('result').value = ''

}