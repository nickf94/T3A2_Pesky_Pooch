import React, { useState, useEffect } from 'react'

class TypeWriter {
  //A constructor is just a method that runs when the object is 'initialized/manifested/put-into-action/' by the a class(TypeWriter)
  constructor(txtElement, words, wait = 1000) {
    //txtElement is the html-span, 'words' will come from the data-words html attribute!
    this.txtElement = txtElement;
    this.words = words;
    this.txt = ""; //txt represents whatever text is currently in the typewriters area!
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10); //'10' is there because seconds it waits is a BASE 10 number!
    this.type(); //type refers to my actual typewrite effect
    this.isDeleting = false; //when the effect is going backwards and actually deleting the original text then this boolean will turn to true!
  }

  //after i have defined the attributes in the class now need to create the method (below)! (called 'type')
  //first thing i want to do in this function is get the current index of the word because each word has an INDEX.
  //Current index of word!
  type() {
    const current = this.wordIndex % this.words.length;
    // Get full text of currrent word!
    const fullTxt = this.words[current]; //my const statement is named 'fulltxt'.| Its job is to get the full text of the current word. It is set to my array of words named (this.words) and the current index

    //--------------------------------------------------------------------------------------------
    //the below function will create the deleting and adding text effect
    //   to do this i check if typewriter is in the boolean deleting state OR not(true or false)! if it is false(not deleting) then add char || if it is deleting then SUBTRACT a char!//
    //REMINDER: isDeleting is the property i have set above that is set to FALSE!
    //if its deleting then remove a character if it is not deleting then add a character!!
    if (this.isDeleting) {
      //Remove Character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //Add character
      //this.txt represents whatever is currently in the html-span||
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //--------------------------------------------------------------------------------------------
    //(below) will output whatever is in the .txt array if typewriter is in false(not-deleting state), and vica-versa!

    //Insert TXT into txtelement that i specified in the html doc!
    //this will insert another span into the original html span
    //i will give this the class of 'txt' so i can edit it in the css and give it the 'cursor' effect!
    //rather then concatenating this i use backticks so i can use a TEMPLATE-LITERAL as specified in JS-ES6!
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //-------------------------------------------------------------------------------------------
    // Inititial Type Speed Value
    let typeSpeed = 100;

    //check if deleting because if it is then i want it ot go faaster!
    if (this.isDeleting) {
      //below is the shorthand way of saying type speed divided by 2 (will therefore go twice as fast as it types/ so 150milliseconds!)
      typeSpeed /= 2;
    }

    //now i want to check if the word is complete|| to do that i will match whatever is in 'this.txt'(the word) and if it matches the word then i want it to move onto the next word!!
    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //this will make pause at the end of sentence print
      typeSpeed = this.wait;
      // ...Then set Delete to TRUE!
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      //this specifies the point at when a word is fully deleted ('' when word is empty) thats why i included the empty string!!!
      // this point (above-line) is set because when the word is fully deleted then i want it to re-type another word!!
      //for it to retype the word i first need to set 'isDeleting back to false!'
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      //Pause before start typing the second word!
      typeSpeed = 500;
    }

    //---------------------------------------------------------------------------------------------
    //need the ('setTimeout') because each time the typewriter types or deletes a word the function is running. The timeout will specify the 'pace' at which it types and deletes
    setTimeout(() => this.type(), typeSpeed); //(typeSpeed variable was declared just above this!) adds or deletes txt at every 500milliseconds
  }
}

export default function TypeWriterFeature(props) {
  useEffect(() => {
    // Initialise/update the TypeWriter on each render
    const txtElement = document.querySelector(".txt-type");
    // i need to "parse" my html text with the JSON method so that it is actually treated as an array and not just a string!!
    const words = JSON.parse(txtElement.getAttribute("data-words")); //gets my txtElement(text written in html) that is wrapped inside of my data-words custom attribute that i specified!!
    const wait = txtElement.getAttribute("data-wait");
    // INITIALIZE THE TYPEWRITER
    new TypeWriter(txtElement, words, wait);
  }, [])

  return (
    null
  )
}