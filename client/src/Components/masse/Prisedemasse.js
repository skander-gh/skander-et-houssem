import React from 'react'
import "../home/Home.css"
import {Navbar,Nav , Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Prisedemasse() {
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

        
        <h1 className='rrr'>Prise de masse </h1>
        <br></br>
        <p className='rre'>Pour un pratiquant de musculation, vouloir prendre du volume musculaire est un objectif continuel. Dans cette optique, suivre un bon programme de prise de masse est essentiel. Il faut savoir comment s’entrainer mais aussi quoi manger pour prendre de la masse musculaire et non du gras. Si votre objectif est de prendre des kilos de muscles avec un programme adapté, suivez notre guide et apprenez toutes les astuces pour réussir sa prise de masse.</p>
        <br></br>
 <h5 className='rrr'>A quoi sert la prise de masse en musculation ?</h5>
 <p className='rre'>La prise de masse consiste à augmenter votre apport calorique global pour donner à votre corps une énergie supplémentaire afin de développer vos muscles. Vous devez disposer d’un excès calorique suffisant, tout en respectant une limite raisonnable. Le but ? Augmenter la masse musculaire sans gagner trop de graisse corporelle.
Il est fort probable (et normal) que vous soyez confus concernant ce que vous devez/pouvez manger, comment vous entraîner et quels suppléments prendre en prise de masse. Pourquoi ? Votre corps construit des muscles à un rythme plus ou moins fixe, et la musculation ne produit pas de résultats instantanés. Chaque corps est différent, et plusieurs mois (voir plusieurs années), peuvent être nécessaires pour trouver VOTRE méthode pour prendre en masse.</p>
  <br></br>
  <h5 className='rrr'>Quand faire une prise de masse ?</h5>
  <p className='rre'>Traditionnellement, les amateurs de musculation et les bodybuildeurs font leur prise de masse en hiver et leur sèche en été. Pourquoi ? Il y a deux raisons principales. Premièrement, les compétitions de haut niveau en musculation/bodybuilding ont lieu généralement en été et au début de l’automne. Pendant les mois d’hiver, les compétitions ralentissent. Cette saison de « non-compétition » est donc le bon moment pour prendre en masse.
La deuxième raison, c’est que l’hiver offre un autre avantage pour prendre en masse : les manches longues, les vestes, les manteaux… Les vêtements ont tendance à être volumineux, non ajustés et permettent de mieux assumer son physique en prise de masse. Bien que cela puisse paraître ridicule ou superficiel aux yeux de certains, l’hiver aide à passer cette étape pas forcément évidente pour tout le monde. La sèche accompagnera plutôt la période d’été et la saison des plages. Vous êtes nombreux(ses) (et c’est normal) à vouloir avoir une belle apparence sur la plage. Attention néanmoins, manger trop et trop vite en prise de masse l’hiver peut vous donner du pain sur la planche (et de nombreux kilos à perdre) au printemps.</p>
  <br></br>
  <h5 className='rrr'>Comment s’entraîner  ?</h5>
  <p className='rre'>L’une des meilleures façons de savoir si vous gagnez du muscle est d’observer vos progrès en force. Bien qu’il soit possible de gagner en force sans prendre en volume, la plupart des sportifs qui gagnent en force gagnent également en taille. En phase de prise de masse, vous devez adapter votre entraînement pour prendre en volume, ET en force.
Pour bien comprendre, souvenez-vous que vos muscles répondent à l’entraînement de trois manières. Lorsque vous vous entraînez avec des répétitions élevées (plus de 15), vous améliorez votre endurance musculaire. La phase intermédiaire, entre 6 et 12 répétitions, favorise une augmentation de la taille et de la force de vos muscles. Les faibles répétitions (de 1 à 4 par série), sont la spécialité des haltérophiles, avec un focus sur la force. Ce sont donc les séries de 6 à 12 répétitions qui vous intéressent ! Toutefois, si vous consacrez une semaine d’entraînement à charger en poids avec de faibles répétions, vous serrez plus fort lorsque vous retournerez à la routine de 6 à 12 répétitions. 
  </p>
<br></br>
<h5 className='rrr'>Programme prise de masse </h5>
<br></br>
<br></br>
<img  src="https://i.pinimg.com/originals/c5/05/17/c505173bbd02e4f30a0eb3bc6acc3e8e.png" />
<br></br>
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
  );
}

export default Prisedemasse;