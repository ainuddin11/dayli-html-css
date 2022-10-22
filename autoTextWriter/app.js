class TypeWrite {
  constructor(textElement, words, timeDuration = 300) {
    this.textElement = textElement;
    this.words = words;
    this.timeDuration = timeDuration;
    this.text = "";
    this.wordsIndex = 0;
    this.type();
    this.isDeleting = false;
  }
  type() {
    //get current index
    const current = this.wordsIndex % this.words.length;

    //get fulltext
    const fulltext = this.words[current];

    //check
    if (this.isDeleting) {
      //deleting text
      this.text = fulltext.substring(0, this.text.length - 1);
    } else {
      this.text = fulltext.substring(0, this.text.length + 1);
    }

    //if full text is complete
    if (!this.isDeleting && this.text === fulltext) {
      this.isDeleting = true;

      this.timeDuration = 1000;
    } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.timeDuration = 100;
      this.wordsIndex++;
    }

    //inset the text into the dom elemet
    this.textElement.innerHTML = `<span class=txt>${this.text}</span>`;
    console.log(this.text);
    let timeOut = setTimeout(() => {
      this.type();
      this.timeDuration = 90;
    }, this.timeDuration);
    return () => clearTimeout(timeOut);
  }
}

//documnet on load
document.addEventListener("DOMContentLoaded", init);

//make a init function
function init() {
  const text_type = document.querySelector(".txt-type");
  const word = ["Developer", "Designer", "Createor"];
  const times = 200;

  new TypeWrite(text_type, word, times);
}
