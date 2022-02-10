document.addEventListener('DOMContentLoaded', function() {

    var score = 0;
    var scoreValue = document.querySelector('.score span');

    var plansza = document.querySelector('.plansza');

    var timer = setInterval(function () {
        var zombie = document.createElement('div');
        zombie.classList.add('zombie');
        

        //Scale
        var scale = 0.8 + Math.random() * 0.5;
        zombie.style.transform = "scale("+scale+")";

        //blur
        if (bottomPos > 200) {
            zombie.style.filter = "blur(2px)"
        } else if (bottomPos > 100) {
            zombie.style.filter = "blur(1px)"
        } else {

        }


        var min = 10;
        var max = 360;
        var bottomPos = Math.floor(Math.random()*(max-min+1)+min);
    
        zombie.style.bottom = bottomPos + 'px';

        zombie.style.zIndex = 360 - bottomPos;

        //movement speed
        var min = 10;
        var max = 20;
        var walkSpeed = Math.floor(Math.random()*(max-min+1)+min);
        var anim = "0.5s,"+walkSpeed+"s"
        zombie.style.animationDuration = anim;

        //zombie life
        zombie.live = 2;

        plansza.appendChild(zombie);

        zombie.addEventListener('animationend', function(e) {
            if(e.animationName === "zombieWalk") {
                score -= 10;
                this.remove();
            }

            scoreValue.innerText = score;

        });

    }, 500);


    plansza.addEventListener('click', function(e) {
        if (e.target.classList.contains ('zombie')) {
            e.target.live--;
            if(e.target.live <= 0 ) {
                score += 10;
                e.target.remove();
            }

            scoreValue.innerText = score;
            
        }


    });

})