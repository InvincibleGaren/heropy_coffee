// 검색 영역과 입력창 요소를 가져오기
const searchEL = document.querySelector(".search");
const searchInputEL = searchEL.querySelector('input');

// 검색 영역을 클릭 시 입력창에 focus 이벤트를 발생시킴
searchEL.addEventListener('click', function() {
  searchInputEL.focus();
})

// 입력창에 focus 이벤트가 발생할 placeholder 값을 변경.
// 추가로 검색 영역에 focused 클래스명을 추가
searchInputEL.addEventListener('focus', function(){
  searchEL.classList.add('focused');
  searchInputEL.setAttribute('placeholder', '통합검색');
});

// 입력창에 blur 이벤트가 발생할 placeholder 값을 비움.
// 추가로 검색 영역에 focused 클래스명 삭제.
searchInputEL.addEventListener('blur', function(){
  searchEL.classList.remove('focused');
  searchInputEL.setAttribute('placeholder', '');
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();