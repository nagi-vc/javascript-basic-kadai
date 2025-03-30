const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() =>{
    text.innerText = 'ボタンをクリックしました';
    console.log('(非同期処理)');
  }, 2000);
});

