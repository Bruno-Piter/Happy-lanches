import { MenuCatalog } from "@/components/menu-catalog";
import { menuItems } from "@/data/menu";
export default function Home() {
  return <main>
    <header className="site-header"><a className="brand" href="#inicio" aria-label="HappyLanches, voltar ao início">Happy<span>Lanches</span></a><a className="header-link" href="#cardapio">Ver cardápio <span aria-hidden="true">↓</span></a></header>
    <section id="inicio" className="hero" aria-labelledby="hero-title"><div><p className="eyebrow">Cardápio digital</p><h1 id="hero-title">Sabor de verdade, <em>feito para o seu momento.</em></h1><p className="hero-copy">Uma vitrine simples, gostosa e fácil de explorar. Escolha sua próxima pausa favorita.</p><a className="primary-link" href="#cardapio">Explorar opções <span aria-hidden="true">→</span></a></div><div className="hero-card" aria-label="Pedido em destaque"><span className="hero-card-label">Destaque da casa</span><strong>Hambúrguer artesanal</strong><p>Angus, pão brioche e ingredientes selecionados.</p><span className="hero-price">R$ 25,00</span></div></section>
    <section id="cardapio" className="menu-section" aria-labelledby="menu-title"><div className="section-heading"><div><p className="eyebrow">Nosso cardápio</p><h2 id="menu-title">Encontre o que combina com você</h2></div><p>Filtre por categoria ou busque pelo sabor que está procurando.</p></div><MenuCatalog items={menuItems} /></section>
    <footer><a className="brand" href="#inicio">Happy<span>Lanches</span></a><p>Meu primeiro projeto, recriado com mais experiência e carinho.</p><a href="https://github.com/Bruno-Piter/Happy-lanches" target="_blank" rel="noreferrer">Ver no GitHub <span aria-hidden="true">↗</span></a></footer>
  </main>;
}
