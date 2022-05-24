var prefix = Array();

window.addEventListener("load", () => {
     prefix = (Array.prototype.slice
    .call(window.getComputedStyle(document.documentElement, ""))
    .join("") 
    .match(/-(moz|webkit|ms)-/))[1];
  

    if (prefix=='webkit') {
        var seekSlider = document.getElementById("seek-slider");
        var volumeSlider = document.getElementById("volume-slider");
        seekSlider.id = "seek-slider-chrome";
        volumeSlider.id = "volume-slider-chrome";
        seekSlider.value = 0;
        volumeSlider.value = 50;
        $('#seek-slider-chrome').on('input', function() {
            $(this).css('background', 'linear-gradient(to right, #F7AD19 0%, #F7AD19 '+this.value +'%, #fff ' + this.value + '%, white 100%)');
        });

        $('#volume-slider-chrome').on('input', function() {
            $(this).css('background', 'linear-gradient(to right, #F7AD19 0%, #F7AD19 '+this.value +'%, #fff ' + this.value + '%, white 100%)');
        });
    }
});


// Convertir milisegundos a minutos 
const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

function play(id) {
    const audio = document.getElementById('audio-'+id);

    // Duración de la canción
    const durationContainer = document.getElementById('duration');

    const displayDuration = () => {
        durationContainer.textContent = calculateTime(audio.duration);
    }

    // MAX duración de la canción
    var seekSlider;
    if (prefix=='webkit') {
        seekSlider = document.getElementById('seek-slider-chrome');
    } else {
        seekSlider = document.getElementById('seek-slider');
    }

    const setSliderMax = () => {
        seekSlider.max = Math.floor(audio.duration);
    }

    // Progreso de la canción
    const currentTimeContainer = document.getElementById('current-time');

    seekSlider.addEventListener('input', () => {
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        if (prefix=='webkit') {
            audio.currentTime = seekSlider.value;
        }
    });

    // Cambiar progreso de la canción
    seekSlider.addEventListener('change', () => {
        audio.currentTime = seekSlider.value;
    });

    let rAF = null;

    const whilePlaying = () => {
        seekSlider.value = Math.floor(audio.currentTime);
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        if (prefix=='webkit') {
            $('#seek-slider-chrome').css('background', 'linear-gradient(to right, #F7AD19 0%, #F7AD19 '+ (seekSlider.value*100)/seekSlider.max +'%, #fff ' + (seekSlider.value*100)/seekSlider.max + '%, white 100%)');
        }
        rAF = requestAnimationFrame(whilePlaying);
    }
    

    // Slider de volumen
    var volumeSlider;
    if (prefix=='webkit') {
        volumeSlider = document.getElementById('volume-slider-chrome');
    } else {
        volumeSlider = document.getElementById('volume-slider');
    }

    volumeSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        audio.volume = value / 100;
    });


    if (audio.readyState > 0) {
        displayDuration();
        setSliderMax();
    } else {
        audio.addEventListener('loadedmetadata', () => {
            displayDuration();
            setSliderMax();
        });
    }

    // Mutear
    $('body').on('click', '#mute', function(e){
        e.preventDefault();
        if ( $(this).hasClass('muted') ) {
            audio.muted = false;
            $(this).removeClass('muted');
            $(this).addClass('unmuted');
        } else {
            audio.muted = true;
            $(this).removeClass('unmuted');
            $(this).addClass('muted');
        }
    });

    // Play / pause
    $('body').on('click', '#play', function(e){
        e.preventDefault();
        if ( $(this).hasClass('play') ) {
            audio.play();
            requestAnimationFrame(whilePlaying);
            $(this).removeClass('play');
            $(this).addClass('pause');
        } else {
            audio.pause();
            cancelAnimationFrame(rAF);
            $(this).removeClass('pause');
            $(this).addClass('play');
        }
    });
}