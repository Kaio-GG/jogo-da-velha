import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jog1, setjog1] = useState([]);
  const [jog2 , setjog2] = useState([]);
  const [jogada ,  setjogada] = useState(0);
  const [winer , setwiner] = useState('');
  const [render, setrender] = useState(false);



  function game (pos){

    if( jogada % 2 === 0 ){
      let j1 = jog1
      j1.push(pos)
      setjog1(j1)
    }
    else{
      let j2 = jog2;  
      j2.push(pos) 
      setjog2(j2)
    }
    
    
    if (jog1.includes(1) === true && jog1.includes(2) === true && jog1.includes(3) === true ) {
      setwiner('jogador 1 ganhou')
    }else if (jog1.includes(4) === true && jog1.includes(5) === true && jog1.includes(6) === true){
      setwiner('jogador 1 venceu')
    }else if (jog1.includes(7) === true && jog1.includes(8) === true && jog1.includes(9) === true){
      setwiner('jogador 1 venceu')
    }else if (jog1.includes(1) === true && jog1.includes(4) === true && jog1.includes(7) === true){
      setwiner('jogador 1 venceu')
    }else if (jog1.includes(2) === true && jog1.includes(5) === true && jog1.includes(8) === true){
      setwiner('jogador 1 venceu')
    }else if (jog1.includes(3) === true && jog1.includes(6) === true && jog1.includes(9) === true){
      setwiner('jogador 1 venceu')
    }else if (jog1.includes(1) === true && jog1.includes(5) === true && jog1.includes(9) === true){
      setwiner('jogador 1 venceu')
    }else if (jog1.includes(3) === true && jog1.includes(5) === true && jog1.includes(7) === true){
      setwiner('jogador 1 venceu')
    }


    if (jog2.includes(1) === true && jog2.includes(2) === true && jog2.includes(3) === true ) {
      setwiner('jogador 2 ganhou')
    }else if (jog2.includes(4) === true && jog2.includes(5) === true && jog2.includes(6) === true){
      setwiner('jogador 2 venceu')
    }else if (jog2.includes(7) === true && jog2.includes(8) === true && jog2.includes(9) === true){
      setwiner('jogador 2 venceu')
    }else if (jog2.includes(1) === true && jog2.includes(4) === true && jog2.includes(7) === true){
      setwiner('jogador 2 venceu')
    }else if (jog2.includes(2) === true && jog2.includes(5) === true && jog2.includes(8) === true){
      setwiner('jogador 2 venceu')
    }else if (jog2.includes(3) === true && jog2.includes(6) === true && jog2.includes(9) === true){
      setwiner('jogador 2 venceu')
    }else if (jog2.includes(1) === true && jog2.includes(5) === true && jog2.includes(9) === true){
      setwiner('jogador 2 venceu')
    }else if (jog2.includes(3) === true && jog2.includes(5) === true && jog2.includes(7) === true){
      setwiner('jogador 2 venceu')
    }
    setjogada(jogada + 1);
  }


  useEffect(()=>{
    if(jogada !== 0){ 
      setrender(true)
    }
      
  },[winer])

  return  (
    <div className="game">
      <h1>Jogo da velha</h1>


      vencedor : {winer}
      
      <div className='table-game'>
          {render === true &&
            <div className='sobrepor'>

            </div>
          }

          <div className='linha'>
                  { jog1.includes(1) === true &&
                   <div className='a'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(1) === true &&
                   <div className='a'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(1) === false && jog1.includes(1) === false &&
                    <div className='a'  onClick={() => game(1)}>
                   </div>
                  }
                  { jog1.includes(2) === true &&
                   <div className='b'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(2) === true &&
                   <div className='b'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(2) === false && jog1.includes(2) === false &&
                    <div className='b'  onClick={() => game(2)}>
                   </div>
                  }

                  { jog1.includes(3) === true &&
                   <div className='c'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(3) === true &&
                   <div className='c'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(3) === false && jog1.includes(3) === false &&
                    <div className='c'  onClick={() => game(3)}>
                   </div>
                  }
                  </div>


          <div className='linha'>
                  { jog1.includes(4) === true &&
                   <div className='d'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(4) === true &&
                   <div className='d'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(4) === false && jog1.includes(4) === false &&
                    <div className='d'  onClick={() => game(4)}>
                   </div>
                  }

                  { jog1.includes(5) === true &&
                   <div className='e'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(5) === true &&
                   <div className='e'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(5) === false && jog1.includes(5) === false &&
                    <div className='e'  onClick={() => game(5)}>
                   </div>
                  }

                  { jog1.includes(6) === true &&
                   <div className='f'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(6) === true &&
                   <div className='f'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(6) === false && jog1.includes(6) === false &&
                    <div className='f'  onClick={() => game(6)}>
                   </div>
                  }

          </div>



          <div className='linha'>
                  { jog1.includes(7) === true &&
                   <div className='g'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(7) === true &&
                   <div className='g'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(7) === false && jog1.includes(7) === false &&
                    <div className='g'  onClick={() => game(7)}>
                   </div>
                  }
                  { jog1.includes(8) === true &&
                   <div className='h'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(8) === true &&
                   <div className='h'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(8) === false && jog1.includes(8) === false &&
                    <div className='h'  onClick={() => game(8)}>
                   </div>
                  }

                  { jog1.includes(9) === true &&
                   <div className='i'>
                    <p>X</p>
                  </div>
                  }
                  { jog2.includes(9) === true &&
                   <div className='i'>
                    <p>O</p>
                  </div>
                  }
                  {jog2.includes(9) === false && jog1.includes(9) === false &&
                    <div className='i'  onClick={() => game(9)}>
                   </div>
                  }
          </div>
      </div>
      <br/>
      <br/>
      <br/>
      
      <button onClick={()=> {setjog1([null]); setjog2([null]); setwiner(''); setrender(false); setjogada(0) }}>reset</button>
    </div>
  );
}

export default App;
