const options = key;


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        const cardAll = document.getElementById('movie-card1');

        data.results.forEach((row,index) => {
            const poster = row.poster_path;
            const title = row.title;
            const vote = row.vote_average;
            const view = row.overview;
            // movieid 변수할당으로 문제해결
            const movieId = row.id;

            // 카드 컨테이너 생성
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');
            // 수정한 id값 출력alert창표시
            cardContainer.addEventListener('click', () => {
                alert(`클릭한 영화의 ID: ${movieId}`);
            });



            // 이미지 컨테이너 생성
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('card-item');

            // 이미지 생성 및 속성 설정
            const posterImage = document.createElement('img');
            posterImage.src = `https://image.tmdb.org/t/p/w500${poster}`;
            posterImage.classList.add('img-size');

            // 정보 컨테이너 생성
            const infoContainer = document.createElement('div');
            infoContainer.classList.add('card-item');
            infoContainer.id = 'card_all_info';

            // 정보 내용 생성
            const titleElement = document.createElement('div');
            titleElement.textContent = `영화 제목: ${title}`;

            const voteElement = document.createElement('div');
            voteElement.textContent = `평점: ${vote}`;

            const viewElement = document.createElement('div');
            viewElement.textContent = `영화 설명: ${view}`;

            // 생성한 요소들을 조합하여 DOM에 추가
            imageContainer.appendChild(posterImage);
            infoContainer.appendChild(titleElement);
            infoContainer.appendChild(voteElement);
            infoContainer.appendChild(viewElement);

            cardContainer.appendChild(imageContainer);
            cardContainer.appendChild(infoContainer);

            cardAll.appendChild(cardContainer);
        });
    })
    .catch(error => {
        console.error('API에서 데이터를 가져오는 중 에러 발생:', error);
    });



