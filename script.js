const produtos = [
    ['Linha para tranças', 32, 'assets/img/linha-para-trancas.png', 'Acessórios'],
    ['Agulha para tranças', 9, 'assets/img/agulha-para-trancas.png', 'Acessórios'],
    ['Jumbo para tranças', 20, 'assets/img/jumbo.png', 'Acessórios'],
    ['Durag premium', 25, 'assets/img/durag-preta.png', 'Acessórios'],
    ['Kit de hidratação', 45, 'assets/img/kit-de-hidratacao.png', 'Cremes'],
    ['Kit definição de cachos', 50, 'assets/img/kit-de-finalizacao.png', 'Cremes'],
    ['Kit Smoke Black', 65, 'assets/img/kit-de-cuidados.png', 'Outros'],
    ['Pente Garfo (Plástico)', 15, 'assets/img/pente-garfo-plastico.png', 'Pentes'],
    ['Pente Garfo (Ferro)', 22, 'assets/img/pente-garfo-ferro.png', 'Pentes'],
    ['Pente Polvo', 25, 'assets/img/pente-polvo.png', 'Pentes'],
    ['Pente Jacaré', 12, 'assets/img/pente-jacare.png', 'Pentes'],
    ['Pente Normal', 10, 'assets/img/pente-normal.png', 'Pentes'],
    ['Pente de Finalização', 14, 'assets/img/pente-finalizacao.png', 'Pentes'],
    ['Pente Espinhoso', 18, 'assets/img/pente-espinhoso.png', 'Pentes'],
    ['Durag Preta', 25, 'assets/img/durag-preta.png', 'Acessórios'],
    ['Durag Vermelha', 25, 'assets/img/durag-vermelha.png', 'Acessórios'],
    ['Touca de Cetim', 20, 'assets/img/touca-cetim.png', 'Acessórios'],
    ['Faixa para Cabelo', 12, 'assets/img/faixa-cabelo.png', 'Acessórios'],
    ['Toalha para Cabelo', 30, 'assets/img/toalha-cabelo.png', 'Acessórios'],
    ['Esponja Dupla', 22, 'assets/img/esponja-dupla.png', 'Acessórios'],
    ['Escova para Cabelo', 28, 'assets/img/escova-cabelo.png', 'Acessórios'],
    ['Borrifador', 16, 'assets/img/borrifador.png', 'Outros'],
    ['Touca de Cetim Extra', 22, 'assets/img/touca-cetim-extra.png', 'Acessórios'],
    ['Creme Modelador Fixador', 35, 'assets/img/creme-modelador-fixador.png', 'Cremes'],
    ['Gelatina Salon Line', 28, 'assets/img/gelatina-salon-line.png', 'Cremes'],
    ['Creme Pantene Nohraan', 40, 'assets/img/creme-pantene-nohraan.png', 'Cremes'],
    ['Creme Skala Melancia', 25, 'assets/img/creme-skala-melancia.png', 'Cremes'],
    ['Creme de Proteção', 32, 'assets/img/creme-protecao.png', 'Cremes'],
    ['Creme de Hidratação', 38, 'assets/img/creme-hidratacao.png', 'Cremes'],
    ['Creme de Definição', 36, 'assets/img/creme-definicao.png', 'Cremes'],
    ['Ativador de Cachos', 30, 'assets/img/ativador-cachos.png', 'Cremes'],
    ['Gel Capilar', 20, 'assets/img/gel-capilar.png', 'Finalizadores'],
    ['Manteiga Capilar', 42, 'assets/img/manteiga-capilar.png', 'Cremes'],
    ['Óleo Capilar', 45, 'assets/img/oleo-capilar.png', 'Finalizadores'],
    ['Shampoo', 28, 'assets/img/shampoo.png', 'Cremes'],
    ['Condicionador', 28, 'assets/img/condicionador.png', 'Cremes'],
    ['Leave-In', 32, 'assets/img/leave-in.png', 'Finalizadores'],
    ['Tônico', 40, 'assets/img/tonico.png', 'Cremes'],
    ['Protetor Térmico', 35, 'assets/img/protetor-termico.png', 'Finalizadores'],
    ['Secador de Cabelo', 150, 'assets/img/secador-cabelo.png', 'Outros'],
    ['Modelador de Cachos', 120, 'assets/img/modelador-cachos.png', 'Outros'],
    ['Máquina de Corte', 180, 'assets/img/maquina-corte.png', 'Outros'],
    ['Escova Prancha', 45, 'assets/img/escova-prancha.png', 'Acessórios'],
    ['Escova Polvo', 30, 'assets/img/escova-polvo-2.png', 'Acessórios'],
    ['Grampo', 8, 'assets/img/grampo.png', 'Acessórios'],
    ['Fibra Térmica', 55, 'assets/img/fibra-termica.png', 'Acessórios'],
    ['Linha para Tranças Extra', 32, 'assets/img/linha-para-trancas.png', 'Acessórios'],
    ['Mousse Capilar', 34, 'assets/img/mousse-capilar.png', 'Finalizadores'],
    ['Pomada Capilar', 26, 'assets/img/pomada-capilar.png', 'Finalizadores'],
    ['Cera Capilar', 28, 'assets/img/cera-capilar.png', 'Finalizadores'],
    ['Spray Finalizador', 32, 'assets/img/spray-finalizador.png', 'Finalizadores'],
    ['Piranha de Cabelo', 10, 'assets/img/piranha-de-cabelo.png', 'Acessórios'],
    ['Tiara', 15, 'assets/img/tiara.png', 'Acessórios'],
    ['Lenço para Cabelo', 14, 'assets/img/lenco-para-cabelo.png', 'Acessórios'],
    ['Fronha de Cetim', 35, 'assets/img/fronha-de-cetim.png', 'Acessórios'],
    ['Escova de Definição', 35, 'assets/img/escova-de-definicao.png', 'Acessórios'],
    ['Pente Garfo Pequeno', 12, 'assets/img/pente-garfo-pequeno.png', 'Pentes'],
    ['Bolsa para Acessórios', 80, 'assets/img/bolsa-para-acessorios.png', 'Outros'],
    ['Creme para Cachos', 35, 'assets/img/creme-para-cachos.png', 'Cremes']
].map((p, i) => ({
    id: i + 1,
    nome: p[0],
    preco: p[1],
    img: p[2],
    categoria: p[3]
}));

const categorias = ['Todos', 'Pentes', 'Cremes', 'Acessórios', 'Finalizadores', 'Outros'];

let estado = {
    tela: 'conta',
    nome: '',
    email: '',
    senha: '',
    mostrarSenha: false,
    busca: '',
    categoriaAtiva: 'Todos',
    carrinho: [],
    favoritos: [],
    pagamento: '',
    codigoPedido: ''
};

function formatarPreco(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function renderizarCategorias() {
    const container = document.getElementById('categorias-container');
    if (!container) return;

    container.innerHTML = categorias.map(cat => `
        <button class="categoria ${estado.categoriaAtiva === cat ? 'ativo' : ''}" 
                onclick="filtrarCategoria('${cat}')">
            ${cat}
        </button>
    `).join('');
}

window.filtrarCategoria = function(cat) {
    estado.categoriaAtiva = cat;
    renderizarCategorias();
    renderizarProdutos();
};

function renderizarProdutos() {
    const grade = document.getElementById('produto-grade');
    if (!grade) return;

    const listaBase = estado.tela === 'favoritos'
        ? produtos.filter(p => estado.favoritos.includes(p.id))
        : produtos;

    const filtrados = listaBase.filter(p => {
        const matchCat = estado.categoriaAtiva === 'Todos' || p.categoria === estado.categoriaAtiva;
        const matchBusca = p.nome.toLowerCase().includes(estado.busca.toLowerCase());
        return matchCat && matchBusca;
    });

    if (filtrados.length === 0) {
        grade.innerHTML = `<p class="descricao" style="grid-column: span 2;">Nenhum produto encontrado.</p>`;
        return;
    }

    grade.innerHTML = filtrados.map(p => {
        const isFavorito = estado.favoritos.includes(p.id);
        return `
            <div class="card">
                <button class="coracao" onclick="toggleFavorito(${p.id})">${isFavorito ? '❤️' : '🤍'}</button>
                <div class="imagem-produto">
                    <img src="${p.img}" alt="${p.nome}" loading="lazy">
                </div>
                <div class="nome-produto">${p.nome}</div>
                <div class="preco">${formatarPreco(p.preco)}</div>
                <button class="botao botao-destaque" onclick="adicionarCarrinho(${p.id})">Adicionar</button>
            </div>
        `;
    }).join('');
}

window.toggleFavorito = function(id) {
    const idx = estado.favoritos.indexOf(id);
    if (idx > -1) {
        estado.favoritos.splice(idx, 1);
    } else {
        estado.favoritos.push(id);
    }
    renderizarProdutos();
};

window.adicionarCarrinho = function(id) {
    const p = produtos.find(item => item.id === id);
    if (!p) return;

    const itemExistente = estado.carrinho.find(item => item.id === id);
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        estado.carrinho.push({ ...p, quantidade: 1 });
    }

    atualizarCarrinhoBadge();
    alert(`${p.nome} foi adicionado ao carrinho!`);
};

window.alterarQtd = function(id, delta) {
    const item = estado.carrinho.find(i => i.id === id);
    if (!item) return;

    item.quantidade += delta;
    if (item.quantidade <= 0) {
        estado.carrinho = estado.carrinho.filter(i => i.id !== id);
    }

    renderizarCarrinho();
    atualizarCarrinhoBadge();
};

function atualizarCarrinhoBadge() {
    const totalItens = estado.carrinho.reduce((s, p) => s + p.quantidade, 0);
    const badge = document.getElementById('badge-carrinho');
    if (badge) {
        badge.textContent = totalItens > 0 ? `Carrinho (${totalItens})` : 'Carrinho';
    }
}

function renderizarCarrinho() {
    const lista = document.getElementById('carrinho-lista');
    const totalEl = document.getElementById('carrinho-total');
    const checkoutTotalEl = document.getElementById('checkout-total');
    const btnCheckout = document.getElementById('btn-ir-checkout');
    if (!lista) return;

    if (estado.carrinho.length === 0) {
        lista.innerHTML = `<p class="descricao">Seu carrinho está vazio.</p>`;
        if (totalEl) totalEl.innerHTML = '';
        if (btnCheckout) btnCheckout.classList.add('hidden');
        return;
    }

    if (btnCheckout) btnCheckout.classList.remove('hidden');

    lista.innerHTML = estado.carrinho.map(p => `
        <div class="linha-carrinho">
            <img src="${p.img}" alt="${p.nome}">
            <div class="linha-info">
                <div class="nome-produto">${p.nome}</div>
                <div class="quantidade-area">
                    <button class="qtd-btn" onclick="alterarQtd(${p.id}, -1)">-</button>
                    <span>${p.quantidade}</span>
                    <button class="qtd-btn" onclick="alterarQtd(${p.id}, 1)">+</button>
                </div>
            </div>
            <div class="preco">${formatarPreco(p.preco * p.quantidade)}</div>
        </div>
    `).join('');

    const total = estado.carrinho.reduce((s, p) => s + p.preco * p.quantidade, 0);
    if (totalEl) totalEl.innerHTML = `Total: ${formatarPreco(total)}`;
    if (checkoutTotalEl) checkoutTotalEl.innerHTML = `Total: ${formatarPreco(total)}`;
}

function renderizar() {
    document.querySelectorAll('.tela').forEach(t => t.classList.add('hidden'));
    const menuInferior = document.getElementById('menu-inferior');
    const btnVoltar = document.getElementById('btn-voltar');

    if (menuInferior) menuInferior.classList.add('hidden');
    if (btnVoltar) btnVoltar.classList.add('hidden');

    document.querySelectorAll('.item-menu').forEach(b => {
        b.classList.toggle('ativo', b.getAttribute('data-alvo') === estado.tela);
    });

    if (estado.tela === 'conta') {
        document.getElementById('tela-conta')?.classList.remove('hidden');
    } else {
        if (menuInferior) menuInferior.classList.remove('hidden');

        if (estado.tela === 'loja' || estado.tela === 'favoritos') {
            document.getElementById('tela-loja')?.classList.remove('hidden');
            const titulo = document.getElementById('loja-titulo');
            if (titulo) {
                titulo.textContent = estado.tela === 'favoritos' ? 'Meus Favoritos' : 'Nossa Loja';
            }
            renderizarCategorias();
            renderizarProdutos();
        } else if (estado.tela === 'carrinho') {
            document.getElementById('tela-carrinho')?.classList.remove('hidden');
            if (btnVoltar) btnVoltar.classList.remove('hidden');
            renderizarCarrinho();
        } else if (estado.tela === 'checkout') {
            document.getElementById('tela-checkout')?.classList.remove('hidden');
            if (btnVoltar) btnVoltar.classList.remove('hidden');
            renderizarCarrinho();
        } else if (estado.tela === 'confirmacao') {
            document.getElementById('tela-confirmacao')?.classList.remove('hidden');
            const codEl = document.getElementById('codigo-pedido');
            const pagEl = document.getElementById('pagamento-escolhido');
            if (codEl) codEl.textContent = estado.codigoPedido;
            if (pagEl) pagEl.textContent = `Pagamento escolhido: ${estado.pagamento}`;
        } else if (estado.tela === 'perfil') {
            document.getElementById('tela-perfil')?.classList.remove('hidden');
            document.getElementById('perfil-nome').textContent = `Nome: ${estado.nome}`;
            document.getElementById('perfil-email').textContent = `E-mail: ${estado.email}`;
            document.getElementById('perfil-favoritos').textContent = `Favoritos: ${estado.favoritos.length}`;
            document.getElementById('perfil-carrinho').textContent = `Itens no carrinho: ${estado.carrinho.reduce((s, p) => s + p.quantidade, 0)}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Login
    document.getElementById('btn-entrar')?.addEventListener('click', () => {
        const nome = document.getElementById('nome-input')?.value.trim();
        const email = document.getElementById('email-input')?.value.trim();
        const senha = document.getElementById('senha-input')?.value;

        if (!nome || !email) {
            alert('Por favor, preencha nome e e-mail.');
            return;
        }
        if (senha && senha.length < 6) {
            alert('A senha precisa ter pelo menos 6 caracteres.');
            return;
        }

        estado.nome = nome;
        estado.email = email;
        estado.senha = senha;
        estado.tela = 'loja';
        renderizar();
    });

    // Mostrar/Ocultar senha
    document.getElementById('toggle-senha')?.addEventListener('click', (e) => {
        estado.mostrarSenha = !estado.mostrarSenha;
        const input = document.getElementById('senha-input');
        if (input) input.type = estado.mostrarSenha ? 'text' : 'password';
        e.target.textContent = estado.mostrarSenha ? 'Ocultar senha' : 'Mostrar senha';
    });

    // Busca
    document.getElementById('busca-input')?.addEventListener('input', (e) => {
        estado.busca = e.target.value;
        renderizarProdutos();
    });

    // Navegação Menu Inferior
    document.querySelectorAll('.item-menu').forEach(btn => {
        btn.addEventListener('click', () => {
            const alvo = btn.getAttribute('data-alvo');
            if (alvo) {
                estado.tela = alvo;
                renderizar();
            }
        });
    });

    // Botão Voltar
    document.getElementById('btn-voltar')?.addEventListener('click', () => {
        estado.tela = estado.tela === 'checkout' ? 'carrinho' : 'loja';
        renderizar();
    });

    // Ir para Checkout e Voltar à Loja
    document.getElementById('btn-ir-checkout')?.addEventListener('click', () => {
        estado.tela = 'checkout';
        renderizar();
    });

    document.getElementById('btn-voltar-loja')?.addEventListener('click', () => {
        estado.tela = 'loja';
        renderizar();
    });

    // Sair da conta
    document.getElementById('btn-sair')?.addEventListener('click', () => {
        estado.tela = 'conta';
        renderizar();
    });

    // Opções de Pagamento
    document.querySelectorAll('.opcao-pagamento').forEach(op => {
        op.addEventListener('click', () => {
            document.querySelectorAll('.opcao-pagamento').forEach(o => o.classList.remove('ativo'));
            op.classList.add('ativo');
            estado.pagamento = op.getAttribute('data-valor') || op.textContent.trim();
        });
    });

    // Confirmar Pedido
    document.getElementById('btn-confirmar-pedido')?.addEventListener('click', () => {
        const tel = document.getElementById('telefone-input')?.value.trim();
        const end = document.getElementById('endereco-input')?.value.trim();
        const cid = document.getElementById('cidade-input')?.value.trim();

        if (!tel || !end || !cid) {
            alert('Preencha telefone, endereço e cidade.');
            return;
        }
        if (!estado.pagamento) {
            alert('Escolha uma forma de pagamento.');
            return;
        }

        estado.codigoPedido = 'SB-' + Math.floor(100000 + Math.random() * 900000);
        estado.carrinho = [];
        atualizarCarrinhoBadge();
        estado.tela = 'confirmacao';
        renderizar();
    });

    renderizarCategorias();
    renderizar();
});