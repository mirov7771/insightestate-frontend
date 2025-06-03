import { FC, useEffect, useState } from 'react';
import { Accordion } from '@/shared/ui';
import styles from './FAQ.module.scss';

export const FAQ: FC = () => {
  const [locale, setLocale] = useState<string>(localStorage.getItem('language') || 'ru');

  useEffect(() => {
    setLocale(localStorage.getItem('language') || 'ru');
  }, []);
  return (
    <section>
      {locale === 'ru' ? (
        <>
          <h5 className={styles.header}>Ответы на вопросы</h5>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Могут ли иностранцы приобрести недвижимость в Таиланде?
              </span>
            }
          >
            Иностранцы могут:
            <br />– купить квартиру (кондоминиум) в полную собственность (Freehold);
            <br />– оформить долгосрочную аренду земли (Leasehold);
            <br />– владеть зданием, построенным на арендованной земле.
            <br />
            Для других типов недвижимости есть ограничения, но в таких случаях можно
            зарегистрировать собственность через тайскую компанию.
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>Чем отличаются Leasehold и Freehold?</span>
            }
          >
            <p>
              <strong>Freehold</strong> — это полное владение недвижимостью без ограничений по
              времени. Собственник имеет право продавать, сдавать в аренду или передавать объект в
              наследство.{' '}
            </p>
            <br />
            <p>
              <strong>Leasehold</strong> — это долгосрочная аренда сроком на 30 лет с правом на
              продление 2 раза по 30 лет, то есть всего права на лизхолд можно сохранить на срок до
              90 лет. Leasehold можно продать, сдать в аренду или передать в наследство.
            </p>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Какой тип собственности выбрать иностранцу?
              </span>
            }
          >
            <p>Выбор формы владения зависит от цели покупки недвижимости:</p>
            <br />
            <p>
              Leasehold (долгосрочная аренда) — подходит тем, кто рассматривает объект как
              инвестицию с возможностью дальнейшей перепродажи. Такая форма владения упрощает
              процесс продажи и позволяет снизить налоговые расходы.
            </p>
            <br />
            <p>
              Freehold (полное владение) — подходит тем, кто планирует долгосрочное владение
              объектом или хочет иметь максимальную юридическую защиту своих прав. Freehold часто
              выбирают для личного проживания или инвестиций с долгосрочной перспективой.
            </p>
            <br />
            <p>Также мы можем помочь оформить полное владение, если вы хотите купить землю.</p>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Какие документы необходимы для покупки недвижимости на первичном и вторичном рынках?
              </span>
            }
          >
            <p>
              <strong>На первичном рынке:</strong>
            </p>
            <ol>
              <li>Паспорт.</li>
              <li>Договор бронирования.</li>
              <li>Контракт купли-продажи.</li>
              <li>
                Документ (квитанция) полученный от застройщика, который подтверждает перевод средств
                из-за рубежа.
              </li>
            </ol>

            <p>
              <strong>На вторичном рынке:</strong>
            </p>
            <ol>
              <li> Паспорт.</li>
              <li> Договор купли-продажи.</li>
              <li> Документ о праве собственности (Чанот).</li>
              <li> Сертификат о выплате всех налогов и сборов, связанных с недвижимостью.</li>
            </ol>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Нужен ли юрист для сопровождения сделки?
              </span>
            }
          >
            <p>
              Да, проверка юридической чистоты — один из главных этапов при совершении сделки.
              Юридический департамент компании защищает интресы наших клиентов, проводит полную
              юридическую проверку всех документов застройщика и проверяет договор на соответствие
              требованиям законодательства Таиланда.
            </p>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Можно ли оформить сделку по доверенности?
              </span>
            }
          >
            <p>
              Да, сделку можно оформить по доверенности. Для этого доверенность нужно заверить у
              юриста или нотариуса. Это удобно, если вы не можете лично присутствовать на
              регистрации сделки в земельном департаменте.
            </p>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Какие документы получает покупатель при покупке недвижимости?
              </span>
            }
          >
            <p>
              Покупатель получает <strong>ряд документов</strong>, в том числе: <br />
              – договор купли-продажи; <br />
              – подтверждение права собственности; <br />
              – налоговые и регистрационные квитанции; <br />
              – сертификат соответствия для новых построек. <br />
              <br />
              Эти документы подтверждают законность сделки и права нового владельца.
            </p>
          </Accordion>
        </>
      ) : (
        <>
          <h5 className={styles.header}>FAQ</h5>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Can foreigners buy (own) a property in Thailand?
              </span>
            }
          >
            Foreigners can:
            <br />— buy a fully owned apartment (condominium) (Freehold);
            <br />— apply for a long-term land lease (Leasehold);
            <br />— own a building built on leased land.
            <br />
            There are restrictions for other types of real estate, but in such cases it is possible
            to register property through a Thai company.
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                What is the difference between Leasehold and Freehold ownership?
              </span>
            }
          >
            <p>
              <strong>Freehold</strong> — full ownership of real estate without time limits. The
              owner has the right to sell, rent or inherit the property.{' '}
            </p>
            <br />
            <p>
              <strong>Leasehold</strong> — this is a long-term lease for a period of 30 years with
              the right to renew 2 times for 30 years, that is, the entire leasehold right can be
              retained for up to 90 years. Leasehold can be sold, leased, or inherited.
            </p>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>Which type of ownership to choose?</span>
            }
          >
            <p>The choice of ownership depends on the purpose of buying the property:</p>
            <br />
            <p>
              Leasehold (long-term lease) — suitable for those who consider the property as an
              investment with the possibility of further resale. This form of ownership simplifies
              the sales process and reduces tax costs.
            </p>
            <br />
            <p>
              Freehold (full ownership) is suitable for those who are planning long-term ownership
              of a property or want maximum legal protection for their rights. Freehold is often
              chosen for personal residence or long-term investment.
            </p>
            <br />
            <p>We can also help you register full ownership if you want to buy land.</p>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Which documents do I need to buy property in Thailand?
              </span>
            }
          >
            <p>
              <strong>On the primary market:</strong>
            </p>
            <ol>
              <li>Passport.</li>
              <li>Reservation agreement.</li>
              <li>Purchase and sale contract.</li>
              <li>
                A document (receipt) received from the developer confirming the transfer of funds
                from abroad.
              </li>
            </ol>

            <p>
              <strong>On the secondary market:</strong>
            </p>
            <ol>
              <li> Passport.</li>
              <li> Purchase agreement.</li>
              <li> Title deed (Chanot).</li>
              <li> Certificate of payment of all taxes and fees related to real estate.</li>
            </ol>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Do I need legal counsel to invest in property?
              </span>
            }
          >
            <p>
              Yes, checking legal purity is one of the main stages in making a deal. The company's
              legal department protects the interests of our clients, conducts a full legal review
              of all developer documents and checks the contract for compliance with Thai
              legislation.
            </p>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Can I buy a property through power of attorney?
              </span>
            }
          >
            <p>
              Yes, the deal can be made by proxy. To do this, the power of attorney must be
              certified by a lawyer or notary. This is convenient if you cannot personally attend
              the registration of the transaction at the Land Department.
            </p>
          </Accordion>
          <Accordion
            title={
              <span className={styles.accordion__title}>
                Which documents do I get after buying the property?
              </span>
            }
          >
            <p>
              The buyer gets a <strong>number of documents</strong>, including: <br />
              — purchase agreement; <br />
              — proof of ownership; <br />
              — tax and registration receipts; <br />
              — certificate of conformity for new buildings. <br />
              <br />
              These documents confirm the legality of the transaction and the rights of the new
              owner.
            </p>
          </Accordion>
        </>
      )}
    </section>
  );
};
