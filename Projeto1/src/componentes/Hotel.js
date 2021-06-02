import ac1 from '../img/ac1.jpg';
import ac2 from '../img/ac2.jpg';
import ac3 from '../img/ac3.jpg';
import ac4 from '../img/ac4.jpg';

const img1={
    backgourndImage:`url('${ac1}')` 
}
const img2={
    backgourndImage:`url('${ac2}')`
}
const img3={
    backgourndImage:`url('${ac3}')`
}
const img4={
    backgourndImage:`url('${ac4}')`
}

function Hotel(){
    return(
        <>
        <section className="hotel">
        <h3>Conheçao o Hotel</h3>

<p>Feche os olhos e imagine o paraiso da Terra.
    Sobral terra onde cada pessoa possui um Sol individual.</p>
<hr/>

 <ul className="grid">
    <li className="small" style={img1}></li>
    <li className="large" style={img2}></li>
    <li className="large" style={img3}></li>
    <li className="small" style={img4}></li>
</ul>

<ul className="grid">
    <li className="small" style={img1}></li>
    <li className="large" style={img2}></li>
    <li className="large" style={img3}></li>
    <li className="small" style={img4}></li>
</ul> 
        </section>
        <section className="info">
<h3>Unico hotel perto do SOL</h3>
<p>Implantado ao pé do vulcão da Serra da Meruoca,
    o hotel tem vista perfeita para lava</p>
<hr/>

<ul className="grid">
    <li>
        <i className="fas fa-location-arrow"></i>
        <h4>Localização</h4>
        <p>Localizado entre o inferno, vulcão de Meruoca e a frente do purgatório.</p>
    </li>

    <li>
        <i className="fas fa-gift"></i>
        <h4>Pacotes e Ofertas</h4>
        <p>Localizado entre o inferno, vulcão de Meruoca e a frente do purgatório.</p>
    </li>

    <li>
        <i className="fas fa-home"></i>
        <h4>Acomodações</h4>
        <p>Localizado entre o inferno, vulcão de Meruoca e a frente do purgatório.</p>
    </li>
</ul>
</section>
<section className="assina">
<h3>Novidades</h3>
<p>Asssine nosso canal para receber ofertas e novidades do hotel</p>
<hr/>
<form id="form1" method="post" name="form1" onsubmit="return valida(this)">
    <input type="email" placeholder="Email" id="email"/>
    <button>Cadastrar</button>
</form>
</section>
        </>
    )
}

export default Hotel;