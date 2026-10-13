// Mecânica compartilhada das páginas de música (musica1.html e musica2.html)
const letraOriginal = document.getElementById("letra-original");
const letraTraducao = document.getElementById("letra-traducao");
const botaoOriginal = document.getElementById("btn-original");
const botaoTraducao = document.getElementById("btn-traducao");

function mostrarLetra(tipo) {
  const original = tipo === "original";

  letraOriginal.hidden = !original;
  letraTraducao.hidden = original;

  botaoOriginal.classList.toggle("ativo", original);
  botaoTraducao.classList.toggle("ativo", !original);
  botaoOriginal.setAttribute("aria-pressed", original);
  botaoTraducao.setAttribute("aria-pressed", !original);
}

botaoOriginal.addEventListener("click", () => mostrarLetra("original"));
botaoTraducao.addEventListener("click", () => mostrarLetra("traducao"));

// A letra original aparece primeiro
mostrarLetra("original");

// ---------- Vídeo do YouTube ----------
// Aceita links como youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID e youtube.com/shorts/ID
function pegarIdYoutube(link) {
  try {
    let texto = link.trim();
    if (!/^https?:\/\//i.test(texto)) texto = "https://" + texto;
    const url = new URL(texto);
    let id = null;

    if (url.hostname === "youtu.be") {
      id = url.pathname.slice(1).split("/")[0];
    } else if (/(^|\.)youtube(-nocookie)?\.com$/.test(url.hostname)) {
      if (url.pathname === "/watch") {
        id = url.searchParams.get("v");
      } else {
        const m = url.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?]+)/);
        id = m ? m[1] : null;
      }
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

function mostrarVideo() {
  const quadro = document.querySelector(".quadro-video");
  const link = (quadro.dataset.video || "").trim();
  if (!link) return; // sem link: mantém o aviso padrão

  const id = pegarIdYoutube(link);
  if (!id) {
    quadro.textContent = "Link do YouTube inválido. Confira o endereço em data-video.";
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.title = `Vídeo: ${quadro.dataset.titulo || "música"}`;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  quadro.classList.add("com-video");
  quadro.replaceChildren(iframe);
}

mostrarVideo();
