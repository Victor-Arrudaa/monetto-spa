export default function ModalDelete({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <p>Tem certeza de que deseja excluir esta transação?</p>
                <button onClick={onConfirm}>Sim</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    );
}
