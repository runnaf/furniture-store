import { useEffect, useState } from "react";
import { Modal } from "../ui/Modal/Modal";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeOpen = () => {
        setIsOpen(p => !p);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const drawModal = child => {
        return (
            isOpen &&

            <Modal setIsOpen={setIsOpen} >
                {child}
            </Modal>

        );
    };

    return [changeOpen, drawModal, isOpen];
};
