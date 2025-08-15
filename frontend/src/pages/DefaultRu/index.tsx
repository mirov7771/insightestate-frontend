import {FC, useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router';
import { Dropdown } from '@/widgets/Dropdown/Dropdown';
import { Text } from '@/shared/ui';
import {isMobile} from "react-device-detect";
import {Logo, WhiteLogo} from "@/shared/assets/icons";

export const DefaultRu: FC = () => {
  const navigate = useNavigate();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTop = useRef(0);
  const handleEn = () => {
    localStorage.setItem('language', 'en');
    navigate('/en');
  };

  const [showCookies, setShowCookies] = useState(true);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > 100) {
      // Scrolling down
      setIsScrollingDown(true);
    } else if (currentScrollTop === 0) {
      // Scrolling up or at the top
      setIsScrollingDown(false);
    }
    lastScrollTop.current = currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
        }}
      />
      <meta charSet="utf-8" />
      <title>Lots Of Properties</title>
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://insight-estate.webflow.io/ru/agent-landing"
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href="https://insight-estate.webflow.io/ru/agent-landing"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://insight-estate.webflow.io/en/agent-landing"
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        href="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/css/insight-estate.shared.f3c1e63bf.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/css/insight-estate.685923f9147c06ff04f8ceb0-1fb59614b.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lora:regular,500,600,700,italic,500italic,600italic,700italic%7CRoboto+Condensed:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic%7CRoboto+Mono:100,200,300,regular,500,600,700,100italic,200italic,300italic,italic,500italic,600italic,700italic%7CRoboto:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic&subset=cyrillic,cyrillic-ext,latin,latin-ext,cyrillic,cyrillic-ext,latin,latin-ext,cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,math,symbols,vietnamese"
        media="all"
      />
      <link
        href="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6757cf6eb58e0f5f59889b85_favicon32.png"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6757cf720107dd3906e5d942_favicon256.png"
        rel="apple-touch-icon"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: '\n  h1 {\n    will-change: unset;\n  }\n',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n  .iti__country-list {\n    max-height: 250px !important;\n    overflow-y: auto !important;\n    background-color: white !important;\n    color: black !important;\n    z-index: 10000 !important;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n  }\n  .iti__country {\n    color: black !important;\n  }\n  /* Убираем фиксированное позиционирование мобильного popup-а */\n  .iti-mobile .intl-tel-input.iti-container {\n    position: absolute !important;\n    top: auto !important;\n    height: auto !important;\n  }\n  .iti__search-input {\n    color: black;\n  }\n',
        }}
      />
      <meta name="yandex-verification" content="0a90f822b8e8682e" />
      {/* Yandex.Metrika counter */}
      <noscript>
        &lt;div&gt;&lt;img src="https://mc.yandex.ru/watch/99257951" style="position: absolute;
        left: -9999px" alt="" /&gt;&lt;/div &gt;
      </noscript>
      {/* /Yandex.Metrika counter */}
      {/* Google Tag Manager */}
      {/* End Google Tag Manager */}
      {/* Finsweet Cookie Consent */}
      {/* передача юрл в форму старт*/}
      {/* передача юрл в форму конец*/}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '[fs-cc="banner"],[fs-cc="manager"],[fs-cc="preferences"],[fs-cc="interaction"]{display:none}',
        }}
      />
      <div className="page-wrapper-updt">
        <div className="code-base w-embed">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html { font-size: 1rem; }\n  @media screen and (max-width:1440px) { html { font-size: calc(-0.000020811654526609047rem + 1.1111342351716964vw); } }\n  @media screen and (max-width:479px) { html { font-size: calc(0.00007776162790651409rem + 4.070930232558141vw); } }\n  @media screen and (max-width:393px) { html { font-size: calc(-0.0025510204081632647rem + 4.081632653061224vw); } }\n  \n    body {\n    -webkit-font-smoothing: antialiased;\n    -moz-font-smoothing: antialiased;\n    -o-font-smoothing: antialiased;\n  }\n  \nvideo {\n  width: 100%;\n  object-fit: cover;\n}\nvideo.wf-empty {\n  padding: 0;\n}\n',
            }}
          />
        </div>
        {showCookies ? (
          <div fs-cc="banner" className="flowappz-cookie-consent is-v3">
            <h5 className="cookie-heading-2 is-v3 text-size-body-2-cc">Мы используем Cookies</h5>
            <div className="cookie-buttons-group is-v3">
              <button
                fs-cc="close"
                className="accept-button is-v3"
                onClick={() => setShowCookies(false)}
              >
                OK
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        <header className="navbar1_component" style={{ color: 'rgb(0, 0, 0)' }}>
          <div
            data-animation="default"
            className="navbar1_inner w-nav"
            data-easing2="ease"
            fs-scrolldisable-element="smart-nav"
            data-easing="ease-out-quart"
            data-collapse="medium"
            data-w-id="68a79f6a-9d7d-678d-f904-58679220a08f"
            role="banner"
            data-duration={400}
          >
            <div className="navbar1_css w-embed">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n.navbar1_inner:has(.w-nav-button.w--open) .navbar1_logo-link,\n.navbar1_component:has(.w-nav-button.w--open) .navbar1_dropdown_toggle {\n  color: white;\n}\n\n.navbar1_inner:has(.w-nav-button:not(.w--open)) .navbar1_logo-link,\n.navbar1_inner:has(.w-nav-button:not(.w--open)) .navbar1_dropdown_toggle {\n  color: inherit;\n}\n',
                }}
              />
            </div>
            <div className="navbar1_background" />
            <div className="navbar1_container">
              <a href="/ru" className="navbar1_logo-link w-nav-brand">
                <Logo />
              </a>
              <div
                id="w-node-_68a79f6a-9d7d-678d-f904-58679220a0c1-04f8ceb0"
                className="navbar1_button-wrapper"
                style={{
                  marginRight: isMobile ? '-15vw' : '-5vw'
                }}
              >
                {isScrollingDown ?
                <a href="/login" className="button-cc is-navbar2-button w-button">
                      <Text variant="body1" bold>
                        Войти
                      </Text></a> :
                      <></>
                  }
                <Dropdown changeLocale={handleEn} />
              </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
          </div>
        </header>
        <div data-w-id="87d650d0-ee8a-757b-0cd5-5e6758a77d9c" className="cc_trigger" />
        <main className="main-wrapper">
          <header data-theme="light" className="section_cc_hero agent-page">
            <div className="hero_cc_sticky">
              <div style={{ objectPosition: '50% 50%' }} className="g_visual_wrap agent-page">
              </div>
              <div className="padding-global-cc">
                <div className="container-main-cc">
                  <div className="hero_cc_content agent-page" style={{
                    minHeight: '10svh',
                    paddingBottom: '3rem'
                  }}>
                    <h1 className="heading-style-h2-cc mb-16 mob-size-40">
                      От запроса клиента до готового предложения за несколько минут
                    </h1>
                    <p className="text-size-body-1-cc mb-40 is-ch mob-size-20">
                      Мгновенный доступ к полной базе проектов Таиланда. Создавайте клиентские подборки в несколько кликов и отслеживайте то, что действительно важно
                    </p>
                    <div className="button-group-cc is-right mb-16">
                      <a href="/register" className="button-cc _w-auto sizing-auto w-button">
                        <Text variant="body1" bold>
                          Попробовать бесплатно
                        </Text>
                      </a>
                    </div>
                    <p className="text-size-body-2-cc is-opacity-64-black center">
                      Без банковской карты. <br />
                      Отменить можно в любой момент
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section id="why-are-we" data-theme="dark" className="section_cc_features">
            <div className="features_cc_content-item is-6">
              <div className="container-main-cc">
                <div className="w-layout-grid features_cc_content-layout gap-0">
                  <div className="features_cc_content agent-page">
                    <div>
                      <div className="heading-style-h7-cc mb-8">
                        Создано агентами для&nbsp;агентов
                      </div>
                      <p className="text-size-body-3-cc">Всё, что нужно. Ничего лишнего</p>
                    </div>
                    <div>
                      <div className="text-size-body-2-cc is-opacity-64 mb-8 mob-size-16">
                        Забудьте про бесконечные чаты, устаревшие папки, неотвеченные звонки
                        застройщику.
                        <br />
                      </div>
                      <div className="text-size-body-2-cc is-opacity-64 mob-size-16">
                        Каждый оффер оформляется в понятную клиенту страницу с фото, планировками,
                        актуальными ценами и инвестиционной аналитикой
                      </div>
                    </div>
                  </div>
                  <div className="features_cc_image-wrapper agent-page">
                    <img
                      sizes="(max-width: 1634px) 100vw, 1634px"
                      srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6859359483d6e08a186a9193_Pic-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6859359483d6e08a186a9193_Pic-p-800.webp 800w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6859359483d6e08a186a9193_Pic-p-1080.webp 1080w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6859359483d6e08a186a9193_Pic-p-1600.webp 1600w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6859359483d6e08a186a9193_Pic.webp 1634w"
                      alt=""
                      src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6859359483d6e08a186a9193_Pic.webp"
                      loading="eager"
                      className="mob-hide"
                    />
                    <img
                      sizes="(max-width: 786px) 100vw, 786px"
                      srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595c82eed756d01c45226f_Pic%20(1)%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595c82eed756d01c45226f_Pic%20(1)%20(1).webp 786w"
                      alt=""
                      src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595c82eed756d01c45226f_Pic%20(1)%20(1).webp"
                      loading="eager"
                      className="desk-hide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="features_cc_content-item is-7">
              <div className="container-main-cc">
                <div className="w-layout-grid features_cc_content-layout">
                  <div
                    id="w-node-_2ca1f36f-7b55-e63d-3ef0-ac1abeb0ec86-04f8ceb0"
                    className="features_cc_image-wrapper"
                  >
                    <img
                      sizes="(max-width: 1634px) 100vw, 1634px"
                      srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685938803a2d3a7cf3ee6e12_Pic2-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685938803a2d3a7cf3ee6e12_Pic2-p-800.webp 800w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685938803a2d3a7cf3ee6e12_Pic2-p-1080.webp 1080w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685938803a2d3a7cf3ee6e12_Pic2-p-1600.webp 1600w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685938803a2d3a7cf3ee6e12_Pic2.webp 1634w"
                      alt=""
                      src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685938803a2d3a7cf3ee6e12_Pic2.webp"
                      loading="eager"
                      className="mob-hide"
                    />
                    <img
                      sizes="(max-width: 786px) 100vw, 786px"
                      srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595d0326cb34ad93366e42_Pic%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595d0326cb34ad93366e42_Pic%20(2).webp 786w"
                      alt=""
                      src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595d0326cb34ad93366e42_Pic%20(2).webp"
                      loading="eager"
                      className="desk-hide"
                    />
                  </div>
                  <div
                    id="w-node-_5f2b28df-3aee-455f-8dce-e8ee21fdca20-04f8ceb0"
                    className="features_cc_content agent-page"
                  >
                    <div>
                      <div className="heading-style-h7-cc mb-8">Только проверенные проекты</div>
                      <p className="text-size-body-3-cc">
                        Все проекты на одной платформе
                      </p>
                    </div>
                    <div>
                      <div className="text-size-body-2-cc is-opacity-64 mb-8 mob-size-16">
                        Все новостройки, актуальные цены, презентации застройщиков и планировки - всё, что нужно для быстрой и выгодной сделки.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features_cc_content-item is-8">
              <div className="container-main-cc">
                <div className="w-layout-grid features_cc_content-layout">
                  <div className="features_cc_content agent-page">
                    <div>
                      <div className="heading-style-h7-cc mb-8">Инвестиционная аналитика</div>
                      <p className="text-size-body-3-cc">
                        Все показатели для принятия взвешенного решения
                      </p>
                    </div>
                    <div>
                      <div className="text-size-body-2-cc is-opacity-64 mb-8 mob-size-16">
                        Каждый проект включает полный набор инвестиционных значений, рассчитанных на
                        настоящих данных: ROI, IRR, Cap Rate и другие показатели
                        <br />
                      </div>
                      <div className="text-size-body-2-cc is-opacity-64 mob-size-16">
                        Вы получаете обзор инфраструктуры, актуальные цены и наличие по юнитам.
                        Данные регулярно обновляются
                      </div>
                    </div>
                  </div>
                  <div className="features_cc_image-wrapper agent-page">
                    <img
                      sizes="(max-width: 786px) 100vw, 786px"
                      srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595db8a1e4c211db3e651a_Pic%20(3)-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595db8a1e4c211db3e651a_Pic%20(3).webp 786w"
                      alt=""
                      src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595db8a1e4c211db3e651a_Pic%20(3).webp"
                      loading="eager"
                      className="desk-hide"
                    />
                    <img
                      sizes="(max-width: 1634px) 100vw, 1634px"
                      srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68593ab9f2906528f61833f1_Pic3-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68593ab9f2906528f61833f1_Pic3-p-800.webp 800w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68593ab9f2906528f61833f1_Pic3-p-1080.webp 1080w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68593ab9f2906528f61833f1_Pic3-p-1600.webp 1600w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68593ab9f2906528f61833f1_Pic3.webp 1634w"
                      alt=""
                      src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68593ab9f2906528f61833f1_Pic3.webp"
                      loading="eager"
                      className="mob-hide"
                    />
                    <div className="div-block-55">
                      <div className="div-block-56">
                        <div className="div-block-58">
                          <div className="text-size-body-2-cc is-opacity-64">Стоимость</div>
                          <div className="heading-style-h7-cc">$114,215</div>
                        </div>
                        <div className="div-block-58">
                          <div className="text-size-body-2-cc is-opacity-64">Дата сдачи</div>
                          <div className="heading-style-h7-cc">Q4 2028</div>
                        </div>
                      </div>
                      <div className="div-block-57">
                        <div className="text-size-body-2-cc">ROI за 10 лет</div>
                        <div className="heading-style-h4-cc">136%</div>
                      </div>
                      <div className="div-block-57 m-8">
                        <div className="text-size-body-2-cc">IRR</div>
                        <div className="heading-style-h4-cc">13,1%</div>
                      </div>
                      <div className="div-block-57">
                        <div className="text-size-body-2-cc">Чистый арендный доход</div>
                        <div className="heading-style-h4-cc">5,1%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_cc_how">
            <div className="padding-global-cc">
              <div className="container-main-cc">
                <div className="how-wrapper">
                  <h2 className="heading-style-h7-cc mb-8">Как работает платформа</h2>
                  <p className="text-size-body-3-cc">
                    От запроса до сделки всего пять простых шагов
                  </p>
                  <div className="how-point-wrapper">
                    <div className="how-point _1-point">
                      <div className="text-size-body-4-cc opacity-24 mb-32">01</div>
                      <div className="text-size-body-2-cc mb-8 mob-size-16">
                        <strong>
                          Используйте умные фильтры <br />
                          и&nbsp;ИИ помощника
                        </strong>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Подберите объекты по&nbsp;району, бюджету, доходности, площади и&nbsp;другим
                        параметрам
                      </div>
                    </div>
                    <div className="mob-line" />
                    <div className="how-point _1-point">
                      <div className="text-size-body-4-cc opacity-24 mb-32">02</div>
                      <div className="text-size-body-2-cc mb-8 mob-size-16">
                        <strong>Соберите подборку для&nbsp;клиента</strong>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Добавьте нужные проекты в&nbsp;подборку в&nbsp;несколько кликов
                      </div>
                    </div>
                    <div className="mob-line" />
                    <div className="how-point _1-point">
                      <div className="text-size-body-4-cc opacity-24 mb-32">03</div>
                      <div className="text-size-body-2-cc mb-8 mob-size-16">
                        <strong>Поделитесь уникальной ссылкой</strong>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Отправьте клиенту персональный лендинг. <br />
                        Без PDF, презентаций и&nbsp;путаницы
                      </div>
                    </div>
                    <div className="mob-line" />
                    <div className="how-point _1-point">
                      <div className="text-size-body-4-cc opacity-24 mb-32">04</div>
                      <div className="text-size-body-2-cc mb-8 mob-size-16 max-w-9">
                        <strong>Отслеживайте интерес</strong>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Получайте уведомления, когда клиенту понравился конкретный проект
                      </div>
                    </div>
                    <div className="mob-line" />
                    <div className="how-point _1-point">
                      <div className="text-size-body-4-cc opacity-24 mb-32">05</div>
                      <div className="text-size-body-2-cc mb-8 mob-size-16 max-w-9">
                        <strong>Закрывайте сделку</strong>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Действуйте на&nbsp;опережение без лишних догадок
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="why-thailand" data-theme="light" className="section_cc_reveal agent-page">
            <div className="container-main-cc">
              <div className="w-layout-grid reveal_cc_content-layout">
                <div
                  id="w-node-_2ca1f36f-7b55-e63d-3ef0-ac1abeb0ee2c-04f8ceb0"
                  className="reveal_cc_image-wrapper"
                >
                  <img
                    width={705}
                    sizes="(max-width: 767px) 100vw, 705px"
                    alt=""
                    src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68594b31965d32a20b9dde4d_Pic%20(1).webp"
                    loading="eager"
                    srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68594b31965d32a20b9dde4d_Pic%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68594b31965d32a20b9dde4d_Pic%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68594b31965d32a20b9dde4d_Pic%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68594b31965d32a20b9dde4d_Pic%20(1)-p-1600.webp 1600w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68594b31965d32a20b9dde4d_Pic%20(1).webp 1634w"
                    className="mob-hide"
                  />
                  <img
                    width={705}
                    sizes="(max-width: 767px) 100vw, 705px"
                    alt=""
                    src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595e1235e1fead53113be7_Pic%20(4).webp"
                    loading="eager"
                    srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595e1235e1fead53113be7_Pic%20(4)-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/68595e1235e1fead53113be7_Pic%20(4).webp 786w"
                    className="desk-hide"
                  />
                </div>
                <div
                  id="w-node-_6f3536c5-3d3b-b5e4-3b24-8b17316368ec-04f8ceb0"
                  className="features_cc_content agent-page"
                >
                  <div>
                    <div className="heading-style-h7-cc mb-8">
                      Ваши клиенты остаются только вашими
                    </div>
                    <p className="text-size-body-3-cc">Гарантируем конфиденциальность</p>
                  </div>
                  <div>
                    <div className="text-size-body-2-cc is-opacity-64-black mb-8 mob-size-16">
                      Базой клиентов владеете только вы. Мы не&nbsp;просим контакты, имейлы или
                      имена.
                      <br />
                    </div>
                    <div className="text-size-body-2-cc is-opacity-64-black mob-size-16">
                      Если вам нужна помощь со сделкой, мы подключаемся по вашему запросу. До этого
                      момента все данные остаются под вашим полным контролем
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_cc_how">
            <div className="padding-global-cc">
              <div className="container-main-cc">
                <div className="how-wrapper">
                  <h2 className="heading-style-h7-cc">
                    Закрывайте сделки быстрее <br />и зарабатывайте больше
                  </h2>
                  <div className="how-point-wrapper gap-1-5">
                    <div className="how-point">
                      <div className="code-embed-3 w-embed">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect
                            x="0.5"
                            y="0.5"
                            width={47}
                            height={47}
                            rx="23.5"
                            stroke="#202020"
                            strokeOpacity="0.24"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 14.9583C24.4833 14.9583 24.875 15.35 24.875 15.8333V23.1249H32.1667C32.6499 23.1249 33.0417 23.5167 33.0417 23.9999C33.0417 24.4832 32.6499 24.8749 32.1667 24.8749H24.875V32.1666C24.875 32.6498 24.4833 33.0416 24 33.0416C23.5168 33.0416 23.125 32.6498 23.125 32.1666V24.8749H15.8333C15.3501 24.8749 14.9583 24.4832 14.9583 23.9999C14.9583 23.5167 15.3501 23.1249 15.8333 23.1249H23.125V15.8333C23.125 15.35 23.5168 14.9583 24 14.9583Z"
                            fill="#202020"
                          />
                        </svg>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Создавайте подборки за&nbsp;секунды
                      </div>
                    </div>
                    <div className="how-point">
                      <div className="code-embed-3 w-embed">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect
                            x="0.5"
                            y="0.5"
                            width={47}
                            height={47}
                            rx="23.5"
                            stroke="#202020"
                            strokeOpacity="0.24"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 12.625C25.618 12.6245 27.2175 12.9694 28.6917 13.6364C30.1659 14.3035 31.4808 15.2775 32.5485 16.4933C33.6162 17.7091 34.4122 19.1388 34.8833 20.6869C35.3543 22.2349 35.4896 23.8656 35.2801 25.4701C35.2176 25.9493 34.7784 26.287 34.2992 26.2245C33.82 26.1619 33.4823 25.7227 33.5449 25.2435C33.7221 23.8859 33.6077 22.5061 33.2091 21.1963C32.8105 19.8865 32.137 18.6768 31.2336 17.6481C30.3301 16.6193 29.2176 15.7952 27.9702 15.2308C26.7228 14.6663 25.3694 14.3746 24.0003 14.375H24C21.4473 14.375 18.9991 15.3891 17.1941 17.1941C15.3891 18.9991 14.375 21.4473 14.375 24C14.375 26.5527 15.3891 29.0009 17.1941 30.8059C18.9991 32.6109 21.4473 33.625 24 33.625C24.4832 33.625 24.875 34.0168 24.875 34.5C24.875 34.9832 24.4832 35.375 24 35.375C20.9832 35.375 18.0899 34.1766 15.9567 32.0433C13.8234 29.9101 12.625 27.0168 12.625 24C12.625 20.9832 13.8234 18.0899 15.9567 15.9567C18.0898 13.8235 20.983 12.6251 23.9997 12.625M19.625 21.6667C19.625 21.1834 20.0168 20.7917 20.5 20.7917H20.5117C20.9949 20.7917 21.3867 21.1834 21.3867 21.6667C21.3867 22.1499 20.9949 22.5417 20.5117 22.5417H20.5C20.0168 22.5417 19.625 22.1499 19.625 21.6667ZM26.625 21.6667C26.625 21.1834 27.0168 20.7917 27.5 20.7917H27.5117C27.9949 20.7917 28.3867 21.1834 28.3867 21.6667C28.3867 22.1499 27.9949 22.5417 27.5117 22.5417H27.5C27.0168 22.5417 26.625 22.1499 26.625 21.6667ZM20.4561 26.8899C20.793 26.5435 21.347 26.5358 21.6934 26.8728C22.2928 27.4558 23.1243 27.7917 24 27.7917C24.8757 27.7917 25.7072 27.4558 26.3066 26.8728C26.653 26.5358 27.207 26.5435 27.5439 26.8899C27.8808 27.2363 27.8732 27.7903 27.5267 28.1272C26.5908 29.0375 25.3176 29.5417 24 29.5417C22.6824 29.5417 21.4092 29.0375 20.4733 28.1272C20.1268 27.7903 20.1192 27.2363 20.4561 26.8899ZM35.1187 29.2146C35.4604 29.5563 35.4604 30.1103 35.1187 30.4521L30.4521 35.1187C30.1103 35.4604 29.5563 35.4604 29.2146 35.1187L26.8813 32.7854C26.5396 32.4437 26.5396 31.8897 26.8813 31.5479C27.223 31.2062 27.777 31.2062 28.1187 31.5479L29.8333 33.2626L33.8813 29.2146C34.223 28.8729 34.777 28.8729 35.1187 29.2146Z"
                            fill="#202020"
                          />
                        </svg>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Формируйте офферы в пару кликов
                      </div>
                    </div>
                    <div className="how-point">
                      <div className="code-embed-3 w-embed">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect
                            x="0.5"
                            y="0.5"
                            width={47}
                            height={47}
                            rx="23.5"
                            stroke="#202020"
                            strokeOpacity="0.24"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.0772 13.4337C23.1119 12.9775 23.4922 12.625 23.9497 12.625H24.0503C24.5081 12.625 24.8885 12.9778 24.9228 13.4343C25.3106 18.5847 29.4145 22.686 34.5663 23.0772C35.0225 23.1119 35.375 23.4922 35.375 23.9497V24.0503C35.375 24.5081 35.0222 24.8885 34.5657 24.9228C29.4153 25.3106 25.314 29.4145 24.9228 34.5662C24.8881 35.0225 24.5078 35.375 24.0503 35.375H23.9497C23.4919 35.375 23.1115 35.0222 23.0772 34.5657C22.6894 29.4153 18.5855 25.314 13.4337 24.9228C12.9775 24.8881 12.625 24.5078 12.625 24.0503V23.9497C12.625 23.4919 12.9778 23.1115 13.4343 23.0772C18.5847 22.6894 22.686 18.5855 23.0772 13.4337ZM23.9994 17.1415C22.7593 20.2692 20.2689 22.7611 17.1415 24.0006C20.2692 25.2407 22.761 27.7311 24.0006 30.8585C25.2407 27.7308 27.7311 25.239 30.8585 23.9994C27.7308 22.7593 25.239 20.2688 23.9994 17.1415Z"
                            fill="#202020"
                          />
                        </svg>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Используйте ИИ-помощника для&nbsp;выбора лучших вариантов
                      </div>
                    </div>
                    <div className="how-point">
                      <div className="code-embed-3 w-embed">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect
                            x="0.5"
                            y="0.5"
                            width={47}
                            height={47}
                            rx="23.5"
                            stroke="#202020"
                            strokeOpacity="0.24"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.6667 15.5417C14.5893 15.5417 14.5151 15.5725 14.4604 15.6272C14.4057 15.6819 14.375 15.7561 14.375 15.8334V27.5001C14.375 27.5774 14.4057 27.6516 14.4604 27.7063C14.5151 27.761 14.5893 27.7917 14.6667 27.7917H20.5H27.5H33.3333C33.4107 27.7917 33.4849 27.761 33.5396 27.7063C33.5943 27.6516 33.625 27.5774 33.625 27.5001V15.8334C33.625 15.7561 33.5943 15.6819 33.5396 15.6272C33.4849 15.5725 33.4107 15.5417 33.3333 15.5417H14.6667ZM33.3333 29.5417H28.375V32.4584H29.8333C30.3166 32.4584 30.7083 32.8502 30.7083 33.3334C30.7083 33.8167 30.3166 34.2084 29.8333 34.2084H27.5H20.5H18.1667C17.6834 34.2084 17.2917 33.8167 17.2917 33.3334C17.2917 32.8502 17.6834 32.4584 18.1667 32.4584H19.625V29.5417H14.6667C14.1252 29.5417 13.6059 29.3266 13.223 28.9438C12.8401 28.5609 12.625 28.0416 12.625 27.5001V15.8334C12.625 15.2919 12.8401 14.7726 13.223 14.3897C13.6059 14.0069 14.1252 13.7917 14.6667 13.7917H33.3333C33.8748 13.7917 34.3941 14.0069 34.777 14.3897C35.1599 14.7726 35.375 15.2919 35.375 15.8334V27.5001C35.375 28.0416 35.1599 28.5609 34.777 28.9438C34.3941 29.3266 33.8748 29.5417 33.3333 29.5417ZM21.375 29.5417H26.625V32.4584H21.375V29.5417ZM29.2854 19.9521C29.6271 19.6104 29.6271 19.0564 29.2854 18.7147C28.9437 18.373 28.3897 18.373 28.0479 18.7147L25.1667 21.596L23.4521 19.8814C23.1103 19.5397 22.5563 19.5397 22.2146 19.8814L18.7146 23.3814C18.3729 23.7231 18.3729 24.2771 18.7146 24.6188C19.0563 24.9605 19.6103 24.9605 19.9521 24.6188L22.8333 21.7375L24.5479 23.4521C24.8897 23.7938 25.4437 23.7938 25.7854 23.4521L29.2854 19.9521Z"
                            fill="#202020"
                          />
                        </svg>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Отслеживайте поведение клиентов и&nbsp;действуйте на&nbsp;опережение
                      </div>
                    </div>
                    <div className="how-point">
                      <div className="code-embed-3 w-embed">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect
                            x="0.5"
                            y="0.5"
                            width={47}
                            height={47}
                            rx="23.5"
                            stroke="#202020"
                            strokeOpacity="0.24"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 12.625C21.3457 12.625 18.9036 13.0269 17.0933 13.7058C16.1913 14.044 15.4007 14.4678 14.8197 14.9828C14.2398 15.497 13.7917 16.1766 13.7917 17V24V31C13.7917 31.8234 14.2398 32.503 14.8197 33.0172C15.4007 33.5322 16.1913 33.956 17.0933 34.2942C18.9036 34.9731 21.3457 35.375 24 35.375C24.4256 35.375 24.8431 35.3641 25.2511 35.3449C25.7338 35.3221 26.1067 34.9123 26.0839 34.4296C26.0611 33.9469 25.6513 33.574 25.1686 33.5968C24.7857 33.6149 24.3958 33.625 24 33.625C21.5 33.625 19.2755 33.2435 17.7077 32.6556C16.9206 32.3605 16.3444 32.0301 15.9807 31.7077C15.6159 31.3843 15.5417 31.1432 15.5417 31V26.5492C15.9979 26.8327 16.5234 27.0805 17.0933 27.2942C18.9036 27.9731 21.3457 28.375 24 28.375C24.501 28.375 24.9927 28.3605 25.4738 28.3327C25.9563 28.3048 26.3248 27.8911 26.2969 27.4087C26.269 26.9262 25.8553 26.5577 25.3729 26.5856C24.9253 26.6115 24.4673 26.625 24 26.625C21.5 26.625 19.2755 26.2435 17.7077 25.6556C16.9206 25.3605 16.3444 25.0301 15.9807 24.7077C15.6159 24.3843 15.5417 24.1432 15.5417 24V19.5492C15.9979 19.8327 16.5234 20.0805 17.0933 20.2942C18.9036 20.9731 21.3457 21.375 24 21.375C26.6543 21.375 29.0965 20.9731 30.9068 20.2942C31.4767 20.0805 32.0021 19.8327 32.4584 19.5492V21.6667C32.4584 22.1499 32.8501 22.5417 33.3334 22.5417C33.8166 22.5417 34.2084 22.1499 34.2084 21.6667V17C34.2084 16.1766 33.7602 15.497 33.1803 14.9828C32.5994 14.4678 31.8087 14.044 30.9068 13.7058C29.0965 13.0269 26.6543 12.625 24 12.625ZM32.0194 16.2923C32.3841 16.6157 32.4584 16.8568 32.4584 17C32.4584 17.1432 32.3841 17.3843 32.0194 17.7077C31.6557 18.0301 31.0795 18.3605 30.2923 18.6556C28.7246 19.2435 26.5 19.625 24 19.625C21.5 19.625 19.2755 19.2435 17.7077 18.6556C16.9206 18.3605 16.3444 18.0301 15.9807 17.7077C15.6159 17.3843 15.5417 17.1432 15.5417 17C15.5417 16.8568 15.6159 16.6157 15.9807 16.2923C16.3444 15.9699 16.9206 15.6395 17.7077 15.3444C19.2755 14.7565 21.5 14.375 24 14.375C26.5 14.375 28.7246 14.7565 30.2923 15.3444C31.0795 15.6395 31.6557 15.9699 32.0194 16.2923ZM33.0417 26.625V26.3333C33.0417 25.8501 32.6499 25.4583 32.1667 25.4583C31.6834 25.4583 31.2917 25.8501 31.2917 26.3333V26.6412C30.7028 26.7071 30.1502 26.9708 29.7272 27.3938C29.2349 27.8861 28.9584 28.5538 28.9584 29.25C28.9584 29.9462 29.2349 30.6139 29.7272 31.1062C30.2195 31.5984 30.8872 31.875 31.5834 31.875H32.75C32.9821 31.875 33.2046 31.9672 33.3687 32.1313C33.5328 32.2954 33.625 32.5179 33.625 32.75C33.625 32.9821 33.5328 33.2046 33.3687 33.3687C33.2046 33.5328 32.9821 33.625 32.75 33.625H32.1667H29.8334C29.3501 33.625 28.9584 34.0168 28.9584 34.5C28.9584 34.9832 29.3501 35.375 29.8334 35.375H31.2917V35.6667C31.2917 36.1499 31.6834 36.5417 32.1667 36.5417C32.6499 36.5417 33.0417 36.1499 33.0417 35.6667V35.3588C33.6306 35.2929 34.1831 35.0292 34.6062 34.6062C35.0985 34.1139 35.375 33.4462 35.375 32.75C35.375 32.0538 35.0985 31.3861 34.6062 30.8938C34.1139 30.4016 33.4462 30.125 32.75 30.125H31.5834C31.3513 30.125 31.1287 30.0328 30.9646 29.8687C30.8005 29.7046 30.7084 29.4821 30.7084 29.25C30.7084 29.0179 30.8005 28.7954 30.9646 28.6313C31.1287 28.4672 31.3513 28.375 31.5834 28.375H32.1667H34.5C34.9833 28.375 35.375 27.9832 35.375 27.5C35.375 27.0168 34.9833 26.625 34.5 26.625H33.0417Z"
                            fill="#202020"
                          />
                        </svg>
                      </div>
                      <div className="text-size-body-2-cc mob-size-16">
                        Передавайте сделки партнерам при&nbsp;необходимости и&nbsp;получайте
                        комиссию
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" data-theme="dark" className="section_cc_contact-partner">
            <div className="container-main-cc">
              <img
                src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6805e5fbefc7aaf51f95aeb2_nn-mj-UGIre8jh4t%201.webp"
                loading="lazy"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6805e5fbefc7aaf51f95aeb2_nn-mj-UGIre8jh4t%201-p-500.webp 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6805e5fbefc7aaf51f95aeb2_nn-mj-UGIre8jh4t%201-p-800.webp 800w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6805e5fbefc7aaf51f95aeb2_nn-mj-UGIre8jh4t%201-p-1080.webp 1080w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6805e5fbefc7aaf51f95aeb2_nn-mj-UGIre8jh4t%201-p-1600.webp 1600w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6805e5fbefc7aaf51f95aeb2_nn-mj-UGIre8jh4t%201-p-2000.webp 2000w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/6805e5fbefc7aaf51f95aeb2_nn-mj-UGIre8jh4t%201.webp 2404w"
                alt=""
                className="contact-agent-img desk"
              />
              <img
                src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/67ff538008b8614088e45fa5_Pic.avif"
                loading="lazy"
                sizes="(max-width: 786px) 100vw, 786px"
                srcSet="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/67ff538008b8614088e45fa5_Pic-p-500.avif 500w, https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/67ff538008b8614088e45fa5_Pic.avif 786w"
                alt=""
                className="pagtner-img-abs mob"
              />
              <div className="features_cc_content partner-instrument agent-pag">
                <h2 className="heading-style-h7-cc mb-8">Попробуйте бесплатно</h2>
                <p className="text-size-body-3-cc">Неограниченный функционал. Никаких рисков</p>
                <div className="div-block-59">
                  <div className="div-block-60">
                    <div className="code-embed-4 w-embed">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.46973 2.46972C2.74433 2.19512 3.17905 2.17765 3.47364 2.41796L3.53028 2.46972L21.5303 20.4697L21.582 20.5264C21.8223 20.8209 21.8049 21.2557 21.5303 21.5303C21.2557 21.8049 20.8209 21.8223 20.5264 21.582L20.4697 21.5303L18.6338 19.6943C18.4246 19.7301 18.2128 19.7492 18 19.749V19.75H6C5.00544 19.75 4.0519 19.3546 3.34864 18.6514C2.64538 17.9481 2.25 16.9946 2.25 16V7.99999C2.25 6.72389 2.88645 5.59711 3.85938 4.91992L2.46973 3.53027L2.41797 3.47363C2.17766 3.17905 2.19513 2.74433 2.46973 2.46972ZM20.25 7.99999C20.25 7.40326 20.0128 6.83113 19.5908 6.40917C19.1689 5.98722 18.5967 5.74999 18 5.74999H9C8.58579 5.74999 8.25 5.41421 8.25 4.99999C8.25 4.58578 8.58579 4.24999 9 4.24999H18C18.9946 4.24999 19.9481 4.64537 20.6514 5.34863C21.3546 6.05189 21.75 7.00543 21.75 7.99999V15.999L21.7402 16.2754C21.7202 16.5503 21.6697 16.8225 21.5898 17.0869C21.4701 17.4833 21.0517 17.7076 20.6553 17.5879C20.2587 17.4682 20.0346 17.0499 20.1543 16.6533C20.2181 16.4418 20.2502 16.2219 20.25 16.001V11.75H15C14.5858 11.75 14.25 11.4142 14.25 11C14.25 10.5858 14.5858 10.25 15 10.25H20.25V7.99999ZM7.00977 14.25C7.42398 14.25 7.75977 14.5858 7.75977 15C7.75977 15.4142 7.42398 15.75 7.00977 15.75H7C6.58579 15.75 6.25 15.4142 6.25 15C6.25 14.5858 6.58579 14.25 7 14.25H7.00977ZM3.75 16C3.75 16.5967 3.98723 17.1689 4.40918 17.5908C4.83114 18.0128 5.40326 18.25 6 18.25H17.1895L13.71 14.7705C13.7334 14.8432 13.75 14.9195 13.75 15C13.75 15.4142 13.4142 15.75 13 15.75H11C10.5858 15.75 10.25 15.4142 10.25 15C10.25 14.5858 10.5858 14.25 11 14.25H13C13.0801 14.25 13.1562 14.2658 13.2285 14.2891L10.6895 11.75H3.75V16ZM3.75 10.25H9.18946L4.9502 6.01074C4.23606 6.38834 3.75 7.13752 3.75 7.99999V10.25Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-size-body-2-cc mob-size-16">
                      Банковская карта <br />
                      не нужна
                    </div>
                  </div>
                  <div className="div-block-60">
                    <div className="code-embed-4 w-embed">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 2.25C7.41421 2.25 7.75 2.58579 7.75 3V4.25H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V4.25H17C17.7293 4.25 18.4288 4.53973 18.9445 5.05546C19.4603 5.57118 19.75 6.27065 19.75 7V11C19.75 11.4142 19.4142 11.75 19 11.75H3.75V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H11.795C12.2092 20.25 12.545 20.5858 12.545 21C12.545 21.4142 12.2092 21.75 11.795 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V7C2.25 6.27065 2.53973 5.57118 3.05546 5.05546C3.57118 4.53973 4.27065 4.25 5 4.25H6.25V3C6.25 2.58579 6.58579 2.25 7 2.25ZM6.25 5.75H5C4.66848 5.75 4.35054 5.8817 4.11612 6.11612C3.8817 6.35054 3.75 6.66848 3.75 7V10.25H18.25V7C18.25 6.66848 18.1183 6.35054 17.8839 6.11612C17.6495 5.8817 17.3315 5.75 17 5.75H15.75V7C15.75 7.41421 15.4142 7.75 15 7.75C14.5858 7.75 14.25 7.41421 14.25 7V5.75H7.75V7C7.75 7.41421 7.41421 7.75 7 7.75C6.58579 7.75 6.25 7.41421 6.25 7V5.75ZM14.6412 14.6412C15.532 13.7504 16.7402 13.25 18 13.25C19.2598 13.25 20.468 13.7504 21.3588 14.6412C22.2496 15.532 22.75 16.7402 22.75 18C22.75 19.2598 22.2496 20.468 21.3588 21.3588C20.468 22.2496 19.2598 22.75 18 22.75C16.7402 22.75 15.532 22.2496 14.6412 21.3588C13.7504 20.468 13.25 19.2598 13.25 18C13.25 16.7402 13.7504 15.532 14.6412 14.6412ZM18 14.75C17.138 14.75 16.3114 15.0924 15.7019 15.7019C15.0924 16.3114 14.75 17.138 14.75 18C14.75 18.862 15.0924 19.6886 15.7019 20.2981C16.3114 20.9076 17.138 21.25 18 21.25C18.862 21.25 19.6886 20.9076 20.2981 20.2981C20.9076 19.6886 21.25 18.862 21.25 18C21.25 17.138 20.9076 16.3114 20.2981 15.7019C19.6886 15.0924 18.862 14.75 18 14.75ZM18 15.7461C18.4142 15.7461 18.75 16.0819 18.75 16.4961V17.6894L19.5303 18.4698C19.8232 18.7627 19.8232 19.2375 19.5303 19.5304C19.2374 19.8233 18.7626 19.8233 18.4697 19.5304L17.4697 18.5304C17.329 18.3898 17.25 18.199 17.25 18.0001V16.4961C17.25 16.0819 17.5858 15.7461 18 15.7461Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-size-body-2-cc mob-size-16">
                      Можно отменить подписку в&nbsp;любой момент
                    </div>
                  </div>
                  <div className="div-block-60">
                    <div className="code-embed-4 w-embed">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0955 2.43782C11.987 2.06109 13.9477 2.25379 15.7297 2.99156C17.5116 3.72932 19.0347 4.979 20.1064 6.58252C21.178 8.18604 21.75 10.0714 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75C20.5858 12.75 20.25 12.4142 20.25 12C20.25 10.3681 19.766 8.7728 18.8592 7.41598C17.9525 6.05915 16.6637 5.00173 15.1559 4.37747C13.6481 3.75321 11.989 3.59015 10.3885 3.90893C8.78799 4.2277 7.31799 5.01399 6.16443 6.16832C5.01086 7.32265 4.22556 8.79318 3.90786 10.3939C3.59015 11.9946 3.75431 13.6536 4.37958 15.161C5.00484 16.6683 6.06312 17.9564 7.42055 18.8623C8.77798 19.7682 10.3736 20.2511 12.0055 20.25C12.4197 20.2497 12.7557 20.5853 12.756 20.9995C12.7563 21.4137 12.4207 21.7497 12.0065 21.75C10.0779 21.7513 8.19216 21.1806 6.58792 20.11C4.98369 19.0394 3.733 17.5171 2.99405 15.7357C2.25509 13.9542 2.06108 11.9936 2.43656 10.1019C2.81203 8.21012 3.74011 6.47223 5.10342 5.10801C6.46672 3.7438 8.20399 2.81456 10.0955 2.43782ZM8.25 10C8.25 9.58579 8.58579 9.25 9 9.25H9.01C9.42421 9.25 9.76 9.58579 9.76 10C9.76 10.4142 9.42421 10.75 9.01 10.75H9C8.58579 10.75 8.25 10.4142 8.25 10ZM15 9.25C14.5858 9.25 14.25 9.58579 14.25 10C14.25 10.4142 14.5858 10.75 15 10.75H15.01C15.4242 10.75 15.76 10.4142 15.76 10C15.76 9.58579 15.4242 9.25 15.01 9.25H15ZM8.97511 14.4643C9.27098 14.1744 9.74583 14.1792 10.0357 14.4751C10.2918 14.7364 10.5974 14.944 10.9347 15.0858C11.272 15.2275 11.6341 15.3005 12 15.3005C12.3659 15.3005 12.728 15.2275 13.0653 15.0858C13.4026 14.944 13.7082 14.7364 13.9643 14.4751C14.2542 14.1792 14.729 14.1744 15.0249 14.4643C15.3208 14.7542 15.3256 15.229 15.0357 15.5249C14.64 15.9288 14.1677 16.2496 13.6464 16.4686C13.1252 16.6877 12.5654 16.8005 12 16.8005C11.4346 16.8005 10.8748 16.6877 10.3536 16.4686C9.83232 16.2496 9.36 15.9288 8.96429 15.5249C8.6744 15.229 8.67924 14.7542 8.97511 14.4643ZM19.729 15.3237C19.6476 14.9871 19.3463 14.75 19 14.75C18.6537 14.75 18.3524 14.9871 18.271 15.3237C18.0981 16.0384 17.7316 16.6916 17.2116 17.2116C16.6916 17.7316 16.0384 18.0981 15.3237 18.271C14.9871 18.3524 14.75 18.6537 14.75 19C14.75 19.3463 14.9871 19.6476 15.3237 19.729C16.0384 19.9019 16.6916 20.2684 17.2116 20.7884C17.7316 21.3084 18.0981 21.9616 18.271 22.6763C18.3524 23.0129 18.6537 23.25 19 23.25C19.3463 23.25 19.6476 23.0129 19.729 22.6763C19.9019 21.9616 20.2684 21.3084 20.7884 20.7884C21.3084 20.2684 21.9616 19.9019 22.6763 19.729C23.0129 19.6476 23.25 19.3463 23.25 19C23.25 18.6537 23.0129 18.3524 22.6763 18.271C21.9616 18.0981 21.3084 17.7316 20.7884 17.2116C20.2684 16.6916 19.9019 16.0384 19.729 15.3237ZM18.2723 18.2723C18.547 17.9975 18.7907 17.6956 19 17.3723C19.2093 17.6956 19.453 17.9975 19.7277 18.2723C20.0025 18.547 20.3044 18.7907 20.6277 19C20.3044 19.2093 20.0025 19.453 19.7277 19.7277C19.453 20.0025 19.2093 20.3044 19 20.6277C18.7907 20.3044 18.547 20.0025 18.2723 19.7277C17.9975 19.453 17.6956 19.2093 17.3723 19C17.6956 18.7907 17.9975 18.547 18.2723 18.2723Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-size-body-2-cc mob-size-16">
                      Бесплатно на время <br />
                      бета-теста
                    </div>
                  </div>
                </div>
                <a
                  href="https://lotsof.properties/register"
                  target="_blank"
                  className="button-cc is-white _w-100 w-button"
                  rel="noreferrer"
                >
                  Получить доступ
                </a>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer_component">
          <div className="padding-main is-16">
            <div className="container-large">
              <div className="footer_layout">
                <a href="/ru/old-home-3" className="footer_logo w-inline-block">
                  <WhiteLogo />
                </a>
                <div className="footer_item">
                  <a
                    href="mailto:info@insightestate.pro"
                    className="footer_link heading-style-h5-cc sgoal_click sgoal_hover"
                  >
                    info@insightestate.pro
                  </a>
                  <a
                    href="tel:+6681148-64-62"
                    className="footer_link heading-style-h5-cc sgoal_click sgoal_hover"
                  >
                    +66 81 148-64-62
                  </a>
                  <div className="menu-socials">
                    <a
                      href="https://wa.me/66922673178"
                      target="_blank"
                      className="link-block-6 w-inline-block sgoal_click sgoal_hover"
                      rel="noreferrer"
                    >
                      <div className="menu-social-icon w-embed">
                        {/*?xml version="1.0" encoding="UTF-8"?*/}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 90 90"
                          version="1.1"
                        >
                          <g id="surface1708">
                            <path
                              style={{ fill: 'currentcolor' }}
                              d="M 45 9 C 25.117188 9 9 25.117188 9 45 C 9 51.753906 10.898438 58.050781 14.132812 63.453125 L 9.324219 81 L 27.246094 76.296875 C 32.488281 79.273438 38.539062 81 45 81 C 64.882812 81 81 64.882812 81 45 C 81 25.117188 64.882812 9 45 9 Z M 32.675781 28.207031 C 33.261719 28.207031 33.863281 28.203125 34.382812 28.230469 C 35.023438 28.246094 35.722656 28.292969 36.390625 29.769531 C 37.1875 31.53125 38.917969 35.941406 39.140625 36.386719 C 39.363281 36.832031 39.519531 37.359375 39.210938 37.945312 C 38.917969 38.546875 38.765625 38.910156 38.332031 39.4375 C 37.886719 39.957031 37.394531 40.597656 36.988281 40.984375 C 36.542969 41.433594 36.082031 41.921875 36.597656 42.8125 C 37.113281 43.707031 38.90625 46.625 41.554688 48.984375 C 44.960938 52.027344 47.832031 52.960938 48.726562 53.40625 C 49.621094 53.855469 50.136719 53.785156 50.65625 53.1875 C 51.183594 52.601562 52.882812 50.59375 53.484375 49.699219 C 54.070312 48.804688 54.667969 48.960938 55.476562 49.253906 C 56.296875 49.546875 60.683594 51.707031 61.578125 52.15625 C 62.46875 52.601562 63.054688 52.824219 63.28125 53.1875 C 63.511719 53.5625 63.511719 55.347656 62.769531 57.425781 C 62.03125 59.507812 58.390625 61.515625 56.761719 61.65625 C 55.113281 61.8125 53.574219 62.398438 46.054688 59.4375 C 36.984375 55.863281 31.261719 46.574219 30.8125 45.972656 C 30.367188 45.386719 27.183594 41.140625 27.183594 36.761719 C 27.183594 32.367188 29.484375 30.214844 30.292969 29.320312 C 31.113281 28.425781 32.078125 28.207031 32.675781 28.207031 Z M 32.675781 28.207031 "
                            />
                          </g>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/the.insight.estate?igsh=MXd0NHhnMzNqa2kzcQ=="
                      target="_blank"
                      className="link-block-6 w-inline-block sgoal_click"
                      rel="noreferrer"
                    >
                      <div className="menu-social-icon w-embed">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_4020_14055)">
                            <path
                              d="M10 12.0508C11.1326 12.0508 12.0508 11.1326 12.0508 10C12.0508 8.86738 11.1326 7.94922 10 7.94922C8.86738 7.94922 7.94922 8.86738 7.94922 10C7.94922 11.1326 8.86738 12.0508 10 12.0508Z"
                              fill="currentcolor"
                            />
                            <path
                              d="M10 0.234375C4.6066 0.234375 0.234375 4.6066 0.234375 10C0.234375 15.3934 4.6066 19.7656 10 19.7656C15.3934 19.7656 19.7656 15.3934 19.7656 10C19.7656 4.6066 15.3934 0.234375 10 0.234375ZM16.0335 12.482C15.9866 13.4105 15.7257 14.326 15.0491 14.9954C14.366 15.6712 13.4461 15.923 12.5087 15.9694H7.49133C6.55383 15.923 5.63406 15.6714 4.9509 14.9954C4.27426 14.326 4.0134 13.4105 3.96652 12.482V7.51797C4.0134 6.58953 4.2743 5.67398 4.9509 5.00453C5.63406 4.32875 6.55395 4.07695 7.49133 4.03059H12.5087C13.4462 4.07695 14.3659 4.32863 15.0491 5.00453C15.7257 5.67398 15.9866 6.58953 16.0335 7.51797L16.0335 12.482Z"
                              fill="currentcolor"
                            />
                            <path
                              d="M12.4458 5.16186C11.2237 5.12834 8.77757 5.12834 7.55546 5.16186C6.91949 5.17932 6.19851 5.33764 5.74539 5.82162C5.27453 6.32471 5.0966 6.93252 5.07855 7.61248C5.04683 8.80592 5.07855 12.3879 5.07855 12.3879C5.09921 13.0678 5.27453 13.6757 5.74539 14.1788C6.19851 14.6629 6.91949 14.8211 7.55546 14.8386C8.77757 14.8721 11.2237 14.8721 12.4458 14.8386C13.0818 14.8211 13.8027 14.6628 14.2559 14.1788C14.7267 13.6757 14.9046 13.0679 14.9227 12.3879V7.61248C14.9046 6.93252 14.7267 6.32471 14.2559 5.82162C13.8026 5.33748 13.0816 5.17932 12.4458 5.16186ZM10.0005 13.1789C9.37177 13.1789 8.7572 12.9925 8.23447 12.6432C7.71173 12.2939 7.30431 11.7975 7.06372 11.2167C6.82313 10.6358 6.76018 9.99669 6.88283 9.38008C7.00548 8.76347 7.30823 8.19708 7.75278 7.75253C8.19733 7.30798 8.76372 7.00523 9.38033 6.88258C9.99694 6.75993 10.6361 6.82288 11.2169 7.06347C11.7977 7.30406 12.2942 7.71148 12.6435 8.23422C12.9927 8.75695 13.1792 9.37153 13.1792 10.0002C13.1792 10.8433 12.8443 11.6518 12.2482 12.2479C11.652 12.844 10.8435 13.1789 10.0005 13.1789ZM13.1927 7.47764C13.067 7.47761 12.9441 7.44029 12.8395 7.37042C12.735 7.30054 12.6535 7.20124 12.6055 7.08507C12.5574 6.96891 12.5448 6.84108 12.5693 6.71777C12.5939 6.59446 12.6544 6.4812 12.7434 6.3923C12.8323 6.30341 12.9456 6.24287 13.0689 6.21836C13.1922 6.19384 13.32 6.20644 13.4362 6.25456C13.5523 6.30268 13.6516 6.38417 13.7215 6.48871C13.7913 6.59326 13.8286 6.71616 13.8286 6.84189C13.8286 6.92539 13.8121 7.00808 13.7802 7.08522C13.7482 7.16236 13.7014 7.23245 13.6423 7.29149C13.5833 7.35052 13.5132 7.39735 13.436 7.42929C13.3589 7.46123 13.2762 7.47766 13.1927 7.47764Z"
                              fill="currentcolor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_4020_14055">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://youtube.com/@insightestatechannel?feature=shared"
                      target="_blank"
                      className="link-block-7 w-inline-block sgoal_click"
                      rel="noreferrer"
                    >
                      <div className="menu-social-icon w-embed">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_4020_15974)">
                            <path
                              d="M8.75488 11.8739L12.0078 10.0004L8.75488 8.12695V11.8739Z"
                              fill="currentcolor"
                            />
                            <path
                              d="M10 0C4.478 0 0 4.478 0 10C0 15.522 4.478 20 10 20C15.522 20 20 15.522 20 10C20 4.478 15.522 0 10 0ZM16.2485 10.0102C16.2485 10.0102 16.2485 12.0383 15.9912 13.0162C15.847 13.5515 15.425 13.9735 14.8897 14.1176C13.9117 14.375 10 14.375 10 14.375C10 14.375 6.09848 14.375 5.11032 14.1074C4.57504 13.9633 4.15298 13.5411 4.00879 13.0058C3.75137 12.0383 3.75137 10 3.75137 10C3.75137 10 3.75137 7.97211 4.00879 6.99417C4.15283 6.45889 4.58527 6.02646 5.11032 5.88242C6.08826 5.625 10 5.625 10 5.625C10 5.625 13.9117 5.625 14.8897 5.89264C15.425 6.03668 15.847 6.45889 15.9912 6.99417C16.2589 7.97211 16.2485 10.0102 16.2485 10.0102Z"
                              fill="currentcolor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_4020_15974">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://t.me/Estate_Insight"
                      target="_blank"
                      className="link-block-9 w-inline-block sgoal_click sgoal_hover"
                      rel="noreferrer"
                    >
                      <div className="menu-social-icon w-embed">
                        {/*?xml version="1.0" encoding="UTF-8"?*/}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 75 75"
                          version="1.1"
                        >
                          <g id="surface2319">
                            <path
                              style={{
                                stroke: 'none',
                                fillRule: 'nonzero',
                                fill: 'currentcolor',
                              }}
                              d="M 37.5 3 C 56.554688 3 72 18.445312 72 37.5 C 72 56.554688 56.554688 72 37.5 72 C 18.445312 72 3 56.554688 3 37.5 C 3 18.445312 18.445312 3 37.5 3 Z M 49.402344 51.5625 C 50.035156 49.617188 53.007812 30.210938 53.375 26.386719 C 53.488281 25.230469 53.121094 24.460938 52.402344 24.117188 C 51.535156 23.699219 50.253906 23.910156 48.761719 24.445312 C 46.71875 25.183594 20.601562 36.273438 19.09375 36.914062 C 17.664062 37.519531 16.308594 38.183594 16.308594 39.144531 C 16.308594 39.820312 16.710938 40.199219 17.8125 40.59375 C 18.964844 41.003906 21.855469 41.878906 23.566406 42.351562 C 25.210938 42.804688 27.085938 42.410156 28.132812 41.757812 C 29.246094 41.066406 42.089844 32.472656 43.015625 31.71875 C 43.933594 30.964844 44.671875 31.929688 43.917969 32.683594 C 43.164062 33.4375 34.347656 41.996094 33.183594 43.179688 C 31.773438 44.617188 32.773438 46.109375 33.722656 46.707031 C 34.804688 47.386719 42.582031 52.605469 43.753906 53.441406 C 44.921875 54.277344 46.113281 54.660156 47.199219 54.660156 C 48.285156 54.660156 48.859375 53.226562 49.402344 51.5625 Z M 49.402344 51.5625 "
                            />
                          </g>
                        </svg>
                      </div>
                    </a>
                    <div className="code-embed-2 w-embed" />
                  </div>
                </div>
                <div className="footer_text">
                  <div className="text-size-caption-cc is-opacity-64">
                    Вся информация, представленная в данном материале, носит исключительно
                    информационный характер и не является коммерческим предложением либо публичной
                    офертой. Все цены и сведения о доступности объектов указаны по состоянию на
                    момент публикации и могут быть изменены в любое время без предварительного
                    уведомления. Цены, условия и прочие параметры устанавливаются исключительно
                    соответствующими застройщиками по их собственному усмотрению. Lots Of Properties
                    действует как независимый посредник и не является официальным представителем или
                    агентом по продажам какого-либо застройщика. Lots Of Properties не несёт
                    ответственности за изменения цен, условий, доступности или иных характеристик
                    объектов недвижимости, указанных в данном материале.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_botom">
            <div className="padding-main is-16">
              <div className="container-large">
                <div className="footer_row">
                  <div className="text-size-body-2-cc">
                    © <span data-year-footer="">2025</span> Lots Of Properties. Все права защищены.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDVB33DV" height="0"
        width="0" style="display: none; visibility: hidden"&gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      {/* Google tag (gtag.js) */}
      {/* Скрипт по отслеживанию ютм меток СТАРТ */}
      {/* Скрипт по отслеживанию ютм меток КОНЕЦ */}
      {/*ТЕЛЕФОННАЯ МАСКА Старт */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/css/intlTelInput.css"
      />
      {/*ТЕЛЕФОННАЯ МАСКА конец */}
    </>
  );
};
