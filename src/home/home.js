import './home.css'

const inicio = ()=>{
}

const sobre = ()=>{
    window.scrollTo(0, document.getElementById('sobre').offsetTop);
}

const skill = ()=>{
    window.scrollTo(0, document.getElementById('skill').offsetTop)
}

const projeto = ()=>{
    window.scrollTo(0, document.getElementById('projeto').offsetTop)
}

window.onload = function (){
    const nome = document.getElementById('nome');
    const array = nome.innerHTML.split('');
    nome.innerHTML = ' ';
    array.forEach((letra, i) => {
        setTimeout(function(){
            nome.innerHTML += letra
        }, 200 * i)
    });
    
}

function Home(props){
    return(
        <div className='home'>
            <header>
                <nav>
                    <ul>
                        <li onClick={inicio}><p>Inicio</p></li>
                        <li onClick={sobre}><p>Sobre</p></li>
                        <li onClick={skill}><p>Skills</p></li>
                        <li onClick={projeto}><p>Projetos</p></li>
                    </ul>
                </nav>
            </header>
            <div className="clear"></div>
            <h1 id='nome'>{props.name}</h1>
            <img src={process.env.PUBLIC_URL + props.img}></img>
        </div>
    )
}

export default Home;