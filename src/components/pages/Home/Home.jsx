import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from '../../../ui-kit/Button/Button';

import arrow from '../../../ui-kit/Button/assets/icons/arrow.svg';
import girl from './assets/images/girl.svg';
import cardImg from './assets/images/girlSection2.svg';
import quality from './assets/icons/quality.svg';
import hand from './assets/icons/hand.svg';
import speed from './assets/icons/speed.svg';
import threeGirls from './assets/images/threeGirls.svg';
import arrowLeft from './assets/icons/arrowLeft.svg';
import arrowRight from './assets/icons/arrowRight.svg';

import styles from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(
    [{
      first: true,
      second: false,
    }],
  );
  const [slide, setSlide] = useState(1);
  const slideimg = [
    {
      id: 1, image: threeGirls, title: 'threeGirls',
    },
    {
      id: 2, image: girl, title: 'girl',
    },
    {
      id: 3, image: threeGirls, title: 'threeGirls',
    },
  ];

  const arrowToLeft = () => {
    if (slide !== 1) {
      return setSlide(slide - 1);
    }
  };
  const arrowToRight = () => {
    if (slide !== 3) {
      return setSlide(slide + 1);
    }
  };
  const onClickFirst = () => {
    setPage([{
      first: true,
      second: false,
    }]);
  };
  const onClickSecond = () => {
    setPage([{
      first: false,
      second: true,
    }]);
  };
  const toBasket = () => {
    navigate('store/addToBasket');
  };
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.content}>
        {page.map((item, index) => {
          if (item.first) {
            return (
              <div className={styles.leftPart} key={index}>

                <div className={styles.topText}>
                  <h1>
                    Новые поступления
                    {' '}
                    <br />
                    в этом сезоне
                  </h1>
                </div>
                <div className={styles.bottomText}>
                  <p className="large_p">
                    Утонченные сочетания и бархатные
                    <br />
                    оттенки - вот то,что вы искали в этом
                    <br />
                    сезоне. Время исследовать.
                  </p>
                </div>
                <div className={styles.buttons}>
                  <Button className={styles.leftBtn}>
                    <img src={arrow} alt="arrow" />
                  </Button>
                  <NavLink to="store">
                    <Button className={styles.rightBtn}>
                      Открыть магазин
                    </Button>
                  </NavLink>

                </div>
                <div className={styles.bottomBtns}>
                  <Button
                    onClick={onClickFirst}
                    className={styles.slideLeftBtn}
                  >
                    {'<'}
                  </Button>
                  <Button
                    onClick={onClickSecond}
                    className={styles.slideRightBtn}
                  >
                    {'>'}
                  </Button>
                </div>
              </div>
            );
          }
          return (
            <div
              className={styles.leftPart}
              key={index}
            >
              <div className={styles.topText}>
                <p>
                  Новые поступления
                  {' '}
                  <br />
                  в этом сезоне
                </p>
              </div>
              <div className={styles.bottomText}>
                <p className="large_p">
                  Утонченные сочетания и бархатные
                  <br />
                  оттенки - вот то,что вы искали в этом
                  <br />
                  сезоне. Время исследовать.
                </p>
              </div>
              <div className={styles.buttons}>
                <Button className={styles.leftBtn}>
                  <img src={arrow} alt="arrow" />
                </Button>
                <NavLink to="store">
                  <Button className={styles.rightBtn}>
                    Открыть магазин
                  </Button>
                </NavLink>
              </div>
              <div className={styles.bottomBtns}>
                <Button
                  onClick={onClickFirst}
                  className={styles.slideLeftBtn}
                >
                  {'<'}
                </Button>
                <Button
                  onClick={onClickSecond}
                  className={styles.slideRightBtn}
                >
                  {'>'}
                </Button>
              </div>
            </div>
          );
        })}
        <div className={styles.rightPart}>
          <div><img src={girl} alt="Girl" /></div>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.section_2_top}>
          <h2>
            Новая коллекция
          </h2>
        </div>
        <div className={styles.section_2_content}>
          <div className={styles.card} onClick={toBasket}>
            <img src={cardImg} alt="girl" className={styles.card_img} />
            <h4>
              Футболка USA
            </h4>
            <p className="card_price">

              $129
            </p>
            {' '}
            {/* Statov grel giny */}
          </div>
          <div className={styles.card} onClick={toBasket}>
            <img src={cardImg} alt="girl" className={styles.card_img} />
            <h4>
              Купальник Glow
            </h4>
            <p className="card_price">
              $129
            </p>
          </div>
          <div className={styles.card} onClick={toBasket}>
            <img src={cardImg} alt="girl" className={styles.card_img} />
            <h4>
              Свитшот Sweet Shot
            </h4>
            <p className="card_price">
              $129
            </p>
          </div>
        </div>
        <div className={styles.section_2_btn}>
          <NavLink to="store">
            <Button className={styles.rightBtn}>
              Открыть магазин
            </Button>
          </NavLink>
        </div>
      </div>
      <div className={styles.section_3}>
        <div className={styles.section_3_top}>
          <h2 className={styles.section_h2}>
            Что для нас важно
          </h2>
        </div>
        <div className={styles.section_3_card}>
          <div className={styles.section_3_card_content}>
            <img src={quality} alt="quality" className={styles.card_img} />
            <h3 className={styles.card_h3}>
              Качество
            </h3>
            <div className={styles.card_text_content}>
              <p className={styles.card_text}>
                Наши профессионалы работают на
                <br />
                лучшем оборудовании для пошива
                <br />
                одежды беспрецедентного
                <br />
                качества
              </p>
            </div>
          </div>
          <div className={styles.section_3_card_content}>
            <img src={speed} alt="speed" className={styles.card_img} />
            <h3 className={styles.card_h3}>
              Скорость
            </h3>
            <div className={styles.card_text_content}>
              <p className={styles.card_text}>
                Благодаря отлаженной системе в
                <br />
                Womazing мы можем отшивать до
                <br />
                20-ти единиц продукции в наших
                {' '}
                <br />
                {' '}
                собственных цехах
              </p>
            </div>
          </div>
          <div className={styles.section_3_card_content}>
            <img src={hand} alt="hand" className={styles.card_img} />
            <h3 className={styles.card_h3}>Ответственность</h3>
            <div className={styles.card_text_content}>
              <p className={styles.card_text}>
                Мы заботимся о людях и планете.
                <br />
                Безотходное производство и
                <br />
                комфортные условия труда - все
                <br />
                это Womazing

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_4}>
        <div className={styles.section_4_top}>
          <h2 className={styles.section_h2}>
            Команда мечты Womazing
          </h2>
        </div>
        <div className={styles.section_4_content}>
          <div className={styles.section_4_left_part}>
            <div onClick={arrowToLeft}>
              <img src={arrowLeft} alt="arrowLeft" className={arrowLeft} />
            </div>
            <div className={styles.section_4_img}>
              {slideimg.filter((item) => item.id === slide).map((item) => <img src={item.image} key={item.id} />)}
            </div>
            <div onClick={arrowToRight}>
              <img src={arrowRight} alt="arrowRight" className={arrowRight} />
            </div>
          </div>
          <div className={styles.section_4_right_part}>
            <h3 className={styles.card_h3}>Для каждой</h3>
            <div className={styles.section_4_text_container}>
              <p className={styles.card_text}>
                Каждая девушка уникальна.
                <br />
                {' '}
                Однако, мы схожи в
                <br />
                миллионе мелочей.
                <br />
                <br />
                Womazing ищет эти мелочи и
                <br />
                {' '}
                создает прекрасные вещи,
                <br />
                {' '}
                которые выгодно
                <br />
                {' '}
                подчеркивают достоинства
                <br />
                {' '}
                каждой девушки.

              </p>
            </div>
            <NavLink
              to="about"
              className={styles.section_navLink}
            >
              Подробнее о бренде
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
