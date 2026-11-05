const { args, url } =
  /^\?(?:(?<args>(?![vhf]*(?<c>[vhf])[vhf]*\k<c>)[vhf]*);)?(?<url>.*)$/
  .exec(location.search).groups;
console.log(args);
const [ flip, hor, vid ] = args
  ? "fhv".split("").map(i => args.includes(i))
  : []
const el = document.querySelector(vid ? "video" : "img");
el.style.display = "block";
el.src = url;
document.body.classList.add(hor ? "hor" : "ver");
flip && el.classList.add("flip");
if (vid) window.addEventListener("keydown", e => { switch (e.key) {
  case "m": el.muted = !el.muted; break;
  case " ": el.paused ? el.play() : el.pause(); break;
}})
