import React from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";
import { ModalInfo } from "./ModalInfo";

export const Project = (el) => {
  const { title, url } = el;

  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ModalInfo {...el} />
      </Modal>
      <div className=" animate__animated animate__pulse">
        <div className="card-item">
          <div className="card-title-screen">
            <h2>{title}</h2>
            <i></i>
          </div>
          <div className="image image--close">
            <div className="main">
              <picture className="main-img ">
                <img src={url} alt={title} />
              </picture>
              <h3
                className="image__title--close read-more"
                onClick={openModal}
                title={title}
              >
                Read more
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
