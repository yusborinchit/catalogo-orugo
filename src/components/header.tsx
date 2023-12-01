export default function Header() {
  return (
    <header className="flex gap-4 py-4">
      <a
        href="#"
        className="text-2xl font-black uppercase"
      >
        Orugo
      </a>

      <form
        role="search"
        className="flex-1"
      >
        <input
          type="text"
          name="query"
          placeholder="Busca tu producto aquí..."
          className="px-2 w-full py-1 placeholder:text-zinc-500 rounded border border-zinc-300"
        />
      </form>
    </header>
  );
}
