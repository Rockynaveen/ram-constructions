import { create } from 'zustand';
import type { ProjectCategory } from '../types';

interface AppState {
  // Mobile navigation
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;

  // Project Consultation Modal
  isConsultationModalOpen: boolean;
  openConsultationModal: (initialService?: string) => void;
  closeConsultationModal: () => void;
  initialServiceForModal: string;

  // Portfolio filters
  selectedProjectCategory: ProjectCategory;
  setProjectCategory: (category: ProjectCategory) => void;

  // Quick Notification Toast
  toastMessage: string | null;
  showToast: (message: string) => void;
  clearToast: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMobileMenuOpen: false,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  isConsultationModalOpen: false,
  initialServiceForModal: '',
  openConsultationModal: (initialService = '') => set({ isConsultationModalOpen: true, initialServiceForModal: initialService }),
  closeConsultationModal: () => set({ isConsultationModalOpen: false, initialServiceForModal: '' }),

  selectedProjectCategory: 'All',
  setProjectCategory: (category) => set({ selectedProjectCategory: category }),

  toastMessage: null,
  showToast: (message) => {
    set({ toastMessage: message });
    setTimeout(() => {
      set({ toastMessage: null });
    }, 4500);
  },
  clearToast: () => set({ toastMessage: null }),
}));
