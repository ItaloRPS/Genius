function Genius(){

    let _colors = []
    let _colorsClick= []
    let _score = 0
    
     nextLevel = ()=>{
        let colorOrder = Math.floor(Math.random() *4)
        _colors.push(colorOrder)
    
        for (const i in _colors) {
           light(_colors[i],i+1)
        }
        _colorsClick= []
    }
    
     light = (color,time)=>{
        time = time*500
        setTimeout(()=>{
            colorLight(color).classList.add('selected')
        },time)
        setTimeout(()=>{
            colorLight(color).classList.remove('selected')
        },time +250)
    }
    
     colorLight=(color)=>{
        switch (color) {
            case 0:
                return document.querySelector('.green');
                break;
            case 1:
                return document.querySelector('.red');
                break;
            case 2:
                return document.querySelector('.blue');
                break;
            case 3:
                return document.querySelector('.yellow');
                break;
        
            default:
                break;
        }
    }
    
     click = (color)=>{
        _colorsClick.push(color)
        colorLight(color).classList.add('selected');
    
        setTimeout(() => {
            colorLight(color).classList.remove('selected');
            checkOrder();
        },250);
        _score++
    }
    
     checkOrder= ()=>{
        for (let i in _colorsClick) {
            if (_colorsClick[i] != _colors[i]){
                gameOver()
                break
            }
         }
            if(_colorsClick.length == _colors.length && _score > 0){
             alert(`você acertou!!! \nPontuação ${_score} `)
             nextLevel();
         }
    }
    
    gameOver = ()=>{
         _colors = []
         _colorsClick= []    
         alert(`você errou.\n Pontuação ${_score} `)
         _score = 0
    }
    
    this.start= ()=>{
            document.querySelector('.green').onclick = () => click(0);
            document.querySelector('.red').onclick = () => click(1);
            document.querySelector('.blue').onclick = () => click(2);
            document.querySelector('.yellow').onclick = () => click(3);
            alert('Bem vindo ao Gênesis!\nIniciando novo jogo!');
            nextLevel()
        }
    }
    
    const genius = new Genius()
    genius.start()