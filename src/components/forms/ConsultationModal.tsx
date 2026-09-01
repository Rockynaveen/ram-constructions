import React from 'react';
import { useAppStore } from '../../store/useStore';
import { Modal } from '../ui/Modal';
import { ProjectEnquiryForm } from './ProjectEnquiryForm';

export const ConsultationModal: React.FC = () => {
  const { isConsultationModalOpen, closeConsultationModal, initialServiceForModal } = useAppStore();

  return (
    <Modal
      isOpen={isConsultationModalOpen}
      onClose={closeConsultationModal}
      title="Request Architectural Consultation"
      subtitle={initialServiceForModal ? `Inquiring about: ${initialServiceForModal}` : 'Direct access to our Senior Project Directors'}
      size="xl"
    >
      <div className="py-2">
        <ProjectEnquiryForm
          defaultService={initialServiceForModal}
          onSuccess={() => {
            setTimeout(() => {
              closeConsultationModal();
            }, 3000);
          }}
        />
      </div>
    </Modal>
  );
};
