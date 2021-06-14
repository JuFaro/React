import React from 'react';
import ac1 from '../img/ac1.png';
import ac3 from '../img/ac3.png';
import ac4 from '../img/ac4.png';
import Logo from '../img/logo.png'

const img1 = {
    backgroundImage: `url('${ac1}')`
}


const img3 = {
    backgroundImage: `url('${ac3}')`
}

const img4 = {
    backgroundImage: `url('${ac4}')`
}


function Hero() {
    return (
        <>
  
            <main>

                <section className="inicial">
                    <h3 className="text-center text-primary m-3">Queremos conhecer seu estilo <strong className="text-warning">Corujita</strong> de ser!!</h3>

                    <ul className="grid">
                        <li className="small" style={img1}></li>
                        <li className="large" style={img3}></li>
                        <li className="small" style={img4}></li>
                    </ul>
                </section>


                {/* <!-- Cards 3D --> */}
                <article>
                    <h2 className="text-center text-primary">Passe o Mause pelas <strong className="text-warning">Corujitas</strong>  e descubra mais sobre nós!!</h2>
                    <div
                        className="container d-flex align-items-center justify-content-center justify-content-between flex-wrap">
                        <div className="box mx-auto mb-4  ">
                            <div className="body ">
                                <div className="imgContainer "><img src={Logo} alt="Corujita Social" width="100px" />  </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        <h3 className="text-center  fs-5">Missão</h3>
                                        <p className="fs-6 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sit eveniet magnam, inventore mollitia a.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box mx-auto mb-4  ">
                            <div className="body  ">
                                <div className="imgContainer"> <img src={Logo} alt="Corujita Social" width="100px" /> </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        <h3 className="text-center  fs-5">Visão </h3>
                                        <p className="fs-6 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sit eveniet magnam, inventore mollitia a.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box mx-auto mb-4 ">
                            <div className="body ">
                                <div className="imgContainer"> <img src={Logo} alt="Corujita Social" width="100px" /> </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        <h3 className="fs-5 text-center">Valores</h3>
                                        <p className="fs-6 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sit eveniet magnam, inventore mollitia a. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
            </main>
            <aside>
                <div class="container">
                <h2 className="text-center text-primary mb-5">Fundadores</h2>
                    <div class="row">
                        <div class="col-md-4 mb-md-0 mb-3">
                            <div class="card d-flex flex-column align-items-center justify-content-center">
                                <div class="inner-content d-flex flex-column align-items-center justify-content-center">
                                    <div class="img-container rounded-circle"> <img src="https://i3.wp.com/merlim.pt/wp-content/uploads/2020/10/mocho-ou-coruja-1.jpg" alt="" class="rounded-circle" /> </div>
                                    <div class="h3">Lisa Miller</div>
                                    <p class="designation text-muted text-uppercase">Web Developer</p>
                                </div>
                                <ul class="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">      
                                    <li><a href="/"><span class="fab fa-facebook"></span></a></li>
                                    <li><a href="/"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="/"><span class="fab fa-google-plus"></span></a></li>
                                    <li><a href="/"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-3">
                            <div class="card d-flex flex-column align-items-center justify-content-center">
                                <div class="inner-content d-flex flex-column align-items-center justify-content-center">
                                    <div class="img-container rounded-circle"> <img src="https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2020/09/16/coruja-15913.jpg" alt="" class="rounded-circle" /> </div>
                                    <div class="h3">David Peterson</div>
                                    <p class="designation text-muted text-uppercase">Full Stack Developer</p>
                                </div>
                                <ul class="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                                    <li><a href="/"><span class="fab fa-facebook"></span></a></li>
                                    <li><a href="/"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="/"><span class="fab fa-google-plus"></span></a></li>
                                    <li><a href="/"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-3">
                            <div class="card d-flex flex-column align-items-center justify-content-center">
                                <div class="inner-content d-flex flex-column align-items-center justify-content-center">
                                    <div class="img-container rounded-circle"> <img src="https://static.meionorte.com/uploads/imagens/2016/7/5/thumb/c-360-270-q-90-conheca-8-curiosidades-sobre-as-corujas-8bb70004-30d5-4921-b8d3-0ef5b8dd9944.jpg" alt="" class="rounded-circle" /> </div>
                                    <div class="h3">Jhon Buttler</div>
                                    <p class="designation text-muted text-uppercase">App Developer</p>
                                </div>
                                <ul class="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                                    <li><a href="/"><span class="fab fa-facebook"></span></a></li>
                                    <li><a href="/"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="/"><span class="fab fa-google-plus"></span></a></li>
                                    <li><a href="/"><span class="fab fa-linkedin-in"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Hero;