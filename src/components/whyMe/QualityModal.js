import ModalStyle from './QualityModal.module.css'

const QualityModal = ({content, setShowModal}) => {
    
    
    window.onclick = function(event) {
        const modal = document.getElementById("myModal");
        if (event.target === modal) {
          setShowModal(0);
        }
    }
    return (
        <div id="myModal" className={ModalStyle.modal}>

            <div className={ModalStyle.modalContent}>
                <span onClick={() => setShowModal(0)} className={ModalStyle.close}>&times;</span>
                <p>{content}</p>
            </div>

        </div>
    );
}

export default QualityModal;
