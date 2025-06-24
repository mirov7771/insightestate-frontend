import {FC, useState} from "react";
import {useNavigate} from "react-router";
import {Dropdown} from "@/widgets/Dropdown/Dropdown";

export const DefaultEn: FC = () => {
    const navigate = useNavigate()
    const handleRu = () => {
        localStorage.setItem('language', 'ru')
        navigate('/ru')
    }

    const [showCookies, setShowCookies] = useState(true)

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
                }}
            />
            <meta charSet="utf-8" />
            <title>Well-informed investment decisions in Phuket | Insight Estate</title>
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
            <meta
                content="We help you choose the most profitable and reliable property based on analysis of more than 100 indicators"
                name="description"
            />
            <meta
                content="Well-informed investment decisions in Phuket | Insight Estate"
                property="og:title"
            />
            <meta
                content="We help you choose the most profitable and reliable property based on analysis of more than 100 indicators"
                property="og:description"
            />
            <meta
                content="Well-informed investment decisions in Phuket | Insight Estate"
                property="twitter:title"
            />
            <meta
                content="We help you choose the most profitable and reliable property based on analysis of more than 100 indicators"
                property="twitter:description"
            />
            <meta property="og:type" content="website" />
            <meta content="summary_large_image" name="twitter:card" />
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
            <link
                href="https://fonts.gstatic.com"
                rel="preconnect"
                crossOrigin="anonymous"
            />
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
                    __html: "\n  h1 {\n    will-change: unset;\n  }\n"
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n  .iti__country-list {\n    max-height: 250px !important;\n    overflow-y: auto !important;\n    background-color: white !important;\n    color: black !important;\n    z-index: 10000 !important;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n  }\n  .iti__country {\n    color: black !important;\n  }\n  /* Убираем фиксированное позиционирование мобильного popup-а */\n  .iti-mobile .intl-tel-input.iti-container {\n    position: absolute !important;\n    top: auto !important;\n    height: auto !important;\n  }\n  .iti__search-input {\n    color: black;\n  }\n"
                }}
            />
            <meta name="yandex-verification" content="0a90f822b8e8682e" />
            {/* Yandex.Metrika counter */}
            <noscript>
                &lt;div&gt;&lt;img src="https://mc.yandex.ru/watch/99257951"
                style="position: absolute; left: -9999px" alt="" /&gt;&lt;/div &gt;
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
                        '[fs-cc="banner"],[fs-cc="manager"],[fs-cc="preferences"],[fs-cc="interaction"]{display:none}'
                }}
            />
            <div className="page-wrapper-updt">
                <div className="code-base w-embed">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n  html { font-size: 1rem; }\n  @media screen and (max-width:1440px) { html { font-size: calc(-0.000020811654526609047rem + 1.1111342351716964vw); } }\n  @media screen and (max-width:479px) { html { font-size: calc(0.00007776162790651409rem + 4.070930232558141vw); } }\n  @media screen and (max-width:393px) { html { font-size: calc(-0.0025510204081632647rem + 4.081632653061224vw); } }\n  \n    body {\n    -webkit-font-smoothing: antialiased;\n    -moz-font-smoothing: antialiased;\n    -o-font-smoothing: antialiased;\n  }\n  \nvideo {\n\twidth: 100%;\n\tobject-fit: cover;\n}\nvideo.wf-empty {\n\tpadding: 0;\n}\n"
                        }}
                    />
                </div>
                {showCookies ?
                <div fs-cc="banner" className="flowappz-cookie-consent is-v3">
                    <h5 className="cookie-heading-2 is-v3 text-size-body-2-cc">
                        We use cookies
                    </h5>
                    <div className="cookie-buttons-group is-v3">
                        <button fs-cc="close" className="accept-button is-v3" onClick={() => setShowCookies(false)}>
                            OK
                        </button>
                    </div>
                </div> : <></>
                }
                <header className="navbar1_component" style={{ color: "rgb(0, 0, 0)" }}>
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
                                        "\n.navbar1_inner:has(.w-nav-button.w--open) .navbar1_logo-link,\n.navbar1_component:has(.w-nav-button.w--open) .navbar1_dropdown_toggle {\n\tcolor: white;\n}\n\n.navbar1_inner:has(.w-nav-button:not(.w--open)) .navbar1_logo-link,\n.navbar1_inner:has(.w-nav-button:not(.w--open)) .navbar1_dropdown_toggle {\n\tcolor: inherit;\n}\n"
                                }}
                            />
                        </div>
                        <div className="navbar1_background" />
                        <div className="navbar1_container">
                            <a href="/en" className="navbar1_logo-link w-nav-brand">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 92 40"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_2069_1114)">
                                        <path
                                            d="M1.14999 36.8244H6.29565V35.3425H2.68446V33.8548H6.00433V32.3758H2.68446V30.8853H6.29565V29.4062H1.14999V36.8244Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M9.75107 31.0355C10.002 30.885 10.3626 30.8069 10.8212 30.8069C11.2105 30.8069 11.5567 30.885 11.8509 31.0355C12.1278 31.1774 12.3124 31.3771 12.4162 31.6491L12.4854 31.8257H14.0632L13.9709 31.4755C13.792 30.7895 13.4113 30.2483 12.8402 29.8691C12.2806 29.4957 11.6172 29.3076 10.8702 29.3076C10.3049 29.3076 9.79434 29.3944 9.35304 29.5681C8.89731 29.7447 8.53677 29.9994 8.28006 30.3264C8.01182 30.6622 7.87626 31.0587 7.87626 31.5015C7.87626 32.0804 8.10123 32.5724 8.54831 32.9603C8.96942 33.3279 9.5982 33.5912 10.4202 33.736L11.1586 33.872C11.672 33.9762 12.0384 34.1006 12.246 34.2454C12.4133 34.3611 12.4854 34.4914 12.4854 34.6679C12.4854 34.8734 12.3729 35.0355 12.1335 35.1773C11.8538 35.3423 11.4701 35.4262 10.9971 35.4262C10.5241 35.4262 10.1145 35.3365 9.83184 35.1571C9.55782 34.9834 9.34727 34.6969 9.20882 34.309L9.14248 34.1238H7.63974L7.69454 34.4509C7.82434 35.2294 8.19353 35.8459 8.79636 36.283C9.38476 36.7113 10.1145 36.9284 10.9654 36.9284C11.5451 36.9284 12.0701 36.8358 12.5229 36.6534C12.9902 36.4653 13.3623 36.199 13.6276 35.8633C13.9045 35.5131 14.0459 35.105 14.0459 34.6506C14.0459 34.0456 13.8209 33.542 13.3738 33.1542C12.9527 32.7895 12.2979 32.529 11.4326 32.3843L10.6914 32.2569C10.2183 32.173 9.87222 32.0601 9.66743 31.927C9.50879 31.8228 9.43668 31.7041 9.43668 31.5449C9.43668 31.3279 9.53187 31.1745 9.74531 31.0442L9.75107 31.0355Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M21.2769 29.4062H14.8621V30.9055H17.3023V36.8244H18.8367V30.9055H21.2769V29.4062Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M24.2795 29.4062L20.9625 36.8244H22.6412L23.3161 35.2557H26.6389L27.3138 36.8244H29.0502L25.7332 29.4062H24.2795ZM23.9478 33.797L24.9862 31.4004L26.0188 33.797H23.9478Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M28.6377 30.9055H31.0779V36.8244H32.6123V30.9055H35.0525V29.4062H28.6377V30.9055Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M41.672 30.8853V29.4062H36.5235V36.8244H41.672V35.3425H38.058V33.8548H41.3778V32.3758H38.058V30.8853H41.672Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M4.12663 10.3936H1.14999V25.8638H4.12663V10.3936Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M17.5792 25.8638L9.71937 15.0274V25.8638H6.78311V10.3936H10.0165L17.6051 20.9492V10.3936H20.5414V25.8638H17.5792Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M29.7569 26.0726C27.9801 26.0726 26.4572 25.6211 25.2313 24.7267C23.9824 23.8208 23.2152 22.5415 22.9469 20.9294L22.8604 20.4026H25.7851L25.8919 20.7007C26.2005 21.5574 26.6649 22.1855 27.2734 22.5734C27.8936 22.967 28.7502 23.1696 29.8203 23.1696C30.8904 23.1696 31.6894 22.9843 32.3066 22.6197C33.0364 22.1884 33.12 21.7282 33.12 21.4185C33.12 20.9988 32.9383 20.6776 32.5489 20.4084C32.2345 20.1913 31.5682 19.8729 30.1866 19.5951L28.6176 19.3056C26.8985 19.0017 25.5861 18.4605 24.7122 17.6935C23.7978 16.8918 23.3334 15.8845 23.3334 14.7008C23.3334 13.7948 23.6103 12.9873 24.1584 12.2956C24.6891 11.6241 25.4361 11.0973 26.3793 10.7297C27.2994 10.3708 28.3666 10.1885 29.5492 10.1885C31.1125 10.1885 32.4941 10.5821 33.6565 11.3578C34.8391 12.145 35.6265 13.2652 35.9986 14.6892L36.1486 15.2565H33.0767L32.9642 14.9699C32.7248 14.3534 32.321 13.9193 31.6951 13.5951C31.0519 13.2623 30.2934 13.0944 29.4454 13.0944C28.4416 13.0944 27.6513 13.2652 27.0975 13.6009C26.6014 13.9019 26.3735 14.2782 26.3735 14.7847C26.3735 15.0278 26.4312 15.3896 26.9273 15.7167C27.236 15.9222 27.8734 16.2116 29.1512 16.4402L30.7231 16.7094C32.5374 17.0133 33.9017 17.5517 34.7785 18.31C35.6928 19.1059 36.1572 20.1363 36.1572 21.378C36.1572 22.31 35.8688 23.1493 35.3034 23.8642C34.7525 24.5618 33.9824 25.1117 33.0133 25.5024C32.0643 25.8816 30.9683 26.0755 29.7569 26.0755V26.0726Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M38.7242 25.8641V18.8945L40.2126 19.7513L41.7009 18.8945V25.8641H38.7242Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M51.6086 26.0725C50.178 26.0725 48.8541 25.7194 47.6686 25.0219C46.4831 24.3244 45.54 23.3576 44.8592 22.1478C44.1814 20.9409 43.8382 19.5892 43.8382 18.1276C43.8382 16.6659 44.1901 15.3143 44.8823 14.1044C45.5746 12.8975 46.5351 11.9308 47.7321 11.2333C48.9291 10.5357 50.276 10.1826 51.7326 10.1826C53.2671 10.1826 54.6746 10.6081 55.9149 11.4445C57.1552 12.2839 58.0609 13.4272 58.6031 14.8396L58.8396 15.4561H55.5601L55.4303 15.2303C55.0438 14.5646 54.5247 14.035 53.8872 13.6529C53.2556 13.2738 52.5316 13.0827 51.7355 13.0827C50.8414 13.0827 50.0222 13.3056 49.2954 13.7455C48.5656 14.1884 47.983 14.7991 47.559 15.5632C47.135 16.3302 46.9216 17.1898 46.9216 18.1218C46.9216 19.0538 47.1321 19.9134 47.5503 20.6833C47.9657 21.4474 48.5397 22.0581 49.255 22.5009C49.9674 22.938 50.7664 23.1608 51.6317 23.1608C52.8027 23.1608 53.7892 22.828 54.565 22.1739C55.0986 21.7223 55.5169 21.1898 55.8053 20.5849L55.9611 20.2607H50.951V17.4619H59.1511V25.8584H56.3822V24.2086L56.013 24.5183C55.6611 24.8135 55.2746 25.074 54.8621 25.2969C53.9074 25.8092 52.8143 26.0696 51.6115 26.0696L51.6086 26.0725Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M72.0701 25.8638V19.5802H64.6833V25.8638H61.7067V10.3936H64.6833V16.6772H72.0701V10.3936H75.0467V25.8638H72.0701Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M82.6902 25.8638V13.2995H77.507V10.3936H90.85V13.2995H85.6668V25.8638H82.6902Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M40.2529 0H40.1722C39.8318 4.4978 36.2639 8.08099 31.7816 8.41963V8.50067C36.2639 8.84221 39.8347 12.4225 40.1722 16.9203H40.2529C40.5933 12.4225 44.1612 8.83931 48.6435 8.50067V8.41963C44.1612 8.0781 40.5904 4.4978 40.2529 0Z"
                                            fill="currentColor"
                                            className="color-brand"
                                        />
                                    </g>
                                </svg>
                            </a>
                            <div
                                id="w-node-_68a79f6a-9d7d-678d-f904-58679220a0c1-04f8ceb0"
                                className="navbar1_button-wrapper"
                            >
                                <a
                                    href="/login"
                                    className="button-cc is-navbar2-button w-button"
                                >
                                    Log in
                                </a>
                                <Dropdown changeLocale={handleRu}/>
                            </div>
                        </div>
                        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
                    </div>
                </header>
                <div
                    data-w-id="87d650d0-ee8a-757b-0cd5-5e6758a77d9c"
                    className="cc_trigger"
                />
                <main className="main-wrapper">
                    <header data-theme="light" className="section_cc_hero agent-page">
                        <div className="hero_cc_sticky">
                            <div
                                style={{ objectPosition: "50% 50%" }}
                                className="g_visual_wrap agent-page"
                            >
                                <img
                                    width={960}
                                    height="Auto"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685966a877e4c73a3fbdce34_Hero.webp"
                                    className="g_visual_img is-cc-hero desk"
                                />
                                <img
                                    width={960}
                                    height="Auto"
                                    alt=""
                                    src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685967bbdaa1b3430bbef2e6_image.webp"
                                    className="g_visual_img is-cc-hero mob agent"
                                />
                            </div>
                            <div className="padding-global-cc">
                                <div className="container-main-cc">
                                    <div className="hero_cc_content agent-page">
                                        <h1 className="heading-style-h2-cc mb-16 mob-size-40">
                                            From lead to offer in minutes, not{" "} DAys
                                        </h1>
                                        <p className="text-size-body-1-cc mb-40 is-ch mob-size-20">
                                            Create personalized Thai real estate selections with live
                                            data, built-in analytics, and zero manual work
                                        </p>
                                        <div className="button-group-cc is-right mb-16">
                                            <a
                                                href="/register"
                                                className="button-cc _w-auto sizing-auto w-button"
                                            >
                                                Try it Free
                                            </a>
                                        </div>
                                        <p className="text-size-body-2-cc is-opacity-64-black center">
                                            No credit card required. Cancel anytime
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="section_cc_how">
                        <div className="padding-global-cc">
                            <div className="container-main-cc">
                                <div className="how-wrapper">
                                    <h2 className="heading-style-h7-cc mb-8">
                                        How the platform works
                                    </h2>
                                    <p className="text-size-body-3-cc">
                                        From discovery to deal in five simple steps
                                    </p>
                                    <div className="how-point-wrapper">
                                        <div className="how-point _1-point">
                                            <div className="text-size-body-4-cc opacity-24 mb-32">01</div>
                                            <div className="text-size-body-2-cc mb-8 mob-size-16">
                                                <strong>Use smart filters</strong>
                                            </div>
                                            <div className="text-size-body-2-cc mob-size-16">
                                                Quickly narrow property options by location, budget, ROI,
                                                size, and more
                                            </div>
                                        </div>
                                        <div className="mob-line" />
                                        <div className="how-point _1-point">
                                            <div className="text-size-body-4-cc opacity-24 mb-32">02</div>
                                            <div className="text-size-body-2-cc mb-8 mob-size-16">
                                                <strong>Drag &amp; drop selections</strong>
                                            </div>
                                            <div className="text-size-body-2-cc mob-size-16">
                                                Build tailored shortlists for each client in seconds
                                            </div>
                                        </div>
                                        <div className="mob-line" />
                                        <div className="how-point _1-point">
                                            <div className="text-size-body-4-cc opacity-24 mb-32">03</div>
                                            <div className="text-size-body-2-cc mb-8 mob-size-16">
                                                <strong>Share a unique link</strong>
                                            </div>
                                            <div className="text-size-body-2-cc mob-size-16">
                                                Send a personalized landing page. No PDFs, no clutter
                                            </div>
                                        </div>
                                        <div className="mob-line" />
                                        <div className="how-point _1-point">
                                            <div className="text-size-body-4-cc opacity-24 mb-32">04</div>
                                            <div className="text-size-body-2-cc mb-8 mob-size-16 max-w-9">
                                                <strong>Track interest</strong>
                                            </div>
                                            <div className="text-size-body-2-cc mob-size-16">
                                                Get notified when your client likes a property
                                            </div>
                                        </div>
                                        <div className="mob-line" />
                                        <div className="how-point _1-point">
                                            <div className="text-size-body-4-cc opacity-24 mb-32">05</div>
                                            <div className="text-size-body-2-cc mb-8 mob-size-16 max-w-9">
                                                <strong>Close with confidence</strong>
                                            </div>
                                            <div className="text-size-body-2-cc mob-size-16">
                                                Follow up with insight and seal the deal faster. No more
                                                guesswork
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        id="why-are-we"
                        data-theme="dark"
                        className="section_cc_features"
                    >
                        <div className="features_cc_content-item is-6">
                            <div className="container-main-cc">
                                <div className="w-layout-grid features_cc_content-layout gap-0">
                                    <div className="features_cc_content agent-page">
                                        <div>
                                            <div className="heading-style-h7-cc mb-8">
                                                Designed for Agents
                                            </div>
                                            <p className="text-size-body-3-cc">
                                                Everything you need. Nothing you don’t
                                            </p>
                                        </div>
                                        <div>
                                            <div className="text-size-body-2-cc is-opacity-64 mb-8 mob-size-16">
                                                No more endless chats, outdated folders, manual updates, or
                                                chasing developers.
                                                <br />
                                            </div>
                                            <div className="text-size-body-2-cc is-opacity-64 mob-size-16">
                                                Each client offer becomes a clean, professional landing page
                                                with photos, layouts, pricing, and investment insights. All
                                                in one place
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features_cc_image-wrapper agent-page">
                                        <img
                                            loading="eager"
                                            src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685963754cd5a76d34ea8164_Pic%20(5).webp"
                                            alt=""
                                            className="mob-hide"
                                        />
                                        <img
                                            loading="eager"
                                            src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685968a792d397a211d0e3a3_Pic.webp"
                                            alt=""
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
                                            <div className="heading-style-h7-cc mb-8">
                                                Vetted Projects Only
                                            </div>
                                            <p className="text-size-body-3-cc">
                                                We do the due diligence. You do the selling
                                            </p>
                                        </div>
                                        <div>
                                            <div className="text-size-body-2-cc is-opacity-64 mb-8 mob-size-16">
                                                Every project is assessed against 100+ criteria, from
                                                developer reputation and legal status to location quality
                                                and long-term price trends
                                                <br />
                                            </div>
                                            <div className="text-size-body-2-cc is-opacity-64 mob-size-16">
                                                Our proprietary scoring system makes it easy to spot the
                                                top-performing options at a glance
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
                                            <div className="heading-style-h7-cc mb-8">
                                                Investment Analytics Built&nbsp;in
                                            </div>
                                            <p className="text-size-body-3-cc">
                                                All the numbers your clients care about. <br />
                                                Ready to go
                                            </p>
                                        </div>
                                        <div>
                                            <div className="text-size-body-2-cc is-opacity-64 mb-8 mob-size-16">
                                                Each project includes a full set of investment metrics: ROI,
                                                IRR, Cap Rate, and more.
                                                <br />
                                            </div>
                                            <div className="text-size-body-2-cc is-opacity-64 mob-size-16">
                                                You’ll also see details on nearby infrastructure, live
                                                pricing, and unit availability. Always fresh, always
                                                relevant
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features_cc_image-wrapper agent-page">
                                        <img
                                            loading="eager"
                                            src="https://cdn.prod.website-files.com/672b5797ac1486cdfc512230/685968cec7d33ecbccb3ba4c_Pic%20(1).webp"
                                            alt=""
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
                                                    <div className="text-size-body-2-cc is-opacity-64">
                                                        Object price
                                                    </div>
                                                    <div className="heading-style-h7-cc">$114,215</div>
                                                </div>
                                                <div className="div-block-58">
                                                    <div className="text-size-body-2-cc is-opacity-64">
                                                        Delivery date
                                                    </div>
                                                    <div className="heading-style-h7-cc">Q4 2028</div>
                                                </div>
                                            </div>
                                            <div className="div-block-57">
                                                <div className="text-size-body-2-cc">ROI for 10 years</div>
                                                <div className="heading-style-h4-cc">136%</div>
                                            </div>
                                            <div className="div-block-57 m-8">
                                                <div className="text-size-body-2-cc">IRR</div>
                                                <div className="heading-style-h4-cc">13,1%</div>
                                            </div>
                                            <div className="div-block-57">
                                                <div className="text-size-body-2-cc">Net cash flow</div>
                                                <div className="heading-style-h4-cc">5,1%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        id="why-thailand"
                        data-theme="light"
                        className="section_cc_reveal agent-page"
                    >
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
                                            Your Clients Stay Yours
                                        </div>
                                        <p className="text-size-body-3-cc">
                                            Privacy guaranteed. 100%. Always
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-size-body-2-cc is-opacity-64-black mb-8 mob-size-16">
                                            Your client base is yours and it stays that way.
                                            <br />
                                            We never ask for contact details unless you choose to involve
                                            us.
                                            <br />
                                        </div>
                                        <div className="text-size-body-2-cc is-opacity-64-black mob-size-16">
                                            If you need help closing a deal, you can explicitly invite us
                                            in. Until then, your client data remains fully under your
                                            control.
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
                                        Work Faster and Earn More with Less Effort
                                    </h2>
                                    <div className="how-point-wrapper gap-1-5">
                                        <div className="how-point">
                                            <div className="code-embed-3 w-embed">
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                                                Build custom selections in seconds
                                            </div>
                                        </div>
                                        <div className="how-point">
                                            <div className="code-embed-3 w-embed">
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                                                Create stunning offers instantly
                                            </div>
                                        </div>
                                        <div className="how-point">
                                            <div className="code-embed-3 w-embed">
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                                                Let our AI assistant help you find the best deals
                                            </div>
                                        </div>
                                        <div className="how-point">
                                            <div className="code-embed-3 w-embed">
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                                                See what clients like and follow up smartly
                                            </div>
                                        </div>
                                        <div className="how-point">
                                            <div className="code-embed-3 w-embed">
                                                <svg
                                                    viewBox="0 0 48 48"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                                                Pass deals to partners if needed, and still earn
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        id="contact"
                        data-theme="dark"
                        className="section_cc_contact-partner"
                    >
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
                                <h2 className="heading-style-h7-cc mb-8">Start for free</h2>
                                <p className="text-size-body-3-cc">Full access, zero risks</p>
                                <div className="div-block-59">
                                    <div className="div-block-60">
                                        <div className="code-embed-4 w-embed">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.46973 2.46972C2.74433 2.19512 3.17905 2.17765 3.47364 2.41796L3.53028 2.46972L21.5303 20.4697L21.582 20.5264C21.8223 20.8209 21.8049 21.2557 21.5303 21.5303C21.2557 21.8049 20.8209 21.8223 20.5264 21.582L20.4697 21.5303L18.6338 19.6943C18.4246 19.7301 18.2128 19.7492 18 19.749V19.75H6C5.00544 19.75 4.0519 19.3546 3.34864 18.6514C2.64538 17.9481 2.25 16.9946 2.25 16V7.99999C2.25 6.72389 2.88645 5.59711 3.85938 4.91992L2.46973 3.53027L2.41797 3.47363C2.17766 3.17905 2.19513 2.74433 2.46973 2.46972ZM20.25 7.99999C20.25 7.40326 20.0128 6.83113 19.5908 6.40917C19.1689 5.98722 18.5967 5.74999 18 5.74999H9C8.58579 5.74999 8.25 5.41421 8.25 4.99999C8.25 4.58578 8.58579 4.24999 9 4.24999H18C18.9946 4.24999 19.9481 4.64537 20.6514 5.34863C21.3546 6.05189 21.75 7.00543 21.75 7.99999V15.999L21.7402 16.2754C21.7202 16.5503 21.6697 16.8225 21.5898 17.0869C21.4701 17.4833 21.0517 17.7076 20.6553 17.5879C20.2587 17.4682 20.0346 17.0499 20.1543 16.6533C20.2181 16.4418 20.2502 16.2219 20.25 16.001V11.75H15C14.5858 11.75 14.25 11.4142 14.25 11C14.25 10.5858 14.5858 10.25 15 10.25H20.25V7.99999ZM7.00977 14.25C7.42398 14.25 7.75977 14.5858 7.75977 15C7.75977 15.4142 7.42398 15.75 7.00977 15.75H7C6.58579 15.75 6.25 15.4142 6.25 15C6.25 14.5858 6.58579 14.25 7 14.25H7.00977ZM3.75 16C3.75 16.5967 3.98723 17.1689 4.40918 17.5908C4.83114 18.0128 5.40326 18.25 6 18.25H17.1895L13.71 14.7705C13.7334 14.8432 13.75 14.9195 13.75 15C13.75 15.4142 13.4142 15.75 13 15.75H11C10.5858 15.75 10.25 15.4142 10.25 15C10.25 14.5858 10.5858 14.25 11 14.25H13C13.0801 14.25 13.1562 14.2658 13.2285 14.2891L10.6895 11.75H3.75V16ZM3.75 10.25H9.18946L4.9502 6.01074C4.23606 6.38834 3.75 7.13752 3.75 7.99999V10.25Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-size-body-2-cc mob-size-16">
                                            No credit card needed
                                        </div>
                                    </div>
                                    <div className="div-block-60">
                                        <div className="code-embed-4 w-embed">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7 2.25C7.41421 2.25 7.75 2.58579 7.75 3V4.25H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V4.25H17C17.7293 4.25 18.4288 4.53973 18.9445 5.05546C19.4603 5.57118 19.75 6.27065 19.75 7V11C19.75 11.4142 19.4142 11.75 19 11.75H3.75V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H11.795C12.2092 20.25 12.545 20.5858 12.545 21C12.545 21.4142 12.2092 21.75 11.795 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V7C2.25 6.27065 2.53973 5.57118 3.05546 5.05546C3.57118 4.53973 4.27065 4.25 5 4.25H6.25V3C6.25 2.58579 6.58579 2.25 7 2.25ZM6.25 5.75H5C4.66848 5.75 4.35054 5.8817 4.11612 6.11612C3.8817 6.35054 3.75 6.66848 3.75 7V10.25H18.25V7C18.25 6.66848 18.1183 6.35054 17.8839 6.11612C17.6495 5.8817 17.3315 5.75 17 5.75H15.75V7C15.75 7.41421 15.4142 7.75 15 7.75C14.5858 7.75 14.25 7.41421 14.25 7V5.75H7.75V7C7.75 7.41421 7.41421 7.75 7 7.75C6.58579 7.75 6.25 7.41421 6.25 7V5.75ZM14.6412 14.6412C15.532 13.7504 16.7402 13.25 18 13.25C19.2598 13.25 20.468 13.7504 21.3588 14.6412C22.2496 15.532 22.75 16.7402 22.75 18C22.75 19.2598 22.2496 20.468 21.3588 21.3588C20.468 22.2496 19.2598 22.75 18 22.75C16.7402 22.75 15.532 22.2496 14.6412 21.3588C13.7504 20.468 13.25 19.2598 13.25 18C13.25 16.7402 13.7504 15.532 14.6412 14.6412ZM18 14.75C17.138 14.75 16.3114 15.0924 15.7019 15.7019C15.0924 16.3114 14.75 17.138 14.75 18C14.75 18.862 15.0924 19.6886 15.7019 20.2981C16.3114 20.9076 17.138 21.25 18 21.25C18.862 21.25 19.6886 20.9076 20.2981 20.2981C20.9076 19.6886 21.25 18.862 21.25 18C21.25 17.138 20.9076 16.3114 20.2981 15.7019C19.6886 15.0924 18.862 14.75 18 14.75ZM18 15.7461C18.4142 15.7461 18.75 16.0819 18.75 16.4961V17.6894L19.5303 18.4698C19.8232 18.7627 19.8232 19.2375 19.5303 19.5304C19.2374 19.8233 18.7626 19.8233 18.4697 19.5304L17.4697 18.5304C17.329 18.3898 17.25 18.199 17.25 18.0001V16.4961C17.25 16.0819 17.5858 15.7461 18 15.7461Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-size-body-2-cc mob-size-16">
                                            Cancel anytime
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
                                            Free while beta is open
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="https://insightestate.pro/register"
                                    target="_blank"
                                    className="button-cc is-white _w-100 w-button"
                                >
                                    Get Access
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer_component">
                    <div className="padding-main is-16">
                        <div className="container-large">
                            <div className="footer_layout">
                                <a href="/en/old-home-3" className="footer_logo w-inline-block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        viewBox="0 0 129 56"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_168_12117)">
                                            <path
                                                d="M1.6123 51.5545H8.82741V49.4799H3.76389V47.3971H8.41893V45.3265H3.76389V43.2397H8.82741V41.1691H1.6123V51.5545Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M13.6724 43.4503C14.0242 43.2396 14.5298 43.1302 15.1728 43.1302C15.7188 43.1302 16.2041 43.2396 16.6167 43.4503C17.0049 43.6489 17.2637 43.9285 17.4093 44.3094L17.5064 44.5566H19.7187L19.5892 44.0663C19.3385 43.1059 18.8046 42.3482 18.0039 41.8174C17.2193 41.2946 16.2891 41.0312 15.2416 41.0312C14.4489 41.0312 13.733 41.1528 13.1143 41.3959C12.4752 41.6431 11.9697 41.9997 11.6098 42.4576C11.2336 42.9276 11.0436 43.4828 11.0436 44.1027C11.0436 44.9131 11.359 45.602 11.9859 46.145C12.5764 46.6596 13.458 47.0283 14.6107 47.2309L15.646 47.4214C16.3659 47.5672 16.8795 47.7415 17.1707 47.9441C17.4053 48.1062 17.5064 48.2885 17.5064 48.5357C17.5064 48.8234 17.3487 49.0503 17.013 49.2489C16.6207 49.4798 16.0828 49.5973 15.4195 49.5973C14.7563 49.5973 14.182 49.4717 13.7856 49.2205C13.4014 48.9774 13.1062 48.5762 12.912 48.0332L12.819 47.7739H10.7119L10.7888 48.2318C10.9708 49.3218 11.4884 50.1849 12.3337 50.7967C13.1587 51.3965 14.182 51.7004 15.375 51.7004C16.188 51.7004 16.924 51.5707 17.559 51.3154C18.2142 51.052 18.7359 50.6792 19.108 50.2092C19.4962 49.7189 19.6944 49.1476 19.6944 48.5114C19.6944 47.6645 19.3789 46.9594 18.7521 46.4165C18.1616 45.9059 17.2435 45.5412 16.0302 45.3386L14.9908 45.1603C14.3276 45.0428 13.8422 44.8848 13.5551 44.6984C13.3326 44.5525 13.2315 44.3864 13.2315 44.1635C13.2315 43.8596 13.365 43.6448 13.6643 43.4625L13.6724 43.4503Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M29.8335 41.1691H20.8389V43.268H24.2604V51.5545H26.412V43.268H29.8335V41.1691Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M34.0441 41.1691L29.3931 51.5545H31.7469L32.6933 49.3583H37.3523L38.2987 51.5545H40.7334L36.0824 41.1691H34.0441ZM33.579 47.3161L35.0349 43.9609L36.4828 47.3161H33.579Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M40.1548 43.268H43.5763V51.5545H45.7279V43.268H49.1494V41.1691H40.1548V43.268Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M58.4311 43.2397V41.1691H51.2119V51.5545H58.4311V49.4799H53.3635V47.3971H58.0185V45.3265H53.3635V43.2397H58.4311Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M5.78607 14.551H1.6123V36.2094H5.78607V14.551Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M24.6487 36.2094L13.6279 21.0384V36.2094H9.51074V14.551H14.0444L24.6851 29.3289V14.551H28.8023V36.2094H24.6487Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M41.7242 36.5011C39.2329 36.5011 37.0975 35.869 35.3786 34.6169C33.6274 33.3486 32.5517 31.5576 32.1755 29.3006L32.0542 28.5631H36.1552L36.3048 28.9804C36.7375 30.1799 37.3887 31.0592 38.242 31.6021C39.1116 32.1532 40.3127 32.4369 41.8132 32.4369C43.3137 32.4369 44.4339 32.1775 45.2994 31.667C46.3226 31.0632 46.4399 30.4189 46.4399 29.9854C46.4399 29.3978 46.1851 28.948 45.6391 28.5712C45.1983 28.2673 44.2641 27.8215 42.3268 27.4325L40.1267 27.0273C37.7163 26.6019 35.8761 25.8441 34.6507 24.7703C33.3686 23.6479 32.7175 22.2378 32.7175 20.5805C32.7175 19.3122 33.1057 18.1817 33.8742 17.2132C34.6183 16.2731 35.6658 15.5357 36.9883 15.021C38.2784 14.5186 39.7748 14.2633 41.433 14.2633C43.6251 14.2633 45.5623 14.8144 47.1922 15.9003C48.8504 17.0025 49.9545 18.5707 50.4762 20.5643L50.6865 21.3585H46.3793L46.2215 20.9573C45.8859 20.0942 45.3196 19.4864 44.442 19.0326C43.5401 18.5666 42.4765 18.3316 41.2874 18.3316C39.88 18.3316 38.7719 18.5707 37.9953 19.0407C37.2997 19.4621 36.9802 19.9889 36.9802 20.698C36.9802 21.0384 37.0611 21.5449 37.7567 22.0028C38.1895 22.2905 39.0833 22.6957 40.8749 23.0158L43.0791 23.3926C45.623 23.8181 47.5359 24.5718 48.7654 25.6334C50.0475 26.7477 50.6986 28.1903 50.6986 29.9286C50.6986 31.2334 50.2942 32.4085 49.5015 33.4094C48.729 34.3859 47.6492 35.1558 46.2903 35.7028C44.9597 36.2337 43.4228 36.5051 41.7242 36.5051V36.5011Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M54.2979 36.2094V26.452L56.3847 27.6514L58.4716 26.452V36.2094H54.2979Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M72.3642 36.5011C70.3582 36.5011 68.5019 36.0068 66.8396 35.0302C65.1774 34.0537 63.8549 32.7003 62.9004 31.0065C61.95 29.3168 61.4688 27.4245 61.4688 25.3782C61.4688 23.3319 61.9622 21.4396 62.9328 19.7458C63.9034 18.0561 65.2502 16.7027 66.9286 15.7262C68.607 14.7496 70.4957 14.2552 72.5381 14.2552C74.6897 14.2552 76.6633 14.8509 78.4024 16.022C80.1415 17.1971 81.4114 18.7976 82.1717 20.775L82.5034 21.6381H77.905L77.723 21.3221C77.181 20.3901 76.453 19.6486 75.5592 19.1137C74.6735 18.5829 73.6584 18.3154 72.5422 18.3154C71.2884 18.3154 70.1398 18.6274 69.1206 19.2434C68.0974 19.8633 67.2805 20.7183 66.6859 21.7881C66.0914 22.8619 65.7922 24.0653 65.7922 25.3701C65.7922 26.6749 66.0874 27.8783 66.6738 28.9562C67.2562 30.0259 68.061 30.8809 69.064 31.5009C70.063 32.1127 71.1833 32.4247 72.3966 32.4247C74.0386 32.4247 75.4217 31.9588 76.5097 31.043C77.2579 30.4109 77.8443 29.6653 78.2487 28.8184L78.4671 28.3646H71.4421V24.4462H82.9402V36.2013H79.0576V33.8916L78.5399 34.3252C78.0465 34.7385 77.5046 35.1032 76.9262 35.4152C75.5875 36.1324 74.0547 36.4971 72.3682 36.4971L72.3642 36.5011Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M101.055 36.2094V27.4123H90.6972V36.2094H86.5234V14.551H90.6972V23.3481H101.055V14.551H105.229V36.2094H101.055Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M115.946 36.2094V18.6193H108.678V14.551H127.387V18.6193H120.12V36.2094H115.946Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M56.4412 0H56.328C55.8507 6.29692 50.8479 11.3134 44.563 11.7875V11.9009C50.8479 12.3791 55.8548 17.3915 56.328 23.6884H56.4412C56.9185 17.3915 61.9213 12.375 68.2062 11.9009V11.7875C61.9213 11.3093 56.9144 6.29692 56.4412 0Z"
                                                fill="#4EECF8"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                <div className="footer_item">
                                    <a
                                        href="mailto:info@insightestate.pro"
                                        className="footer_link heading-style-h5-cc sgoal_click sgoal_hover"
                                    >
                                        info@insightestate.pro
                                    </a>
                                    <a
                                        href="tel:+66800054559"
                                        className="footer_link heading-style-h5-cc sgoal_click sgoal_hover"
                                    />
                                    <div className="menu-socials">
                                        <a
                                            href="http://wa.me/66800054559"
                                            target="_blank"
                                            className="link-block-6 w-inline-block sgoal_click sgoal_hover"
                                        />
                                        <a
                                            href="https://www.instagram.com/insightestate_/"
                                            target="_blank"
                                            className="link-block-6 w-inline-block sgoal_click"
                                        />
                                        <a
                                            href="https://www.youtube.com/@InsightEstateChannel?sub_confirmation=1"
                                            target="_blank"
                                            className="link-block-7 w-inline-block sgoal_click"
                                        />
                                        <a
                                            href="https://t.me/Estate_Insight"
                                            target="_blank"
                                            className="link-block-9 w-inline-block sgoal_click sgoal_hover"
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
                                                                stroke: "none",
                                                                fillRule: "nonzero",
                                                                fill: "currentcolor"
                                                            }}
                                                            d="M 37.5 3 C 56.554688 3 72 18.445312 72 37.5 C 72 56.554688 56.554688 72 37.5 72 C 18.445312 72 3 56.554688 3 37.5 C 3 18.445312 18.445312 3 37.5 3 Z M 49.402344 51.5625 C 50.035156 49.617188 53.007812 30.210938 53.375 26.386719 C 53.488281 25.230469 53.121094 24.460938 52.402344 24.117188 C 51.535156 23.699219 50.253906 23.910156 48.761719 24.445312 C 46.71875 25.183594 20.601562 36.273438 19.09375 36.914062 C 17.664062 37.519531 16.308594 38.183594 16.308594 39.144531 C 16.308594 39.820312 16.710938 40.199219 17.8125 40.59375 C 18.964844 41.003906 21.855469 41.878906 23.566406 42.351562 C 25.210938 42.804688 27.085938 42.410156 28.132812 41.757812 C 29.246094 41.066406 42.089844 32.472656 43.015625 31.71875 C 43.933594 30.964844 44.671875 31.929688 43.917969 32.683594 C 43.164062 33.4375 34.347656 41.996094 33.183594 43.179688 C 31.773438 44.617188 32.773438 46.109375 33.722656 46.707031 C 34.804688 47.386719 42.582031 52.605469 43.753906 53.441406 C 44.921875 54.277344 46.113281 54.660156 47.199219 54.660156 C 48.285156 54.660156 48.859375 53.226562 49.402344 51.5625 Z M 49.402344 51.5625 "
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                        <div className="code-embed-2 w-embed">
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n.link-block-9 {\n display: none !important;\n}\n"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="footer_text">
                                    <div className="text-size-caption-cc is-opacity-64">
                                        The information provided in this material is for informational
                                        purposes only and does not represent the official position or
                                        endorsement of any developer or project mentioned herein.
                                        <br />
                                        Project ratings and scores — including those related to
                                        potential returns, investment attractiveness, and risk — are
                                        based on the internal evaluation methodology of Insight Realty
                                        Co., Ltd. These assessments reflect the subjective opinions of
                                        our team and are derived from publicly available information at
                                        the time of publication.
                                        <br />
                                        Insight Realty Co., Ltd. does not provide financial advice or
                                        investment consulting services, and makes no guarantees
                                        regarding the achievement of any specific financial results or
                                        performance indicators.Insight Realty Co., Ltd. shall not be
                                        held liable for any decisions made based on the information or
                                        assessments presented in this material.
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
                                        © 2025 Insight Estate. All rights reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* Google Tag Manager (noscript) */}
            <noscript>
                &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDVB33DV"
                height="0" width="0" style="display: none; visibility:
                hidden"&gt;&lt;/iframe&gt;
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
    )
}
