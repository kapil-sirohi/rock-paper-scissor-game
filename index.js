function rps(playerchoice)
    {
       // console.log(playerchoice.id)
        let humanchoice , botchoice;
        humanchoice = playerchoice.id;
        botchoice = inttochoice(randomtoint());
        console.log(humanchoice,botchoice);
        let results = decidewinner(humanchoice,botchoice);
        console.log(results);
        let message = finalMessage(results);
        console.log(message);
        console.log(document.getElementById('rock').src);
        rpsfrontend(playerchoice.id,botchoice,message);
    }

function randomtoint()
    {
        return (Math.floor(Math.random() * 3));
    }
function inttochoice(number)
    {
        return ['rock' , 'paper' , 'scissor'][number];
    }
 
function decidewinner(yourchoice , computerchoice)
    {
        let rpsdatabase= {
                            'rock' : {'rock':0.5 , 'paper':0 , 'scissor':1},
                            'paper' : {'rock':1 , 'paper':0.5 , 'scissor':0},
                            'scissor' : {'rock':0 , 'paper':1 , 'scissor':0.5}

        }

        let yourscore = rpsdatabase[yourchoice][computerchoice];
        let computerscore = rpsdatabase[computerchoice][yourchoice];
        return [yourscore, computerscore];

    }
function finalMessage(yourscore , computerscore)
    {
        if (yourscore === 0)
            {
                return {'message':'you lost' ,
                        'color':'red'};
            }
        else if(yourscore === 0.5)
            {
                return {'message': 'game tied',
                        'color':'yellow'}
            }
        else
            {
                return {'message':'yow won',
                        'color':'green'}
            }
    }

function rpsfrontend(humanimagechoice , botimagechoice , finalMessage)
    {
        console.log("inside rps frontend");
        let imagedatabase = 
            {
                'rock': document.getElementById('rock').scr,
                'paper': document.getElementById('paper').scr,
                'scissor': document.getElementById('scissor').scr
            }
            console.log(document.getElementById('rock').scr);
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();

        let humandiv = document.createElement('div');
        let botdiv = document.createElement('div');
        let msgdiv = document.createElement('div');
           
        humandiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] + "'>"
        document.getElementById("flex-box-id").appendChild(humandiv);

    }