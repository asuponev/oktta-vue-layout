<script>
import AppBreadcrumbs from '@/components/UI/AppBreadcrumbs.vue'
import DetailCaseIntro from '@/components/DetailCaseIntro.vue'
import NextCase from '@/components/NextCase.vue'
import nextCaseImg from '@/assets/images/mock-content/cases-page-1.png'

export default {
  components: {
    AppBreadcrumbs,
    DetailCaseIntro,
    NextCase
  },
  data() {
    return {
      caseItem: {
        id: 1,
        title: 'B2CPL',
        year: '2022',
        description:
          'Компания B2CPL предоставляет своим клиентам комплексные решения для электронной коммерции в сфере курьерской достав­ки и логистики',
        links: [
          { name: 'сайт', link: 'https://www.google.com/' },
          { name: 'приложение', link: 'https://www.google.com/' },
          { name: 'кейс на behance', link: 'https://www.google.com/' },
          { name: 'отзыв', link: 'https://www.google.com/' }
        ]
      },
      nextCase: {
        id: 2,
        title: 'Логотип Vybez',
        image: nextCaseImg,
        category: 'брендинг',
        url: '/cases/mesh-3'
      },
      works: [
        {
          id: 1,
          title: 'Анализ метрик',
          description:
            'Провели обзор и анализ систем метрики с целью сбора данных об аудитории интерфейса, а также для оценки его юзабилити.'
        },
        {
          id: 2,
          title: 'Анкетирование',
          description:
            'Определили основные сегменты ЦА с помощью первичного интервью и анализа данных в системах метрик. Провели анкетирование пользователей.'
        },
        {
          id: 3,
          title: 'CJM',
          description:
            'Составили карту пути пользователя (Customer Journey Map) с целью графически изобразить взаимодействие представителя ЦА с трекером: выявить точки контакта, цели и ожидания от продукта; эмоции, отметить позитивный опыт и барьеры/болевые точки, которые могут возникнуть.'
        },
        {
          id: 4,
          title: 'UX-тестирование',
          description:
            'Провели серию UX-тестирований с целью наблюдения за объективным поведением пользователей в трекере назначения даты и временного интервала доставки.'
        },
        {
          id: 5,
          title: 'Глубинные интервью',
          description:
            'Проводилось с целью сбора более детальных данных, касающихся особенностей пользовательского опыта, связанного с взаимодействием с трекерами назначения доставки и курьерскими службами в целом.'
        },
        {
          id: 6,
          title: 'Экспертный анализ',
          description:
            'Проводился с привлечением UX-исследователя и UX-дизайнера, опираясь на экспертный опыт и стандарты юзабилити для выявления основных проблем интерфейса.'
        }
      ],
      metrics: [
        {
          id: 1,
          text: 'провели демографический анализ аудитории трекера для того, чтобы просегментировать ее по возрастным/половым критериям'
        },
        {
          id: 2,
          text: 'проанализировали, из каких регионов идет наибольший трафик и какие из них имеют наивысший процент отказов'
        },
        {
          id: 3,
          text: 'выявили, в какие дни недели, обычно, идет наибольшая нагрузка на сервис'
        },
        {
          id: 4,
          text: 'провели анализ карты ссылок и кликов'
        },
        {
          id: 5,
          text: 'провели анализ вебвизора, разделив посетителей на 3 сегмента: достигли цели «Назначение доставки»; не удалось достигнуть цели «Назначение доставки»; визиты, при которых дата и временной интервал были согласованы ранее'
        },
        {
          id: 6,
          text: 'проанализировали с каких браузеров происходит наибольший процент отказов'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <app-breadcrumbs
      :items="[{ name: 'Кейсы', path: '/cases' }, { name: 'B2CPL' }]"
    />
    <detail-case-intro :caseItem="caseItem" />
    <section class="mission section">
      <div class="wrapper">
        <div class="mission__content">
          <div class="mission__title">
            <h2 class="section__title">
              З<span class="italic">а</span>да<span class="italic">ч</span>а
            </h2>
          </div>
          <div class="mission__subtitle">
            <p class="section__subtitle">
              Выяснить, с какими проблемами сталкиваются пользователи при
              назначении доставки в трекере. Что влияет на увеличение конверсии
              и какие факторы приводят к отказам
            </p>
          </div>
          <div class="mission__visual">
            <img
              src="@/assets/images/case-b2cpl/mission-img.png"
              alt="mission-visual"
              class="full-container-img"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="work section">
      <div class="wrapper">
        <div class="work__content">
          <div class="work__title">
            <h2 class="section__title">
              Вып<span class="italic">о</span>лненн<span class="italic">ы</span
              >е раб<span class="italic">о</span>ты
            </h2>
          </div>
          <div class="work__subtitle">
            <p class="section__subtitle">
              В исследовании мы совместили качественные и количественные методы:
              изучили метрики, провели анкетирование среди пользователей
              интернет-магазина, UX-тестирование и серию глубинных интервью, а
              также экспертный аудит сайта.
            </p>
          </div>
          <div class="work__visual">
            <div class="work__items">
              <div
                class="work__item"
                v-for="(item, index) in works"
                :key="item.id"
              >
                <p class="work__item-id">
                  ({{ index < 10 ? `0${index + 1}` : index }})
                </p>
                <h3 class="work__item-title">
                  {{ item.title }}
                </h3>
                <p class="work__item-description">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="metrics section">
      <div class="wrapper">
        <div class="metrics__content">
          <div class="metrics__block">
            <h2 class="metrics__title section__title">
              Ан<span class="italic">а</span>лиз
              <span class="italic">м</span>етрик
            </h2>
            <p class="metrics__subtitle section__subtitle">
              Опираясь на данные веб-аналитики, мы изучили типы пользователей,
              особенности их поведения.
            </p>
          </div>
          <div class="metrics__block">
            <div class="metrics__items">
              <div
                class="metrics__item"
                v-for="(item, index) in metrics"
                :key="item.id"
              >
                <p class="metrics__item-id">
                  ({{ index < 10 ? `0${index + 1}` : index }})
                </p>
                <p class="metrics__item-text">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="metrics__visual">
          <img
            src="@/assets/images/case-b2cpl/metrics-img.png"
            alt="metrics-visual"
            class="full-container-img"
          />
        </div>
      </div>
    </section>
    <section class="survey section">
      <div class="wrapper">
        <div class="survey__content">
          <div class="survey__title">
            <h2 class="section__title">
              Анке<span class="italic">т</span>иров<span class="italic">а</span
              >ние
            </h2>
          </div>
          <div class="survey__text">
            <p class="section__subtitle">
              Анкетирование проводилось среди представителей целевой аудитории,
              которые имели релевантный опыт назначения даты и времени доставки
              заказа в курьерской службе не позднее 6 месяцев назад. Сбор анкет
              проводился с помощью сервиса Survio.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="test section">
      <div class="wrapper">
        <div class="test__content">
          <div class="test__title">
            <h2 class="section__title">
              UX-тест<span class="italic">и</span>рование
            </h2>
          </div>
          <div class="test__text">
            <p class="section__subtitle">
              Провели серию UX-тестирований на сайте для того, чтобы выяснить,
              какие барьеры встают перед респондентами на пути назначения даты
              доставки и с какими возможными трудностями они сталкиваются.
              Задание для теста было построено таким образом, чтобы всеобъемлюще
              охватить варианты сценариев, с которыми встречаются пользователи
              при взаимодействии с трекером.<br /><br />
              На начальном этапе респондентам давался ряд скрининговых вопросов
              для того, чтобы подтвердить опыт пользователей и быть уверенными
              в их релевантности.<br /><br />
              В результате проведения тестов, были обнаружены некоторые
              сложности, для которых в дальнейшем были предложены варианты
              решений.
            </p>
          </div>
        </div>
        <div class="test__visual">
          <h2 class="section__title">
            В<span class="italic">ы</span>полнили р<span class="italic">я</span
            >д<br />
            следу<span class="italic">ю</span>щих работ:
          </h2>
          <img
            src="@/assets/images/case-b2cpl/test-img.png"
            alt="test-visual"
            class="full-container-img"
          />
        </div>
      </div>
    </section>
    <section class="review section">
      <div class="wrapper">
        <div class="review__content">
          <svg class="review__quote-icon">
            <use xlink:href="@/assets/icons/quote.svg#quote" />
          </svg>
          <p class="review__text review__text--indent">
            B2CPL в лице директора по развитию Козловского Матвея выражает
            благодарность компании «Oktta». В период с февраля 2020 г.
            по сентябрь 2021 г. был проведен комплекс работ по редизайну личного
            кабинета, трекингового сервиса и комплексное UX-иследование.
            Подтверждаем, что все работы были выполнены в указанные договором
            сроки, в полном объеме с надлежащим качеством.
          </p>
          <p class="review__text review__text--opacity">
            Также хочется отметить положительные моменты сотрудничества: Крайнюю
            вовлеченность сотрудников компании Oktta в процесс разработки,
            широкий аналитический арсенал команды, готовность продолжать работу
            до достижения требуемого результата, несмотря на количество
            промежуточных итераций, оперативная работа — как в разработке
            этапов, так и в коммуникациях и обратной связи. Учитывая все
            вышесказанное, мы рекомендуем компанию «Oktta» другим организациям
            и с удовольствием будем продолжать наше сотрудничество.
          </p>
          <div class="review__company">
            <div class="review__company-logo">
              <img
                src="@/assets/images/case-b2cpl/review-logo-company.png"
                alt="company-logo"
              />
            </div>
            <div class="review__company-info">
              <p class="review__company-person">Матвей Козловский,</p>
              <p class="review__company-position">директор по развитию</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <next-case :nextCase="nextCase" />
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin-top: 72px;

  &.mission {
    margin-top: 92px;
  }

  &__title {
    font: $font-h2-gilroy;
    letter-spacing: -0.04em;

    .italic {
      font: $font-h2-playfair;
    }
  }

  &__subtitle {
    color: $color-text-secondary;
    letter-spacing: -0.03em;
  }
}

.full-container-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.mission {
  &__content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
  }

  &__title {
    grid-column: 7 / 13;
  }

  &__subtitle {
    grid-column: 7 / 13;
    margin-bottom: 31px;
    max-width: 375px;
  }

  &__visual {
    grid-column: 1 / 13;
    height: 725px;
    border-radius: 32px;
    overflow: hidden;
  }
}

.work {
  &__content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
  }

  &__title {
    grid-column: 5 / 13;
  }

  &__subtitle {
    grid-column: 5 / 13;
    margin-bottom: 31px;
    max-width: 486px;
  }

  &__visual {
    grid-column: 1 / 13;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__item {
    width: calc((100% - 40px) / 3);
    height: 352px;
    background: $color-bg-position-card;
    border: 1px solid $color-divider;
    border-radius: 24px;
    padding: 32px;
    display: flex;
    flex-direction: column;

    &-id {
      font: $font-small-playfair;
      line-height: 125%;
      color: $color-text-secondary;
    }

    &-title {
      font: $font-h3-gilroy;
      letter-spacing: -0.04em;
      margin: 64px 0 13px;
    }

    &-description {
      font-size: 14px;
      letter-spacing: -0.03em;
      color: $color-text-secondary;
      line-height: 150%;
    }
  }
}

.metrics {
  &__content {
    width: 100%;
    padding: 70px;
    color: $color-general-white;
    background: $color-bg-dark;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
  }

  &__block {
    &:first-child {
      max-width: 345px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &:last-child {
      width: calc(50% - 20px / 2);
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    padding: 26px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' rx='24' style='fill: none; stroke: rgba(255, 255, 255, 0.09); stroke-width: 2; stroke-dasharray: 10 10'/></svg>");

    &-id {
      font: $font-small-playfair;
      font-size: 13px;
    }

    &-text {
      color: $color-text-secondary;
      letter-spacing: -0.03em;
    }
  }

  &__visual {
    margin-top: 30px;
    height: 725px;
    border-radius: 32px;
    background: $color-bg-position-card;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      padding-top: 13px;
    }
  }
}

.survey {
  &__content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
  }

  &__title {
    grid-column: 3 / 7;
  }

  &__text {
    grid-column: 7 / 11;
  }
}

.test {
  &__content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
  }

  &__title {
    grid-column: 3 / 7;
  }

  &__text {
    grid-column: 7 / 11;
  }

  &__visual {
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin-top: 72px;
  }
}

.review {
  &__content {
    padding: 70px 0;
    color: $color-general-white;
    background: $color-bg-dark;
    border-radius: 32px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px 20px;
    position: relative;
    overflow: hidden;
  }

  &__text {
    grid-column: 2 / 12;
    font: $font-h3-gilroy;
    line-height: 140%;
    letter-spacing: -0.04em;

    &--indent {
      text-indent: 196px;
    }

    &--opacity {
      opacity: 0.5;
    }
  }

  &__quote-icon {
    position: absolute;
    width: 110px;
    height: 110px;
    top: -8px;
    left: 142px;
  }

  &__company {
    grid-column: 2 / 13;
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 24px;

    &-logo {
      width: 100px;
      height: 100px;
      border: 1px solid $color-border-input;
      background: $color-general-dark;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 60px;
        height: 30px;
      }
    }

    &-info {
      font-size: 18px;
      letter-spacing: -0.02em;
      font-feature-settings: 'kern' off;
    }

    &-position {
      color: $color-text-secondary;
    }
  }
}

@media (max-width: 1024px) {
  .section {
    margin-top: 48px;

    &.mission {
      margin-top: 72px;
    }

    &__title {
      font-size: 32px;

      .italic {
        font-size: 32px;
      }
    }
  }

  .mission {
    &__content {
      grid-template-columns: repeat(4, 1fr);
      gap: 20px 8px;
    }

    &__title {
      grid-column: 3 / 5;
    }

    &__subtitle {
      grid-column: 3 / 5;
      margin-bottom: 32px;
    }

    &__visual {
      grid-column: 1 / 5;
      height: 400px;
    }
  }

  .work {
    &__content {
      grid-template-columns: repeat(4, 1fr);
      gap: 24px 8px;
    }

    &__title {
      grid-column: 3 / 5;
    }

    &__subtitle {
      grid-column: 3 / 5;
      margin-bottom: 25px;
    }

    &__visual {
      grid-column: 1 / 5;
    }

    &__item {
      width: calc(50% - 20px / 2);
      height: auto;

      &-title {
        font-size: 24px;
      }
    }
  }

  .metrics {
    &__content {
      padding: 48px;
    }

    &__block {
      &:first-child {
        max-width: 280px;
      }

      &:last-child {
        width: calc(50% + 20px);
      }
    }

    &__item {
      &-text {
        font-size: 14px;
        line-height: 150%;
      }
    }

    &__visual {
      height: 400px;

      img {
        padding-top: 9px;
        object-fit: contain;
      }
    }
  }

  .survey {
    &__content {
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    &__title {
      grid-column: 1 / 3;
    }

    &__text {
      grid-column: 3 / 5;
    }
  }

  .test {
    &__content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px 8px;
    }

    &__title {
      grid-column: 1 / 3;
    }

    &__text {
      grid-column: 3 / 5;
    }

    &__visual {
      gap: 48px;
      margin-top: 48px;
    }
  }

  .review {
    &__content {
      padding: 60px 48px 48px;
      grid-template-columns: repeat(4, 1fr);
      gap: 26px 8px;
    }

    &__text {
      grid-column: 1 / 5;
      font-size: 24px;

      &--indent {
        text-indent: 136px;
      }
    }

    &__quote-icon {
      width: 88px;
      height: 88px;
      top: -4px;
      left: 76px;
    }

    &__company {
      grid-column: 1 / 5;
      gap: 32px;

      &-logo {
        width: 80px;
        height: 80px;

        img {
          width: 48px;
          height: 24px;
        }
      }
    }
  }
}

@media (max-width: 590px) {
  .section {
    // margin-top: 48px;

    &.mission {
      margin-top: 48px;
    }

    // &__title {
    //   font-size: 32px;

    //   .italic {
    //     font-size: 32px;
    //   }
    // }
  }

  .mission {
    &__title {
      grid-column: 1 / 5;
    }

    &__subtitle {
      grid-column: 1 / 5;
    }

    &__visual {
      height: 350px;
    }
  }

  .work {
    &__title {
      grid-column: 1 / 5;
    }

    &__subtitle {
      grid-column: 1 / 5;
      margin-bottom: 24px;
    }

    &__item {
      width: 100%;
      padding: 24px;

      &-title {
        font-size: 24px;
        margin: 48px 0 12px;
      }
    }
  }

  .metrics {
    &__content {
      flex-direction: column;
      padding: 48px 0;
      gap: 48px;
    }

    &__block {
      &:first-child {
        max-width: 100%;
        align-items: center;
      }

      &:last-child {
        width: 100%;
      }
    }

    &__title,
    &__subtitle {
      text-align: center;
      max-width: 280px;
    }

    &__items {
      flex-direction: row;
      overflow-x: scroll;
      padding-inline: 24px;
      padding-bottom: 20px;
    }

    &__item {
      min-width: 320px;
    }

    &__visual {
      margin-top: 16px;
      height: 350px;
    }
  }

  .survey {
    &__content {
      gap: 24px 8px;
    }

    &__title {
      grid-column: 1 / 5;
    }

    &__text {
      grid-column: 1 / 5;
    }
  }

  .test {
    &__content {
      gap: 24px 8px;
    }

    &__title {
      grid-column: 1 / 5;
    }

    &__text {
      grid-column: 1 / 5;
    }

    &__visual {
      gap: 24px;
    }
  }

  .review {
    &__content {
      padding: 32px 24px;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px 8px;
    }

    &__text {
      font-size: 14px;
      line-height: 150%;
      letter-spacing: -0.03em;

      &--indent {
        text-indent: 84px;
      }
    }

    &__quote-icon {
      width: 58px;
      height: 58px;
      top: -12px;
      left: 34px;
    }

    &__company {
      gap: 12px;
      margin-top: 4px;

      &-logo {
        width: 64px;
        height: 64px;

        img {
          width: 38px;
          height: 19px;
        }
      }

      &-info {
        font-size: 16px;
        letter-spacing: -0.03em;
      }
    }
  }
}
</style>
