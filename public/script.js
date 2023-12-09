// Script tulisan

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  const phrases = ["Yoga Astri Yudistira"];
  const phrases2 = [" Nice to meet you."];
  const el = document.getElementById("typewriter");
  const el2 = document.getElementById("typewriter2");
  
  let sleepTime = 30;
  let sleepTime2 = 150
  
  let curPhraseIndex = 0;
  
  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];
  
      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime2);
      }
  
      await sleep(sleepTime * 600);
      
      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime2);
      }
  
      await sleep(sleepTime * 20);

    }
    
  };
  const writeloop2 = async () => {
    while (true) {

        let curWord = phrases2[curPhraseIndex];
        
        for (let i = 0; i < curWord.length; i++) {
            el2.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
    
        await sleep(sleepTime * 460);

        for (let i = curWord.length; i > 0; i--) {
            el2.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
          }
      
          await sleep(sleepTime * 20);
        
    }
};

  
  
  writeLoop();
  writeloop2();

// fungsi untuk fix navbar

