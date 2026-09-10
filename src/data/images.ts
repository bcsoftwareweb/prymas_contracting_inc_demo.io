export function unsplash(photoId: string, width = 1600) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`
}

export const images = {
  hero: unsplash('photo-1541888946425-d81bb19240f5', 2200),
  intro: unsplash('photo-1503387762-592deb58ef4e', 1400),
  steel: unsplash('photo-1504307651254-35680f356dfd', 1400),
  skyline: unsplash('photo-1486406146926-c627a92ad1ab', 1800),
  nyc: unsplash('photo-1496442226666-8d4d0e62e6e9', 1800),
  nycAlt: unsplash('photo-1518398046578-8cca57782e17', 1600),
  safety: unsplash('photo-1504307651254-35680f356dfd', 1600),
  architecture: unsplash('photo-1487958449943-2429e8be8625', 1600),
  concrete: unsplash('photo-1517086828157-83d9410d3c0c', 1400),
  crane: unsplash('photo-1590496793929-36417d3117de', 1600),
  aboutGrid1: unsplash('photo-1581094794329-c8112a89af12', 1200),
  aboutGrid2: unsplash('photo-1503387762-592deb58ef4e', 1200),
  aboutGrid3: unsplash('photo-1497366811353-6870744d04b2', 1200),
  aboutGrid4: unsplash('photo-1448630360428-65456885c650', 1200),
  cta: unsplash('photo-1486406146926-c627a92ad1ab', 2000),
  process: unsplash('photo-1503387762-592deb58ef4e', 1600),
  contact: unsplash('photo-1497366216548-37526070297c', 1600),
}
