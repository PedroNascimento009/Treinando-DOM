window.addEventListener('scroll', () => {
    if(window.scrollY == 0){
        console.log('Chegou no topo');
    } else if(window.scrollY == 60){
        console.log('Chegou no fim');
    }
});