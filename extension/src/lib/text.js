const CYR = { 'а':'a','б':'b','в':'v','г':'g','д':'d','ђ':'dj','е':'e','ж':'z','з':'z','и':'i','ј':'j','к':'k','л':'l','љ':'lj','м':'m','н':'n','њ':'nj','о':'o','п':'p','р':'r','с':'s','т':'t','ћ':'c','у':'u','ф':'f','х':'h','ц':'c','ч':'c','џ':'dz','ш':'s' }
export function toLatin(s){ return [...(s||'')].map(ch=>{const l=ch.toLowerCase();const m=CYR[l];if(m===undefined)return ch;return ch===l?m:m.charAt(0).toUpperCase()+m.slice(1)}).join('') }
export function normalizePlace(s){ return toLatin(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,' ').trim() }
