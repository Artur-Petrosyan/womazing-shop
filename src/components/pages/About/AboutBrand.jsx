import { useNavigate } from 'react-router-dom';
import styles from './AboutBrand.module.scss';
import topImage from './assets/images/topImage.svg';
import bottomImage from './assets/images/bottomImage.svg';
import Button from '../../../ui-kit/Button/Button';

const About = () => {
  const navigate = useNavigate();
  const textTop = 'Womazing была основана\
    в 2010-ом и стала одной из самых успешных\
    компаний нашей страны. Как и многие итальянские\
    фирмы, Womazing остаётся семейной компанией, хотя\
    ни один из членов семьи не является модельером.';
  const textBottom = ' Мы действуем по успешной формуле, прибегая к услугам\
    известных модельеров для создания своих коллекций.\
    Этот метод был описан критиком моды Колином Макдауэллом \
    как форма дизайнерского со-творчества, характерная \
    для ряда итальянских prêt-a-porter компаний. ';
  const textSecondTop = 'Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция \
    состояла из двух пальто и костюма,\
     которые были копиями парижских моделей.';

  const textSecondBottom = 'Несмотря на то, что по образованию основательница была адвокатом,\
   ее семья всегда была тесно связана с шитьём(прабабушка основательницы \
      шила одежду для женщин, а мать основала профессиональную школу кроя и шитья)\
      .Стремление производить одежду для масс несло в себе большие перспективы,\
       особенно в то время, когда высокая мода по - прежнему доминировала, а рынка\
        качественного prêt - a - porter попросту не существовало. ';

  const setText = (textTop, textBottom) => (
    <div className={styles.text_container}>
      <p style={{ marginBottom: '10px' }}>{textTop}</p>
      <p>{textBottom}</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        О бренде
      </h1>
      <div className={styles.first_part}>
        <div>
          <img src={topImage} alt="GIRL" />
        </div>
        <div>
          <h3 className={styles.h3}>Идея и женщина</h3>
          {setText(textTop, textBottom)}
        </div>
      </div>
      <div className={styles.second_part}>
        <div>
          <h3 className={styles.h3}>Магия в деталях</h3>
          {setText(textSecondTop, textSecondBottom)}
        </div>
        <div>
          <img src={bottomImage} alt="GIRL" />
        </div>

      </div>
      <div className={styles.btnContainer}>
        <Button className="default_button" onClick={() => navigate('/store')}>
          Перейти в магазин
        </Button>
      </div>
    </div>
  );
};

export default About;
