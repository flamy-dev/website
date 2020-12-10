const ContactButton = (props) => {
  const { children, setShowModal } = props;

  return (
    <div className="flex justify-center items-center ">
      <button
        className="font-bold font-helvetica mr-4 mt-1 text-lg tracking-wider p-1"
        onClick={setShowModal ? () => setShowModal(true) : null}
      >
        {children}
      </button>
      <div>
        <img src="/btn.svg" alt="button" />
      </div>
    </div>
  );
};

export default ContactButton;
