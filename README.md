# project1

슬라이드를 구현하기 위해서는 추가적인 코드가 필요합니다. React에서는 이미 많은 슬라이드 라이브러리가 제공되고 있으므로, 이를 활용하는 것이 좋습니다. 이번 예제에서는 react-slick이라는 라이브러리를 활용하여 구현해보겠습니다.

먼저, react-slick을 설치합니다.

Copy code
npm install react-slick
그리고 코드에서 다음과 같이 수정합니다.

javascript
Copy code
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
  {
    id: 1,
    title: 'DW503 이예진 선생님 최고!',
    content: '칭찬합니다',
  },
  {
    id: 2,
    title: 'DW503 이예진 선생님 최고!',
    content: '칭찬합니다',
  },
  {
    id: 3,
    title: 'DW503 이예진 선생님 최고!',
    content: '칭찬합니다',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const MySlider = () => {
  return (
    <div>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <div
              className="gesifan-box12"
              style={{ position: 'relative', marginLeft: '20px', marginTop: '20px' }}
            >
              <p className="gesifan-span">조회수 높은 글</p>
              <span>
                <img
                  style={{ width: '20px', position: 'absolute', top: '7px', right: '10px' }}
                  src="moresee-arrow.png"
                  alt="arrow"
                />
              </span>
              <p>{item.content}</p>
              <p>제목 : {item.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
위 코드에서는, items라는 배열에 다양한 내용을 담아주었고, react-slick의 설정값(settings)을 지정해주었습니다.

그리고 Slider 컴포넌트로 내용을 렌더링해주었습니다. map 함수를 활용하여 각 아이템을 하나씩 출력하며, 각 아이템은 div 태그로 묶여있습니다.

이렇게 구현하면, 설정값에 따라 슬라이드가 구현
