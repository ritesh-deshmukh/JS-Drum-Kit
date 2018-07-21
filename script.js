function playSound(e){     
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // stop the function from running at all
        audio.currentTime = 0
        audio.play()
        key.classList.add('playing');
    }

    function removeTransition(e){
        if(e.propertyName !== 'transform') return; // skip if it is not a transform
        this.classList.remove('playing')
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown',playSound);

    function playClickAudio(x){
        // document.getElementById("id").classList.add('playing');
        // const key = document.querySelector(".key").className = "playing"
        // console.log(key)
        x.currentTime = 0
        x.play()
        y.classList.add('playing')
        // key.classList.add('playing');
        // x.classList.add('playing');
    }