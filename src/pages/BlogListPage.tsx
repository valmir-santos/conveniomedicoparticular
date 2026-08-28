import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '../data/blogData';
import { BROKER_INFO } from '../data/siteData';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  FolderOpen
} from 'lucide-react';

export const BlogListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCat = selectedCategory === 'Todos' || post.category === selectedCategory;
      const matchSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.targetKeyword.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Schema de Coleção de Artigos / Blog
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog de Convênio Médico em São Paulo — Guia Técnico do Corretor",
    "description": "Artigos práticos sobre prazos de carência, riscos de abrir MEI apenas para ter desconto, operadoras ativas em São Paulo e contratação no CPF.",
    "url": "https://conveniomedicoparticular.com.br/blog",
    "publisher": {
      "@type": "Organization",
      "name": BROKER_INFO.name,
      "url": "https://conveniomedicoparticular.com.br"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://conveniomedicoparticular.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog & Guias Práticos",
        "item": "https://conveniomedicoparticular.com.br/blog"
      }
    ]
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-8 sm:py-12">
      {/* Schemas JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#123A5F] transition-colors">Início</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Blog & Guias Técnicos</span>
        </nav>

        {/* Cabeçalho do Blog */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 triagem-shadow mb-8 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Autoridade Técnica em São Paulo</span>
            </div>

            <h1 className="serif text-2xl sm:text-4xl font-bold text-[#123A5F] tracking-tight mb-3">
              Guia Prático do Convênio Médico em São Paulo
            </h1>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Respostas diretas de corretor habilitado com registro SUSEP, baseadas na prática diária de contratações na capital paulista. Sem citações burocráticas de leis: apenas o que realmente acontece na hora de usar a rede e assinar o contrato.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 pt-2 border-t border-gray-100">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                Escrito por corretor com registro SUSEP
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                Foco em quem só tem CPF e busca segurança
              </span>
            </div>
          </div>
        </div>

        {/* Cluster em Destaque */}
        <div className="bg-[#123A5F] text-white rounded-xl p-5 sm:p-6 mb-8 shadow-md border-l-4 border-[#D97706]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-1">
                Cluster de Conteúdo Especializado
              </span>
              <h2 className="serif text-lg sm:text-xl font-bold">
                Convênio Médico Individual e Familiar em São Paulo (Apenas no CPF)
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Acesse nossa página pilar com todas as regras de contratação física e nossa consultoria sem exigência de abertura de MEI.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <Link
                to="/convenio-medico-individual-familiar"
                className="inline-flex items-center gap-1.5 bg-white text-[#123A5F] hover:bg-amber-50 font-bold text-xs px-4 py-2.5 rounded-full transition-colors"
              >
                <span>Página Pilar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/plano-de-saude-sem-cnpj"
                className="inline-flex items-center gap-1.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs px-4 py-2.5 rounded-full transition-colors"
              >
                <span>Sem CNPJ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Filtros e Busca */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
          {/* Categorias */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#123A5F] text-white shadow-xs'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Campo de Busca */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por tema ou palavra..."
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-[#123A5F]"
            />
          </div>
        </div>

        {/* Grade de Artigos */}
        <div className="space-y-6">
          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm">Nenhum artigo encontrado com os termos pesquisados.</p>
              <button
                type="button"
                onClick={() => { setSelectedCategory('Todos'); setSearchTerm(''); }}
                className="mt-3 text-xs font-bold text-[#123A5F] hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-200 p-6 sm:p-7 triagem-shadow hover:border-[#123A5F]/50 transition-all group"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="bg-[#FEF3C7] text-[#D97706] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishDate).toLocaleDateString('pt-BR')}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] group-hover:text-[#D97706] transition-colors mb-2 leading-tight">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {post.introAnswer}
                </p>

                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="font-semibold text-gray-800">{post.author.name}</span>
                    <span>—</span>
                    <span>{post.author.role}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123A5F] group-hover:text-[#D97706] transition-colors"
                  >
                    <span>Ler resposta completa</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Bloco de Atendimento e Consulta com Corretor */}
        <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center max-w-3xl mx-auto triagem-shadow">
          <h3 className="serif text-xl font-bold text-[#123A5F] mb-2">
            Não encontrou a resposta para a sua dúvida específica?
          </h3>
          <p className="text-gray-600 text-sm mb-5 max-w-xl mx-auto">
            Cada caso de saúde e cada bairro de São Paulo tem particularidades de carência e rede credenciada. Fale direto com a nossa equipe no WhatsApp.
          </p>
          <a
            href={BROKER_INFO.whatsappDefaultLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3 rounded-full uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com o Corretor no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
