import React from 'react';
import { useSelector } from 'react-redux';
import {Navbar,Nav , Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./home/Home.css"



function ProgrammeDeMuscu() {
  
    const user = useSelector(state=> state.authReducer.user)
    
  return <div>

    <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >Our Program:</Navbar.Brand>
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
 <h1 className='rrr'>Programme De Musculation </h1>
 <br></br>
<p className='rre'> Comme tout sport, si on souhaite pratiquer la musculation correctement il faut suivre certaines règles. Outre le fait de bien manger, suivre un programme d’entrainement et réaliser des exercices adaptés sont des éléments clés pour arriver à son objectif de forme. Si vous souhaitez prendre de la masse ou maigrir, vous y arriverez plus facilement en suivant un programme adapté. Ici nous vous conseillons sur tout ce qui touche aux exercices de musculation à intégrer dans un programme. Vous y apprendrez aussi les meilleures manières de s’entrainer pour prendre du muscle ou perdre de la graisse.</p>

 <br></br>
 <h5 className='rrr'>Qu’est ce qu’un programme de musculation ?</h5>
 <p className='rre'>Avant d’aller plus loin il est impératif de bien définir ce qu’est un programme de musculation. Il ne s’agit pas d’organiser sa séance de musculation au jour le jour, puis de revenir le lendemain en réorganisant sa séance sans prendre en compte ce qui a été fait la veille. Il s’agit plutôt de planifier plusieurs jours, voire même pour certains programmes plusieurs semaines d’entrainement à l’avance.
L’idée est donc d’avoir une liste d’exercices de musculation à exécuter dans un ordre bien précis et avec un temps de repos défini. Un programme de musculation qui marche est un programme qui prend en compte plusieurs critères importants comme votre niveau, vos objectifs et aussi le matériel de musculation et de cardio training que vous avez à votre disposition.
Comme votre niveau est voué à évoluer, votre programme de muscu ne sera pas figé et va donc évoluer avec vos progrès. Il sera alors important d’en changer régulièrement afin de continuer à avoir une belle courbe de progression durant vos séances de sport à la maison.</p>
  <br></br>
  <h5 className='rrr'>Comment choisir un programme de muscu ?</h5>
  <p className='rre'>Pour savoir quel programme adopter pour progresser dans la muscu à domicile, il faut juste avoir en tête qu’il doit être lié à un objectif et à votre état de forme. Que vous soyez grand débutant, confirmé, ou si vous vous remettez au sport, votre programme sera à chaque fois différent. L’idée de fond par contre sera toujours la même : Arriver à progresser avec des exercices ciblés et adaptés à votre niveau pour garder une motivation intacte à chaque séance d’entrainement.
Concernant votre objectif, il peut être de plusieurs natures. Parmi les plus fréquents on retrouve :
Les gens qui souhaitent une perte de poids et des muscles saillants et qui se tournent vers un programme de sèche.
Ceux qui cherchent à prendre du volume musculaire et qui sélectionne alors un programme de prise de masse.
Les personnes qui souhaitent développer une partie de leurs corps en particulier : Pectoraux, dos, abdominaux, etc … Ils s’orientent donc vers un programme spécifique d’isolation musculaire.
</p>
  <br></br>
  <h5 className='rrr'>Combien de temps garder son programme de musculation ?</h5>
  <p className='rre'>Si vous utilisez le même programme depuis un bon moment, vous êtes en droit de vous demander s’il faut le changer et surtout quand ? Pour faire simple et répondre à cette question simplement, il faut le changer dès que vous voyez un changement dans vos performances ou votre motivation.
Si votre programme fonctionne très bien et que son niveau de difficulté est adapté à votre niveau en musculation, alors ne changez rien. Pendant les séances si vous congestionnez bien, que vous avez du mal à finir vos dernières répétitions mais que tout se passe bien durant la séance et pendant la phase de récupération post workout, alors votre programme est parfait. Si au contraire vous n’arrivez pas à terminer votre programme à cause de charges trop lourdes ou d’un autre facteur, alors il est temps de le revoir ou de le changer. </p>
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
  </div>;
}

export default ProgrammeDeMuscu;