    var pos = 0;
    var width = 1000;
    var container = document.getElementById('container');
    container.style.width = width + 'px';
    
    const pacArray = [
        ['coco1.png', 'coco2.png', 'coco3.png', 'coco4.png'],
        ['coco5.png', 'coco6.png', 'coco7.png', 'coco8.png']
    ];
    var direction = 0;
    var focus = 0;
    let img = document.getElementById("PacMan");
    let imgWidth = img.width

    function Run() {
        //container.style.width = width + 'px';
        //focus = (focus + 1) % 2;
        console.log('focus: ');
        console.log(focus);
        console.log('direction: ');
        console.log(direction);
        direction = checkPageBounds(direction, imgWidth);
        img.src = pacArray[direction][focus];
        if (direction === 1) {
            pos -= 20;
            img.style.left = pos + "px";
        } else {
            pos += 20;
            img.style.left = pos + 'px';
        }
        focus++;
        if (focus === 4){
            focus = 0;
        }
        // Use setTimeout to call Run every 200 millesecs
        container.style.width = (window.innerWidth-20) + 'px';
        width = window.innerWidth-20;
    }

    function checkPageBounds(direction, imgWidth) {
        // Complete this to reverse direction on hitting page bounds
        if (pos >= (width-imgWidth)) {
            direction = 1;
        }
        if (pos <= 0) {
            direction = 0;
        }
        return direction;
    }
    setInterval(Run, 200);