function has_validated_length()
{
    return true;
}

function count_words(texte)
{
    // console.log(texte);
    let count_spaces = 0;

    let i = 0;
    while(i < texte.length){
        if(texte[i] === ' '){
            ++count_spaces;
        }
        ++i;
    }
    return count_spaces + 1;
}

