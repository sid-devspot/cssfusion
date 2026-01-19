// import { Accordion } from "./accordion";
// export { Accordion };
// import { Dropdown } from "./dropdown";
// export { Dropdown };
// import { Nav } from "./nav";
// export { Nav };
// import { Table } from "./table";
// export { Table };
// import { Tabs } from "./tabs";
// export { Tabs };

// if (typeof window !== "undefined") {
//   (window as any).cssfusion = {
//     Accordion,
//     Dropdown,
//     Nav,
//     Table,
//     Tabs,
//   };
// }

// New
// import { Accordion } from "./accordion";
// import { Dropdown } from "./dropdown";
// import { Nav } from "./nav";
// import { Table } from "./table";
// import { Tabs } from "./tabs";

// const initComponents = () => {
//   // Auto-init Accordions
//   const accordions = document.querySelectorAll<HTMLElement>(".accordion-main");
//   if (accordions.length) new Accordion(accordions);

//   // Auto-init Dropdowns
//   const dropdowns = document.querySelectorAll<HTMLElement>(".dropdown-box");
//   if (dropdowns.length) new Dropdown(dropdowns);

//   // Auto-init Nav
//   const navContainers = document.querySelectorAll(".navbar-box");
//   navContainers.forEach((el) => new Nav(el as HTMLElement));

//   // Tabs
//   const tabContainers = document.querySelectorAll(".tabs-box");
//   tabContainers.forEach((el) => new Tabs(el as HTMLElement));

//   // Table: usually tables don’t need auto-init unless sorting
// };

// if (typeof window !== "undefined") {
//   (window as any).cssfusion = {
//     Accordion,
//     Dropdown,
//     Nav,
//     Table,
//     Tabs,
//     init: initComponents,
//   };

//   document.addEventListener("DOMContentLoaded", initComponents);

//   // 🔹 Re-init when Angular or SPA changes routes
//   const originalPushState = history.pushState;
//   const originalReplaceState = history.replaceState;

//   const reInit = () => {
//     setTimeout(initComponents, 100); // wait for DOM updates
//   };

//   history.pushState = function (...args) {
//     const result = originalPushState.apply(this, args);
//     reInit();
//     return result;
//   };

//   history.replaceState = function (...args) {
//     const result = originalReplaceState.apply(this, args);
//     reInit();
//     return result;
//   };

//   window.addEventListener("popstate", reInit);
// }

// New 03
import { Accordion } from './accordion';
export { Accordion };
import { Dropdown } from './dropdown';
export { Dropdown };
import { Menubar } from './menubar';
export { Menubar };
import { Nav } from './nav';
export { Nav };
import { Table } from './table';
export { Table };
import { Tabs } from './tabs';
export { Tabs };

const initComponents = () => {
  // Accordions
  const accordions = document.querySelectorAll<HTMLElement>(
    '.accordion-main:not([data-cssfusion-init])',
  );
  accordions.forEach((el) => {
    new Accordion(el); // ✅ init per element
    el.setAttribute('data-cssfusion-init', 'true');
  });

  // Dropdowns
  const dropdowns = document.querySelectorAll<HTMLElement>(
    '.dropdown-box:not([data-cssfusion-init])',
  );
  dropdowns.forEach((el) => {
    new Dropdown(el); // ✅ init per element
    el.setAttribute('data-cssfusion-init', 'true');
  });

  // Menubar
  const menubars = document.querySelectorAll<HTMLElement>(
    '.menubar-box:not([data-cssfusion-init])',
  );
  menubars.forEach((el) => {
    new Menubar(el);
    el.setAttribute('data-cssfusion-init', 'true');
  });

  // Navbars
  const navContainers = document.querySelectorAll<HTMLElement>(
    '.navbar-box:not([data-cssfusion-init])',
  );
  navContainers.forEach((el) => {
    new Nav(el);
    el.setAttribute('data-cssfusion-init', 'true');
  });

  // Tabs
  const tabContainers = document.querySelectorAll<HTMLElement>(
    '.tabs-box:not([data-cssfusion-init])',
  );
  tabContainers.forEach((el) => {
    new Tabs(el);
    el.setAttribute('data-cssfusion-init', 'true');
  });
};

// ✅ Debounce helper to prevent overload
let debounceTimer: any;
const safeReInit = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(initComponents, 300);
};

// ✅ Observe DOM changes (for Angular route updates)
const observeDOMChanges = () => {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        safeReInit();
        break;
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

if (typeof window !== 'undefined') {
  (window as any).cssfusion = {
    Accordion,
    Dropdown,
    Nav,
    Table,
    Tabs,
    init: initComponents,
  };

  // Run once when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }

  // Handle Angular route navigation
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  const reInit = () => safeReInit();

  history.pushState = function (...args) {
    const result = originalPushState.apply(this, args);
    reInit();
    return result;
  };

  history.replaceState = function (...args) {
    const result = originalReplaceState.apply(this, args);
    reInit();
    return result;
  };

  window.addEventListener('popstate', reInit);

  // Observe DOM mutations (for async route loads)
  observeDOMChanges();
}
