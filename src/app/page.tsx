import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-[#121212] text-white">
      <header className="flex w-full uppercase text-sm items-center justify-center px-12 h-16">
        <Image src="/logo.webp" alt="nego tech logo" width={42} height={42} />

        <nav className="flex-1">
          <ul className="flex list-none items-center justify-center gap-2 text-zinc-400 ">
            <li className="hover:text-white cursor-pointer hover:bg-zinc-800/70 px-6 py-3 rounded-lg transition">
              <a href="">home</a>
            </li>
            <li className="hover:text-white cursor-pointer hover:bg-zinc-800/70 px-6 py-3 rounded-lg transition">
              <a href="">sobre</a>
            </li>
            <li className="hover:text-white cursor-pointer hover:bg-zinc-800/70 px-6 py-3 rounded-lg transition">
              <a href="">projetos</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="grid grid-cols-2 max-w-[1080px] h-[calc(100%-6.5rem)] w-full m-auto gap-20">
        <section className="flex items-start justify-center flex-col">
          <Image
            src="/profile.jpeg"
            width={140}
            height={140}
            quality={100}
            className="rounded-full filter grayscale"
            alt="Lucas Lourenço"
          />
          <h1 className="mt-6 text-5xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 inline">
            Olá! Sou Lucas Lourenço.
          </h1>

          <span className="mt-8 leading-relaxed text-lg text-zinc-400">
            Desenvolvedor front-end com mais de 5 anos de experiência na área,
            apaixonado por solucionar problemas através da programação e do
            design. Busco sempre estar atualizado com as novas tendências do
            mercado e contribuir para o sucesso das equipes e projetos nos quais
            estou envolvido.
          </span>
        </section>

        <section className="flex items-start justify-center flex-col gap-4 max-h-full overflow-auto">
          <div className="bg-zinc-800/60 w-full rounded-lg px-8 py-6 flex flex-col gap-2">
            <h3 className="text-transparent text-xs bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 inline font-semibold uppercase">
              trabalho
            </h3>
            <span className="text-white text-2xl font-semibold">Keep Safe</span>
            <span className="text-sm text-zinc-400">
              Responsável pela manutenção e criação de novas features para o
              gateway de pagamento e white-label provider.
            </span>
          </div>
          <div className="bg-zinc-800/60 w-full rounded-lg px-8 py-6 flex flex-col gap-2">
            <h3 className="text-transparent text-xs bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 inline font-semibold uppercase">
              trabalho
            </h3>
            <span className="text-white text-2xl font-semibold">Dotkon</span>
            <span className="text-sm text-zinc-400">
              Manutenção e desenvolvimento de novas funcionalidades para um
              produto da Amaggi, uma das maiores empresas do agronegócio do
              Brasil, utilizando tecnologias como React e ferramentas como
              Redux, Leaflet e Next.
            </span>
          </div>
          <div className="bg-zinc-800/60 w-full rounded-lg px-8 py-6 flex flex-col gap-2">
            <h3 className="text-transparent text-xs bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 inline font-semibold uppercase">
              trabalho
            </h3>
            <span className="text-white text-2xl font-semibold">
              Ministério Atos de Justiça
            </span>
            <span className="text-sm text-zinc-400">
              Responsável pela manutenção e criação de novas features para o
              gateway de pagamento e white-label provider.
            </span>
          </div>
          <div className="bg-zinc-800/60 w-full rounded-lg px-8 py-6 flex flex-col gap-2">
            <h3 className="text-transparent text-xs bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 inline font-semibold uppercase">
              trabalho
            </h3>
            <span className="text-white text-2xl font-semibold">
              John Deere
            </span>
            <span className="text-sm text-zinc-400">
              Responsável pela manutenção e criação de novas features para o
              gateway de pagamento e white-label provider.
            </span>
          </div>
        </section>
      </div>

      <footer className="flex items-center justify-center w-full text-xs">
        <ul className="flex list-none items-center justify-center gap-10 text-zinc-400 ">
          <li className="hover:text-white transition">
            <a href="">email</a>
          </li>
          <li className="hover:text-white transition">
            <a href="">github</a>
          </li>
          <li className="hover:text-white transition">
            <a href="">linkedin</a>
          </li>
          <li className="hover:text-white transition">
            <a href="">instagram</a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
