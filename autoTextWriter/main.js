class TypeWrite {
  constructor(txtElement, words, wait = 100) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIdex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    //current index of word
    const current = this.wordIdex % this.words.length;

    //get full text of current word
    const fullTxt = this.words[current];

    //check if deleting
    if (this.isDeleting) {
      //remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    console.log(this.txt);
    ///Insert txt into dom element
    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

    //initial type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //if word is complet
    if (!this.isDeleting && this.txt === fullTxt) {
      //make push at end
      typeSpeed = this.wait;
      //set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //move to next word
      this.wordIdex++;
      typeSpeed = 5000;
    }

    let time_out = setTimeout(() => {
      this.type();
      return () => clearTimeout(time_out);
    }, this.wait);
    return () => clearTimeout(time_out);
  }
}

// TypeWrite.prototype.type = function () {
//   //current index of word
//   const current = this.wordIdex % this.words.length;

//   //get full text of current word
//   const fullTxt = this.words[current];

//   //check if deleting
//   if (this.isDeleting) {
//     //remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     //add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }
//   console.log(this.txt);
//   ///Insert txt into dom element
//   this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

//   //initial type speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   //if word is complet
//   if (!this.isDeleting && this.txt === fullTxt) {
//     //make push at end
//     typeSpeed = this.wait;
//     //set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     //move to next word
//     this.wordIdex++;
//     typeSpeed = 5000;
//   }

//   let time_out = setTimeout(() => {
//     this.type();
//     return () => clearTimeout(time_out);
//   }, this.wait);
//   return () => clearTimeout(time_out);
// };

//int on dom load
let init = () => {
  const txt_type = document.querySelector(".txt-type");
  const words = JSON.parse(txt_type.getAttribute("data-words"));
  const wait = txt_type.getAttribute("data-wait");

  console.log(words);
  new TypeWrite(txt_type, words, wait);
};
document.addEventListener("DOMContentLoaded", init);

// Init app
