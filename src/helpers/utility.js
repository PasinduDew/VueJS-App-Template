// To Tolarate Unicaode Characters When Performing Base64 Encoding
export function utoa(data) {
  return btoa(unescape(encodeURIComponent(data)));
}

export function atou(b64) {
  return decodeURIComponent(escape(atob(b64)));
}
