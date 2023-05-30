"use client";
import styles from "./FAQ.module.scss";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import Header from "@/components/Header/Header";

const FaqSection = () => {
  return (
    <section className={styles.color_sectiion}>
      <div className={styles.container}>
        <h1 className={styles.faq_headline}>Часто задаваемые вопросы</h1>
        <div className={styles.faq_container}>
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            className={styles.accordion_main}
          >
            <AccordionItem className={styles.accordion_item}>
              <h2>
                <AccordionButton className={styles.accorion_button} p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.accordion_headline}
                  >
                    Что такое Орзу?
                  </Box>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordion_paragraph}>
                Орзу - это упрощенный сервис по получению кредита наличными либо
                приобретению товаров в рассрочку на сумму до 50 000 сомони.
              </AccordionPanel>
            </AccordionItem>
            <hr className={styles.accordion_hr} />
            <AccordionItem className={styles.accordion_item}>
              <h2>
                <AccordionButton className={styles.accorion_button} p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.accordion_headline}
                  >
                    Как пользоваться картой Орзу?
                  </Box>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordion_paragraph}>
                Картой можно пользоваться для обналичивания средств как в офисах
                Хумо, так и привязать ее в приложении, чтобы расплачиваться за
                покупки.
              </AccordionPanel>
            </AccordionItem>
            <hr className={styles.accordion_hr} />
            <AccordionItem className={styles.accordion_item}>
              <h2>
                <AccordionButton className={styles.accorion_button} p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.accordion_headline}
                  >
                    Как погашать кредит и рассрочку?
                  </Box>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordion_paragraph}>
                <ul>
                  Для подключения «Орзу» в филиалах Хумо необходимо
                  предоставить:
                  <li>Паспорт с пропиской и ИНН</li>
                  <li>Справка о доходе</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <hr className={styles.accordion_hr} />
            <AccordionItem className={styles.accordion_item}>
              <h2>
                <AccordionButton className={styles.accorion_button} p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.accordion_headline}
                  >
                    Что такое лимит?
                  </Box>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordion_paragraph}>
                Лимит кредитования - это установленный лимит, в рамках которого
                вы можете получать кредиты либо оформлять рассрочку.
              </AccordionPanel>
            </AccordionItem>
            <hr className={styles.accordion_hr} />
            <AccordionItem className={styles.accordion_item}>
              <h2>
                <AccordionButton className={styles.accorion_button} p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.accordion_headline}
                  >
                    Как определяется мой лимит?
                  </Box>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordion_paragraph}>
                Кредитный лимит определяется кредитным комитетом МДО «Хумо» на
                основании анализа платежеспособности клиента и его кредитной
                истории.
              </AccordionPanel>
            </AccordionItem>
            <hr className={styles.accordion_hr} />
            <AccordionItem className={styles.accordion_item}>
              <h2>
                <AccordionButton className={styles.accorion_button} p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.accordion_headline}
                  >
                    Как увеличить мой лимит?
                  </Box>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordion_paragraph}>
                При условии своевременного погашения кредитов и рассрочки в
                рамках услуги «Орзу» вам будет предложено повышение кредитного
                лимита, также можете отправить заявку, которая будет рассмотрена
                со стороны кредитного комитета.
              </AccordionPanel>
            </AccordionItem>
            <hr className={styles.accordion_hr} />
            <AccordionItem className={styles.accordion_item}>
              <h2>
                <AccordionButton className={styles.accorion_button} p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className={styles.accordion_headline}
                  >
                    Юридические документы
                  </Box>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.accordion_paragraph}>
                <p>
                  <a
                    href="https://orzu.humo.tj//agreement/agreement-1.pdf"
                    target="_blank"
                  >
                    Оферта №1 - от 08.09.2021 до 12.11.2021
                  </a>
                </p>
                <p>
                  <a
                    href="https://orzu.humo.tj//agreement/agreement-2.pdf"
                    target="_blank"
                  >
                    Оферта №2 - от 12.11.2021 до 08.09.2022
                  </a>
                </p>
                <p>
                  <a
                    href="https://orzu.humo.tj//agreement/agreement-3.pdf"
                    target="_blank"
                  >
                    Оферта №3 с 08.09.2022 до 03.04.2023
                  </a>
                </p>
                <p>
                  <a
                    href="https://orzu.humo.tj//agreement/agreement-4.pdf"
                    target="_blank"
                  >
                    Оферта №3 с 04.04.2023 по настоящее время
                  </a>
                </p>
              </AccordionPanel>
            </AccordionItem>
            <hr className={styles.accordion_hr} />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
