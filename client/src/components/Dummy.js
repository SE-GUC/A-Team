import React, { Component } from 'react';
import Nav, { NavGeneral } from './NavGeneral'
import Blur from '../media/blur1.png'
import Bus from '../media/bus.jpg'
import CS from '../media/cs.jpg'
import Banner from '../media/banner.jpg'
class Dummy  extends Component {
    render() {
        return(
           <div>
               <NavGeneral/>

   <div className='pxl'>
   <div class="parallax-container">
            <img src={Blur}/>
      <div class="parallax" style={{backgroundImage:Banner}}>
      <div className='pxl'>
      
      </div>
      
      
      </div>
    </div>
    <div class="section grey darken-4">
      <div class="row container">
        <h2 class="white-text header">Our  Vision</h2>
        <p class="white-text">
        Technology is reforming the way work gets done so radically that all business
        domains are changing. All aspects of the professional work environment is
        rapidly evolving from workflow, processes and the very structure of organizations.
        Startups, with their creative ability to innovate, are competing and
        defeating major enterprises. Hence, itʼs no surprise this is called the disruptive
        era.
        A considerable number of enterprises are just selling their establishment and
        the facade of a strong grip. Theyʼre charging premium because they can, not
        because of the quality they produce. Pair that with the disruption caused by
        the changing economy, one can understand why enterprises are trying to
        change they way they operate. The are trying their best to attract talent as
        their need for innovative talent is higher than ever.</p></div>
    </div>

    <div class="parallax-container">
    <img src={Bus}/>
      <div class="parallax"></div>
    </div>
    <div class="section  grey darken-4">
      <div class="row container">
        <h2 class="white-text header">Discover Yourself</h2>
        <p class="white-text text-white">The problem enterprises are facing is that they are unable to attract talent.
Enterprises are also facing a hard time keeping their talented employees
from leaving, specially the young change-enthusiasts. The bureaucracy, routine,
non-ending lists of rules, unfair distribution of revenues and constraints
are just the tip of the iceberg. In this day and age, the market is changing
more rapidly than ever, and the talent demand is changing even faster. Highly
creative people are increasingly refusing the traditional ”work as usual” lifestyle.
This talent acquisition crisis that is addressed globally urged the enterprises
to go further than they have ever went in trying to find a solution. Their
salvation, they think, is Digital Transformation, one of the most trending
buzzwords in the business world nowadays. Digital Transformation pushes
enterprises in all domains to restructure themselves, their hierarchy and
work-flow with to embracing the agile behavior, creating a more attractive
work environment for highly talented people.</p></div>
    </div>

    <div class="parallax-container">
      <div class="parallax"><img src={Blur}/></div>
    </div>
    <div class="section grey darken-4">
      <div class="row container">
        <h2 class="white-texr header">We Belive in you</h2>
        <p class="white-text">Workforce, expertise, infrastructure and management. The idea is to dynamically
and on demand assign, consult, allocate and oversee a required task
throughout itʼs execution. The entity with a task, a well-suited candidate for
the task and finally the consultancy. Consultancies will allow companies to
be sure that their tasks will be fulfilled. Also, will help people choose the right
tasks that they can perform given their abilities. Because in Lirten we believe
that motivation and talent run supreme</p></div>
    

           </div>
           <div class="parallax-container">
      <div class="parallax"><img src="images/parallax2.jpg"/></div>
    </div>
   </div>
           </div>
        );
      
    }
}
export default Dummy;