import type { Category, MenuItem } from "@/data/menu";
export type SortOption = "featured" | "price-asc" | "price-desc" | "name";
export function formatPrice(price: number) { return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price); }
export function filterMenu(items: MenuItem[], query: string, category: Category, sort: SortOption): MenuItem[] {
  const normalized = query.trim().toLocaleLowerCase("pt-BR");
  const filtered = items.filter((item) => (category === "Todos" || item.category === category) && (!normalized || `${item.name} ${item.description} ${item.category}`.toLocaleLowerCase("pt-BR").includes(normalized)));
  return [...filtered].sort((a, b) => sort === "price-asc" ? a.price - b.price : sort === "price-desc" ? b.price - a.price : sort === "name" ? a.name.localeCompare(b.name, "pt-BR") : Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.name.localeCompare(b.name, "pt-BR"));
}
