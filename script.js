    
const username = document.getElementById('username')

const form2Name = document.getElementById('form2Name')
const messageForScramble = document.getElementById('messageForScramble')

const mainText = document.getElementById('mainText')
const textToRemove = document.getElementById('textToRemove')
const submitBtn = document.getElementById('submitBtn')
const tagName = document.getElementById('tag')
const resultDiv = document.getElementById('result')

    let form1 = document.getElementById("form1")
    let form2 = document.getElementById("form2")
    let form3 = document.getElementById("form3")

    let next1 = document.getElementById('next1')
    let back1 = document.getElementById('back1')
    let back2 = document.getElementById('back2')
    let progress= document.getElementById('progress')


        next1.onclick = function(){
            form1.style.left = '-500px'
            form2.style.left = '40px'
            progress.style.width = '300px'
            getName()
        }
        
        back1.onclick = function(){
            form1.style.left = '40px'
            form2.style.left = '500px'
            progress.style.width = '150px'

        }
        back2.onclick = function(){
            form2.style.left = '40px'
            form3.style.left = '500px'
            progress.style.width = '300px'

        }


        function next(){
            form2.style.left = '-500px'
            form3.style.left = '40px'
            progress.style.width = '500px'
           

        }
       
        function getName(){
           form2Name.innerText = `Welcome ${username.value}` 
        }


function findIndex(sentence,scramble){
    sentence  = mainText.value
    scramble = textToRemove.value
    let mainSentence= sentence.split(' ')
    let scrambleWord = scramble.split(',')
    let arrayForIndex = []
    let scrambleCount = 0

    for(let indexM in mainSentence){
        
        for(let indexS in scrambleWord){
        
        
            if(mainSentence[indexM] == scrambleWord[indexS]){
              arrayForIndex.push( Number(indexM))
              scrambleCount+=1
                
              
            }
           }
    }
    console.log(arrayForIndex)
  arrayForIndex.forEach((number)=>{
    mainSentence[number] = tagName.value
  })
   
 console.log(mainSentence)
 redactWords  =mainSentence.join(' ')
 let countWords  = mainSentence
 let countScramble = scrambleWord
 console.log(countWords.length)
 messageForScramble.innerText = `Thank you ${username.value} !!`
 resultDiv.innerText = 
` Words scanned : ${countWords.length} 
 Scrambled Words scanned: ${countScramble.length}
 Scrambled Words matched: ${scrambleCount}
 Final Sentence: ${redactWords}`
   }


submitBtn.onclick = () =>{
    next()
   findIndex()
   
}