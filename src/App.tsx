
import './App.css'
import './main.js'
import './mainGradients.js'

import Logo from '../img/common/nano_it_Logo.svg';

function App() {


  return (
    <>
        
          <header className="header">
            <div className="inner">
              <h1>
                <a href="#">
                  <img src={Logo} alt="Description" />
                </a>
              </h1>
          
            <nav>
               <ul className="gnb">
                <li><a href="#">KOR</a></li>
                <li><a href="#">ENG</a></li>
                <button id="gnb_Btn">MENU</button>
                  <div id="Black-bg-open"></div>
               </ul>
            </nav>
            </div>
          </header>
     


<section className="section01">
  <div className="section01Contents">
    <img className="flower" id="flower01" src="/img/main/flower01.png" alt="" />
       <img className="flower" id="flower02" src="/img/main/Flower.png" alt="" />
    <img className="flower" id="flower03" src="/img/main/Flower.png" alt="" />
    <img className="flower" id="flower05" src="/img/main/Flower.png" alt="" />
    <img className="flower" id="flower06" src="/img/main/flower_Red.png" alt="" />

    <h2 className="utill"><div>MAKE LINK</div></h2>
    <h2 className="utill"><div>MAKE BETTER</div></h2>

    <img className="flower" id="flower04" src="/img/main/flower_Red.png" alt="" />
    <img id="mainBanner" src="/img/main/MainBannerArtBredge.png" alt="메인배너 이미지" />
  

    <article>
      사람과 사람을 이어주는 기술,<br />
      세상에 도움이 되는 기술을 만듭니다.
    </article>

    <p>
      We aim to make innovative technologies that<br />
      link human to human and then improve the world!
    </p>

    <article>NANO - IT</article>
  </div>
</section>

      
     
       
    
 
    </>
  )
}

export default App
