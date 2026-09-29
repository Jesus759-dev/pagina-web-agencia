// Avisa a los buscadores (Bing, Yandex, Seznam, Naver…) de las URLs del sitio
// mediante IndexNow, para que las rastreen en minutos y no en semanas.
//
// Importa sobre todo por Bing: ChatGPT y Copilot buscan sobre su índice, así
// que una página que Bing no conoce no puede aparecer en sus respuestas.
// Google NO usa IndexNow: para Google sigue siendo Search Console.
//
// Uso (después de cada despliegue):
//   node scripts/indexnow.mjs            → todas las URLs del sitemap en vivo
//   node scripts/indexnow.mjs /guias ... → solo esas rutas
//
// La clave es pública por diseño: el archivo public/<clave>.txt demuestra que
// quien avisa es dueño del dominio. No es un secreto.

const HOST = "neuroviasystems.com.mx";
const KEY = "2569bdabbd0b8df3ad5d7a370ad01c28";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function urlsDelSitemap() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p.startsWith("/") ? p : "/" + p}`))
  : await urlsDelSitemap();

// Antes de avisar, confirma que la clave ya está publicada; si no, IndexNow rechaza.
const k = await fetch(KEY_LOCATION);
if (!k.ok || (await k.text()).trim() !== KEY) {
  console.error(`La clave aún no está en ${KEY_LOCATION}. ¿Ya terminó el despliegue?`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// 200 = recibido; 202 = recibido, validación de la clave pendiente.
console.log(`IndexNow: HTTP ${res.status} · ${urlList.length} URLs enviadas`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
