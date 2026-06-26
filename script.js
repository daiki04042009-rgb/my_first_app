const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

// 三本線ボタンがクリックされたときの動き
menuToggle.addEventListener('click', () => {
    // active クラスがついていなければつける、ついていれば外す
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    // クリックされた場所が「メニューの内側」じゃなければ閉じる
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.classList.remove('active');
        sideMenu.classList.remove('active');
    }
});