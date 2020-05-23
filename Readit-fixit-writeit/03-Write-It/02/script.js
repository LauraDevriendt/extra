let movies = ["Parasite","Little women", "A hidden life", "Hope Gap", "Onward", "1917"]

movies.reverse()

document.write('<ul>')
movies.forEach(movie => { document.write(`<li>${movie.toLowerCase()}</li>`)   
});
document.write('</ul>')