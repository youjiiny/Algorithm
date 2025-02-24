function solution(genres, plays) {
    const genrePlayCnt = {};
    const genreSongs = {};
    const list = [];
    
    genres.forEach((genre,i) => {
        genrePlayCnt[genre] = (genrePlayCnt[genre] || 0) + plays[i];
        genreSongs[genre] = (genreSongs[genre] || []);
        genreSongs[genre].push(i);
    });
    const sortedGenres = Object.entries(genrePlayCnt).sort((a,b) => b[1] - a[1]);
 
    for(const [genre, play] of sortedGenres){
        const sortedSongs = genreSongs[genre].sort((a, b) => plays[b] - plays[a] || b[0] - a[0]).slice(0, 2);
        list.push(...sortedSongs);        
    }
    return list;
}