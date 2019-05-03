import React from 'react';
import Layout from '../components/Layout/Layout';
import SunSvg from '../components/SunSvg/SunSvg';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const omOs = () => (

  <Layout>
      <Helmet>
      <title>Om ‘Så er det nu: Gør valget grønt’</title>
    </Helmet>
    <section className="section section-signup fullHeight">
      <SunSvg/>
      <div className="container-fluid wrap">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 col-xs-12">
            <div className="container-fluid white-box fade-in">
              <div className="row">
                <div className="col-xs-12">
                <Link to="/">&larr; Til forsiden</Link>
                  <h2>Om ‘Så er det nu: Gør valget grønt’</h2>
                  <p>Formålet med initiativet ‘Så er det nu: Gør valget grønt’ er at gøre det kommende folketingsvalg grønt. 
                  Sammen med alle de borgere der vil, vil vi sætte klima, natur og miljø øverst på den politiske dagsorden. <br /><br />
                  Vi mener, at politikerne skal forpligte sig på at arbejde for grønne, langsigtede løsninger på klimaudfordringerne. 
                  Derfor har vi startet en kampagne frem mod folketingsvalget, som skal gøre det let at engagere 
                titusinder af mennesker i arbejdet med at præge den politiske diskussion i en mere grøn retning.<br /><br />
                  Vi mener, at vi her og nu skal iværksætte den nødvendige omstilling af vores samfund, 
                  for at undgå at den globale opvarmning overstiger 1,5 grader. 
                  Vi skal sikre at vores produktion og forbrug sker i fuld balance med naturgrundlag, 
                  klima og dyreliv. Danmark skal gå først i den grønne omstilling og vise, at det er muligt at finde de nye løsninger. 
                  Vi skal beskytte vores vand - både vores drikkevand og verdenshavene. Og vi skal bevare et stabilt klima 
                  og varieret dyre- og planteliv. Vi skal sørge for, at de næste generationer også kan nyde den summende humlebi,
                   den sky hare og havørnens brede vingefang.
                  </p>
                  <br />
                  <h3>Sådan skaber vi forandringen nu</h3>
                  <p className="bold-text">Lægger målrettet pres på politikerne</p>
                  <p>Vi arbejder målrettet for at sætte klima og natur øverst på den politiske dagsorden og sikre, at så mange af de kommende folketingsmedlemmer som muligt forpligter sig på at arbejde for kampagnens tre mål om klima, naturareal og drikkevand. Vi går efter klare og konkrete forpligtelser fra så mange Folketingsmedlemmer som muligt.
                  </p>
                  <br />
                  <p className="bold-text">Er meget mere end en underskriftsindsamling</p>
                  <p>Kampagnen er startet som en underskriftsindsamling for at samle så mange borgere, som muligt, der ønsker at gøre valget grønt. Men underskrifterne er blot begyndelsen. Med underskrifterne har vi en database på titusindvis af borgere, som vi kan engagere til at lægge yderligere pres på politikerne. Dels gennem en “prik-en-politiker”-hjemmeside, der tillader underskriverne at sende en hilsen til deres lokale politikere og bede dem forpligte sig på kampagnens mål. Dels ved at opfordre dem til at deltage i vælgermøder og forpligte politikerne ansigt til ansigt.</p>
                  <br />
                  <p className="bold-text">Er en bredt forankret grøn alliance</p>
                  <p>"Så er det nu" er startet som et frivilligt borgerinitiativ. Men vi skal ikke være endnu en grøn forening, der konkurrerer med allerede etablerede organisationer og initiativer. Tværtimod er vores mål at skabe en bredt favnende platform, der kan samle borgere og organisationer til at arbejde sammen om at lægge fælles pres på Folketinget. Der er allerede mange grønne organisationer i Danmark, der hver især har deres tilgang til klima, miljø og natur. Med deres egne mærkesager, medlemsinteresser og arbejdsmetoder. 
                    Nogle organisationer – som Danmarks Naturfredningsforening og Verdens Skove – har besluttet at gå fuldt og helt ind i kampagnen - med et større støttebeløb og aktiv kommunikation til både omverden og medlemmer. Andre vælger at deltage på andre måder:  
                  </p>
                  <img src="../img/trappe_web.png" className="max-width"></img>
                  <p>Men fælles er, at alle organisationer, der bakker op om kampagnens mål, kan stå som medafsendere med deres logo og navn på hjemmesiden. Jo flere vi er, jo stærkere står vi.</p>
                  <br />
                  <p className="bold-text">Fortsætter efter valget</p>
                  <p>Selvom kampagnen hedder “Gør valget grønt”, så slutter “Så er det nu” ikke når valget er overstået. Vores ambition er at bygge en bredt forankret grøn alliance og kampagneplatform, der kan stille den nye regering til ansvar og lægge et samlet pres på konkrete politik-indsatser for at sikre, at vores tre mål bliver indfriet. 
                    Hvordan denne alliance skal opbygges organisatorisk være bygget op og hvordan de enkelte deltagende organisationer får indflydelse på udviklingen, er endnu ikke fastlagt. Som frivilligt borgerinitiativ lægger vi i høj grad skinnerne mens toget kører. 
                  </p>
                  <br />

                  

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default omOs;