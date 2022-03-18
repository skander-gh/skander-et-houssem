import "../home/Home.css"
import React from 'react'
import {Navbar,Nav , Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Conseil() {
  return (
    <div>
      <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Our Program:</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <>
        <Nav.Link  as={Link}  to='/PrisedeMasse'>Prise de Masse </Nav.Link>
        <Nav.Link  as={Link}  to='/ExercicesListe'>Exercices </Nav.Link>
        <Nav.Link  as={Link}  to='/PrisedeSeche'>Prise de Seche </Nav.Link>
        <Nav.Link  as={Link}  to='/Conseil'>Conseil </Nav.Link>
        </>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    <br></br>
        <main>
        <ul id="cards">
          <li className="card" id="card_1">
            <div className="card__content">
              <div>
                <h2 >Combien de temps doit durer une séance de musculation ?</h2>
                <p>Un entraînement dure effectivement entre 45 minutes à 1 heure 30 avant d’être à plat, mais il ne s’agit en aucun cas d’une « durée de séance optimale ».
Tu l’auras compris, la durée d’un entraînement importe peu, c’est surtout ton emploi du temps, ton niveau, le type d’entrainement, tes objectifs, la forme du jour et l’épuisement nerveux / énergétique qui te limite. Pour atteindre tes objectifs, le plus important reste de  progresser au fil de tes séances en suivant un programme adapté à tes objectifs.
Rappelons-le, l’entraînement à lui seul est insuffisant. L’alimentation et la récupération est tout aussi important pour améliorer la qualité de tes séances et garantir des résultats, sans cela, tu risques de stagner assez rapidement.
</p>
                
              </div>
              <figure>
              <img src="https://www.dr-muscu.fr/wp-content/uploads/2021/07/combien-de-temps-doit-durer-une-seance-de-musculation-750x375.jpg.webp" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_2">
            <div className="card__content">
              <div>
                <h2 Title > Musculation tous les jours ?</h2>
                <p>En musculation, on peut distinguer 2 phases, l'entraînement et la récupération. Cette dernière peut d'ailleurs se redécouper en plusieurs phases, mais j'y reviendrai.
L'entraînement de musculation consiste à stimuler tes muscles en soulevant des poids. Ce faisant, ton corps se fatigue. Il puise dans ses réserves d'acides aminés et de glucides, et il accumule des déchets métaboliques. De plus, si tu pratiques des entraînements suffisamment intenses, des micro-lésions apparaissent dans tes muscles.
Si tu veux que ton corps développe ses muscles, il va alors falloir lui donner le temps de récupérer. Cette récupération se distingue en deux phases importantes. La première, c'est une phase de réparation pendant laquelle ton corps évacue les déchets produits par l'entraînement, reconstitue ses réserves de nutriments et guérit les micro-lésions musculaires.</p>
                
              </div>
              <figure>
              <img src="https://www.dr-muscu.fr/wp-content/uploads/2021/07/Musculation-tous-les-jours-est-ce-utile-pour-progresser-750x375.jpg.webp" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_3">
            <div className="card__content">
              <div>
                <h2 Title>Skinny Fat : Les solutions pour progresser</h2>
                <p>Le skinny fat représente donc la morphologie d’une personne mince, mais qui mange mal et pratique peu d’activité physique. Le corps va alors former des cellules graisseuses supplémentaires à cause de la sédentarité et de la pauvre valeur nutritionnelle des aliments consommés. Mais vous pouvez sortir de ce cercle vicieux : commencez par perdre du poids en repensant votre alimentation, puis suivez un programme de musculation adapté à vos besoins. Il est alors possible de remodeler son physique pour perdre de la graisse et gagner du muscle. Vous pourrez dire adieu à l’adjectif “skinny fat” pour vous désigner !</p>
                
              </div>
              <figure>
              <img src="https://www.dr-muscu.fr/wp-content/uploads/2021/05/Skinny-Fat-Les-solutions-pour-progresser-750x375.jpg.webp" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_4">
            <div className="card__content">
              <div>
                <h2 Title>Faut-il faire du gainage tous les jours ?</h2>
                <p>Lorsque vous pratiquez des exercices de gainage, vous faites travailler 29 paires de muscles du tronc, principalement :
Les abdominaux : grand droit, oblique interne, oblique externe et transverse de l’abdomen.
Le dos : carré des lombes, érecteurs du rachis, longissiumus, ilio-costal et psoas.
D’autres muscles importants : diaphragme, plancher pelvien et fessiers.
Si vous faites du gainage régulièrement, vous pouvez obtenir de nombreux bienfaits :

Stabiliser et protéger le dos.
Prévenir les douleurs et les blessures.
Améliorer les performances.
Tonifier la sangle abdominale et le ventre.
Soulager le mal de dos.
Améliorer l’équilibre.
Ces différents bienfaits sont souvent retrouvés dans des études qui utilisent des protocoles de gainage dont la fréquence varie le plus souvent de 2 à 5 fois par semaine.</p>
                
              </div>
              <figure>
              <img src="https://www.dr-muscu.fr/wp-content/uploads/2021/04/Faut-il-faire-du-gainage-tous-les-jours-750x375.jpg.webp" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_4">
            <div className="card__content">
              <div>
                <h2 Title>Comment gagner de la masse musculaire rapidement ?</h2>
                <p> Maintenant que nous avons fait le point côté alimentation, concentrons nous sur l’entraînement de musculation. L’entraînement est à la base du développement musculaire. Pour devenir plus massif, vous devez travailler avec des charges lourdes à l’aide de barres ou haltères.
Concernant les exercices au poids de corps, s’ils sont intéressant lorsque vous débutez la musculation ou si vous êtes dans un objectif d’entretien, toutefois, ils peuvent montrer rapidement leur limites, surtout si vous souhaitez prendre de la masse musculaire. En effet, le principe même de l’hypertrophie musculaire est la surcharge progressive. De ce fait, seules les charges additionnelle avec barres, haltères ou encore poulie vont pouvoir favoriser cette surcharge et ainsi stimuler l’hypertrophie musculaire.</p>
                
              </div>
              <figure>
              <img src="https://www.dr-muscu.fr/wp-content/uploads/2020/08/Comment-gagner-de-la-masse-musculaire-rapidement-750x375.jpg.webp" />
              </figure>
            </div>
          </li>
        </ul>
      </main>
      <br></br>
      <footer className="footer">
  <div className="container bottom_border">
    <div className="row">
      <div className=" col-sm-4 col-md col-sm-4  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Find Us</h5>
        {/*headin5_amrc*/}
        
        <p><i className="fa fa-location-arrow" /> Address : Ben arous,Mourouj</p>
        <p><i className="fa fa-phone" />  Phone :  23 160 453  /   29 635 618</p>
        <p><i className="fa fa fa-envelope" /> E-mail : YourMuscle@gmail.com</p>
      </div>
      <div className=" col-sm-4 col-md  col-6 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Gym Motivational Music</h5>
        
        <ul className="footer_ul_amrc">
          <li><a href="https://www.youtube.com/watch?v=tR1ECf4sEpw">Lose Yourself</a></li>
          <li><a href="https://www.youtube.com/watch?v=2aMTP6Sxywk">Fight back</a></li>
          <li><a href="https://www.youtube.com/watch?v=pLOnJwass9c">Best of me</a></li>
          <li><a href="https://www.youtube.com/watch?v=KSbwHzlcgs8">Firework</a></li>
          
        </ul>
        
      </div>
      
      <div className=" col-sm-4 col-md  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">About Us </h5>
        
        <ul className="footer_ul2_amrc">
          <li><a href="#"><i className="fab fa-twitter fleft padding-right" /> </a><p>Fondé en 2022 , Le Platform Your Muscle (YM) vous conseille sur différentes thématiques liées à la musculation.</p></li>
          <li><a href="#"><i className="fab fa-twitter fleft padding-right" /> </a><p>Nous vous guidons à travers différents programmes de musculation pour progresser,que ce soit pour sécher ou prendre de la masse.</p></li>
          <li><a href="#"><i className="fab fa-twitter fleft padding-right" /> </a><p>YourMuscle(YM) est dédié aux femmes et aux hommes qui travaillent ,sans tricher, pour atteindre l'excellence physique ,</p></li>
        </ul>
        
      </div>
    </div>
  </div>
  <div className="container">
    
   
    <p className="text-center">All Right Reserved , www.YourMuscle.com © 2022</p>
   
    
  </div>
</footer>
        
    </div>
  )
}

export default Conseil;