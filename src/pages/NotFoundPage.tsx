import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-[60vh] flex items-center justify-center px-4 py-20 text-center">
      <Seo
        title="Página não encontrada"
        description="O endereço acessado não existe. Veja os planos de saúde no CPF, as operadoras e o guia do convênio médico."
        path="/404"
        noindex
      />
      <div className="max-w-lg">
        <p className="text-sm font-semibold text-[#C85A32] mb-2">Erro 404</p>
        <h1 className="serif text-3xl sm:text-4xl font-bold text-[#123A5F] mb-4">Página não encontrada</h1>
        <p className="text-gray-600 mb-8">
          O endereço que você acessou não existe ou mudou de lugar. Comece por um destes caminhos:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="px-5 py-2.5 rounded-lg bg-[#123A5F] text-white font-semibold hover:opacity-90">
            Página inicial
          </Link>
          <Link to="/plano-de-saude-sem-cnpj" className="px-5 py-2.5 rounded-lg border border-[#123A5F] text-[#123A5F] font-semibold hover:bg-white">
            Plano no CPF
          </Link>
          <Link to="/blog" className="px-5 py-2.5 rounded-lg border border-[#123A5F] text-[#123A5F] font-semibold hover:bg-white">
            Guia do convênio
          </Link>
        </div>
      </div>
    </div>
  );
};
