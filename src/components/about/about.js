import BeansLogo from '../beans-logo/beans-logo';

import aboutStyles from './about.module.scss';
import generalStyles from '../../general-styles/container.module.scss';

const About = (props) => {
  const {about, src} = props;
  
  return (
    <section className={aboutStyles.about}>
      <div className={generalStyles.container}>
        <div className={aboutStyles.wraper}>
          <div className={aboutStyles.imgAbout}>
              <img src={src} alt="about img" />
          </div>

          <div className={aboutStyles.descr}>
            <h3 className={aboutStyles.title}>
              {about}
            </h3>

            <BeansLogo />

            <p>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold feel <br />
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;