//JavaScript

var detectCapitalUse = function(word) {
    const new_Upper_Word=word.toUpperCase();
    const new_Lower_Word=word.toLowerCase();
    const new_Remaining_Word=word.slice(1);
    if(word===new_Upper_Word) return true
    else if(word===new_Lower_Word) return true
    else if(word[0]===new_Upper_Word[0] &&new_Remaining_Word===new_Lower_Word.slice(1)) return true
    else return false
};

//console.log(detectCapitalUse("FlaG"))

confirm("test")