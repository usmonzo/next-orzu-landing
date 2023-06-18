"use client";

import styles from "./MerchantAd.module.scss";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button, useDisclosure } from "@chakra-ui/react";
export const MerchantAd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className={styles.merchant_ad_container}>
        <div className={styles.merchant_ad_content}>
          <h1 className={styles.merchant_ad_headline}>
            Увеличьте свои продажи! Станьте частью ОРЗУ
          </h1>
          <p className={styles.merchant_ad_paragraph}>
            Подключите свой магазин к Орзу, чтобы дать возможность покупателям
            оформлять кредит и делать покупки в рассрочку
          </p>
          <PrimaryButton
            text={"Подключить"}
            padding={"20px 40px"}
            onClick={() => onOpen()}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalCloseButton />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
