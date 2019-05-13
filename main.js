let cast = document.getElementsByClass('cast')
let ppl = ['michael_scott_(the_office)', 'jim_halpert', 'dwight_schrute', 'pam_beesly', 'ryan_howard_(the_office)', 'andy_bernard', 'stanley_hudson']

for (p in ppl) {
  let section = document.createElement('section')
  section.style.backgroundImage= url('https://upload.wikimedia.org/wikipedia/en/2/23/${ppl[p]}.jpg')
  section.style.backgroundSize= 'cover'
  section.style.border
}
