let movies = ["Parasite","Little women", "A hidden life", "Hope Gap", "Onward", "1917"]

document.write('<ul>')
movies.forEach(movie => { document.write(`<li>${movie}</li>`)   
});
document.write('</ul>')