// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // Bu ID'yi gerçek Analytics ID'niz ile değiştirin

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (page_title: string, page_location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title,
      page_location: page_location || window.location.href,
    });
  }
};

// Track contact form submissions
export const trackContactForm = (method: 'email' | 'form' | 'phone') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact', {
      event_category: 'engagement',
      event_label: method,
      value: 1,
    });
  }
};

// Track project views
export const trackProjectView = (project_name: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_view', {
      event_category: 'projects',
      event_label: project_name,
      value: 1,
    });
  }
};

// Track external link clicks
export const trackExternalLink = (link_url: string, link_text: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'external_link',
      event_label: link_text,
      value: 1,
      custom_parameter: link_url,
    });
  }
};

// Track downloads (CV, etc.)
export const trackDownload = (file_name: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      event_category: 'downloads',
      event_label: file_name,
      value: 1,
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (scroll_depth: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${scroll_depth}%`,
      value: scroll_depth,
    });
  }
};
