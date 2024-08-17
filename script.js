const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'BTC',
                data: [23455, 45666, 46777, 32435, 57999, 23454, 67887, 48766, 34434, 76766, 78799],
                borderWidth: 2,
                borderColor: 'red'
            },
            {
                label: 'ETH',
                data: [11000, 43000, 66000, 55000, 39000, 13000, 57000, 28000, 50000, 42000, 75000],
                borderWidth: 2,
                borderColor: 'blue'
            }
        ]
    },
    options: {
        Responsive:true
    }
})


const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('aside')
const themebtn = document.querySelector('.theme-btn')

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display='none'
})

themebtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    themebtn.querySelector('i:first-child').classList.toggle('active')
    themebtn.querySelector('i:last-child').classList.toggle('active')
})