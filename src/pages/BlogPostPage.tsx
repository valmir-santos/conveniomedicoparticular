import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import { formatDateBR } from '../lib/site';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { BROKER_INFO } from '../data/siteData';
import { 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  AlertTriangle,
  User,
  Share2,
  BookmarkCheck,
  Building2,
  FileCheck
} from 'lucide-react';
import { Seo } from '../components/Seo';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <NotFoundPage />;
  }

  // Outros posts do cluster para linkagem interna cruzada
  const sisterPosts = BLOG_POSTS.filter((p) => p.id !== post.id);

  // Schemas JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "url": `https://www.conveniomedicoparticular.com.br${post.author.profileUrl}`
    },
    "publisher": {
      "@type": "Organization",
      "name": BROKER_INFO.name,
      "url": "https://www.conveniomedicoparticular.com.br"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.conveniomedicoparticular.com.br/blog/${post.slug}`
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
        "item": "https://www.conveniomedicoparticular.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.conveniomedicoparticular.com.br/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.conveniomedicoparticular.com.br/blog/${post.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.sections.map((sec) => ({
      "@type": "Question",
      "name": sec.questionH2,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${sec.directFirstSentence} ${sec.content.join(' ')}`
      }
    }))
  };

  return (
    <article className="bg-[#F9FAFB] min-h-screen py-8 sm:py-12">
      <Seo title={post.title} description={post.metaDescription} path={`/blog/${post.slug}`} type="article" />
      {/* Schemas JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb de Navegação */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#123A5F] transition-colors">Início</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-[#123A5F] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate max-w-[280px] sm:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Artigo Principal */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 triagem-shadow">
          {/* Tag & Metadados do Artigo */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4 pb-3 border-b border-gray-100">
            <span className="bg-[#FEF3C7] text-[#D97706] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDateBR(post.publishDate)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="text-slate-600 font-medium">Praça São Paulo / SP</span>
          </div>

          {/* H1 — A Pergunta Principal Respondida */}
          <h1 className="serif text-2xl sm:text-4xl font-bold text-[#123A5F] tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            {post.subtitle}
          </p>

          {/* Primeiro Parágrafo — A Resposta Direta em 2-3 frases */}
          <div className="bg-[#F0FDF4] border-l-4 border-[#25D366] p-4 sm:p-5 rounded-r-xl mb-8">
            <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">
              {post.introAnswer}
            </p>
          </div>

          {/* Box de Autoridade do Cluster & Links Internos Rápidos */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 sm:p-5 mb-10 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2 font-bold text-[#123A5F] uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-[#D97706]" />
              <span>Contexto deste guia em São Paulo</span>
            </div>
            <p className="leading-relaxed mb-3">
              Este artigo faz parte do nosso guia técnico sobre contratações médicas na capital. Se você quer entender todos os tipos de contratação individual e familiar física, acesse nosso pilar{' '}
              <Link
                to="/convenio-medico-individual-familiar"
                className="text-[#123A5F] font-bold underline hover:text-[#D97706]"
              >
                Guia Completo de Convênio Médico Individual e Familiar
              </Link>{' '}
              ou conheça nossa consultoria especializada em{' '}
              <Link
                to="/plano-de-saude-sem-cnpj"
                className="text-[#D97706] font-bold underline hover:text-[#B45309]"
              >
                Planos de Saúde para quem só tem CPF (Sem CNPJ)
              </Link>.
            </p>
          </div>

          {/* Seções com H2 (Perguntas com resposta imediata na 1ª frase) */}
          <div className="space-y-8 sm:space-y-10 text-gray-800 leading-relaxed">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-3 pt-2">
                <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] tracking-tight">
                  {section.questionH2}
                </h2>
                
                {/* Resposta direta na primeira frase */}
                <p className="text-sm sm:text-base font-medium text-gray-900 bg-amber-50/60 p-3 rounded-lg border-l-3 border-[#D97706]">
                  {section.directFirstSentence}
                </p>

                {/* Parágrafos de aprofundamento */}
                {section.content.map((pText, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {pText}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Bloco Concreto Extraível (Tabela de Comparação / Regras) */}
          {post.concreteBlock && (
            <div className="mt-10 mb-10 pt-6 border-t border-gray-200">
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 sm:p-6 overflow-hidden">
                <h3 className="serif text-lg sm:text-xl font-bold text-[#123A5F] mb-1">
                  {post.concreteBlock.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  {post.concreteBlock.description}
                </p>

                {post.concreteBlock.type === 'table' && post.concreteBlock.headers && post.concreteBlock.rows && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-lg shadow-xs overflow-hidden">
                      <thead>
                        <tr className="bg-[#123A5F] text-white">
                          {post.concreteBlock.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3 px-4 font-bold tracking-wider">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {post.concreteBlock.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-3 px-4 text-gray-700 align-top">
                                {cIdx === 0 ? <strong className="text-[#123A5F] font-semibold">{cell}</strong> : cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Principais Conclusões / Key Takeaways */}
          <div className="bg-[#FEF3C7]/60 border border-[#F59E0B]/40 rounded-xl p-5 sm:p-6 mb-10">
            <h3 className="serif text-base sm:text-lg font-bold text-[#92400E] flex items-center gap-2 mb-3">
              <BookmarkCheck className="w-5 h-5 text-[#D97706]" />
              <span>Pontos Essenciais para Lembrar</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
              {post.keyTakeaways.map((point, kIdx) => (
                <li key={kIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box de Autor */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#123A5F] text-white flex items-center justify-center font-bold text-lg shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1 text-xs sm:text-sm">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Link to={post.author.profileUrl} className="font-bold text-[#123A5F] hover:underline text-sm sm:text-base">
                  {post.author.name}
                </Link>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 font-semibold">{post.author.role}</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#D97706] font-mono font-bold">SUSEP: {post.author.susep}</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-2">
                {post.author.bio}
              </p>
              <Link
                to={post.author.profileUrl}
                className="text-[#123A5F] font-bold underline hover:text-[#D97706] text-xs inline-flex items-center gap-1"
              >
                <span>Conhecer o perfil e credenciais do corretor</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* CTA de WhatsApp Contextualizado */}
          <div className="bg-[#123A5F] text-white rounded-xl p-6 sm:p-8 text-center triagem-shadow mb-10">
            <h3 className="serif text-xl sm:text-2xl font-bold mb-2">
              {post.ctaTitle}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
              {post.ctaDescription}
            </p>
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent(post.customWhatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3.5 rounded-full uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Tirar Dúvidas com o Corretor no WhatsApp</span>
            </a>
          </div>

          {/* Links para os outros artigos do cluster (Interligação) */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="serif text-lg font-bold text-[#123A5F] mb-4">
              Continue Lendo no Nosso Cluster de Guias:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sisterPosts.map((sister) => (
                <Link
                  key={sister.id}
                  to={`/blog/${sister.slug}`}
                  className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-[#123A5F] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#D97706] tracking-wider block mb-1">
                      {sister.category}
                    </span>
                    <h4 className="serif font-bold text-sm text-[#123A5F] group-hover:text-[#D97706] transition-colors leading-snug">
                      {sister.title}
                    </h4>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-[#123A5F] font-bold">
                    <span>Acessar artigo</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Voltar para o Blog */}
        <div className="mt-8 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#123A5F] hover:text-[#D97706] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todos os artigos do Blog</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
