const Modal = ({ children, isOpen, closeModal }) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  }
  const handleModalContainer = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainer}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
