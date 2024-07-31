
let br = document.getElementById('br')
let readmore = document.querySelector('.read-more');
let reamorebtn = document.getElementById('read-more-btn').addEventListener('click', function() {
    if (readmore.style.display === 'none' || readmore.style.display === '') {
        readmore.style.display = 'inline';
        this.textContent = 'Read less';
        br.style.display = 'inline'
        
        
    } else {
        readmore.style.display = 'none';
        this.textContent = 'Read more';
        br.style.display = 'none'
        
    }
});


