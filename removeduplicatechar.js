// Remove Duplicate character from string without using sort and reverse method.
word = "MAHARASHTRA";
originalWord = word.toLowerCase();// maharasabbahtra mumbai
console.log('originalWord :',originalWord);
finalString ='';
for(let i = 0 ; i < this.originalWord.length ; i++){
    const char = originalWord[i];
    if(!finalString.includes(char)){
        finalString += char; //x+=4 => x=x+4;  FS=""+m FS=> m ; 2nd: Fs= FS(m) + a=> ma
    }
}
console.log('finalString :',finalString);