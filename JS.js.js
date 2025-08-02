const textareaEl= document.querySelector('.textarea')
const numberOfCharactersEl= document.querySelector('.state-number-character')
const numberOfTwitterEl=document.querySelector('.state-number-twitter')
const numberOfFacebookEl= document.querySelector('.state-number-facebook')
const numberOfWordsEl = document.querySelector('.state-number-words')
const numberOfSentencesEl= document.querySelector('.state-number-sentences')
const mostFrequentWordEl= document.querySelector('.state-number-frequentWords')

const inputHandler= ()=>{
    if( textareaEl.value.includes( '<script>')
){
    alert('Wrong input')
    textareaEl.value=textareaEl.value.replace(' <script>',' ');
}
const numberOfCharacters = textareaEl.value.length;
numberOfCharactersEl.textContent= numberOfCharacters;

const numberoftwitterleft= 280- numberOfCharacters;
numberOfTwitterEl.textContent= numberoftwitterleft;
if (numberoftwitterleft < 0) {
  numberOfTwitterEl.classList.add('state-number--limit');
} else {
  numberOfTwitterEl.classList.remove('state-number--limit');
}



const numberOfFacebookleft= 2200- numberOfCharacters;
numberOfFacebookEl.textContent= numberOfFacebookleft;
if(numberOfFacebookleft<0){
    numberOfFacebookEl.classList.add('state-number--limit');
}else{
    numberOfCharactersEl.classList.remove('state-number--limit');
};

let numberOfWords= textareaEl.value.split (' ').length;
numberOfWordsEl.textContent= numberOfWords;
console.log(textareaEl.value.length);

if(textareaEl.value.length===0){
    numberOfWords=0; 

}
numberOfWordsEl.textContent= numberOfWords;
const sentences= textareaEl.value.split(/[.!?]+/).filter(s => s.trim()!=='');
numberOfSentencesEl.textContent= sentences.length;
const wordFrequency = {};
const words = textareaEl.value.toLowerCase().match(/\b\w+\b/g) || [];

words.forEach(word => {
  wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

let maxCount = 0;
let mostFrequent = 'N/A';

for (let word in wordFrequency) {
  if (wordFrequency[word] > maxCount) {
    maxCount = wordFrequency[word];
    mostFrequent = word;
  }
}

mostFrequentWordEl.textContent = mostFrequent;

};
textareaEl.addEventListener('input', inputHandler);