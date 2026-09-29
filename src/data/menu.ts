export const categories = ["Todos", "Lanche", "Sobremesa", "Massas", "Bebida"] as const;
export type Category = (typeof categories)[number];
export type MenuItem = { id: string; name: string; description: string; category: Exclude<Category, "Todos">; price: number; image: string; featured?: boolean };
export const menuItems: MenuItem[] = [
  { id: "coxinha", name: "Coxinha de frango", description: "Massa dourada, recheio cremoso de frango e catupiry.", category: "Lanche", price: 10, image: "/images/coxinha.jpg" },
  { id: "mousse", name: "Mousse de morango", description: "Uma sobremesa leve e refrescante para finalizar bem.", category: "Sobremesa", price: 9.5, image: "/images/mousse.png" },
  { id: "hamburguer", name: "Hambúrguer artesanal", description: "Carne Angus, pão macio e sabor de comida feita na hora.", category: "Lanche", price: 25, image: "/images/hamburger-artesanal.jpg", featured: true },
  { id: "pizza", name: "Pizza vegana", description: "Um sabor generoso e cheio de ingredientes vegetais.", category: "Massas", price: 55, image: "/images/pizza.png" },
  { id: "limonada", name: "Limonada suave", description: "Refrescante, equilibrada e ideal para dias quentes.", category: "Bebida", price: 5, image: "/images/limonada.jpg" },
  { id: "laranja", name: "Suco de laranja", description: "Clássico, fresco e perfeito para acompanhar qualquer lanche.", category: "Bebida", price: 5, image: "/images/suco-de-laranja.jpg" }
];
