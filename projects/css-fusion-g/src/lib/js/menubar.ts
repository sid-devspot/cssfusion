export class Menubar {
  private root: HTMLElement;
  private trigger: HTMLElement | null;
  private menu: HTMLElement | null;
  private isOpen = false;

  constructor(root: HTMLElement) {
    this.root = root;
    this.trigger = this.root.querySelector(".menubar-trigger");
    this.menu = this.root.querySelector(".menubar-set-02");

    this.init();
  }

  private init() {
    if (!this.trigger || !this.menu) return;

    // ✅ start closed
    this.close();

    // ✅ toggle on click
    this.trigger.addEventListener("click", () => {
      this.isOpen ? this.close() : this.open();
    });
  }

  private open() {
    this.isOpen = true;
    this.root.classList.add("menubar-open");

    // ✅ change icon
    this.trigger!.textContent = "close";
  }

  private close() {
    this.isOpen = false;
    this.root.classList.remove("menubar-open");

    // ✅ change icon
    this.trigger!.textContent = "menu";
  }
}